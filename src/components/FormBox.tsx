import { useEffect } from "react";
import styled from "styled-components";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { device } from "./Breakpoints";
import { Button } from "./Button";
import ZodiacDropdown from "./ZodiacDropDown";


function FormBox() {
    const [name, setName] = useLocalStorageState('', 'name');

    useEffect(() => {
        if (name === "Hello") {
          setName("");
        }
      }, [name]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name);
  };

    return(
        <Form onSubmit={handleSubmit}>
            <EnterYourNameInput>
                <label>Enter your name</label>
                <Input type="text" value={name} onChange={handleChange} />
            </EnterYourNameInput>
            <ChooseYourSignInput>
                <label>Choose your sign</label>
                <ZodiacDropdown label="Zodiac Sign" />
            </ChooseYourSignInput>
            <BtnContainer>
                <Button to="chooseyoursign">What's my sign?</Button>
            </BtnContainer>
        </Form>
    );
}

export default FormBox;


const Form = styled.form`
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
    padding: 0.5rem;
    width: 8.9rem;
    font-size: 1rem;
    font-family: 'Tenor Sans', sans-serif;
    border: 0.05rem solid black;
    border-radius: 0.3rem;
    box-shadow: 0px 0.5px 1px 0px rgba(0,0,0,0.61);
    -webkit-box-shadow: 0px 0.5px 2px 0px rgba(0,0,0,0.61);
    -moz-box-shadow: 0px 0.5px 2px 0px rgba(0,0,0,0.61);
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

const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
`;

