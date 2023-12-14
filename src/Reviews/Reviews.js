import * as client from './client';
import { findUserById } from '../users/client';
import { useState, useEffect } from 'react';
import { useAnime } from '../anime/AnimeProvider';
import { useUser } from '../users/userContext';
import { IoIosStar } from "react-icons/io";

function Reviews() {
  // get reviews from server based on the currently selected anime
  const [reviews, setReviews] = useState([]);
  const [userr, setuserr] = useState([]);
  const { anime } = useAnime();
  const { user } = useUser();
  const [credentials, setCredentials] = useState({
    animeId: anime._id, userId: user._id, reviewText: "", rating: null, Autor: user.username
  });
  const [error, setError] = useState(null);
  const [isAdmin] = useState(user.role === "ADMIN");

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
  const getUser = async (id) => {
    const userrev = await findUserById(id)
    setuserr(userrev);
  }


  return (

    <div className='review'>
      <div style={{ paddingTop: 30 }}>
        <label className="label" type="label" htmlFor="textAreaExample">
          <h2>Reviews</h2>
        </label>

      </div>

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
      <div className='reviews-section container'>
        {/* map through reviews and display them */}
        {reviews.map((review) => (
          <div style={{marginBottom: '4rem'}}>
            <div className='d-flex d-flex-row flex-fill'>
              <h1 className='review-text'>{review.Autor} said...</h1>
            </div>
            <div className='d-flex d-flex-row flex-fill review-card'
             style={{marginLeft: '1rem'}} key={review._id}>
              <h2 className='review-text'>{review.reviewText}</h2>
            </div>
            <div className='d-flex d-flex-row flex-fill review-card align-items-center' 
            style={{marginLeft: '5rem'}} key={review._id}>
              <IoIosStar className='review-text'/>
              <h2 className='review-text'>
                 {review.rating} / 10
              </h2>


            </div>
          </div>
          // <div>
          //   <h1>{review.Autor} said...</h1>
          // <div className='review-card' key={review._id}>
          //   <div className='review-card-header'>
          //     {/* display review card header */}
          //   </div>

          //   {/* display review */}
          //   <h1>{review.Autor}</h1>
          //   <p>{review.reviewText}</p>
          //   <div>
          //     {/* display review details */}
          //     <h3>{review.Autor}</h3>
          //     <p>{review.reviewText}</p>
          //   </div>
          // </div>
          // </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews;