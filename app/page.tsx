import React from "react";

export default async function Home() {
  const fetchPublicEnv = await fetch("http://localhost:3000/api/env", { cache: "no-store" });
  const response = await fetchPublicEnv.json();

  return (
    <table className='table'>
      <tbody>
        <tr>
          <td>NILVA_APP_PUBLIC_API_URL</td>
          <td>{response?.NILVA_APP_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL}</td>
        </tr>
        <tr>
          <td>NILVA_APP_PRIVATE_API_URL</td>
          <td>{response?.NILVA_APP_PRIVATE_API_URL || process.env.PRIVATE_API_URL}</td>
        </tr>
      </tbody>
    </table>
  );
}
