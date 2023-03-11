import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="footer text-white p-8 pb-32">
      <div className="max-w-[1024px] mx-auto md:flex justify-between ">
        <Link href="/">
          <Image
            priority
            src="/logo-full.png"
            width={200}
            height={32}
            alt="logo"
          />
        </Link>

        <div className="mt-6 flex justify-between md:mt-0 space-x-6">
          <Link
            href="https://www.instagram.com/code_cleanse"
            className="w-6 h-6"
            target="_blank"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
                stroke="white"
                strokeMiterlimit="10"
              />
              <path
                d="M16.125 3.375H7.875C5.38972 3.375 3.375 5.38972 3.375 7.875V16.125C3.375 18.6103 5.38972 20.625 7.875 20.625H16.125C18.6103 20.625 20.625 18.6103 20.625 16.125V7.875C20.625 5.38972 18.6103 3.375 16.125 3.375Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.875 8.25C17.4963 8.25 18 7.74632 18 7.125C18 6.50368 17.4963 6 16.875 6C16.2537 6 15.75 6.50368 15.75 7.125C15.75 7.74632 16.2537 8.25 16.875 8.25Z"
                fill="white"
              />
            </svg>
          </Link>

          <Link
            href="https://www.linkedin.com/company/code-cleanse"
            className="w-6 h-6"
            target="_blank"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.875 3.375H4.125C3.71079 3.375 3.375 3.71079 3.375 4.125V19.875C3.375 20.2892 3.71079 20.625 4.125 20.625H19.875C20.2892 20.625 20.625 20.2892 20.625 19.875V4.125C20.625 3.71079 20.2892 3.375 19.875 3.375Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.25 10.5V16.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 10.5V16.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.25 13.125C11.25 12.4288 11.5266 11.7611 12.0188 11.2688C12.5111 10.7766 13.1788 10.5 13.875 10.5C14.5712 10.5 15.2389 10.7766 15.7312 11.2688C16.2234 11.7611 16.5 12.4288 16.5 13.125V16.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 8.625C8.87132 8.625 9.375 8.12132 9.375 7.5C9.375 6.87868 8.87132 6.375 8.25 6.375C7.62868 6.375 7.125 6.87868 7.125 7.5C7.125 8.12132 7.62868 8.625 8.25 8.625Z"
                fill="white"
              />
            </svg>
          </Link>

          <Link
            href="https://twitter.com/Code_cleanse"
            className="w-6 h-6"
            target="_blank"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8.24985C12 6.18735 13.7344 4.47173 15.7969 4.49985C16.5192 4.50819 17.2237 4.72496 17.8258 5.12411C18.4278 5.52326 18.9018 6.08779 19.1906 6.74985H22.5L19.4719 9.77798C19.2765 12.8198 17.93 15.673 15.7061 17.7575C13.4823 19.842 10.5481 21.0014 7.50002 20.9999C4.50002 20.9999 3.75002 19.8749 3.75002 19.8749C3.75002 19.8749 6.75002 18.7499 8.25002 16.4999C8.25002 16.4999 2.25002 13.4999 3.75002 5.24985C3.75002 5.24985 7.50002 8.99985 12 9.74985V8.24985Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            href="https://www.facebook.com/codecleanse"
            className="w-6 h-6"
            target="_blank"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.75 8.25002H14.25C13.9542 8.24878 13.6611 8.30613 13.3875 8.41876C13.114 8.5314 12.8654 8.69708 12.6563 8.90626C12.4471 9.11544 12.2814 9.36397 12.1688 9.63752C12.0561 9.91106 11.9988 10.2042 12 10.5V21"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 13.5H15"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <div className="flex flex-col space-y-3">
            <Link href="/about" className="text-base">
              About
            </Link>

            <Link href="/contact" className="text-base">
              Contact
            </Link>

            <Link href="/blog" className="text-base">
              Blog
            </Link>

            <Link href="/services" className="text-base">
              Services
            </Link>
          </div>

          <div className="flex flex-col space-y-3">
            <Link href="/terms-of-service" className="text-base">
              Terms of Service
            </Link>

            <Link href="/privacy-policy" className="text-base">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
