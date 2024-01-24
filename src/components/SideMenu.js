import { ClockCounterClockwise, Compass, Playlist, Plus } from "@phosphor-icons/react"
import { House } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

export default function SideMenu() {
    const sideItems = [
        {label: 'Home', href: '/', icon: <House size={20} />},
        {label: 'Explore', href: '/explore', icon: <Compass size={20} />},
        {label: 'Library', href: '/library', icon: <Playlist size={20} />},
        {label: 'Histroy', href: '/history', icon: <ClockCounterClockwise size={20} />},
    ]
    return (
        <div className="fixed top-0 left-0 w-[250px] h-full bg-black border-r-2 border-gray-600 pt-[100px]">
            <div className="flex flex-col gap-6 items-center justify-center">
                {sideItems.map((item) => (
                    <Link href={item.href} key={item.label} className="bg-gray-800 rounded-lg w-[200px] h-[40px] hover:border-2 border-gray-400 flex items-center gap-3 px-5">
                        <i>{item.icon}</i> <h1>{item.label}</h1>
                    </Link>
                ))}
                <hr className="w-[85%] border border-gray-500 my-2"/>
                <div>
                    <button className="bg-gray-800 rounded-2xl w-[200px] h-[40px] flex items-center gap-3 px-5 hover:border-2 border-gray-400">
                      <Plus size={20} />  New Playlist
                    </button>
                </div>
            </div>
        </div>
    )
}