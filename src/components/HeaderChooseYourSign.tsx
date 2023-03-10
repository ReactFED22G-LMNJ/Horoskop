import { useEffect } from "react";
import styled from "styled-components";
import { device } from "../data/Breakpoints";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import Stars from "/assets/stars.png";

function HeaderChooseYourSign() {
  const [storedName, setStoredName] = useLocalStorageState("", "name");

  // Checks if the value of name is ampty and sets it to "Hello" if so :-D
  useEffect(() => {
    if (storedName === "") {
      setStoredName("Hello");
    }
  }, [storedName]);

  return (
    <Container>
      <TitelsContainer>
        <TitelTop>
          <Title1>{storedName}, choose your</Title1>
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

export default HeaderChooseYourSign;

//-------------Styling-------------//

const Container = styled.header`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  -webkit-box-shadow: 0 0.625rem 0.375rem -0.375rem rgba(0,0,0,0.37);
  -moz-box-shadow: 0 0.625rem 0.375 -0.375rem rgba(0,0,0,0.37);
  box-shadow: 0 0.625rem 0.375 -0.375rem rgba(0,0,0,0.37);
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
  margin-bottom: 1.8rem;

  @media ${device.mobileM} {
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
  }
`;

const StarImgContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.mobileXL} {
    padding-left: 1rem;
  }
`;

const StarsImg = styled.img`
  height: 8rem;

  @media ${device.tabletXXL} {
    height: 7rem;
  }

  @media ${device.tablet} {
    height: 6rem;
  }

  @media ${device.mobileXL} {
    height: 5rem;
  }

  @media ${device.mobileM} {
    height: 4rem;
  }
`;

const TitelsContainer = styled.div`
  display: flex;

  @media ${device.laptop} {
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

  @media ${device.mobileM} {
    justify-content: center;
    align-items: center;
  }
`;

const TitelBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media ${device.mobileM} {
    justify-content: center;
    align-items: center;
  }
`;

const Title1 = styled.h1`
  font-family: "Monsieur La Doulaise";
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
    text-align: center;
    font-size: 2.6rem;
  }

  @media ${device.mobileL} {
    font-size: 2.3rem;
  }
`;

const Title2 = styled.h2`
  font-family: "Tenor Sans", sans-serif;
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
