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
    <div className="h-full m-auto flex flex-col fixed z-10 max-xl:hidden">
      <ol className="flex flex-col gap-4 h-[50%] justify-evenly">
        {menus.map((menu: TMenuItem, index: number) => (
          <li
            key={`side-nav-menu-${index}`}
            className="flex items-center gap-2 cursor-pointer drop-shadow-md"
          >
            <menu.icon />
            {/* <span>{menu.name}</span> */}
          </li>
        ))}
      </ol>
    </div>
  )
}
