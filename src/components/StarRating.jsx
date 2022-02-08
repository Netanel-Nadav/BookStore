export function StarRating({ rating }) {
    return(
    <span className="star-rating">
    {[...Array(5)].map((star, idx) => {
        idx += 1
        return(<span className={idx <= rating ? 'on' : 'off'} key={idx}><span className="star"><i className="fas fa-star"></i></span></span>)
    })}
    </span>)
}