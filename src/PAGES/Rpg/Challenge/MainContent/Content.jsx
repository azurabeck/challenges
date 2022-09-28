import * as Style from './style'
import Character from '../Character'
import Success from '../Success'
import useCharacter from '../Character/Hook'
import { useEffect } from 'react'

const Content = () => {

    const char = useCharacter()

    useEffect(() => {
        window.addEventListener('keydown', handleKey)
    }, [])

    const handleKey = (e) => {
        const key = e.key

        if(key === 'ArrowRight' || key.toLowerCase() === 'd') char.moveRight()
        if(key === 'ArrowLeft' || key.toLowerCase() === 'a') char.moveLeft()
        if(key === 'ArrowUp' || key.toLowerCase() === 'w') char.moveUp()
        if(key === 'ArrowDown' || key.toLowerCase() === 's') char.moveDown()
   
    }

    return (        
        char.done   ? <Success />
                    : <Style.Container>
                        <Character x={char.x} y={char.y} charPosition={char.charPosition} size={30}/>
                      </Style.Container> 
                   
    )
}

export default Content