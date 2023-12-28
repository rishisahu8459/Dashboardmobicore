import React from 'react'
import BungalowIcon from '@mui/icons-material/Bungalow';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import RouterIcon from '@mui/icons-material/Router';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';

export const  SidebarData = [
    {
        title:"Home",
        icon: <BungalowIcon />,
        link:"/Home"
    },
    {
        title:"Shop",
        icon: <ShoppingBasketIcon />,
        link:"/Home"
    },
    {
        title:"Router Config",
        icon: <RouterIcon />,
        link:"/Home"
    },
    {
        title:"Help & Support",
        icon: <SupportAgentIcon />,
        link:"/Home"
    },
    {
        title:"Settings",
        icon: <SettingsIcon />,
        link:"/Home"
    },
    
]
