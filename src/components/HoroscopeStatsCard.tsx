import styled from "styled-components";

interface Props {
    image: string;
    color: string;
    name: string;
}

function HoroscopeStatCards({ image, color, name }: Props) {

    return(
        <StatCardContainer> 
            <SignHeader color={color}>
                <Img src={image} alt={name}/>
            </SignHeader>
            <StatsContainer>
                <p>Mood: </p>
                <p>Compatible with: </p>
                <p>Color: </p>
                <p>Lucky Number: </p>
            </StatsContainer>
        </StatCardContainer>
    );
} 

{/* <p>Mood: {astrologyData?.mood}</p>
<p>Compatible with: {astrologyData?.compatibility}</p>
<p>Color: {astrologyData?.color}</p>
<p>Lucky Number: {astrologyData?.lucky_number}</p> */}

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
`;


export default HoroscopeStatCards;