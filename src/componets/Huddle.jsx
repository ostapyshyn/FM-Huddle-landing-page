import React from 'react';
import { ReactComponent as Info } from '../assets/svg/illustration-mockups.svg';
import { ReactComponent as Logo } from '../assets/svg/logo.svg';

import styles from '../assets/huddle.module.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Huddle = () => {
  return (
    <>
      <main>
        <Logo className={styles.logo} />
        <div className={styles.info}>
          <Info />
          <article>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice, but so does your
              audience. Create connections with your users as you engage in genuine discussion.{' '}
            </p>
            <button>Register</button>
          </article>
        </div>
        <div className={styles.icons}>
          <div className={styles.social_icons}>
            <FaFacebookF className={styles.social} />
          </div>
          <div className={styles.social_icons}>
            <FaTwitter className={styles.social} />
          </div>
          <div className={styles.social_icons}>
            <FaInstagram className={styles.social} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Huddle;
