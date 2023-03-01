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

export default HoroscopeStatCards;

interface Props {
    color: string;
}

const StatCardContainer = styled.div`
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: -1px 6px 5px -4px rgba(0,0,0,0.75);
    -webkit-box-shadow: -1px 6px 5px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 6px 5px -4px rgba(0,0,0,0.75);
`;

const Img = styled.img`
    width: 4rem;
`;

const SignHeader = styled.header`
    background: ${props => props.color};
    padding: 1rem;
    display: flex;
    justify-content: center;
    border-radius: 0.5rem 0.5rem 0 0;
`;

const StatsContainer = styled.div`
    padding: 1rem;
    width: 14rem;
    display: flex;
    flex-direction: column;
`;

