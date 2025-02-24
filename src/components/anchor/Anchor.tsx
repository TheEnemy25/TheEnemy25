import { Link } from "react-router-dom";
import "./Anchor.scss";

const Anchor = () => {

    return (
        <>
            <aside className="anchor">
                <hr className="anchor__hr" />
                <nav className="anchor__nav">
                    <ul className="anchor__nav-list">
                        <li>
                            <Link to="">Stack</Link>
                        </li>
                        <li>
                            <Link to="">Experience</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Anchor;
