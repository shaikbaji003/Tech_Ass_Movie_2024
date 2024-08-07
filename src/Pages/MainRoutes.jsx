import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import LogIn from './LogIn';
import MovieDetail from './MovieDetail';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/movie/:id" element={<MovieDetail />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default MainRoutes;




//final

// import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import HomePage from './HomePage';
// import LogIn from './LogIn';
// import MovieDetail from './MovieDetail';
// import MovieList from './MovieList';
// import { useSelector } from 'react-redux';

// const MainRoutes = () => {
//   const { isAuth } = useSelector(state => state.auth);

//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/login" element={isAuth ? <Navigate to="/movies" /> : <LogIn />} />
//       <Route path="/movies" element={isAuth ? <MovieList /> : <Navigate to="/login" />} />
//       <Route path="/movie/:id" element={isAuth ? <MovieDetail /> : <Navigate to="/login" />} />
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };

// export default MainRoutes;
