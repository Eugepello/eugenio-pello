import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Habilidades = () => {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='habilidades'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Tecnologías</h2>
              <p>Lenguajes, frameworks, librerías y preprocesadores que utilizo con frecuencia</p>
              <Carousel
                className='owl-carousel owl-theme skill-slider'
                infinite={true}
                responsive={responsive}>
                <div className='item'>
                  <img
                    alt='TypeScript icon'
                    id='typescript'
                    src='https://res.cloudinary.com/eugepello/image/upload/v1668318816/typescript-png_copmls.png'
                  />
                  <h4>TypeScript</h4>
                </div>
                <div className='item'>
                  <img
                    alt='React icon'
                    id='react'
                    src='https://res.cloudinary.com/eugepello/image/upload/v1665781321/TECHNOLOGIES/1200px-React-icon.svg_k72gs1.png'
                  />
                  <h4>React JS</h4>
                </div>
                <div className='item'>
                  <img
                    alt='JavaScript icon'
                    src='https://res.cloudinary.com/eugepello/image/upload/v1665781409/TECHNOLOGIES/2048px-Unofficial_JavaScript_logo_2.svg_moldzt.png'
                  />
                  <h4>JavaScript</h4>
                </div>
                <div className='item'>
                  <img
                    alt='Next icon'
                    className='next'
                    id='next'
                    src='https://res.cloudinary.com/eugepello/image/upload/v1668107246/nextjs-boilerplate-logo_anpk1e.png'
                  />
                  <h4 className='next'>Next JS</h4>
                </div>
                <div className='item'>
                  <img
                    alt='HTML icon'
                    id='html'
                    src='https://res.cloudinary.com/eugepello/image/upload/v1666134946/TECHNOLOGIES/pngegg_3_fsvggf.png'
                  />
                  <h4>HTML</h4>
                </div>
                <div className='item'>
                  <img
                    alt='CSS icon'
                    id='css'
                    src='https://res.cloudinary.com/eugepello/image/upload/v1666134871/TECHNOLOGIES/pngegg_2_iouiln.png'
                  />
                  <h4>CSS</h4>
                </div>
                <div className='item'>
                  <img
                    alt='SASS icon'
                    src='https://res.cloudinary.com/eugepello/image/upload/v1666203415/TECHNOLOGIES/pngegg_8_ts7xlk.png'
                  />
                  <h4>SASS</h4>
                </div>
                <div className='item'>
                  <img
                    alt='GIT icon'
                    src='https://res.cloudinary.com/eugepello/image/upload/v1666135345/TECHNOLOGIES/pngegg_5_wntu73.png'
                  />
                  <h4>GIT</h4>
                </div>
                <div className='item'>
                  <img
                    alt='Github icon'
                    src='https://res.cloudinary.com/eugepello/image/upload/v1665781491/TECHNOLOGIES/Octicons-mark-github_jq3wa5.svg'
                  />
                  <h4>Github</h4>
                </div>
                <div className='item'>
                  <img
                    alt='Bootstrap icon'
                    src='https://res.cloudinary.com/eugepello/image/upload/v1666136389/TECHNOLOGIES/pngegg_7_jpzeah.png'
                  />
                  <h4>Bootstrap</h4>
                </div>
                <div className='item'>
                  <img
                    alt='Tailwind icon'
                    id='tailwind'
                    src='https://res.cloudinary.com/eugepello/image/upload/v1666136528/TECHNOLOGIES/pngwing.com_ztrddd.png'
                  />
                  <h4>Tailwind</h4>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
