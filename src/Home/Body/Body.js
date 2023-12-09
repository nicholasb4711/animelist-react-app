import './Body.css';
import Header from '../../Search/Search';
import {useDataLayerValue} from '../../DataLayer'
import AnimeRow from '../../AnimeRow'
import {Avatar} from "@material-ui/core"
import Axios from 'axios'

function Body() {

  const [{results, page, top100, user, anime, animereviews, reviews}, dispatch] = useDataLayerValue()
  const setAnime = (anime) => {
    Axios.post("http://localhost:3001/getreviews", {id:anime.uid})
    .then((response) => {
      console.log(response)
      dispatch({ // update our results array to show all anime with that name
        type: "SET_ANIMEREVIEWS",
        animereviews: response.data
      })
    })
    dispatch({
      type: "SET_ANIME",
      anime: {id: anime.uid, name: anime.Title, synopsis: anime.Synopsis, picture: anime.img_url,
      score: anime.Score, ranked: anime.Ranked, genre: anime.episodes}
    })
    dispatch({type: "SET_PAGE", page: "Anime"})
    // Get the genre and store it in genre variable
  }

  const getReviews = () => {
    Axios.post("http://localhost:3001/getreviews", {id:anime.id})
    .then((response) => {
      console.log(response)
      dispatch({ // update our results array to show all anime with that name
        type: "SET_ANIMEREVIEWS",
        animereviews: response.data
      })
    })
  }
  if (page === "Anime") {
    return (
      <div className="body">
        <Header/>
        <img src={anime.picture} alt="" />
        <h1>{anime.name}</h1>
        <h2>{"Ranking: #" + anime.ranked}</h2>
        <h3>{"Rating:"+ anime.score} </h3>
        <h4>{anime.synopsis}</h4>
        <a
        onClick={() => getReviews()}
        style = {{padding: 20, borderRadius: 99, backgroundColor: '#4B0082',fontWeight: 800, color:'white', textDecoration: 'none' }}
        >Display Reviews</a>
        {(animereviews !== undefined && animereviews.length > 0) &&
          animereviews.map((review) => 
            <div>
              <AnimeRow name={review.rdescription} score={review.rating} ranked={review.rating}
              synopsis={review.rating} picture={""}/>
            </div>
          )
        }
        {(user !== undefined && user !== " ") &&
          <div>
            <h2>Write a Review</h2>
            <span contentEditable="true"></span>
          </div>
        }
      </div>
      
    )
  }
  if (page === 'Search') { // returns the search results here if there has been a search
                           // completed by the header component
    return (
      <div className="body">
        <Header/>
        {
          results.map((anime) =>
            <div onClick={() => setAnime(anime)}>
              <AnimeRow name={anime.Title} id={anime.uid} synopsis={anime.Synopsis} picture={anime.img_url} 
              score={anime.Score} ranked={anime.Ranked} genre={anime.episodes}/>
            </div>
          )
        }
      </div>
    )
  }
  else if(page === '100') {
    return (// returns the top 100 page
    <div className="body">
        <Header />
        <h1>Top 10 Artists</h1>
        <div className="body_info">
        </div>
        <div className="body_songs">
          {top100.map((anime) => 
            <div onClick={() => setAnime(anime)}>
              <AnimeRow name={anime.Title} id={anime.uid} synopsis={anime.Synopsis} picture={anime.img_url} 
              score={anime.Score} ranked={anime.Ranked} genre={anime.episodes}/>
            </div>
          )}
        </div>
    </div>
    )
  }
  else if (page === 'Account'){
    // displays all the account info
    return (
      <div className="body">
        <Header/>
        <h1>Account</h1>
        <h2 style={{marginRight:"10px"}}>{user}</h2>
        <Avatar onClick={() => dispatch({type: "SET_PAGE", page: "Account"}) }> 
          {user.charAt(0)}
        </Avatar>
        {(reviews !== undefined && reviews.length > 0) &&
          reviews.map((review) => 
            <div>
              <AnimeRow name={review.rdescription} score={review.rating} ranked={review.rating}
              synopsis={review.rating} picture={""}/>
            </div>
          )
        }
      </div>
    )
  }
}

export default Body;