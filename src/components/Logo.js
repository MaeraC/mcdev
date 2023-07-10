import { Link } from "react-router-dom"

function Logo() {
    return (
        <Link to="/" className="logo">
            <h1>MC <span className="span3">Studio</span></h1>
        </Link>
    )
}

export default Logo