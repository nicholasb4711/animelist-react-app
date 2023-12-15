import * as client from './client';
import { findUserById } from '../users/client';
import { useState, useEffect } from 'react';
import { useAnime } from '../anime/AnimeProvider';
import { useUser } from '../users/userContext';
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';

function Reviews() {
  // get reviews from server based on the currently selected anime
  const [reviews, setReviews] = useState([]);
  const [userr, setuserr] = useState([]);
  const { anime } = useAnime();
  const { user } = useUser();
  const [credentials, setCredentials] = useState({
    animeId: anime._id, userId: user._id, reviewText: "", rating: null, Autor: user.username
  });
  const [isGuest, setGuest] = useState(user.role === "GUEST");
  const [isUser, setUser] = useState(user.role === "USER");
  const [isAdmin, setAdmin] = useState(user.role === "ADMIN");
  const [error, setError] = useState(null);

  // get reviews from server based on the currently selected anime
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.findAllReviews();
        // Filter reviews to include only those that match the anime's id
        const filteredReviews = data.filter(review => review.animeId === anime._id);
        setReviews(filteredReviews);
        console.log(anime._id);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [anime._id]);

  const postReview = async () => {
    try {
      await client.postReview(credentials);
    } catch (err) {
      setError("fail");
    }
}
    const deleteRev = async (id) => {
        await client.deleteReview(id)
  }

  return (

    <div className='review'>
      <div style={{ paddingTop: 30 }}>
      
        <label className="label" type="label" htmlFor="textAreaExample">
          <h2>Reviews</h2>
        </label>
      </div>
      {isGuest &&(
        <button className='btn btn-secondary'>
            <Link to={"/login"} style={{textDecoration:'none', color: 'white'}}>
            Login to Post
            </Link>
        </button>
            
        )}
        {isUser || isAdmin &&(
            <div className="write-review container" style={{ marginTop: 30 }}>
            <h4 style={{ textAlign: 'start', paddingLeft: '1rem' }}>Write a review!</h4>
            <textarea className="form-control" id="textAreaExample" rows="5" onChange={(e) => setCredentials({ ...credentials, reviewText: e.target.value })} >
            </textarea>
            <div>
              <label>Rate This</label>
              <div>
                {[...Array(10)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <label key={ratingValue} style={{ marginRight: '10px' }}>
                      {ratingValue}
                      <input
                        type="checkbox"
                        value={ratingValue}
                        className='form-check-input'
                        onChange={(e) => setCredentials({ ...credentials, rating: e.target.value })}
                      />
                    </label>
                  );
                })}
                <div>
                  <button className="btn btn-on-primary" onClick={postReview}>
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      <div className='reviews-section container'>
        {/* map through reviews and display them */}
        {reviews.map((review) => {
          return (
            <div key={review._id} style={{ marginBottom: '4rem' }}>
              <div className='d-flex d-flex-row flex-fill'>
                <h1 className='review-text'>{review.Autor} said...</h1>
              </div>
              <div className='d-flex d-flex-row flex-fill review-card' style={{ marginLeft: '1rem' }}>
                <h2 className='review-text'>{review.reviewText}</h2>
              </div>
              <div className='d-flex d-flex-row flex-fill review-card align-items-center' style={{ marginLeft: '5rem' }}>
                <IoIosStar className='review-text' />
                <h2 className='review-text'>
                  {review.rating} / 10
                </h2>
                <button className='btn btn-danger'  >
                    Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default Reviews;