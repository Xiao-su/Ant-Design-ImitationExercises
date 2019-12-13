import React from 'react';
import './section.css';

const Section = (props) => {
  return (
    <section className="code-box">
      {props.children}
    </section>
  )
}

export default Section;