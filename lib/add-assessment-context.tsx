'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AddAssessmentContextType {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<AddAssessmentContextType | undefined>(undefined);

export const AddAssessmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Context.Provider value={{ showForm, setShowForm }}>
      {children}
    </Context.Provider>
  );
};

export const useAssessmentContext = () => useContext(Context);