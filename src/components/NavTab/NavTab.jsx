// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

function NavTab() {
  return (
    <nav className="navTab-list">
      <ScrollLink
        to="about-project"
        className="navTab-list__link"
        spy={true}
        smooth={true}
        duration={500}
      >
        О проекте
      </ScrollLink>
      <ScrollLink to="techs" className="navTab-list__link" spy={true} smooth={true} duration={500}>
        Технологии
      </ScrollLink>
      <ScrollLink
        to="about-me"
        className="navTab-list__link"
        spy={true}
        smooth={true}
        duration={500}
      >
        Студент
      </ScrollLink>
    </nav>
  );
}

export default NavTab;
