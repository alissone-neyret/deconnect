import React from 'react';

import './ButtonBackToTop.scss';

const ButtonBackToTop = () => (
  <button type="button" title="Haut de Page" onClick={() => window.scrollTo(0, 0)} className="ButtonBackToTop hidden">
    <img alt="Retour haut de page" src="/medias/topArrow.png" />
  </button>
);

export default ButtonBackToTop;
