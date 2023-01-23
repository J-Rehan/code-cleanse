import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface HeaderProps extends PropsWithChildren {}

const Header: React.FC<HeaderProps> = (props) => {
  const { children } = props

  return (
    <header className="header flex flex-col justify-between h-[100vh]">
      <nav className="flex justify-between items-center p-6">
        <Link href="/">
          <Image src="/logo-full.png" width={200} height={32} alt="logo" />
        </Link>
        <Link href="#" aria-label="Open the menu">
          <Image src="/hamburger.png" width={24} height={24} alt="logo" />
        </Link>
      </nav>
      {children}
    </header>
  )
}

export default Header
