import React from 'react';
import { loggedin } from '../services/auth';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ path, exact, component, user }) {
  const [isLoading, setLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
      setLoading(false);
    } else {
      setIsLoggedIn(false);
      setLoading(false);
    }
  }, [user]);
  // React.useEffect(() => {
  //   loggedin().then(response => {
  //     console.log(response.data);
  //     if (response.data._id) {
  //       setIsLoggedIn(true);
  //       setLoading(false);
  //     } else {
  //       setIsLoggedIn(false);
  //       setLoading(false);
  //     }
  //   });
  // }, []);

  return isLoading ? null : isLoggedIn ? (
    <Route path={path} component={component} exact={exact} />
  ) : (
    <Redirect to="/login" />
  );
}

export default PrivateRoute;
