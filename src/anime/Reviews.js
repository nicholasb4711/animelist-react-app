function Reviews() {
    return (
        <div className='review'>
            <div style={{ paddingTop: 30 }}>
                <label className="label" type="label" htmlFor="textAreaExample">
                    <h2>Reviews</h2>
                </label>
                
            </div>
            
            <div className="write-review container" style={{ marginTop: 30 }}>
            <h4 style={{textAlign: 'start', paddingLeft: '1rem'}}>Write a review!</h4>

                <textarea className="form-control" id="textAreaExample" rows="5" >

                </textarea>
            </div>
        </div>
    )
}

export default Reviews;