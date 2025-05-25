"use client";
import React from "react";
import { useRuntimeConfig } from "@/src/core/hooks/useRuntimeConfig";

const PublicEnv = () => {
  const env = useRuntimeConfig();

  return (
    <table className='table'>
      <tbody>
        <tr>
          <td>NILVA_APP_PUBLIC_API_URL</td>
          <td>{env?.NILVA_APP_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL}</td>
        </tr>
        <tr>
          <td>NILVA_APP_PRIVATE_API_URL</td>
          <td>{env?.NILVA_APP_PRIVATE_API_URL || process.env.PRIVATE_API_URL}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PublicEnv;
