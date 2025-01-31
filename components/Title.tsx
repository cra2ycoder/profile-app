'use client'

import { parseCSS } from '@/utils'

type TTitleProps = {
  text: string
  id: string
}

export default function Title(props: TTitleProps) {
  const themeClass = {
    default:
      'w-auto inline-block text-4xl font-weight-400 font-[Inter] font-bold bg-gradient-to-r text-transparent bg-clip-text leading-normal mb-4',
    dark: 'dark:from-violet-800 dark:to-pink-600',
    light: 'from-blue-600 to-blue-950',
  }

  return (
    <h2 className={parseCSS(themeClass)} id={props.id}>
      {props.text}
    </h2>
  )
}
