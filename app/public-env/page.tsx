"use client";
import React from "react";
import { useRuntimeConfig } from "@/src/core/hooks/useRuntimeConfig";

const PublicEnv = () => {
  const env = useRuntimeConfig();

  return <h1>{env?.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL}</h1>;
};

export default PublicEnv;
