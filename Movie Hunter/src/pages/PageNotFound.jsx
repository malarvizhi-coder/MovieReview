import { Link } from "react-router-dom"
import pageNotFound from "../assets/pageNotFound.jpg"

export const PageNotFound = () => {
  return (
    <div className="container">
      <img src={pageNotFound} className="img-fluid"></img>
      <p className="text-center"> 
        <Link to="/" className="btn btn-primary">Go to Home Page</Link>
      </p>
    </div>
  )
}
