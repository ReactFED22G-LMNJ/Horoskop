import styled from "styled-components";
import { Button } from "./Button";

interface Props {
    children?: React.ReactNode;
}

function FooterDailyHoroscope({children}: Props) {
    return(
    <FooterContainer>
        <Button to="/">Back</Button>
        {children}
    </FooterContainer>
    );
}

export default FooterDailyHoroscope;


//-------------Styling-------------//

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 5rem;
    margin-top: 0.2rem;

`;