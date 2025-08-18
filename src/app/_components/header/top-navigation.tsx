"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems: NavigationMenuItem[] = [
  {
    title: "صفحه اصلی",
    href: "/",
  },
  {
    title: "دوره های ری اکت و نکس",
    href: "/courses",
  },
  {
    title: "مقالات و مطالب",
    href: "/blog",
  },
];

const TopNavigation = () => {
  const pathname = usePathname();
  return (
    <ul className="flex gap-x-8 mr-12">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li
            key={`navigation-${item.href}`}
            className={`dark:hover:text-primary  transition-colors pd-2  ${
              isActive && "border-b-2 dark:text-primary  dark:border-primary/30"
            }`}
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TopNavigation;
