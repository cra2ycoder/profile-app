'use client'

import { AnimButtonWrapper } from './TransitionWrapper'
import { useState, useEffect } from 'react'
import { SunOutlinedIcon, SunFilledIcon } from './Icons'

export default function ThemeToggler() {
  const [darkThemeStatus, setDarkThemeStatus] = useState<boolean>(false)

  useEffect(() => {
    const htmlEl = document.querySelector('html')
    htmlEl?.classList.toggle('dark', darkThemeStatus)
  }, [darkThemeStatus])

  return (
    <div className="absolute sm:fixed md:right-[4rem] right-[2rem] sm:top-[4rem] top-[3rem] cursor-pointer w-[24px] h-[24px] items-center flex">
      <AnimButtonWrapper size="lg">
        <div
          onClick={() => {
            setDarkThemeStatus(!darkThemeStatus)
          }}
        >
          {darkThemeStatus && <SunFilledIcon />}
          {!darkThemeStatus && <SunOutlinedIcon />}
        </div>
      </AnimButtonWrapper>
    </div>
  )
}
