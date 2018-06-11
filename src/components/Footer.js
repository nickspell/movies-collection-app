import React from "react";
import '../styles/css/main.css';
import tmdb from '../static/icons/tmdb.png';

const Footer=()=>(
  <div className={'footer scritte'}>
        <div style={{marginBottom:5}}>Powered by Nicola Pellicanò</div>
        <div style={{marginBottom:10}}><a className={'scritte piccolino'} target="_blank" href="https://www.brusheezy.com">Brushes by Brusheezy</a></div>
        <div>
            <img height={40} src={tmdb} alt={'TMDB logo'}/>
        </div>
  </div>
);

export default Footer;