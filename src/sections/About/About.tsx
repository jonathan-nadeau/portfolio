import './About.scss';

const stack = [
  'HTML',
  'Javascript',
  'React',
  'Redux',
  'Git',
  'CSS / SASS',
  'TailwindCSS',
  'Bootstrap',
  'Material UI',
];

export const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <div className='aboutMe'>
          <h2>Qui suis-je ? </h2>
          <p className='first'>
            Après avoir découvert le monde de la programmation par pur plaisir,
            j'ai décidé de me lancer dans le <span>développement</span> web de
            façon autodidacte.
          </p>
          <p className='middle'>
            Passionné par le code et les algorithmes, j'ai consolidé ces
            nouvelles connaissances en complétant une attestation d'étude
            collégiale en <span>développment web frontend</span>.
          </p>
          <p className='last'>
            Maintenant, ma carrière est plus qu'un travail:{' '}
            <span>c'est une passion</span>.
          </p>
        </div>
        <div className='stack'>
          <h2>Mon stack</h2>
          <ul>
            {stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
