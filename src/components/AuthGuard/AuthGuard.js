import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import stores from '../../stores';

const AuthGuard = props => {
  let history = useHistory()
  const { children } = props
  const { userStore: { auth } } = stores

  console.log(auth)

  const checkAuth = () => {
    // if (!auth) history.push('/auth/sign-in');
    return
  }

  useEffect(() => {
    checkAuth();
  })

  return <div>{children}</div>;
};

// AuthGuard.propTypes = {
//   children: PropTypes.node,
//   routes: PropTypes.array
// };

export default AuthGuard;
