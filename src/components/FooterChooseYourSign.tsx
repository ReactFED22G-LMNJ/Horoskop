import styled from "styled-components";
import { Button } from "./Button";

function FooterChooseYourSign() {
    return(
    <FooterContainer>
        <Button to="/">Back</Button>
    </FooterContainer>
    );
}

export default FooterChooseYourSign;


const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 5rem;
    margin-top: 1.8rem;
`;