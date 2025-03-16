type TThemeObject = Record<'default' | 'dark' | 'light', string>

export function parseCSS(themeObj: TThemeObject) {
  return Object.keys(themeObj)
    .map((key: string) => themeObj[key as keyof TThemeObject])
    .join(' ')
}

export function applyHighlight(content: string) {
  let updatedContent = content.replaceAll(
    '<hlt>',
    '<span class="dark:text-white text-black font-bold underline">'
  )

  updatedContent = updatedContent.replaceAll('</hlt>', '</span>')

  return updatedContent
}
