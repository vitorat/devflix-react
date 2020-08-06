import React from 'react';
import { FooterBase } from './styles';
import Logofooter from '../../assets/img/Logo-footer.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.youtube.com/results?search_query=react+js">
        <img src={Logofooter} alt="Logo footer" />
      </a>
      <p>
        Project done during a study marathon - React
      </p>
    </FooterBase>
  );
}

export default Footer;
