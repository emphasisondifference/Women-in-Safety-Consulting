import React from 'react';
import { PROGRAMS_DATA } from '../constants';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="programs">
      <div className="container">
        <div className="section-header">
          <h2>Featured Programs</h2>
        </div>
        <div className="programs-grid">
          {PROGRAMS_DATA.map((program, index) => (
            <div key={index} className="program-card">
              {program.icon}
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <a href="#">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;