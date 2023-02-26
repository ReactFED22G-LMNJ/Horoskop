import styled from 'styled-components';
import Stars from '/assets/stars.png';


function HeaderChooseYourSign() {
    return (
        <Wrapper>
            <EmptyDiv/>
            <TitelTop>
                <Title1>Hello, choose your</Title1>
            </TitelTop>
            <TitelBottom>
                <Title2>ZODIAC SIGN</Title2>
            </TitelBottom>
            <ImageStars>
                <StarPics src={Stars} alt="stars" />
            </ImageStars>
        </Wrapper>
    );
}

// STYLING
const Wrapper = styled.header`
    display: flex;
    justify-content: center;
    height: 8rem;
    -webkit-box-shadow: 0 0.625rem 0.375rem -0.375rem #777;
    -moz-box-shadow: 0 0.625rem 0.375 -0.375rem #777;
    box-shadow: 0 0.625rem 0.375 -0.375rem #777;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
    margin-bottom: 1.8rem;
`;

const ImageStars = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const StarPics = styled.img`
    height: 100%;
`;

const EmptyDiv = styled.div`
    width: 10rem;
    border: 0.01rem solid;
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


export default HeaderChooseYourSign;