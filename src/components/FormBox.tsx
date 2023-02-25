import styled from "styled-components";

function FormBox() {
    return(
        <Container>
            <LeftSmallContainer>
                <h1>här är en liten låda</h1>
            </LeftSmallContainer>

            <FormContainer>
                <h1>Här ska form vara</h1>
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
    background-color: white;
`;



export default FormBox;