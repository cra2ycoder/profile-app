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
    <div className="fixed right-[4rem] top-[4rem] cursor-pointer w-[24px] h-[24px] items-center flex">
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
