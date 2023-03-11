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

        <div className="hidden md:flex justify-between md:mt-0 space-x-6">
          <Link href="/about" className="text-base text-white">
            About
          </Link>
          <Link href="/contact" className="text-base text-white">
            Contact
          </Link>
          <Link href="/blog" className="text-base text-white">
            Blog
          </Link>
          <Link href="/services" className="text-base text-white">
            Services
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
            <MenuItem href="/about">
              <span>About</span>
            </MenuItem>
            <MenuItem href="/contact">
              <span>Contact</span>
            </MenuItem>
            <MenuItem href="/blog">
              <span>Blog</span>
            </MenuItem>
            <MenuItem href="/services">
              <span>Services</span>
            </MenuItem>
          </Menu>
        </div>
      </nav>
      {children}
    </header>
  )
}

export default Header
