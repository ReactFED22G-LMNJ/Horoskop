import styled from "styled-components";
import BigMoon from '/assets/bigMoon.png';
import MiniStar from '/assets/ministar.png';
import MoonStar from '/assets/moonstar.png';
import Sun from '/assets/sun.png';
import ThreeStars from '/assets/threesmallstars.png';
import MiddleStar from '/assets/middlestar.png';

function FormBox() {
    return(
        <Container>
            <LeftSmallContainer >
                <ImageSun>
                    <SunPic src={Sun} alt="sun" />
                </ImageSun>

                <ImageMiddleStar>
                    <MiddleStarPic src={MiddleStar} alt="middlestar" />
                    
                </ImageMiddleStar>

                <ImageThreeStarsLeft>
                    <ThreeStarsPicLeft src={ThreeStars} alt="threestars" />
                </ImageThreeStarsLeft>

            </LeftSmallContainer >

            <FormContainer>
                <Form>
                    <EnterYourNameInput>
                        <label>Enter your name</label>
                        <Input type="text" />
                    </EnterYourNameInput>
                    <ChooseYourSignInput>
                        <label>Choose your sign</label>
                        <Input type="text" />
                    </ChooseYourSignInput>
                    <ButtonDiv>
                        <Btn>What's my sign?</Btn>
                    </ButtonDiv>
                </Form>
            </FormContainer>

            <RightSmallContainer>
                <ImageMiniStar>
                    <MiniStarPic src={MiniStar} alt="ministar" />
                </ImageMiniStar>

                <ImageMoonStar>
                    <MoonStarPic src={MoonStar} alt="moonstar" />
                </ImageMoonStar>

                <ImageBigMoonAndThreeStars>
                    <ThreeStarsPic src={ThreeStars} alt="threestars" />
                    <BigMoonPic src={BigMoon} alt="bigmoon" />
                </ImageBigMoonAndThreeStars>
            </RightSmallContainer>
        </Container>
    );
}

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    mobileXL: '524px',
    mobileXXL: '592px',
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
    mobileXXL: `(max-width: ${size.mobileXXL})`,
    tablet: `(max-width: ${size.tablet})`,
    tabletXL: `(max-width: ${size.tabletXL})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;

    @media ${device.mobileXXL} {
        margin-top: 1.5rem;
    }
`;

const LeftSmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 34%;

    @media ${device.tabletXL} {
        width: 52%;
    }

    @media ${device.mobileXXL} {
        width: 75%;
    }

    @media ${device.mobileL} {
        display: none;
    }
`;

const ImageSun = styled.div`
    display: flex;
    justify-content: center;

    @media ${device.mobileXXL} {
       justify-content: flex-end;
       padding-right: 10%;
    }
`;

const SunPic = styled.img`
    width: 45%;

    @media ${device.tabletXL} {
        width: 70%;
    }

    @media ${device.mobileXL} {
        width: 50%;
    }
`;

const ImageMiddleStar = styled.div`
    display: flex;
    align-items: flex-start;

    @media ${device.tabletXL} {
        justify-content: center;
    }
`;

const MiddleStarPic = styled.img`
    width: 20%;

    @media ${device.tabletXL} {
        width: 30%;
    }

    @media ${device.mobileXXL} {
        width: 25%;
    }
`;

const ImageThreeStarsLeft = styled.div`
    display: flex;
    justify-content: center;

    @media ${device.mobileXXL} {
       justify-content: flex-end;
       padding-right: 10%;
    }
`;

const ThreeStarsPicLeft = styled.img`
    width: 40%;
`;

const RightSmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${device.tabletXL} {
        justify-content: space-evenly;
    }

    @media ${device.mobileL} {
        display: none;
    }
`;

const ImageMiniStar = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const MiniStarPic = styled.img`
    width: 15%;
    padding-right: 3rem;

    @media ${device.tabletXL} {
        width: 20%;
    }

    @media ${device.mobileXXL} {
        width: 30%;
    }

    @media ${device.mobileXXL} {
        width: 40%;
    }
`;

const ImageMoonStar = styled.div`
    display: flex;
    justify-content: center;

    @media ${device.tabletXL} {
        padding-left: 10%;
    }

    @media ${device.tabletXL} {
        padding-left: 0%;
        justify-content: flex-start;
    }
`;

const MoonStarPic = styled.img`
    width: 30%;
    padding-right: 8%;

    @media ${device.tabletXL} {
        width: 40%;
    }

    @media ${device.mobileXXL} {
        width: 50%;
    }
`;  

const ImageBigMoonAndThreeStars = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media ${device.mobileXXL} {
        justify-content: flex-start;
        padding-left: 12%;
    }
`;

const BigMoonPic = styled.img`
    width: 40%;

    @media ${device.mobileXXL} {
        width: 55%;
    }

    @media ${device.mobileXL} {
        display: none;
    }
`;  

const ThreeStarsPic = styled.img`
    width: 30%;
    height: 60%;

    @media ${device.mobileXXL} {
        height: 45%;
    }

    @media ${device.mobileXL} {
        height: 100%;
    }
`;  

const FormContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Form = styled.div`
    background-color: white;
    font-family: 'Tenor Sans', sans-serif;
    box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.37);
    -webkit-box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.37);
    -moz-box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.37);
    font-size: 1.4rem;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    padding: 4.5rem;
    gap: 2rem;

    @media ${device.tabletXL} {
        padding-right: 2rem;
        padding-left: 2rem;
    }

    @media ${device.mobileXXL} {
        font-size: 1.2rem;
        padding: 3rem;
        padding-right: 1rem;
        padding-left: 1rem;
    }
`;

const Input = styled.input`
    padding: 0.3rem;
    font-family: 'Tenor Sans', sans-serif;
    border: 0.05rem solid grey;
    border-radius: 0.3rem;
    box-shadow: 0px 0.5px 1px 0px rgba(0,0,0,0.61);
    -webkit-box-shadow: 0px 0.5px 2px 0px rgba(0,0,0,0.61);
    -moz-box-shadow: 0px 0.5px 2px 0px rgba(0,0,0,0.61);

    @media ${device.tabletXL} {
        padding: 0.4rem;
    }
`;

const EnterYourNameInput = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 23rem;

    @media ${device.tabletXL} {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      min-width: 15rem;
    }
`;

const ChooseYourSignInput = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${device.tabletXL} {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const Btn = styled.button`
    color: white;
    background-color: black;
    font-family: 'Tenor Sans', sans-serif;
    font-size: 1.1rem;
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem;
    padding-right: 0.7rem;
    padding-left: 0.7rem;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.61);
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.61);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.61);
    cursor: pointer;

    @media ${device.mobileXXL} {
        font-size: 1rem;
    }
`;


export default FormBox;