import styled from "styled-components";

export const DivExtern = styled.div`
display: flex;
flex-direction: column;
min-width: 50vw;
height: 100%;
align-items: center;
background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);

@media (max-width: 768px) {
    width: 100vw;
}
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    padding-bottom: 10vh;
    
    align-items: flex-start;
    justify-content: space-evenly;
    min-width: 300px;

    @media (max-width: 768px) {
        margin-top: 10vh;
        height: 85vh;
        padding-bottom: 5vh;
    }
    
    
`;

export const Text = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    color: #E0E0E0;
`;

export const DivIntern = styled.div`
    display: flex;
    height: 300px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`;

export const TitleForm = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    color: #E0E0E0;
`;

export const InvalidTextContainer = styled.div`
    height: 20px;
    color: #E9B425;
    align-self: center;
    `;
export const InvalidText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
`;