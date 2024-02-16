import React from 'react';
import { Container } from 'react-bootstrap';
import './Education.css'

const Education = () => {
    return (
        <div className="mt-2 ">
      <Container>
        <h2 className="text-center education-tittle">EDUCATION</h2>
        <div className="timeline ">
          <div className="timeline-item">
            <div className="timeline-content">
              <h4>University Name</h4>
              <p>Degree Name, Field of Study</p>
              <p>Graduation Year</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h4>College Name</h4>
              <p>Degree Name, Field of Study</p>
              <p>Graduation Year</p>
            </div>
                    </div>
                     <div className="timeline-item">
            <div className="timeline-content">
              <h4>College Name</h4>
              <p>Degree Name, Field of Study</p>
              <p>Graduation Year</p>
            </div>
          </div>
        
        </div>
      </Container>
    </div>
    );
};
export default Education;
