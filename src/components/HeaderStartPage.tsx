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

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    mobileXL: '524px',
    mobileXtraXL: '592px',
    tablet: '768px',
    tabletXL: '809px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    mobileXL: `(max-width: ${size.mobileXL})`,
    mobileXtraXL: `(max-width: ${size.mobileXtraXL})`,
    tablet: `(max-width: ${size.tablet})`,
    tabletXL: `(max-width: ${size.tabletXL})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};

// STYLING
const Wrapper = styled.header`
    display: flex;
    justify-content: space-evenly;

    @media ${device.mobileXtraXL} {
       margin-top: 2rem;
       gap: 5%;
    }

    @media ${device.mobileM} {
       gap: 2%;
    }
`;

const ImageMoon = styled.div`
    display: flex;
    align-items: center;

    @media ${device.mobileXtraXL} {
       margin-top: 1rem;
       align-items: flex-start;
       justify-content: flex-end;
    }
`;

const ImageStar = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media ${device.mobileXtraXL} {
       align-items: center;
       justify-content: flex-start;
    }

    @media ${device.mobileXtraXL} {
       justify-content: flex-start;
    }
`;

const MoonPic = styled.img`
    height: 50%;

    @media ${device.mobileXtraXL} {
       height: 40%;
    }

    @media ${device.mobileL} {
       height: 30%;
    }
`;

const StarPic = styled.img`
    height: 55%;

    @media ${device.mobileXtraXL} {
       height: 45%;
    }

    @media ${device.mobileL} {
       height: 35%;
    }
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

    @media ${device.tablet} {
       font-size: 3.6rem;
    }

    @media ${device.mobileXtraXL} {
       font-size: 2.8rem;
    }

    @media ${device.mobileXL} {
       font-size: 2.6rem;
    }

    @media ${device.mobileL} {
       font-size: 2.4rem;
    }
`;

const Title2 = styled.h1`
    font-family: 'Tenor Sans', sans-serif;
    font-size: 3rem;
    font-weight: 300;
    margin: 0;

    @media ${device.tabletXL} {
       font-size: 2.5rem;
    }

    @media ${device.tablet} {
       font-size: 2.3rem;
    }

    @media ${device.mobileXtraXL} {
       font-size: 2rem;
    }

    @media ${device.mobileL} {
       font-size: 1.8rem;
    }
`;


export default HeaderStartPage;