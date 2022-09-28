import styled from "styled-components";
import image from '@/ASSETS/IMAGES/CH_RPG/char.png'

export const Character = styled.section`
    display: block;
    width: ${(props) => props.size + 'px'};
    height: ${(props) => props.size + 'px'};
    background-image: url(${image});
    background-position: top left;
    background-position-y: ${(props) => props.charPosition + 'px'};
    position: absolute;
    left: ${(props) => props.x + 'px'};
    top: ${(props) => props.y + 'px'};
`