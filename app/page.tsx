"use client";
import DropdownSelect from "@/src/components/DropdownSelect";

export default function Home() {
  const items = ["Education", "Yeah Science!", "Art", "Sport", "Games", "Health"];

  const handleOnChange = (value: string) => {
    console.log("value", value);
  };

  return (
    <main>
      <DropdownSelect onChange={handleOnChange} items={items} />
    </main>
  );
}
