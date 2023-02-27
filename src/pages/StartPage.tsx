import FormBox from "../components/FormBox";
import { Link } from "react-router-dom";
import HeaderStartPage from "../components/HeaderStartPage";

function StartPage() {
    return (
        <div>
            <HeaderStartPage />
            <FormBox />
            <Link to="chooseyoursign">Choose your sign</Link> 
        </div>
    );
}

export default StartPage;