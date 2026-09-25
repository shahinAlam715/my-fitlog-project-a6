"use client";
import { Ifitlog } from "@/type";
import React, { createContext, useState } from "react";

interface Icontext {
  addplan: Ifitlog[];
  setAddplan: React.Dispatch<React.SetStateAction<Ifitlog[]>>;
  saveplan: Ifitlog[];
  setSaveplan: React.Dispatch<React.SetStateAction<Ifitlog[]>>;
}

export const FitContext = createContext<Icontext>({
  addplan: [],
  setAddplan: () => {},
  saveplan: [],
  setSaveplan: () => {},
});

const Contextprovider = ({ children }: { children: React.ReactNode }) => {
  const [addplan, setAddplan] = useState<Ifitlog[]>([]);
  const [saveplan, setSaveplan] = useState<Ifitlog[]>([]);

  const shareData = {
    addplan,
    setAddplan,
    saveplan,
    setSaveplan,
  };

  return (
    <div>
      <FitContext.Provider value={shareData}>{children}</FitContext.Provider>
    </div>
  );
};

export default Contextprovider;
