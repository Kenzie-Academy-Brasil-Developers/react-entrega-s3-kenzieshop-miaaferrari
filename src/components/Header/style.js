import styled from 'styled-components';

export const Container = styled.header`
    font-family: 'Oswald', sans-serif;
    display: flex;
    justify-content: space-between;
    text-shadow: 1px 3px 5px rgba(200,200,200,0.98);

    div {
        margin: 15px;
        display: flex;
        justify-content: center;
        align-items: center;

        h3 {
            margin: 0;
            font-size: 40px;
            
        }

        button {
            margin-right: 10px;
        }
    }
`;