// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { update_order, update_rating } from "../Redux/MovieReducer/action";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";

// const SideBar = () => {
//   const [selected_rating, setSelectedrating] = useState([]);
//   const [order_by, setOrder_by] = useState("asc");

//   const [searchParams, setSearchParams] = useSearchParams();

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useState(() => {
//     let s = searchParams.getAll("rating").map((e) => parseInt(e));
//     let o = searchParams.get("order");

//     setSelectedrating([...s]);

//     if (o !== null) {
//       setOrder_by(o);
//     }
//     if (o === null) {
//       setOrder_by("asc");
//     }
//   }, []);

//   const make_search_string = (selected_rating) => {
//     let res = "";
//     selected_rating.forEach((e) => {
//       res += `rating=${e}&`;
//     });
//     return res !== "" ? res.slice(0, res.length - 1) : res;
//   };

//   useEffect(() => {
//     update_rating(dispatch, selected_rating);
//     update_order(dispatch, order_by);
//     navigate({
//       pathname: window.location.pathname,
//       search: `${make_search_string(selected_rating)}${
//         selected_rating.length > 0 ? "&" : ""
//       }${order_by ? `order=${order_by}` : ""}`,
//     });
//   }, [selected_rating, order_by, searchParams]);

//   const filterHandler = (e) => {
//     if (selected_rating.includes(e)) {
//       setSelectedrating([...selected_rating.filter((el) => el !== e)]);
//     } else {
//       setSelectedrating([...selected_rating, e]);
//     }
//   };

//   const orderHandler = (e) => {
//     setOrder_by(e.value);
//   };

//   return (
//     <div className="sidebar">
//       <h2>Filter by Rating</h2>
//       {[1, 2, 3, 4, 5].map((e, i) => (
//         <p
//           key={i}
//           onClick={() => filterHandler(e)}
//           style={{ cursor: 'pointer', color: selected_rating.includes(e) ? 'gold' : 'grey' }}
//         >
//           {[...Array(e)].map((_, idx) => (
//             <FontAwesomeIcon key={idx} icon={faStar} />
//           ))}
//         </p>
//       ))}
//       <h2>Sort</h2>
//       {[
//         { name: "Ascending", value: "asc" },
//         { name: "Descending", value: "dsc" },
//       ].map((e, i) => (
//         <p
//           key={i}
//           onClick={() => orderHandler(e)}
//           style={{ cursor: 'pointer', color: order_by === e.value ? 'blue' : 'black' }}
//         >
//           {e.name}
//         </p>
//       ))}
//     </div>
//   );
// };

// export default SideBar;





import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { update_order, update_rating } from "../Redux/MovieReducer/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const [selected_rating, setSelectedRating] = useState([]);
  const [order_by, setOrderBy] = useState("asc");

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let s = searchParams.getAll("rating").map((e) => parseInt(e));
    let o = searchParams.get("order");

    setSelectedRating([...s]);

    if (o !== null) {
      setOrderBy(o);
    }
    if (o === null) {
      setOrderBy("asc");
    }
  }, []);

  const make_search_string = (selected_rating) => {
    let res = "";
    selected_rating.forEach((e) => {
      res += `rating=${e}&`;
    });
    return res !== "" ? res.slice(0, res.length - 1) : res;
  };

  useEffect(() => {
    update_rating(dispatch, selected_rating);
    update_order(dispatch, order_by);
    navigate({
      pathname: window.location.pathname,
      search: `${make_search_string(selected_rating)}${
        selected_rating.length > 0 ? "&" : ""
      }${order_by ? `order=${order_by}` : ""}`,
    });
  }, [selected_rating, order_by, searchParams]);

  const filterHandler = (e) => {
    if (selected_rating.includes(e)) {
      setSelectedRating([...selected_rating.filter((el) => el !== e)]);
    } else {
      setSelectedRating([...selected_rating, e]);
    }
  };

  const orderHandler = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <div className="sidebar">
      <h2>Filter by Rating</h2>
      {[1, 2, 3, 4, 5].map((e, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={selected_rating.includes(e)}
            onChange={() => filterHandler(e)}
          />
          <div style={{ marginLeft: '8px', cursor: 'pointer', color: selected_rating.includes(e) ? 'gold' : 'grey' }}>
            {[...Array(e)].map((_, idx) => (
              <FontAwesomeIcon key={idx} icon={faStar} />
            ))}
          </div>
        </div>
      ))}
      <h2>Sort</h2>
      {[
        { name: "Ascending", value: "asc" },
        { name: "Descending", value: "dsc" },
      ].map((e, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="radio"
            name="order"
            value={e.value}
            checked={order_by === e.value}
            onChange={orderHandler}
          />
          <span style={{ marginLeft: '8px', cursor: 'pointer', color: order_by === e.value ? 'blue' : 'black' }}>
            {e.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
