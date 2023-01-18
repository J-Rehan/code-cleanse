import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="footer text-white p-8 mt-40">
      <div className="max-w-[1024px] mx-auto md:flex justify-between ">
        <Link href="/">
          <Image src="/logo-full.png" width={200} height={32} alt="logo" />
        </Link>

        <div className="mt-6 flex justify-between md:mt-0">
          <div className="space-y-3 md:mr-12">
            <h4 className="font-bold">About</h4>
            <p>
              <Link href="/jobs">We are hiring</Link>
            </p>
            <p>
              <Link href="/clients">Clients</Link>
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold">Contact</h4>
            <div className="flex space-x-3">
              <Link href="https://linkedin.com" target="_blank">
                <Image src="/linked-in.png" width={32} height={32} alt="logo" />
              </Link>

              <Link href="mailto:rehan@gmail.com" target="_blank">
                <Image src="/email.png" width={32} height={32} alt="logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
