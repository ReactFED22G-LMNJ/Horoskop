import { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { device } from "../data/Breakpoints";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import ZodiacDropdown from "./ZodiacDropDown";
import MoonStar from '/assets/moonstar.png';
import Stars from '/assets/treStars.png';

/**
 * Header Daily Horoscope
 * @returns a header component that displays the name of the user and the name of the chosen sign with "horoscope"
 */

function HeaderDailyHoroscope() {
  const { sign } = useParams<{ sign: string}>(); // extracts the sign parameter from the URL path
  const [storedName, setStoredName] = useLocalStorageState("", "name"); // displays the stored name from to Local Storage

  // if stored name is an empty string "Hello" will be displayed instead
  useEffect(() => {
    if (storedName === "") {
      setStoredName("Hello");
    }
  }, [storedName]);

    return (
        <Container>

            <TitelsContainer>
                <Title1>{storedName}, here is your</Title1> 
                <Title2>{sign?.toUpperCase()} HOROSCOPE</Title2>
            </TitelsContainer>

            <DropDownAndStarsImgContainer>

                <StarsImg src={Stars} alt="stars" />
                
                <DropDownContainer>
                    <ZodiacDropdown label="Change sign" />
                </DropDownContainer>

            </DropDownAndStarsImgContainer>

            <MoonStarContainer>
                <MoonStarImg src={MoonStar} alt="moonstar" />
            </MoonStarContainer>

        </Container>
    );
}
export default HeaderDailyHoroscope;


//-------------Styling-------------//

const Container = styled.header`
    display: flex;
    justify-content: center;
    padding-top: 1.4rem;
    padding-bottom: 1rem;
    flex-wrap: wrap;
    -webkit-box-shadow: 0 0.625rem 0.375rem -0.375rem rgba(0,0,0,0.37);
    -moz-box-shadow: 0 0.625rem 0.375 -0.375rem rgba(0,0,0,0.37);
    box-shadow: 0 0.625rem 0.375 -0.375rem rgba(0,0,0,0.37);

    @media ${device.mobileXL} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-left: 1rem;
      padding-right: 1rem;
    }  
`;

const DropDownAndStarsImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 9rem;
    align-items: flex-end;
    justify-content: space-between;

    @media ${device.laptop} {
      height: 8.7rem;
    }

    @media ${device.tabletXXL} {
      height: 7.8rem;
    } 

    @media ${device.tabletXL} {
      height: 7.3rem;
    } 

    @media ${device.tablet} {
      height: 6rem;
    } 

    @media ${device.mobileXXL} {
      align-items: center;
      flex-direction: row-reverse;
      justify-content: center;
      gap: 1rem;
    }  
`;

const DropDownContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media ${device.mobileXXL} {
      justify-content: center;
      width: fit-content;
    } 
`;

const StarsImg = styled.img`
    width: 60%;

  @media ${device.tabletXXL} {
    width: 45%;
  }    

  @media ${device.tablet} {
    width: 35%;
  }

  @media ${device.mobileXXL} {
    width: 20%;
  } 
`;

const MoonStarContainer = styled.div`
  display: flex;
  width: 15%;

  @media ${device.tabletXXL} {
    display: none;
  }
`;

const MoonStarImg = styled.img`
    width: 70%;

    @media ${device.laptopL} {
      width: 90%;
    }   

    @media ${device.laptop} {
      width: 100%;
    }
`;

const TitelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

    @media ${device.mobileXL} {
      align-items: center;
    }
`;

const Title1 = styled.h1`
  font-family: "Monsieur La Doulaise";
  font-size: 4rem;
  font-weight: 400;
  margin: 0;

  @media ${device.tabletXXL} {
    font-size: 3.5rem;
  }

  @media ${device.tabletXL} {
    font-size: 3.2rem;
  } 

  @media ${device.tablet} {
    font-size: 3rem;
  }

  @media ${device.tablet} {
    font-size: 2.5rem;
  }

  @media ${device.mobileXL} {
    font-size: 2.8rem;
  }
`;

const Title2 = styled.h1`
    font-family: 'Tenor Sans', sans-serif;
    padding-left: 4rem;
    font-size: 2.6rem;
    font-weight: 300;
    margin: 0;

    @media ${device.laptop} {
      font-size: 2.3rem;
    } 

    @media ${device.tabletXXL} {
      font-size: 2rem;
    }  

    @media ${device.tablet} {
      font-size: 1.6rem;
      padding-left: 0rem;
    }  

    @media ${device.mobileXL} {
      font-size: 2.1rem;
      text-align: center; 
    }  

    @media ${device.mobileL} {
      font-size: 1.9rem;
    }  
`;
