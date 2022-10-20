/*
 * index.tsx
 * Author: Evan Kirkiles
 * Created on: Thu Oct 20 2022
 * © 2022 Yale Experiment Programmers' Organization
 */
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import TypeWriterEffect from '../components/TypewriterEffect/TypeWriterEffect';
import YEPO from '../icons/YEPO';
import s from '../styles/Home.module.scss';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Index - YEPO</title>
        <NextSeo />
      </Head>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.main_column}>
            <div style={{ flex: 1 }}></div>
            <TypeWriterEffect
              text="cd yepo_resources"
              className={s.code}
            ></TypeWriterEffect>
            <TypeWriterEffect
              text="python launch_experiment.py"
              className={s.code}
            ></TypeWriterEffect>
            <YEPO className={s.yepo_icon} />
          </div>
          <div className={s.main_column}>
            <p>
              The Yale Experiment Programmers Organization (YEPO) is a community
              of researchers across many disciplines, including the School of
              Medicine, Neuroscience, Psychology, Behavioral Economics etc.
              Researchers in our community all share an interest in developing
              tasks and surveys to study human behavior, both in-person and
              online.
            </p>
            <p>
              Our mission is to advocate for best practices for developing
              behavioral experiments and questionnaires by providing a space for
              collaboration, learning and sharing of knowledge. We aim to expose
              individuals to techniques beyond the scope of their training and
              foster cross-disciplinary pollination.
            </p>
            <p>
              With the support of the Wu Tsai Institute at Yale, we are
              currently developing workshops to explore techniques from
              computer-based fields as they apply to the traditional experiment
              paradigm. These workshops are designed to make these seemingly
              challenging or foreign concepts accessible even to the most novice
              researchers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
