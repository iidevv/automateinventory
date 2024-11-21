import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from '@/components/sidebar'
import { loginIsRequired } from '@/lib/auth'

type Props = {
    children: React.ReactNode
}

const Layout = async (props: Props) => {
    await loginIsRequired();

    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                {props.children}
            </main>
        </SidebarProvider>
    )
}

export default Layout