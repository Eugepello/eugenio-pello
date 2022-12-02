import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Curriculum from './Curriculum';
import 'animate.css';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
  const [index, setIndex] = useState<number>(1);
  const { t } = useTranslation();
  const toRotate = [t('banner.rotation')];
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
          <Col xs={11} md={11} xl={6}>
            <div className='animate__animated animate__fadeIn'>
              <span className='tagline'>{t('banner.welcome')}</span>
              <h1>
                {t('banner.title')}{' '}
                <span
                  className='txt-rotate'
                  data-rotate='[t("banner.rotation")]'
                >
                  <span className='wrap'>{text}</span>
                </span>
              </h1>
              <p>{t('banner.presentation')}</p>
            </div>
          </Col>
          <Col xs={12} md={12} xl={6}>
            <Curriculum />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
