import React from "react";

interface HeaderProps {
  headerText: string;
}

export const Header = ({ headerText }: HeaderProps) => {
  return (
    <>
      <header className="flex justify-center">
        <h1 className="text-6xl text-red-500 mb-4">{headerText}</h1>
      </header>
    </>
  );
};
