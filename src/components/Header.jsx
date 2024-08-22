import React from "react";

export default function Header({ children }) {
  return (
    <div className="bg-[#292522] h-[743px] lg:h-[625px] pt-[90px] font-sans  ">
      {children}
    </div>
  );
}
