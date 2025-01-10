import { Link } from "react-router-dom";
import backup from "../assets/backup.jpg";

export const Card = ({movie}) => {
  const{poster_path, id, overview, title, vote_average, vote_count} = movie;

  const image = poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : backup;

  return (
    <div class="col">
      <div className="card shadow-sm">
        <img className="card-img-top" src={image}></img>
        <div className="card-body">
          <h5 className="text-overflow-1 card-title text-primary">{movie.title}</h5>

          <p className="text-overflow-2 card-text">{movie.overview}</p>

          <div class="d-flex justify-content-between align-items-center">
            <Link to={`/movie/${id}`} className="btn btn-sm btn-outline-primary stretched-link">Read More..</Link>
            <small><i className="bi bi-star-fill text-warning"></i>  {vote_average} | {vote_count} review </small>
          </div>

        </div>
      </div>
    </div>
  )
}
