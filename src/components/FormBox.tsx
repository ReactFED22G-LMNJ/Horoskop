import styled from "styled-components";

function FormBox() {
    return(
        <Container>
            <LeftSmallContainer>
                <h1>här är en liten låda</h1>
            </LeftSmallContainer>

            <FormContainer>
                <Form>
                    <EnterYourNameInput>
                        <label>Enter your name</label>
                        <input type="text" />
                    </EnterYourNameInput>
                    <ChooseYourSignInput>
                        <label>Choose your sign</label>
                        <input type="text" />
                    </ChooseYourSignInput>
                    <ButtonDiv>
                        <button>What's my sign?</button>
                    </ButtonDiv>
                </Form>
            </FormContainer>

            <RightSmallContainer>
            <h1>här är en liten låda</h1>
            </RightSmallContainer>
        </Container>
        
    )
    
}

const Container = styled.div`
    background-color: lightcoral;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`;

const LeftSmallContainer = styled.div`
    background-color: lightblue;
`;

const RightSmallContainer = styled.div`
    background-color: lightpink;
`;

const FormContainer = styled.div`
    background-color: lightgreen;
    padding: 2rem;
`;

const Form = styled.div`
    background-color: white;
    font-family: 'Tenor Sans', sans-serif;
    display: flex;
    flex-direction: column;
    padding: 3rem;
    gap: 2rem;
`;

const EnterYourNameInput = styled.div`
    background-color: firebrick;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`;

const ChooseYourSignInput = styled.div`
    background-color: yellow;
    display: flex;
    justify-content: space-between;
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;


export default FormBox;