import React from 'react'
import reactLogo from '@/ASSETS/IMAGES/react.svg'
import * as S from './style'

function Navbar() {
    return (
        <>
            <S.Logo href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react logo-spin" alt="React logo" />
            </S.Logo>
            <h1>React Challenges</h1>
            <S.Divisor />
        </>
    )
}

export default Navbar