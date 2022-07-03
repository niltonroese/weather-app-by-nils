import { Link } from "react-router-dom";
import notFoundPic from '../Images/notFoundPic.jpg'

const PageNotFound = () => {
    return (
        <div className="card text-white text-center border-0">
            <img src={notFoundPic} className="card-img opacity-100" alt="Author" height={681} width={523} />
            <div className="card-img-overlay">
                <div className="bg-dark bg-opacity-50 py-1">
                    <h2>404 Not Found
                        <hr />
                        <hr />
                    </h2>
                    <p>Sorry! This page could not be found.</p>
                    <Link className="btn btn-info" to="/weather-app-by-nils">Back to homepage...</Link>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;