import styled from "styled-components";
import ZodiacDropdown from "./DropDown";
import MoonStar from '/assets/moonstar.png';
import Stars from '/assets/treStars.png';

function HeaderDailyHoroscope() {
    return (
        <Container>
            <TitelsContainer>
                <Title1>Hello, here's your</Title1> 
                <Title2>LIBRA HOROSCOPE</Title2>
            </TitelsContainer>
            <DropDownAndStarsImgContainer>
                <StarsImg src={Stars} alt="stars" />
                <DropDownContainer>
                    <ZodiacDropdown />
                </DropDownContainer>
            </DropDownAndStarsImgContainer>
            <MoonStarContainer>
                <MoonStarImg src={MoonStar} alt="moonstar" />
            </MoonStarContainer>
        </Container>
    );
}

// STYLING
const Container = styled.header`
    display: flex;
    justify-content: center;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
    margin-bottom: 1.8rem;
`;

const DropDownAndStarsImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 2.5rem;
`;

const DropDownContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const StarsImg = styled.img`
    width: 60%;
`;

const MoonStarContainer = styled.div`
    display: flex;
    width: 15%;
`;

const MoonStarImg = styled.img`
    width: 90%;
`;

const TitelsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Title1 = styled.h1`
    font-family: 'Monsieur La Doulaise';
    font-size: 4rem;
    font-weight: 400;
    margin: 0;
`;

const Title2 = styled.h1`
    font-family: 'Tenor Sans', sans-serif;
    padding-left: 4rem;
    font-size: 3rem;
    font-weight: 300;
    margin: 0;
`;

export default HeaderDailyHoroscope;