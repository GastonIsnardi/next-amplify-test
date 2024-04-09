"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface props {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

export const SideBarMenuItem = ({ path, icon, title, subTitle }: props) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={
        pathName === path
          ? "w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150"
          : "w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
      }
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
      </div>
    </Link>
  );
};
