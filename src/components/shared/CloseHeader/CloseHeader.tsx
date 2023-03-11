import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, MenuItem } from '@szhsin/react-menu'

interface CloseHeaderProps {}

const CloseHeader: React.FC<CloseHeaderProps> = (props) => {
  return (
    <div className="hire-header w-full bg-black p-6">
      <div className="flex justify-between items-center">
        <div />
        <Link href="/">
          <Image
            priority
            src="/logo-full.png"
            width={200}
            height={32}
            alt="logo"
          />
        </Link>
        {/* <Link href="/">
          <Image src="/close.png" width={24} height={24} alt="close" />
        </Link> */}

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
      </div>
    </div>
  )
}

export default CloseHeader
