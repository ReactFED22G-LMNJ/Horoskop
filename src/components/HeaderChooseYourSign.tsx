import styled from 'styled-components';
import { device } from './Breakpoints';
import Stars from '/assets/stars.png';

interface Props {
    name: string;
}  

function HeaderChooseYourSign({ name }: Props) {
    return (
        <Container>
            <EmptyDiv/>
            <TitelsContainer>
                <TitelTop>
                    <Title1>{name}, choose your</Title1>
                </TitelTop>
                <TitelBottom>
                    <Title2>ZODIAC SIGN</Title2>
                </TitelBottom>
            </TitelsContainer>
            <StarImgContainer>
                <StarsImg src={Stars} alt="stars" />
            </StarImgContainer>
        </Container>
    );
}

// STYLING
const Container = styled.header`
    display: flex;
    justify-content: center;
    height: 8rem;
    -webkit-box-shadow: 0 0.625rem 0.375rem -0.375rem rgba(0,0,0,0.37);
    -moz-box-shadow: 0 0.625rem 0.375 -0.375rem rgba(0,0,0,0.37);
    box-shadow: 0 0.625rem 0.375 -0.375rem rgba(0,0,0,0.37);
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
    margin-bottom: 1.8rem;

    @media ${device.mobileXL} {
        padding-bottom: 0;
    }
`;

const StarImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media ${device.mobileXL} {
        align-items: center;
        margin-left: 1rem;
    }
`;

const StarsImg = styled.img`
    height: 100%;

    @media ${device.tabletXXL} {
        height: 80%;
    }

    @media ${device.tablet} {
        height: 70%;
    } 

    @media ${device.mobileXL} {
        height: 60%;
    }

    @media ${device.mobileM} {
        height: 45%;
    }
`;

const EmptyDiv = styled.div`
    width: 4rem;

    @media ${device.mobileL} {
        width: 2rem;
    }
`;

const TitelsContainer = styled.div`
    display: flex;

    @media ${device.tablet} {
        flex-direction: column;
    }

    @media ${device.mobileM} {
        padding-top: 0.8rem;
    }
`;

const TitelTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const TitelBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media ${device.tablet} {
        padding-left: 5rem;
    }

    @media ${device.mobileXL} {
        padding-left: 1rem;
    }
`;

const Title1 = styled.h1`
    font-family: 'Monsieur La Doulaise';
    font-size: 4rem;
    font-weight: 400;
    margin: 0;

    @media ${device.tabletXXL} {
        font-size: 3.4rem;
    }

    @media ${device.tabletXL} {
        font-size: 3.1rem;
    }

    @media ${device.tablet} {
        font-size: 2.9rem;
    }

    @media ${device.mobileXL} {
        font-size: 2.6rem;
    }

    @media ${device.mobileL} {
        font-size: 2.3rem;
    }
`;

const Title2 = styled.h1`
    font-family: 'Tenor Sans', sans-serif;
    font-size: 3rem;
    font-weight: 300;
    margin: 0;

    @media ${device.tabletXXL} {
        font-size: 2.5rem;
    }

    @media ${device.tabletXL} {
        font-size: 2.4rem;
    }

    @media ${device.tablet} {
        font-size: 2.3rem;
    }

    @media ${device.mobileXXL} {
        font-size: 2.1rem;
    }

    @media ${device.mobileXL} {
        font-size: 1.9rem;
    }

    @media ${device.mobileL} {
        font-size: 1.7rem;
    }
`;


export default HeaderChooseYourSign;