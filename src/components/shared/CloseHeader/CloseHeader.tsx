import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CloseHeaderProps {}

const CloseHeader: React.FC<CloseHeaderProps> = (props) => {
  const {} = props

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
        <Link href="/">
          <Image src="/close.png" width={24} height={24} alt="close" />
        </Link>
      </div>
    </div>
  )
}

export default CloseHeader
