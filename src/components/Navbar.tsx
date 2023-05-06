"use client";

import Link from "next/link";
import React from "react";
import HomeIcons from "./ui/icons/home/HomeIcons";
import HomeFillIcons from "./ui/icons/home/HomeFillIcons";
import SearchIcons from "./ui/icons/search/SearchIcons";
import SearchFillIcons from "./ui/icons/search/SearchFillIcons";
import NewIcons from "./ui/icons/new/NewIcons";
import NewFillIcons from "./ui/icons/new/NewFillIcons";
import { usePathname } from "next/navigation";
import ColorButton from "./ui/ColorButton";
import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "./Avatar";

const menu = [
  {
    href: "/",
    icon: <HomeIcons />,
    clickedIcon: <HomeFillIcons />,
  },
  {
    href: "/search",
    icon: <SearchIcons />,
    clickedIcon: <SearchFillIcons />,
  },
  {
    href: "/new",
    icon: <NewIcons />,
    clickedIcon: <NewFillIcons />,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold ">Instantgram</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathname === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          {user && (
            <li>
              <Link href={`/${user.username}`}>
                <Avatar image={user.image} size="small" highlight />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <ColorButton text="Sign out" onClick={() => signOut()} />
            ) : (
              <ColorButton text="Sign in" onClick={() => signIn()} />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
