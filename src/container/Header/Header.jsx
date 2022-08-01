import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">The key to fine dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Officia duis tempor elit eu elit 
      qui ad labore magna anim dolor nostrud. Voluptate est nisi pariatur incididunt labore. 
      Enim eiusmod sint labore quis qui aute culpa quis tempor anim dolor esse et. Consectetur 
      voluptate elit ullamco aliquip. Sit aliqua id dolor quis do dolor exercitation sit. 
      Consectetur fugiat exercitation dolor voluptate velit. Exercitation ex laboris veniam 
      enim commodo aute eiusmod eiusmod eiusmod enim reprehenderit.</p>
      <button type="button" className="custom__button">Explore menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Welcome" />
    </div>
  </div>
);

export default Header;
