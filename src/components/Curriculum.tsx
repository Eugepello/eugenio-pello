import { Container } from 'react-bootstrap';
import cvPhoto from '../assets/img/eugenio.png';
import pdf from '../assets/Eugenio Pello CV.pdf';
import Tilt from 'react-parallax-tilt';
import { useTranslation } from 'react-i18next';

const Curriculum = () => {
  const { t } = useTranslation();

  return (
    <Container className='cvContainer'>
      <Tilt className="parallax-effect-img cvBox"
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        perspective={1500}
        transitionSpeed={10000}
        scale={1.1}
        gyroscope={true}
      >
        <h2 className='cvName'>Curriculum Vitae</h2>
        <a href={pdf} target='_blank' rel='noopener noreferrer' download='Eugenio Pello CV.pdf' className='download'>{t('cv')}</a>
        <img className='cvImg' src={cvPhoto} alt='Foto de perfil del CV' />
      </Tilt>
    </Container>
  );
};

export default Curriculum;