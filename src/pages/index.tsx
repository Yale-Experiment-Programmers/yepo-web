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
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Index - YEPO</title>
        <NextSeo />
      </Head>
      <div className="Home">
        <div className="Home__row">
          <div className="Home__maincolumn">
            <div style={{ flex: 1 }}></div>
            <TypeWriterEffect
              text={[
                'cd yepo-web',
                'git add *',
                'git commit -m "changes to layout"',
                'git push',
                'npm run build',
                'npm start',
              ]}
              className="Home__code"
              typeSpeed={60}
            ></TypeWriterEffect>
            <YEPO className="Home__icon" />
          </div>
          <div className="Home__maincolumn">
            <p>
              The Yale Experiment Programmers Organization (YEPO) is a growing
              community of researchers across disciplines, including:
              Psychology, Neuroscience, Behavioral Economics, the School of
              Medicine, and more!
            </p>
            <p>
              Researchers in our community share an interest in developing tasks
              and surveys to study human behavior, both in-person and online.
            </p>
            <p>
              Our mission is to develop a shared collection of best practices
              for designing behavioral experiments and questionnaires while
              providing a collaborative space for learning and sharing of
              knowledge.
            </p>

            <p>
              With the support of the{' '}
              <Link href="https://wti.yale.edu" target="_blank">
                <strong>Wu Tsai Institute</strong>
              </Link>
              , we are currently developing a series of trainings and workshops
              to explore techniques from computer science as they apply to
              behavioral research. These workshops are designed to make
              seemingly challenging concepts accessible to all.
            </p>
            <p>
              We aim to expose individuals to techniques beyond the scope of
              their training and foster cross-disciplinary pollination.
            </p>
            <div className="Home__dinkus"></div>
            <p>
              We are actively looking to recruit anyone interested in becoming
              involved in our community! All levels of experience are welcome :)
            </p>
            <p>
              If you are interested in learning more about our organization,
              please feel free to contact{' '}
              <a href="mailto:email@example.com">Evan Kirkiles</a>, Yale College
              ’24, or <a href="mailto:email@example.com">Josh Kenney</a>, a
              computer scienctist and Research Associate at the {''}
              <Link href="https://belieflab.yale.edu" target="_blank">
                Belief Lab.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
