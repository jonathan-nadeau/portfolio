import { Drawer, IconButton } from '@mui/material';
import {
  Close as CloseIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import { navLinks } from '../Navbar/Navbar';
import './SideNav.scss';

interface ISidenavProps {
  open: boolean;
  onClose(): void;
}

export const SideNav = ({ open, onClose }: ISidenavProps) => {
  return (
    <Drawer anchor='right' open={open} onClose={onClose}>
      <IconButton onClick={onClose} className='closeButton'>
        <CloseIcon />
      </IconButton>
      <ul className='navItems'>
        {navLinks.map((navLink) => (
          <li key={navLink.href} className='navItem'>
            <a href={navLink.href} onClick={onClose}>
              {navLink.label}
            </a>
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
    </Drawer>
  );
};
