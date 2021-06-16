import React, { useEffect, useContext } from "react"

import GlobalContext from "../../context/GlobalContext"

const PageWrapper = ({ children, headerDark = false, footerDark = false }) => {
  const gContext = useContext(GlobalContext)

  useEffect(() => {
    if (headerDark) {
      gContext.goHeaderDark()
    } else {
      gContext.goHeaderLight()
    }

    if (footerDark) {
      gContext.goFooterDark()
    } else {
      gContext.goFooterLight()
    }
  }, [gContext, headerDark, footerDark])

  return <>{children}</>
}

export default PageWrapper
