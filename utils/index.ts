type TThemeObject = Record<'default' | 'dark' | 'light', string>

export function parseCSS(themeObj: TThemeObject) {
  return Object.keys(themeObj)
    .map((key: string) => themeObj[key as keyof TThemeObject])
    .join(' ')
}
