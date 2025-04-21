"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { ChevronDown, Check } from "lucide-react";
import clsx from "clsx";

type DropdownSelectPropTypes = {
  defaultValue?: string;
  items: string[];
  onChange: (val: string) => void;
};

const DropdownSelect: React.FC<DropdownSelectPropTypes> = ({ items, defaultValue, onChange }) => {
  const [tempValue, setTempValue] = useState<string>(defaultValue || "");
  const [tempItems, setTempItems] = useState<string[]>(items);
  const [open, setOpen] = useState<boolean>();

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutSide = useCallback((e: MouseEvent) => {
    if (e.target && ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false);
    }
  }, []);

  const handleClickItem = (item: string) => {
    onChange(item);
    setTempValue(item);
    setOpen(false);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        const draft = [...tempItems];
        if (tempValue) {
          setOpen(true);
          draft.push(tempValue);
          setTempItems(draft);
        }
      }
    },
    [tempItems, tempValue]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutSide);
    return () => {
      window.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [handleClickOutSide]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempValue(e.target.value);
  };

  return (
    <div className={styles.container} ref={ref}>
      <input
        onChange={handleChangeInput}
        value={tempValue || ""}
        className={styles.input}
        onClick={() => setOpen(!open)}
      />
      <div className={clsx(styles.arrow, open && styles.open)}>
        <ChevronDown />
      </div>
      {open && (
        <div className={styles.wrapper}>
          <div className={styles.dropdown}>
            {tempItems.map((item) => (
              <div
                onClick={() => handleClickItem(item)}
                key={item}
                className={clsx(styles.item, tempValue === item && styles.active)}
              >
                {item}
                {tempValue === item && <Check className={styles.check} />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSelect;
