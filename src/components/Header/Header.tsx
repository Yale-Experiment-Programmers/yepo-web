/*
 * Header.tsx
 * Author: Evan Kirkiles
 * Created on: Thu Oct 20 2022
 * © 2022 Yale Experiment Programmers' Organization
 */
import Image from 'next/image';
import LOGO from '../../../public/svg/yepologo.svg';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import Link from 'next/link';

const Header: React.FC = function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="Header">
      <Link className="Header__logo" href="/">
        <a className="Header__logo">
          <Image
            src={LOGO}
            objectFit={'cover'}
            objectPosition={'fill'}
            alt="logo
        "
          />
        </a>
      </Link>
      <div className="Header__links">
        <div>About</div>
        <div>Members</div>
        <div>Resources</div>
        <div>Wiki</div>
      </div>
      <div style={{ flex: 1 }}></div>
      <div className="Header__links">
        <div>Join</div>
      </div>
      <div className="Header__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="Header__hamburgertext">
          {menuOpen ? 'CLOSE' : 'MENU'}
        </div>
        <Hamburger size={20} toggled={menuOpen} toggle={setMenuOpen} />
      </div>
    </div>
  );
};

export default Header;
