import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { sidebarAccountItems, sidebarItems } from "@/lib/constant"
import Logo from "../global/logo"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { ChevronUp, User2 } from "lucide-react"
import SignOutButton from '../global/signout';
import Link from "next/link"

type Props = {}

const AppSidebar = (props: Props) => {
    return (
        <Sidebar>
            <SidebarContent className="bg-white p-2">
                <SidebarGroup>
                    <div className="mb-4">
                        <Logo />
                    </div>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span className="text-lg">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="bg-white border-t">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> Account
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width] bg-white p-2 rounded-sm shadow-sm"
                            >
                                {sidebarAccountItems.map((item) => (
                                    <DropdownMenuItem className="mb-2" key={item.title}>
                                        <Link className="block w-full" href={item.url}>
                                            {item.title}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                                <DropdownMenuItem>
                                    <SignOutButton />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar