import { useEffect } from "react";
import styled from "styled-components";
import { device } from "../data/Breakpoints";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { Button } from "./Button";
import ZodiacDropdown from "./ZodiacDropDown";

/**
 * Form Box
 * @returns a component that renders a form with an input field where the user's can type in their name
 * * Also renders a drop down list (separate component) and a button (separate component)
 */

function FormBox() {
    const [name, setName] = useLocalStorageState('', 'name');

    // checks if the value of name is "Hello" and sets it back to an empty string if so :-D
    useEffect(() => {
        if (name === "Hello") {
          setName("");
        }
      }, [name]);

    // updates the value of name using the setName function returned from the useLocalStorageState hook
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    };

    // prevents default form submission behavior 
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
                <Button to="chooseyoursign" hovercolor="#f3e7dc">What's my sign?</Button>
            </BtnContainer>
        </Form>
    );
}

export default FormBox;

//-------------Styling-------------//

const Form = styled.form`
    background-color:#FFFFFF;
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

