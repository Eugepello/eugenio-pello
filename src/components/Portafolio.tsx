import { Container, Row, Col, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import 'animate.css';

const Portafolio = () => {
  const projects = [
    {
      title: 'Despacho de dulces',
      description: 'Pastelería Profesional',
      imgUrl:
        'https://res.cloudinary.com/eugepello/image/upload/v1666919175/blueberry-mini-muffins-427931-hero-01-e15bb64e128e4499981643e5e3fdb3ee_zio0bj.jpg',
      url: 'https://eugepello.github.io/despacho-de-dulces/',
    },
    {
      title: 'Black & Wine',
      description: 'Tienda de vinos',
      imgUrl:
        'https://res.cloudinary.com/eugepello/image/upload/v1666919288/Rutini-Wines-Coleccion-MC1_rvnlem.jpg',
      url: 'https://black-and-wine.vercel.app/',
    },
    {
      title: 'To do list',
      description: 'Lista de tareas finalizadas y pendientes',
      imgUrl: 'https://res.cloudinary.com/eugepello/image/upload/v1666992034/0x0_hujr3m.jpg',
      url: 'https://eugepello.github.io/to-do-list/',
    },
    {
      title: 'Calculator',
      description: 'Calculadora online',
      imgUrl: 'https://res.cloudinary.com/eugepello/image/upload/v1666997342/800px_1_sy8fnv.gif',
      url: 'https://eugepello.github.io/calculadora/',
    },
    {
      title: 'Password',
      description: 'Generador de contraseñas online',
      imgUrl:
        'https://res.cloudinary.com/eugepello/image/upload/v1667028523/0091967780bfa906ea04b819991659ae_zdcb3p.jpg',
      url: 'https://eugepello.github.io/password-generator/',
    },
    {
      title: 'Quiz',
      description: 'Juego de preguntas y respuestas',
      imgUrl:
        'https://res.cloudinary.com/eugepello/image/upload/v1667019167/quiz-quizz-concept-word-on-260nw-2072564987_im6iz0.jpg',
      url: 'https://eugepello.github.io/quiz/',
    },
  ];

  return (
    <section className='project' id='portafolio'>
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2 id='portfolio'>Portafolio</h2>
              <Tab.Container defaultActiveKey='unique' id='projects-tabs'>
                <Tab.Content className='animate__animated animate__slideInUp' id='slideInUp'>
                  <Tab.Pane eventKey='unique'>
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
          <h5>...para ver más proyectos, ingresá a mi <strong><a href='https://github.com/Eugepello' target='_blank' rel='noopener noreferrer'>perfil de github</a></strong>.</h5>
        </Row>
      </Container>
    </section>
  );
};

export default Portafolio;
