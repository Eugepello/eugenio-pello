import { Col } from 'react-bootstrap';
import { CardTypes } from './types';

const ProjectCard = ({ title, description, imgUrl, url }: CardTypes) => {
  return (
    <Col md={4} size={12} sm={6}>
      <div className='proj-imgbx'>
        <a href={url} id='linkCard' rel='noreferrer' target='_blank'>
          <img alt='Card' src={imgUrl} />
          <div className='proj-card'>
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};

export default ProjectCard;
