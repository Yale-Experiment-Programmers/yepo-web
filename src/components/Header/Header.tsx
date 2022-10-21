/*
 * Header.tsx
 * Author: Evan Kirkiles
 * Created on: Thu Oct 20 2022
 * © 2022 Yale Experiment Programmers' Organization
 */
import Image from 'next/image';
import s from './Header.module.scss';
import LOGO from '../../../public/svg/yepologo.svg';
import { useState } from 'react';
import Hamburger from 'hamburger-react';

const Header: React.FC = function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Image
          src={LOGO}
          objectFit={'cover'}
          objectPosition={'fill'}
          alt="logo
        "
        />
      </div>
      <div className={s.links_container}>
        <div>About</div>
        <div>Members</div>
        <div>Resources</div>
        <div>Wiki</div>
      </div>
      <div style={{ flex: 1 }}></div>
      <div className={s.links_container}>
        <div>Join</div>
      </div>
      <div className={s.menu} onClick={() => setMenuOpen(!menuOpen)}>
        <div className={s.menu_text}>{menuOpen ? 'CLOSE' : 'MENU'}</div>
        <Hamburger size={20} toggled={menuOpen} toggle={setMenuOpen} />
      </div>
    </div>
  );
};

export default Header;
