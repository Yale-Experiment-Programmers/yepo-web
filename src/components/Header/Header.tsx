/*
 * Header.tsx
 * Author: Evan Kirkiles
 * Created on: Thu Oct 20 2022
 * © 2022 Yale Experiment Programmers' Organization
 */
import s from './Header.module.scss';

const Header: React.FC = function Header() {
  return (
    <div className={s.container}>
      <div>About</div>
      <div>Members</div>
      <div>Resources</div>
      <div>Wiki</div>
      <div style={{ flex: 1 }}></div>
      <div>Join</div>
    </div>
  );
};

export default Header;
