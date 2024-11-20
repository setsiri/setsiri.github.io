"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="nav-links">
        <li className={pathname === 'setsiri.github.io' ? 'active' : ''}>
          <Link href="setsiri.github.io">Home</Link>
        </li>
        <li className={pathname === 'about' ? 'active' : ''}>
          <Link href="about">About</Link>
        </li>
        <li className={pathname === 'portfolio' ? 'active' : ''}>
          <Link href="portfolio">Portfolio</Link>
        </li>
        <li className={pathname === 'resume' ? 'active' : ''}>
          <Link href="resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}
