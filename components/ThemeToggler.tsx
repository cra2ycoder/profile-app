'use client'

import { useState, useEffect } from 'react'
import { SunOutlinedIcon, SunFilledIcon } from './Icons'
import { AnimButtonWrapper, ViewAnimationWrapper } from './TransitionWrapper'

export default function ThemeToggler() {
  const [darkThemeStatus, setDarkThemeStatus] = useState<boolean>(true)

  useEffect(() => {
    const htmlEl = document.querySelector('html')
    htmlEl?.classList.toggle('dark', darkThemeStatus)
  }, [darkThemeStatus])

  return (
    <div className="absolute sm:fixed md:right-[4rem] right-[2rem] sm:top-[4rem] top-[3rem] cursor-pointer w-[24px] h-[24px] items-center flex">
      <ViewAnimationWrapper delay={0.2} directions="zoomout-to-zoomin">
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
      </ViewAnimationWrapper>
    </div>
  )
}
