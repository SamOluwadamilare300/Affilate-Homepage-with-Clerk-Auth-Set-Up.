export type MenuProps = {
    id: number
    label: string 
    // icon: JSX.Element
    path: string 
    section?: boolean 
    integration?: boolean
}






export const LANDING_PAGE_MENU: MenuProps[] =[
    {
        id: 0,
        label: 'Solutions',
        // icon:
        path: '/',
        section: true,
    },
    {
        id: 1,
        label: 'Features',
        path: '/',
        section: true,
    },
    {
        id: 2,
        label: 'Explore',
        path: '/',
        section: true,
    },
    {
        id: 3,
        label: 'Contact',
        path: '/',
        section: true,
    },
]