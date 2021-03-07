import React from 'react';
import PropTypes from 'prop-types';

import styles from './PageTitle.module.css';

const PageTitle = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

PageTitle.defaultProps = {
  title: '',
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
