import {FiChevronLeft} from "react-icons/fi";
import {useHistory} from "react-router-dom";

import "./Back.css";

const Back = () => {
    const history = useHistory();
    const handleBack = () => {
        history.push("/configure");
    }

    return (
        <div className="Back" onClick={handleBack}>
            <FiChevronLeft color="#c3a26e" size="4vh" />
        </div>
    )
}

export default Back;
