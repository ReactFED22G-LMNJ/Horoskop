import styled from 'styled-components';
import Moon from '/assets/moon.png';
import Star from '/assets/star.png';

function HeaderStartPage() {
    return (
        <Wrapper>
            <ImageMoon>
                <MoonPic src={Moon} alt="moon" />
            </ImageMoon>
            <Titels>
                <Title1>Welcome to your</Title1>
                <Title2>DAILY HOROSCOPE</Title2>
            </Titels>
            <ImageStar>
                <StarPic src={Star} alt="star" />
            </ImageStar>
        </Wrapper>
    );
}

// STYLING
const Wrapper = styled.header`
    display: flex;
    justify-content: space-evenly;
`;

const ImageMoon = styled.div`
    display: flex;
    align-items: center;
`;

const ImageStar = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const MoonPic = styled.img`
    height: 50%;
`;

const StarPic = styled.img`
    height: 55%;
`;

const Titels = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title1 = styled.h1`
    font-family: 'Monsieur La Doulaise';
    font-size: 4rem;
    font-weight: 400;
    margin: 0;
`;

const Title2 = styled.h1`
    font-family: 'Tenor Sans', sans-serif;
    font-size: 3rem;
    font-weight: 300;
    margin: 0;
`;


export default HeaderStartPage;