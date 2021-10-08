import styled, { css } from 'styled-components';

export const Container = styled.div` 
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    form {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div {
        display: flex;
        flex-direction: column;
        margin: 10px;

        label {
            font-size: 20px;
            margin: 5px;
        }

        input {
            height: 25px;
            width: 250px;
        }
    }

    button {
        margin-top: 10px;
    }

`;
