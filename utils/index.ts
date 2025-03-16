type TThemeObject = Record<'default' | 'dark' | 'light', string>

export function parseCSS(themeObj: TThemeObject) {
  return Object.keys(themeObj)
    .map((key: string) => themeObj[key as keyof TThemeObject])
    .join(' ')
}

export function applyHighlight(
  content: string,
  skipUnderline: boolean = false
) {
  let updatedContent = content.replaceAll(
    '<hlt>',
    `<span class="dark:text-white text-black font-bold ${
      skipUnderline ? '' : 'underline'
    }">`
  )

  updatedContent = updatedContent.replaceAll('</hlt>', '</span>')

  return updatedContent
}
