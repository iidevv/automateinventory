import { Boxes, LayoutDashboard, LayoutList, Settings, TableProperties } from "lucide-react"


export const sidebarItems = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Inventory",
        url: "/inventory",
        icon: TableProperties,
    },
    {
        title: "Catalog",
        url: "/catalog",
        icon: LayoutList,
    },
    {
        title: "Dropshipping",
        url: "/dropshipping",
        icon: Boxes,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
]

export const sidebarAccountItems = [
    {
        title: "My account",
        url: "/account",
    },
    {
        title: "Billing",
        url: "/billing",
    }
]