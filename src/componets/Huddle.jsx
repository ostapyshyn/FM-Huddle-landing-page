import React from 'react';
import { ReactComponent as Info } from '../assets/svg/illustration-mockups.svg';

import styles from '../assets/huddle.module.scss';

const Huddle = () => {
  return (
    <main>
      <Info />
      <article>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but so does your
          audience. Create connections with your users as you engage in genuine discussion.{' '}
        </p>
        <button>Register</button>
      </article>
    </main>
  );
};

export default Huddle;