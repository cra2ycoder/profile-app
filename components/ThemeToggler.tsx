'use client'

import { useState, useEffect } from 'react'
import { SunOutlinedIcon, SunFilledIcon } from './Icons'

export default function ThemeToggler() {
  const [showLightTheme, setShowLightTheme] = useState<boolean>(false)

  useEffect(() => {
    const htmlEl = document.querySelector('html')
    htmlEl?.classList.toggle('dark', showLightTheme)
  }, [showLightTheme])

  return (
    <div className="fixed right-[4rem] top-[4rem] cursor-pointer w-[24px] h-[24px] items-center flex">
      <div
        className="absolute left-0"
        onClick={() => {
          setShowLightTheme(!showLightTheme)
        }}
      >
        {showLightTheme && <SunFilledIcon />}
        {!showLightTheme && <SunOutlinedIcon />}
      </div>
    </div>
  )
}
