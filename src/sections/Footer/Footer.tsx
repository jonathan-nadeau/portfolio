import {
  SvgIconComponent,
  Email as EmailIcon,
  PhoneAndroid as PhoneAndroidIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import './Footer.scss';

const links: Array<{ href: string; label: string; Icon: SvgIconComponent }> = [
  {
    href: 'mailto:jonathannadeau.jn@gmail.com',
    label: 'jonathannadeau.jn@gmail.com',
    Icon: EmailIcon,
  },
  {
    href: 'tel:+15149698924',
    label: '514-969-8924',
    Icon: PhoneAndroidIcon,
  },
  {
    href: 'https://github.com/jonathan-nadeau',
    label: 'GitHub',
    Icon: GitHubIcon,
  },
  {
    href: 'https://www.linkedin.com/in/jonathannadeau91/',
    label: 'LinkedIn',
    Icon: LinkedInIcon,
  },
];

const sections: Array<{ href: string; label: string }> = [
  {
    href: '#home',
    label: 'Accueil',
  },
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

export const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='sections'>
          {sections.map(({ href, label }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className='links'>
          {links.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={
                href.includes('mailto:') || href.includes('tel:')
                  ? '_self'
                  : '_blank'
              }
              rel='noreferrer'
            >
              <Icon />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
