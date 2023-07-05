import { Link } from "react-router-dom"

function Logo() {
    return (
        <Link to="/" className="logo">
            <h1>Maera <span className="span3">Studio</span></h1>
            <span className="span2"></span>
        </Link>
    )
}

export default Logo