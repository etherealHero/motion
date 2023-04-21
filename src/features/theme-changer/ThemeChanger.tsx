import React from "react"
import useThemeChanger from "./useThemeChanger"

type Props = {}

const ThemeChanger = (props: Props) => {
  const { setTheme } = useThemeChanger()

  return (
    <select
      onChange={(e) => {
        const theme = e.target.options[e.target.selectedIndex].value

        setTheme(theme)
      }}
      className="select select-bordered"
    >
      {[
        ["light", "light"],
        ["dark", "dark"],
        ["cupcake", "cupcake"],
        ["bumblebee", "bumblebee"],
        ["emerald", "emerald"],
        ["CORPORATE", "corporate"],
        ["synthwave", "synthwave"],
        ["retro", "retro"],
        ["cyberpunk", "cyberpunk"],
        ["valentine", "valentine"],
        ["halloween", "halloween"],
        ["garden", "garden"],
        ["forest", "forest"],
        ["aqua", "aqua"],
        ["lofi", "lofi"],
        ["pastel", "pastel"],
        ["fantasy", "fantasy"],
        ["wireframe", "wireframe"],
        ["black", "black"],
        ["luxury", "luxury"],
        ["dracula", "dracula"],
        ["cmyk", "cmyk"],
        ["autumn", "autumn"],
        ["BUSINESS", "business"],
        ["acid", "acid"],
        ["lemonade", "lemonade"],
        ["night", "night"],
        ["coffee", "coffee"],
        ["winter", "winter"],
      ].map(([title, theme]) => (
        <option key={theme} value={theme}>
          {title}
        </option>
      ))}
    </select>
  )
}

export default ThemeChanger
