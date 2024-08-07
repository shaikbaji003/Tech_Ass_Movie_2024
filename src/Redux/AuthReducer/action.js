// import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

// export const login = (credentials) => async (dispatch) => {
//   dispatch({ type: LOGIN_REQUEST });

//   try {
//     const response = await fetch('https://reqres.in/api/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(credentials),
//     });

//     const data = await response.json();
//     if (data.token) {
//       dispatch({ type: LOGIN_SUCCESS, payload: data.token });
//     } else {
//       dispatch({ type: LOGIN_FAILURE });
//     }
//   } catch (error) {
//     dispatch({ type: LOGIN_FAILURE });
//   }
// };





//updated

// import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

// export const login = (credentials) => async (dispatch) => {
//   dispatch({ type: LOGIN_REQUEST });

//   try {
//     console.log("Sending credentials:", credentials); // Debugging log
//     const response = await fetch('https://reqres.in/api/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(credentials),
//     });

//     const data = await response.json();
//     console.log("Response data:", data); // Debugging log

//     if (response.ok && data.token) {
//       dispatch({ type: LOGIN_SUCCESS, payload: data.token });
//     } else {
//       dispatch({ type: LOGIN_FAILURE });
//     }
//   } catch (error) {
//     console.error("Login error:", error); // Debugging log
//     dispatch({ type: LOGIN_FAILURE });
//   }
// };


//jj4
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const login = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    console.log("Sending credentials:", credentials); // Debugging log
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    console.log("Response data:", data); // Debugging log

    if (response.ok && data.token) {
      dispatch({ type: LOGIN_SUCCESS, payload: data.token });
    } else {
      dispatch({ type: LOGIN_FAILURE });
    }
  } catch (error) {
    console.error("Login error:", error); // Debugging log
    dispatch({ type: LOGIN_FAILURE });
  }
};
