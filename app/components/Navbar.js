"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="nav-links">
        <li className={pathname === '/setsiri.github.io/' ? 'active' : ''}>
          <Link href="/setsiri.github.io/">Home</Link>
        </li>
        <li className={pathname === '/setsiri.github.io/about' ? 'active' : ''}>
          <Link href="/setsiri.github.io/about">About</Link>
        </li>
        <li className={pathname === '/setsiri.github.io/portfolio' ? 'active' : ''}>
          <Link href="/setsiri.github.io/portfolio">Portfolio</Link>
        </li>
        <li className={pathname === '/setsiri.github.io/resume' ? 'active' : ''}>
          <Link href="/setsiri.github.io/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}
