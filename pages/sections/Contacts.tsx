import React from "react";

export default function Contacts() {
  return (
    <div
      className="animate-background mx-auto max-w-[974px] bg-background px-6 py-8"
      id="contacts"
    >
      <h1 className="mb-6 rounded-br-[500px] rounded-tr-[500px] text-blue-500 text-2xl font-bold text-blue-500 light:bg-gray-100">
        Contacts
      </h1>

      <p>Hey, don&apos;t be shy, say hi!</p>
      <div className="text-text mt-6 text-base">
        <p>
          <strong>Email:</strong> titusdishon@gmail.com
        </p>
        <p>
          <strong>Phone: </strong> +254 704 221 319
        </p>
      </div>
    </div>
  );
}
