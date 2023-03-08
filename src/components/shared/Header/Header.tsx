import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'

interface HeaderProps extends PropsWithChildren {}

const Header: React.FC<HeaderProps> = (props) => {
  const { children } = props

  return (
    <header className="header flex flex-col justify-between h-[100vh]">
      <nav className="flex justify-between items-center p-6 lg:w-[1024px] lg:mx-auto">
        <Link href="/">
          <Image
            priority
            src="/logo-full.png"
            width={200}
            height={32}
            alt="logo"
          />
        </Link>
        <div className="hidden md:flex md:space-x-6">
          <Link href="/about">
            <span className="text-white">About</span>
          </Link>

          <Link href="/contact">
            <span className="text-white">Contact</span>
          </Link>

          <Link href="/blog">
            <span className="text-white">Blog</span>
          </Link>

          <Link href="/services">
            <span className="text-white">Services</span>
          </Link>
        </div>
        <div className="md:hidden">
          <Menu
            menuButton={
              <Image
                className="cursor-pointer"
                src="/hamburger.png"
                width={24}
                height={24}
                alt="logo"
              />
            }
          >
            <MenuItem href="/about">About</MenuItem>
            <MenuItem href="/contact">Contact</MenuItem>
            <MenuItem href="/blog">Blog</MenuItem>
            <MenuItem href="/services">Services</MenuItem>
          </Menu>
        </div>
      </nav>
      {children}
    </header>
  )
}

export default Header
