import styled from "styled-components";
import bg from '@/ASSETS/IMAGES/bg.png'

export const Container = styled.section`
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 0.4fr 1.8fr 0.8fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
    "skills content details"; 
    margin-top: 50px;
    min-height: 500px;
`

export const Skills = styled.aside`
    align-items: flex-start;
    display: flex;
    grid-area: 'skills';
    justify-content: center;

    ul {
        align-items: center;
        display: flex;
        justify-content: center;
        list-style: none;
        flex-direction: column;
        margin: 0;
        padding: 0;
    }
`
export const Content = styled.div`
    align-items: center;
    background-color: #fff;
    background-image: linear-gradient(0deg, rgb(255 255 255 / 60%), rgb(255 255 255 / 100%)), url(${bg});
    border-radius: 2px;
    box-shadow: 1px 2px 5px #c9c9c9;
    display: flex;
    grid-area: 'content';
    justify-content: center;
`
export const Details = styled.aside`
    display: flex;
    flex-direction: column;
    grid-area: 'details';
    padding-left: 50px;
`
export const Card = styled.div`
    background: #404040;
    color: #fff;
    margin-bottom: 15px;  
    -webkit-box-shadow: 1px 2px 5px #c9c9c9;
    -moz-box-shadow: 1px 2px 5px #c9c9c9;
    box-shadow: 1px 2px 5px #c9c9c9;
    
    text-align: left;
    padding: 15px;

    ul {
        list-style: none;
        text-align: left;
        padding: 0;
    }
`
