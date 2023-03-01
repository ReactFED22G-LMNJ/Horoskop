import styled from "styled-components";

interface Props {
    image: string;
    color: string;
    name: string;
    children: React.ReactNode;
}

function HoroscopeStatCards({ image, color, name, children }: Props) {

    return(
        <StatCardContainer> 
            <SignHeader color={color}>
                <Img src={image} alt={name}/>
            </SignHeader>
            <StatsContainer>
                {children}
            </StatsContainer>
        </StatCardContainer>
    );
} 

interface Props {
    color: string;
}

const StatCardContainer = styled.div`
    background-color: white;
`;

const SignHeader = styled.header`
    background: ${props => props.color};
    padding: 1rem;
    display: flex;
    justify-content: center;
`;

const StatsContainer = styled.div`
/* background-color: pink; */
    padding: 1.5rem;
`;

const Img = styled.img`
    padding: 1.5rem;
    width: 4rem;
`;


export default HoroscopeStatCards;