/*
 * Footer.tsx
 * Author: Evan Kirkiles
 * Created on: Thu Oct 20 2022
 * © 2022 Yale Experiment Programmers' Organization
 */
import s from './Footer.module.scss';

const Footer: React.FC = function Footer() {
  return (
    <div className={s.container}>
      <div className={s.yale_container}>Yale</div>
      <div className={s.privacy_policy_column}>
        <div>
          <a href="" target="_blank" rel="noopener noreferrer">
            Privacy&nbsp;Policy
          </a>
          &nbsp;·{' '}
          <a
            href="https://accessibility.yale.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Accessibility&nbsp;at&nbsp;Yale
          </a>
        </div>
        <div>
          Copyright&nbsp;©&nbsp;2022 Yale&nbsp;University&nbsp;·
          All&nbsp;rights&nbsp;reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
