import React, { ReactNode } from 'react'

type layoutFullWidth = {
    children: ReactNode,
    className?: string
}

const layoutFullWidth = ({ children, className = "" }: layoutFullWidth) => {
    return (
        <div className={` mx-auto px-2 ${className}`}>{children}</div>
    )
}

export default layoutFullWidth