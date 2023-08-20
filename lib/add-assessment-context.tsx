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
  // Make form open or close
  const [showForm, setShowForm] = useState(false)

  // Show or hide sidebar
  const [showSidebar, setShowSidebar] = useState(false)

  // Get Mobile or desktop view state
  const [mobileView, setMobileView] = useState(false)

  // Make assessment hide or visible in small screens
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
        setShowAssOverview,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
