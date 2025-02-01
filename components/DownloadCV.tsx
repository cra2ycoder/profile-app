import { AnimButtonWrapper } from './TransitionWrapper'
import { parseCSS } from '@/utils'

export default function DownloadCV() {
  const themeClass = {
    default:
      'w-full rounded-full bg-gradient-to-r px-12 py-2 font-bold drop-shadow-md text-xl block flex justify-center text-white',
    light: 'from-gray-700 to-gray-950',
    dark: 'dark:from-blue-800 dark:to-purple-600',
  }

  return (
    <AnimButtonWrapper size="md" className="sm:w-auto w-full center">
      <a
        className={parseCSS(themeClass)}
        href="https://cra2ycoder.sirv.com/mohanraj.rangasamy_profile.pdf"
        download
      >
        <button>Download CV</button>
      </a>
    </AnimButtonWrapper>
  )
}
