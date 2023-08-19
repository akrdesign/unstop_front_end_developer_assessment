import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ContextType {
  showForm: boolean
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
  mobileView: boolean
  setMobileView: React.Dispatch<React.SetStateAction<boolean>>
  showAssOverview: boolean
  setShowAssOverview: React.Dispatch<React.SetStateAction<boolean>>
}

const Context = createContext<ContextType | undefined>(undefined)

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showForm, setShowForm] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const [mobileView, setMobileView] = useState(false)
  const [showAssOverview, setShowAssOverview] = useState(false)

  return (
    <Context.Provider
      value={{
        showForm,
        setShowForm,
        showSidebar,
        setShowSidebar,
        mobileView,
        setMobileView,
        showAssOverview,
        setShowAssOverview
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
