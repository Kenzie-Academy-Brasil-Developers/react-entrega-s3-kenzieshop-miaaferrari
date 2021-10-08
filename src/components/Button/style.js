import styled from "styled-components";

export const Container = styled.button`
    border-radius: 8px;
    border: 2px outlined #0c0d0d;
    transition: 0.5s;
    width: 100px;
    height: 25px;
    cursor: pointer;
    
    svg {
        margin-right: 5px;
    }

    :hover {
        box-shadow: 1px 3px 5px rgba(151,93,145,0.98);
    }

`;