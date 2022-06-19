import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About me</Link></li>
                    <li><Link to="works">Works</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;