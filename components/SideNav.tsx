import { AnimButtonWrapper } from './TransitionWrapper'
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
  return (
    <nav className="h-full m-auto flex flex-col fixed z-10 max-xl:hidden">
      <ol className="flex flex-col gap-4 h-[50%] justify-evenly">
        {menus.map((menu: TMenuItem, index: number) => (
          <AnimButtonWrapper key={`side-nav-menu-${index}`} size="lg">
            <li className="flex items-center gap-2 cursor-pointer drop-shadow-md transition-all">
              <menu.icon />
              <span className="text-slate-900 dark:text-gray-100 transition-all">
                {menu.name}
              </span>
            </li>
          </AnimButtonWrapper>
        ))}
      </ol>
    </nav>
  )
}
