import styled from 'styled-components'

export const Card = styled.div`
    a {
        align-items: flex-start;
        border: 1px solid gray;
        border-radius: 10px;
        color: gray;
        display: flex;
        flex-direction: column;  
        height: 250px;  
        justify-content: flex-start;
        margin: 10px;
        padding: 10px;
        text-decoration: none;
        width: 250px;

        &:hover {
            cursor: pointer;
            background-color: aliceblue;
        }
    }
` 