"use client";
import React from "react";
import { useRuntimeConfig } from "@/src/core/hooks/useRuntimeConfig";

const PublicEnv = () => {
  const env = useRuntimeConfig();

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {env && Object.entries(env).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PublicEnv;
