import styled from 'styled-components';
import { device } from './Breakpoints';
import Moon from '/assets/moon.png';
import Star from '/assets/star.png';

function HeaderStartPage() {
    return (
        <Container>
            <MoonImgContainer>
                <MoonImg src={Moon} alt="moon" />
            </MoonImgContainer>
            <TitelContainer>
                <Title1>Welcome to your</Title1>
                <Title2>DAILY HOROSCOPE</Title2>
            </TitelContainer>
            <StarImgContainer>
                <StarImg src={Star} alt="star" />
            </StarImgContainer>
        </Container>
    );
}

// STYLING
const Container = styled.header`
   display: flex;
   justify-content: space-evenly;
   margin-top: 1rem;

   @media ${device.mobileXXL} {
      margin-top: 2rem;
      gap: 5%;
   }

   @media ${device.mobileM} {
      gap: 2%;
   }
`;

const MoonImgContainer = styled.div`
   display: flex;
   align-items: center;

   @media ${device.mobileXXL} {
      margin-top: 1rem;
      align-items: flex-start;
      justify-content: flex-end;
   }
`;

const StarImgContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-end;

   @media ${device.mobileXXL} {
      align-items: center;
      justify-content: flex-start;
   }

   @media ${device.mobileXXL} {
      justify-content: flex-start;
   }
`;

const MoonImg = styled.img`
   height: 50%;

   @media ${device.mobileXXL} {
      height: 40%;
   }

   @media ${device.mobileL} {
      height: 30%;
   }
`;

const StarImg = styled.img`
   height: 55%;

   @media ${device.mobileXXL} {
       height: 45%;
   }

   @media ${device.mobileL} {
       height: 35%;
   }
`;

const TitelContainer = styled.div`
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

   @media ${device.mobileXXL} {
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

   @media ${device.mobileXXL} {
      font-size: 2rem;
   }

   @media ${device.mobileL} {
      font-size: 1.8rem;
   }
`;


export default HeaderStartPage;