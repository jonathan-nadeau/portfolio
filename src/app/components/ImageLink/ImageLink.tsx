import {
  Preview as PreviewIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import './ImageLink.scss';

export interface IImageLinkProps {
  githubHref: string;
  href: string;
  src: string;
  alt: string;
}

export const ImageLink = ({ githubHref, href, src, alt }: IImageLinkProps) => {
  return (
    <div className='ImageLink'>
      <img src={src} alt={alt} />
      <div className='ImageLink__links'>
        <a href={href} target='_blank' rel='noreferrer'>
          <PreviewIcon /> Preview
        </a>
        <a href={githubHref} target='_blank' rel='noreferrer'>
          <GitHubIcon />
          Github
        </a>
      </div>
    </div>
  );
};
