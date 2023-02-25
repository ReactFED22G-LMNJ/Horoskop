import styled from "styled-components";

function FormBox() {
    return(
        <Container>
            <LeftSmallContainer>
                <h1>här är en liten låda</h1>
            </LeftSmallContainer>

            <FormContainer>
                <Form>
                    <h1>Enter your name</h1>
                    <h1>Choose your sign</h1>
                    <button>What's my sign?</button>
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
    padding: 3rem;
`;



export default FormBox;