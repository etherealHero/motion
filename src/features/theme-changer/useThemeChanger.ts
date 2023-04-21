import { useEffect } from "react"
import { config } from "./config"

const useThemeChanger = () => {
  useEffect(() => {
    const theme = localStorage.getItem("color-theme") || config.darkTheme

    document.documentElement.dataset.theme = theme
  }, [])

  const setTheme = (theme: string) => {
    document.documentElement.dataset.theme = theme

    localStorage.setItem("color-theme", theme)
  }

  return { setTheme }
}

export default useThemeChanger
