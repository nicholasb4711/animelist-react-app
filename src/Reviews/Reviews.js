import * as client from './client';
import { useState } from 'react';
import { useAnime } from '../anime/AnimeProvider';
import { useUser } from '../users/userContext';

function Reviews() {
    // get reviews from server based on the currently selected anime
    const [reviews, setReviews] = useState([]);
    const { anime } = useAnime();
    const { user } = useUser();
    const [isAdmin] = useState(user.role === "ADMIN");

    // get reviews from server based on the currently selected anime
    const getReviews = async () => {
        try {
            const data = await client.findReviewsByAnimeId(anime.uid);
            setReviews(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
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
                <textarea className="form-control" id="textAreaExample" rows="5" >
                </textarea>
            </div>
            <div className='reviews-section container'>
                {/* map through reviews and display them */}
                {reviews.map((review) => (
                    <div className='review-card' key={review.uid}>
                        <div className='review-card-header'>
                            {/* display review card header */}
                        </div>
                        {/* display review */}
                        <div>
                            {/* display review details */}
                            <h3>{review.title}</h3>
                            <p>{review.Reviews}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reviews;