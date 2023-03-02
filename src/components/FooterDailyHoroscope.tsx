import styled from "styled-components";
import { Button } from "./Button";

function FooterDailyHoroscope() {
    return(
    <FooterContainer>
        <Button to="/">Back</Button>
        <Button to="/chooseyoursign">All Zodiac Signs</Button>
    </FooterContainer>
    );
}

export default FooterDailyHoroscope;

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 5rem;
    margin-top: 0.2rem;

`;