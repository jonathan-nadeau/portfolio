import './Portfolio.scss';
import {
  firebaseAuththumbnail,
  socialMediaDashboardThumbnail,
  starWarsApiThumbnail,
} from 'src/assets/images';
import { ImageLink } from 'src/app/components';

const links: Array<{
  githubHref: string;
  href: string;
  src: string;
  alt: string;
}> = [
  {
    githubHref: 'https://github.com/jonathan-nadeau/pw2_projetfinal_partie2',
    href: 'https://firebase-auth.jonathan-nadeau.ca/signup',
    src: firebaseAuththumbnail,
    alt: 'Firebase authentification app',
  },
  {
    githubHref:
      'https://github.com/jonathan-nadeau/Social-media-dashboard-with-theme-switcher',
    href: 'https://social-media-dashboard.jonathan-nadeau.ca/',
    src: socialMediaDashboardThumbnail,
    alt: 'Social media dashboad app',
  },
  {
    githubHref:
      'https://github.com/jonathan-nadeau/programmation-web2_projet-final_partie1',
    href: 'https://starwars-api.jonathan-nadeau.ca/films',
    src: starWarsApiThumbnail,
    alt: 'Starwars API app',
  },
];

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='container'>
        <h2>Portfolio</h2>
        <div className='links'>
          {links.map((link) => (
            <ImageLink
              key={link.githubHref}
              githubHref={link.githubHref}
              href={link.href}
              alt={link.alt}
              src={link.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
