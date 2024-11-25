import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from '@/components/sidebar'

type Props = {
    children: React.ReactNode
}

const Layout = async (props: Props) => {

    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                <div className="p-2">
                    {props.children}
                </div>
            </main>
        </SidebarProvider>
    )
}

export default Layout