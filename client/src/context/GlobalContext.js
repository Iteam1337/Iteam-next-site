import React, { useState } from 'react'

const GlobalContext = React.createContext()

const GlobalProvider = ({ children }) => {
  const [themeDark, setThemeDark] = useState(false)
  const [videoModalVisible, setVideoModalVisible] = useState(false)
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false)
  const [headerDark, setHeaderDark] = useState(false)
  const [footerDark, setFooterDark] = useState(true)
  const [cartTotal, setCartTotal] = useState(3)

  const toggleTheme = () => {
    setThemeDark(!themeDark)
  }

  const toggleVideoModal = () => {
    setVideoModalVisible(!videoModalVisible)
  }

  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas)
  }

  const closeOffCanvas = () => {
    setVisibleOffCanvas(false)
  }

  const goHeaderDark = () => {
    setHeaderDark(true)
  }
  const goHeaderLight = () => {
    setHeaderDark(false)
  }

  const goFooterDark = () => {
    setFooterDark(true)
  }
  const goFooterLight = () => {
    setFooterDark(false)
  }

  const incCartTotal = () => {
    setCartTotal(cartTotal + 1)
  }
  const decCartTotal = () => {
    setCartTotal(cartTotal - 1)
  }

  return (
    <GlobalContext.Provider
      value={{
        themeDark,
        toggleTheme,
        headerDark,
        goHeaderDark,
        goHeaderLight,
        footerDark,
        goFooterDark,
        goFooterLight,
        videoModalVisible,
        toggleVideoModal,
        visibleOffCanvas,
        toggleOffCanvas,
        closeOffCanvas,
        cartTotal,
        incCartTotal,
        decCartTotal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
export { GlobalProvider }
