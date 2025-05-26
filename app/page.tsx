import React from "react";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/env", { cache: "no-store" });
  const response = await res.json();
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {response && Object.entries(response).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{String(value)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
