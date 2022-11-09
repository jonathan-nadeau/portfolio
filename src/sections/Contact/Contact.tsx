import './Contact.scss';
import {
  SvgIconComponent,
  Email as EmailIcon,
  PhoneAndroid as PhoneAndroidIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

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
export const Contact = () => {
  return (
    <section id='contact'>
      <div className='container'>
        <h2>Me joindre</h2>
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
    </section>
  );
};
