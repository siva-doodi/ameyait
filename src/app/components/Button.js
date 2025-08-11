"use client";

export default function Button({ text, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-8 py-3 cursor-pointer bg-[#608BC1] text-white  hover:bg-blue-700 transition ${className}`}
    >
      {text}
    </button>
  );
}
