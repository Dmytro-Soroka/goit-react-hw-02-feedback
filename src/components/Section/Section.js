import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <div className={styles.container}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

Section.defaultProps = {
  title: '',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
