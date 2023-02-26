import { Link } from "react-router-dom";
import HeaderStartPage from "../components/HeaderStartPage";

function StartPage() {
    return (
        <>
        <HeaderStartPage />
        <Link to="chooseyoursign">Choose your sign</Link>        
        </>
    );
}

export default StartPage;