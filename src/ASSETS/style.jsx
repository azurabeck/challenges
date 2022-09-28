import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Data from '@/INFRA/DATA/skills'

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    #root {
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
        width: 100%;
    }

    body {
        margin: 0;
        display: flex;
        min-width: 320px;
        min-height: 100vh;
        background-color: #f9fbff;
    }

    h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 42px;
        line-height: 51px;
        color: #696969;
        margin: 5px;
        text-transform: uppercase;
    }

    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
    }
    button:hover {
        border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
    :root {
        color: #213547;
        background-color: #ffffff;
    }
    button {
        background-color: #f9f9f9;
    }
}
`
export const Icons = styled.li`
        align-items: center;
        background-color: ${(props) => Data[props.id] && Data[props.id].bg };
        border-radius: 8px;
        box-shadow: 0px 3px 4px #d3d3d3;
        color: ${(props) => Data[props.id] && Data[props.id].color };
        display: flex;
        font-size: ${(props) => Data[props.id] && Data[props.id].font };;
        font-weight: 700;
        height: 110px;
        justify-content: center;
        margin: 10px;
        width: 110px;

        &:first-child {
            margin-top: 0;
        }
`