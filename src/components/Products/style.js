import styled from 'styled-components';

export const ContainerList = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BoxList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    justify-content: space-around;
    
    div {
        flex-basis: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`;