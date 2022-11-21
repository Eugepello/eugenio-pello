import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Curriculum from './Curriculum';
import 'animate.css';

const Banner = () => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
  const [index, setIndex] = useState<number>(1);
  const toRotate = ['Desarrollador Web Front end.', 'Front end Developer.'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='aligh-items-center'>
          <Col md={12} xl={6} xs={12}>
            <div className='animate__animated animate__fadeIn'>
              <span className='tagline'>¡Bienvenida/o a mi Website!</span>
              <h1>
                {`Soy Eugenio Pello,`}{' '}
                <span
                  className='txt-rotate'
                  data-rotate='[ "Desarrollador Web Front end.", "Front end Developer." ]'
                >
                  <span className='wrap'>{text}</span>
                </span>
              </h1>
              <p>
                Tengo 24 años y me dedico a la programación desde hace un (1) año desarrollando aplicaciones web, principalmente a través de React con TypeScript. Mi objetivo a diario es profundizar estas tecnologías para mejorar la experiencia del usuario, ya sea a través del cliente como del servidor.
              </p>
            </div>
          </Col>
          <Col md={12} xl={6} xs={12}>
            <Curriculum />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
