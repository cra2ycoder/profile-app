export function parseCSS(themeObj: {
  default: string
  dark: string
  light: string
}) {
  return Object.keys(themeObj)
    .map((key: string) => themeObj[key])
    .join(' ')
}
