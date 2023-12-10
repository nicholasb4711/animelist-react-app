import React from 'react';
import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../Home/Body/Body.css';
import Header from '../Search/Search'; // Assuming you have a Header component
import {Avatar} from "@material-ui/core" // Assuming you have an Avatar component
import AnimeRow from '../AnimeRow'; // Assuming you have an AnimeRow component
import { useDataLayerValue } from '../DataLayer';
import Axios from 'axios'

function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  useEffect(() => {
    fetchAccount();
  }, []);
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          <input value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          <input value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          <input value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          <input value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          <select onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}
    </div>
  );
}


// const Account = () => {
//     const [{user, reviews}, dispatch] = useDataLayerValue()
//   const setAnime = (anime) => {
//     Axios.post("http://localhost:3001/getreviews", {id:anime.uid})
//     .then((response) => {
//       console.log(response)
//       dispatch({ // update our results array to show all anime with that name
//         type: "SET_ANIMEREVIEWS",
//         animereviews: response.data
//       })
//     })
//     dispatch({
//       type: "SET_ANIME",
//       anime: {id: anime.uid, name: anime.Title, synopsis: anime.Synopsis, picture: anime.img_url,
//       score: anime.Score, ranked: anime.Ranked, genre: anime.episodes}
//     })
//     dispatch({type: "SET_PAGE", page: "Anime"})
//     // Get the genre and store it in genre variable
//   }
//   return (
//     <div className="body">
//       <Header />
//       <h1>Account</h1>
//       <h2 style={{ marginRight: "10px" }}>{user}</h2>
//       <Avatar onClick={() => dispatch({ type: "SET_PAGE", page: "Account" })}> 
//         {user.charAt(0)}
//       </Avatar>
//       {(reviews !== undefined && reviews.length > 0) &&
//         reviews.map((review, index) => 
//           <div key={index}>
//             <AnimeRow 
//               name={review.rdescription} 
//               score={review.rating} 
//               ranked={review.rating}
//               synopsis={review.rating} 
//               picture={""}
//             />
//           </div>
//         )
//       }
//     </div>
//   );
// };

export default Account;