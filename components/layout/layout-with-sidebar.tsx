import React, { ReactNode } from 'react'
import Sidebar from './Sidebar';

type layoutWithSidebar = {
    children: ReactNode,
    className?: string
}

const layoutWithSidebar = ({ children, className = "" }: layoutWithSidebar) => {
    return (
        <div className="flex items-start justify-between">
            <Sidebar />
            <div className={` mx-auto px-2 ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default layoutWithSidebar