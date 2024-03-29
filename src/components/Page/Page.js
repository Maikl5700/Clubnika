/* eslint-disable no-undef */
import React, { Fragment, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// import { useHistory } from 'react-router-dom';

const NODE_ENV = process.env.NODE_ENV;
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

const Page = props => {
  const { title, children } = props;

  // let history = useHistory();

  // useEffect(() => {
  //   if (NODE_ENV !== 'production') {
  //     return;
  //   }

  //   if (window.gtag) {
  //     window.gtag('config', GA_MEASUREMENT_ID, {
  //       page_path: history.location.pathname,
  //       page_name: title
  //     });
  //   }
  // }, [title, router]);

  return (
    <Fragment>
      {/* <Helmet> */}
        <title>{title}</title>
      {/* </Helmet> */}
      {children}
    </Fragment>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Page;
