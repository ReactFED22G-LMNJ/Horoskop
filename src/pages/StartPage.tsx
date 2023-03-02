import styled from "styled-components";
import { device } from "../components/Breakpoints";
import FormBox from "../components/FormBox";
import HeaderStartPage from "../components/HeaderStartPage";
import ErrorBoundary from "../ErrorBoundry";
import BigMoon from "/assets/bigMoon.png";
import MiddleStar from "/assets/middlestar.png";
import MiniStar from "/assets/ministar.png";
import MoonStar from "/assets/moonstar.png";
import Sun from "/assets/sun.png";
import ThreeStars from "/assets/threesmallstars.png";

function StartPage() {
  return (
    <div>
      <ErrorBoundary>
        <HeaderStartPage />
      </ErrorBoundary>
      <Container>
        <LeftSmallContainer>
          <SunImgContainer>
            <SunImg src={Sun} alt="sun" />
          </SunImgContainer>

          <MiddleStarImgContainer>
            <MiddleStarImg src={MiddleStar} alt="middlestar" />
          </MiddleStarImgContainer>

          <ThreeStarsImgContainer>
            <ThreeStarsImgLeft src={ThreeStars} alt="threestars" />
          </ThreeStarsImgContainer>
        </LeftSmallContainer>

        <FormContainer>
          <ErrorBoundary>
            <FormBox />
          </ErrorBoundary>
        </FormContainer>

        <RightSmallContainer>
          <MiniStarContainer>
            <MiniStarImg src={MiniStar} alt="ministar" />
          </MiniStarContainer>

          <MoonStarContainer>
            <MoonStarImg src={MoonStar} alt="moonstar" />
          </MoonStarContainer>

          <BigMoonAndThreeStarsImgContainer>
            <ThreeStarsImgRight src={ThreeStars} alt="threestars" />
            <BigMoonImg src={BigMoon} alt="bigmoon" />
          </BigMoonAndThreeStarsImgContainer>
        </RightSmallContainer>
      </Container>
    </div>
  );
}

// STYLING
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  @media ${device.mobileXXL} {
    margin-top: 1.5rem;
  }
`;

// EVERYTHING IN LEFT COINTAINER
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

  @media ${device.mobileXL} {
    display: none;
  }
`;

const SunImgContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.mobileXXL} {
    justify-content: flex-end;
    padding-right: 10%;
  }
`;

const SunImg = styled.img`
  width: 45%;

  @media ${device.tabletXL} {
    width: 70%;
  }
`;

const MiddleStarImgContainer = styled.div`
  display: flex;
  align-items: flex-start;

  @media ${device.tabletXL} {
    justify-content: center;
  }
`;

const MiddleStarImg = styled.img`
  width: 20%;

  @media ${device.tabletXL} {
    width: 30%;
  }

  @media ${device.mobileXXL} {
    width: 25%;
  }
`;

const ThreeStarsImgContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.mobileXXL} {
    justify-content: flex-end;
    padding-right: 10%;
  }
`;

const ThreeStarsImgLeft = styled.img`
  width: 40%;
`;

// EVERYTHING IN FORMCONTAINER
const FormContainer = styled.div`
  display: flex;
  align-items: center;
`;

// EVERYTHING IN RIGHT COINTAINER
const RightSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.tabletXL} {
    justify-content: space-evenly;
  }

  @media ${device.mobileXL} {
    display: none;
  }
`;

const MiniStarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MiniStarImg = styled.img`
  width: 15%;
  padding-right: 3rem;

  @media ${device.tabletXL} {
    width: 20%;
  }

  @media ${device.mobileXXL} {
    width: 30%;
  }
`;

const MoonStarContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.tabletXL} {
    padding-left: 10%;
    justify-content: flex-start;
  }
`;

const MoonStarImg = styled.img`
  width: 30%;
  padding-right: 8%;

  @media ${device.tabletXL} {
    width: 40%;
  }

  @media ${device.mobileXXL} {
    width: 50%;
  }
`;

const BigMoonAndThreeStarsImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${device.mobileXXL} {
    justify-content: flex-start;
    padding-left: 12%;
  }
`;

const BigMoonImg = styled.img`
  width: 40%;

  @media ${device.mobileXXL} {
    width: 55%;
  }

  @media ${device.mobileXL} {
    display: none;
  }
`;

const ThreeStarsImgRight = styled.img`
  width: 30%;
  height: 60%;

  @media ${device.mobileXXL} {
    height: 45%;
  }
`;

export default StartPage;
