// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../Redux/AuthReducer/action';
// import { useNavigate } from 'react-router-dom';

// const LogIn = () => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoading, isError, isAuth } = useSelector(state => state.auth);

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login(credentials));
//   };

//   useEffect(() => {
//     if (isAuth) {
//       navigate('/movies'); // Redirect to movie list page on successful login
//     }
//   }, [isAuth, navigate]);

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         name="email"
//         value={credentials.email}
//         onChange={handleChange}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         value={credentials.password}
//         onChange={handleChange}
//         placeholder="Password"
//         required
//       />
//       <button type="submit" disabled={isLoading}>Log In</button>
//       {isLoading && <p>Loading...</p>}
//       {isError && <p>Error logging in. Please try again.</p>}
//       {isAuth && <p>Login successful!</p>}
//     </form>
//   );
// };

// export default LogIn;





import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';
import './LogIn.css'; // Import CSS file for styling

const LogIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, isAuth } = useSelector(state => state.auth);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/movies'); // Redirect to movie list page on successful login
    }
  }, [isAuth, navigate]);

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email"
          className="login-input"
          required
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          className="login-input"
          required
        />
        <button type="submit" className="login-button" disabled={isLoading}>Log In</button>
        {isLoading && <p>Loading...</p>}
        {isError && <p className="login-error">Error logging in. Please try again.</p>}
        {isAuth && <p>Login successful!</p>}
      </form>
    </div>
  );
};

export default LogIn;
