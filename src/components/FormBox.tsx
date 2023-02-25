import styled from "styled-components";
import Sun from '/assets/sun.png';
import Circle from '/assets/circle-pattern.png';
import MiniStar from '/assets/ministar.png';
import MoonStar from '/assets/moonstar.png';
import BigMoon from '/assets/bigMoon.png';
import ThreeStars from '/assets/threesmallstars.png';

function FormBox() {
    return(
        <Container>
            <LeftSmallContainer>
                <ImageSun>
                    <SunPic src={Sun} alt="sun" />
                </ImageSun>

                <ImageCircle>
                    <CirclePic src={Circle} alt="circle" />
                </ImageCircle>
            </LeftSmallContainer>

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
        
    )
    
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`;

const LeftSmallContainer = styled.div`

`;

const ImageSun = styled.div`
    display: flex;
    justify-content: center;
`;

const ImageCircle = styled.div`
    display: flex;
    align-items: flex-start;
`;

const SunPic = styled.img`
    width: 45%;
`;

const CirclePic = styled.img`
    padding-top: 2rem;
    width: 80%;
`;

const RightSmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ImageMiniStar = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const MiniStarPic = styled.img`
    width: 20%;
    padding-right: 3rem;
`;

const ImageMoonStar = styled.div`
    display: flex;
    justify-content: center;
`;

const MoonStarPic = styled.img`
    width: 30%;
    padding-right: 8rem;
`;  

const ImageBigMoonAndThreeStars = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BigMoonPic = styled.img`
    width: 40%;
`;  

const ThreeStarsPic = styled.img`
    width: 30%;
    height: 60%;
`;  

const FormContainer = styled.div`
    padding: 2rem;
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
`;

const Input = styled.input`
    padding: 0.3rem;
    font-family: 'Tenor Sans', sans-serif;
    border: 0.05rem solid grey;
    border-radius: 0.3rem;
    box-shadow: 0px 0.5px 1px 0px rgba(0,0,0,0.61);
    -webkit-box-shadow: 0px 0.5px 2px 0px rgba(0,0,0,0.61);
    -moz-box-shadow: 0px 0.5px 2px 0px rgba(0,0,0,0.61);
`;

const EnterYourNameInput = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 23rem;
`;

const ChooseYourSignInput = styled.div`
    display: flex;
    justify-content: space-between;
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
`;


export default FormBox;