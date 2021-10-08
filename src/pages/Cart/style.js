import styled from 'styled-components';

export const ContainerCart = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    height: 100vh;

    div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: left;

        div {
            display: flex;
            flex-direction: column;
            
            div {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                padding: 0 10px;
                margin: 5px;
                
                img {
                    width: 60px;
                    height: 90px;
                }

                p{
                    font-size: 20px;
                }
            }
        }
    }
`;