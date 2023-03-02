import { useParams } from "react-router";
import styled from "styled-components";
import { device } from './Breakpoints';
import ZodiacDropdown from "./ZodiacDropDown";
import MoonStar from '/assets/moonstar.png';
import Stars from '/assets/treStars.png';

function HeaderDailyHoroscope() {
  const { sign } = useParams<{ sign: string}>();

  //throw new Error('Ops....');

    return (
        <Container>
            <TitelsContainer>
                <Title1>Hello, here is your</Title1> 
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

// STYLING
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
    height: 10rem;
    align-items: flex-end;
    justify-content: space-between;

    @media ${device.laptop} {
      height: 9rem;
    } 

    @media ${device.tabletXXL} {
      height: 7.7rem;
    } 

    @media ${device.tablet} {
      height: 6.5rem;
    } 

    @media ${device.mobileXXL} {
      align-items: center;
      gap: 1rem;
      flex-direction: row-reverse;
      justify-content: center;
    }  
`;

const DropDownContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;

    @media ${device.laptopL} {
      padding-bottom: 2rem;
    }
    
    @media ${device.laptop} {
      padding-bottom: 0.6rem;
    }
    
    @media ${device.mobileXXL} {
      justify-content: center;
      width: fit-content;
      padding-left: 5rem;
    } 
`;

const StarsImg = styled.img`
    width: 60%;

    @media ${device.laptopL} {
      padding-bottom: 1.1rem;
    }

    @media ${device.laptop} {
      padding-bottom: 0.9rem;
    } 

    @media ${device.tabletXXL} {
      padding-bottom: 1.2rem;
      width: 45%;
    }    

    @media ${device.tabletXL} {
      padding-bottom: 0.7rem;
    }    

    @media ${device.tablet} {
      width: 35%;
      padding-bottom: 0;
    }  

    @media ${device.mobileXXL} {
      width: 20%;
      padding-top: 0.8rem;
      padding-bottom: 0.7rem;
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
    font-family: 'Monsieur La Doulaise';
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

export default HeaderDailyHoroscope;