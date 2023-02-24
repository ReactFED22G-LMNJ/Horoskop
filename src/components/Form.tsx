import styled from "styled-components";

function Form() {
    return (
        <Wrapper>
            <FormBox>
                <Forms>
                    <Form1>
                        <Label htmlFor="Enter your name">Enter your name</Label>
                        <Input type="text" />
                    </Form1>
                    <Form2>
                        <Label htmlFor="Choose your sign">Choose your sign</Label>
                        <Input type="text" />
                    </Form2>
                </Forms>
                <Button>What's my sign?</Button>
            </FormBox>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 4rem;
`;

const FormBox = styled.div`
    background-color: white;
    -webkit-box-shadow: 0 0.625rem 0.375rem -0.375rem #777;
    -moz-box-shadow: 0 0.625rem 0.375 -0.375rem #777;
    box-shadow: 0 0.625rem 0.375 -0.375rem #777;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 20%;
    width: 35%;
`;

const Button = styled.button`
    font-family: 'Tenor Sans', sans-serif;
    font-size: 1rem;
    color: white;
    background-color: black;
    padding: 0.4rem;
    border-radius: 0.5rem;
    border: none;
    margin: 1rem;
`;

const Forms = styled.div`
   background-color: pink;
   display: flex;
   justify-content: space-between;
`;

const Form1 = styled.div`
   background-color: pink;
   display: flex;
   justify-content: space-between;
`;

const Form2 = styled.div`
   background-color: pink;
   display: flex;
   justify-content: space-between;
`;

const Label = styled.label`
    font-family: 'Tenor Sans', sans-serif;
    font-weight: 300;
    font-size: 1.2rem;
    margin-right: 4rem;
    background-color: green;
`;

const Input = styled.input`
    height: 1.4rem;
    border-radius: 0.3rem;
    border: 0.1px solid black;
`;

export default Form;