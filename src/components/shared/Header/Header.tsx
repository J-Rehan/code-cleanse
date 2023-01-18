import Image from 'next/image'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'

const Header: React.FC = () => {
  return (
    <header className="header p-6 flex flex-col justify-between h-[100vh]">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo-full.png" width={200} height={32} alt="logo" />
        </Link>
        <Link href="#" aria-label="Open the menu">
          <Image src="/hamburger.png" width={24} height={24} alt="logo" />
        </Link>
      </nav>

      <div className="flex flex-col items-center">
        <h4 className="text-white text-center text-base font-normal leading-5 px-2 py-1 border-[0.5px] border-white rounded">
          Are you a non technical founder?
        </h4>

        <h1 className="text-white text-[32px] md:text-[64px] text-center font-bold mt-4">
          <span className="font-normal">Hire the</span>
          <br />
          top 1% engineers <span className="font-normal">to</span>
          <br />
          <div className="text-aqua">
            <Typewriter
              loop
              cursor
              cursorBlinking
              typeSpeed={80}
              deleteSpeed={50}
              words={['scale your code', 'secure your code', 'audit your app']}
            />
          </div>
        </h1>

        <Link href="/hire" className="mt-12">
          <button className="text-base leading-5 font-bold text-dark bg-white min-w-[300px] sm:w-[340px] p-4 rounded-lg">
            Hire Experts Now
          </button>
        </Link>
      </div>

      <div />
    </header>
  )
}

export default Header
