import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeartCircleOutline, IoLogoReact } from "react-icons/io5";
import { SideBarMenuItem } from "./SideBarMenuItem";
import Link from "next/link";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={20} />,
    title: "Dashboard",
    subTitle: "Visualizacion",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={20} />,
    title: "Counter",
    subTitle: "Contador cliend side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={20} />,
    title: "Pokemons",
    subTitle: "Generacion estatica",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartCircleOutline size={20} />,
    title: "Favoritos",
    subTitle: "Global State",
  },
];

export const Sidebar = () => (
  <div id="menu" style={{ width: "400px" }} className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0">
    <div id="logo" className="my-4 px-6">
      <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
        <IoLogoReact className="mr-2"></IoLogoReact>
        <span>Dash</span>
        <span className="text-blue-500">8</span>.
      </h1>
      <p className="text-slate-500 text-sm">Manage your actions and activities</p>
    </div>
    <div id="profile" className="px-6 py-10">
      <p className="text-slate-500">Welcome back,</p>
      <Link href="#" className="inline-flex space-x-2 items-center">
        <span>
          <Image className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" alt="" height={120} width={80}></Image>
        </span>
        <span className="text-sm md:text-base font-bold">Edward Tompson</span>
      </Link>
    </div>
    <div id="nav" className="w-full px-6">
      {menuItems.map((item) => (
        <SideBarMenuItem key={item.path} {...item}></SideBarMenuItem>
      ))}
    </div>
  </div>
);
