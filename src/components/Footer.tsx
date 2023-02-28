import styled from "styled-components";

function Footer() {
    return(
    <ZodiacFooter/>
    );
}

export default Footer;


const ZodiacFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0.063rem -0.125rem 0.313rem 0 rgba(0,0,0,0.37);
    -moz-box-shadow: 0.063rem -0.125rem 0.313rem 0 rgba(0,0,0,0.37);
    box-shadow: 0.063rem -0.125rem 0.313rem 0 rgba(0,0,0,0.37);
    height: 4rem;
    margin-top: 1.8rem;

`;