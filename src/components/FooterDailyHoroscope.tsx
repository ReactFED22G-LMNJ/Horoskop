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
    -webkit-box-shadow: 0.063rem -0.125rem 0.313rem 0 rgba(0,0,0,0.37);
    -moz-box-shadow: 0.063rem -0.125rem 0.313rem 0 rgba(0,0,0,0.37);
    box-shadow: 0.063rem -0.125rem 0.313rem 0 rgba(0,0,0,0.37);
    height: 5rem;
    margin-top: 1.8rem;

`;