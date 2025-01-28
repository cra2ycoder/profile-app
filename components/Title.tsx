import { parseCSS } from '@/utils'

type TTitleProps = {
  text: string
}

export default function Title(props: TTitleProps) {
  const themeClass = {
    default:
      'w-auto inline-block text-4xl font-weight-400 font-[Inter] font-bold bg-gradient-to-r text-transparent bg-clip-text leading-normal',
    dark: 'dark:from-violet-800 dark:to-pink-600',
    light: 'from-slate-600 to-slate-950',
  }

  return <h2 className={parseCSS(themeClass)}>{props.text}</h2>
}
