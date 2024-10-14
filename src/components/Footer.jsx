import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <SocialIcon url="https://facebook.com" className={styles.icon} />
        <SocialIcon url="https://instagram.com" className={styles.icon} />
        <SocialIcon url="https://whatsapp.com" className={styles.icon} />
        <SocialIcon url="https://twitter.com" className={styles.icon} />
        <SocialIcon url="https://linkedin.com" className={styles.icon} />
        <SocialIcon url="https://google.com" className={styles.icon} />
        <SocialIcon url="https://github.com" className={styles.icon} />
      </div>
      <div className={styles.newsletter}>
        <form>
          <div className={styles.formGroup}>
            <strong>Sign up for our newsletter</strong>
            <input type='email' placeholder='Email address' className={styles.emailInput} />
            <button type='submit' className={styles.subscribeButton}>Subscribe</button>
          </div>
        </form>
      </div>
      <div className={styles.description}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
          voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
          sequi voluptate quas.
        </p>
      </div>
      <div className={styles.copyright}>
        © 2020 Copyright: <a href='' className={styles.link}>CharlyEcommer.com</a>
      </div>
    </footer>
  );
}

export default Footer;
