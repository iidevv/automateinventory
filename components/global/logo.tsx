import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg'

const Logo = () => {
    return (
        <Image
            className="w-full max-w-52"
            src={logo}
            alt="Automate Inventory" />
    )
}

export default Logo