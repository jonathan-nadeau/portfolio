import {
  DataObject as DataObjectIcon,
  Menu as MenuIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material/';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { SideNav } from '../SideNav/SideNav';
import './Navbar.scss';

export const navLinks: Array<{ href: string; label: string }> = [
  {
    href: '#about',
    label: 'À propos',
  },
  {
    href: '#portfolio',
    label: 'Portfolio',
  },
  {
    href: '#contact',
    label: 'Me joindre',
  },
];

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(() => false);

  return (
    <nav id='home' className='Navbar'>
      <div className='container Navbar__content'>
        <div className='Navbar__logoContainer'>
          <DataObjectIcon />
          <h1>
            <a href='#home'>Jonathan Nadeau</a>
          </h1>
        </div>
        <IconButton onClick={() => setOpen(() => true)} className='menuButton'>
          <MenuIcon />
        </IconButton>
        <ul className='navItems'>
          {navLinks.map((navLink) => (
            <li key={navLink.href} className='navItem'>
              <a href={navLink.href}>{navLink.label}</a>
            </li>
          ))}
          <li className='navItem'>
            <ul className='socialMedias'>
              <li>
                <a
                  href='https://github.com/jonathan-nadeau'
                  target='_blank'
                  rel='noreferrer'
                >
                  <IconButton>
                    <GitHubIcon />
                  </IconButton>
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/jonathannadeau91/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <IconButton>
                    <LinkedInIcon />
                  </IconButton>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <SideNav open={open} onClose={() => setOpen(() => false)} />
    </nav>
  );
};
