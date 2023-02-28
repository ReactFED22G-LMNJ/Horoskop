import { Link } from "react-router-dom";
import FormBox from "../components/FormBox";
import HeaderStartPage from "../components/HeaderStartPage";

const handleSubmit = (name: string) => {
    console.log(`The submitted name is: ${name}`);
};

function StartPage() {
    return (
        <div>
            <HeaderStartPage />
            <FormBox onSubmit={handleSubmit} />
            <Link to="chooseyoursign">Choose your sign</Link> 
        </div>
    );
}

export default StartPage;