'use client'

import { motion } from 'motion/react'
import { ArtIcon, CertificateIcon, BuildingIcon, DesktopIcon } from './Icons'

type TMenuItem = {
  name: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const menus: TMenuItem[] = [
  {
    name: 'works',
    icon: BuildingIcon,
  },
  {
    name: 'skills',
    icon: DesktopIcon,
  },
  {
    name: 'awards',
    icon: CertificateIcon,
  },
  {
    name: 'arts',
    icon: ArtIcon,
  },
]

export default function SideNav() {
  const scrollToFocus = (menuName: string) => {
    const scrollHeading = document.getElementById(menuName)

    window.scrollTo({
      top: (scrollHeading?.offsetTop || 0) - 30,
      behavior: 'smooth',
    })
  }

  return (
    <nav className="h-full m-auto flex flex-col fixed z-10 max-xl:hidden">
      <ol className="flex flex-col gap-4 h-[50%] justify-evenly">
        {menus.map((menu: TMenuItem, index: number) => {
          const buttonVariants = {
            initial: {
              translateX: 0,
            },
            hover: {
              translateX: -10,
            },
          }

          const textVariants = {
            initial: {
              opacity: 0,
              translateY: 5,
            },
            hover: {
              opacity: 1,
              translateY: 0,
            },
          }

          return (
            <li
              key={`side-nav-menu-${index}`}
              className="flex items-center gap-2 cursor-pointer drop-shadow-md"
              onClick={() => {
                scrollToFocus(menu.name)
              }}
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                whileTap="initial"
                variants={buttonVariants}
                className="flex flex-row gap-2 items-center"
              >
                <menu.icon />
                <motion.div variants={textVariants}>
                  <span className="text-slate-900 dark:text-gray-100 capitalize">
                    {menu.name}
                  </span>
                </motion.div>
              </motion.div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
