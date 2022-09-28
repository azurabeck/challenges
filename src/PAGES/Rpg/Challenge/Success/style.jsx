import styled from "styled-components";
import image from '@/ASSETS/IMAGES/CH_RPG/done.gif'

export const Success = styled.section`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: 480px;
    height: 480px;
    position: relative;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: 600;
    color: #ff7b00;
    box-shadow: 5px 7px 6px #b5b5b5;
`

export const Giff = styled.div`
    display: block;
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
    background-image: url(${image});
    background-size: contain;
    background-repeat: no-repeat;
`
