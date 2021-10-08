import styled from 'styled-components';

export const Container = styled.div`
    margin: 15px;
`;

export const BoxList = styled.div`
    display: flex;

    div {
        flex-basis: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    p{
        margin: 5px;
    }

    
`;