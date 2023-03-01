import styled from "styled-components";
import { ZodiacSigns } from "../data/ZodiacSignsData";

interface Props {
    sign: string;
}

function HoroscopeStatCards({ sign }: Props) {

    return(
        <StatCardContainer> 
            <SignHeader color={color}>
                <Img src={image}/>
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

const StatCardContainer = styled.div`
    background-color: white;
`;

const SignHeader = styled.header`
    padding: 1rem;
    display: flex;
    justify-content: center;
`;

const StatsContainer = styled.div`
    padding: 1.5rem;
`;

const Img = styled.img`
    padding: 1.5rem;
`;


export default HoroscopeStatCards;