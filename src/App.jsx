import React, { Suspense, lazy, useCallback, useEffect, useRef } from 'react';
import { loadFull } from "tsparticles";
import styles from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactMe from './components/ContactMe/ContactMe';
import Profile from './components/Profile/Profile';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Spinner from './components/shared/Spinner/Spinner';
import tsParticlesConfig from './data/tsParticles.json';
const TerminalContainer = lazy(() => import('./components/Terminal/TerminalContainer'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Technologies = lazy(() => import('./components/Technologies/Technologies'));
const Particles = lazy(() => import('react-particles'));
const MyStats = lazy(() => import('./components/MyStats/MyStats'));

const App = () => {
  const ref = useRef(null);
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  const changeParticleColor = (color) => {
    const container = ref.current;
    container?.options.particles.color.load({ value: color });
    container?.options.particles.links.load({ color: color });
    container?.refresh();
  };


  useEffect(() => {
    const particlesColor = getComputedStyle(document.body);
    ref.current?.options.particles.color.load({
      value: particlesColor.getPropertyValue("--text-color").trim(),
    });
    ref.current?.options.particles.links.load({
      color: particlesColor.getPropertyValue("--text-color").trim(),
    });
    ref.current?.refresh();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Suspense fallback={null}>
          <Particles container={ref} className={styles.particles} init={particlesInit} loaded={particlesLoaded} options={tsParticlesConfig} />
        </Suspense>
        <Profile />
        <Suspense fallback={<Spinner text='Loading my Stacks' />}>
          <Technologies />
        </Suspense>

        <Suspense fallback={<Spinner text='Loading my Stats' />}>
          <MyStats />
        </Suspense>
        <Suspense fallback={<Spinner text='Loading the terminal' />}>
          <TerminalContainer />
        </Suspense>

        {/* <Suspense fallback={<Spinner text='Curating my projects' />}>
          <Projects />
        </Suspense> */}

        <ContactForm />


        <ThemeSwitcher changeParticlesColor={changeParticleColor} />
      </div>
      <ContactMe />
    </>
  )
}

export default App