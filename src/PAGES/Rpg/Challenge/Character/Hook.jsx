import { useState } from "react"
import mapJson from '@/INFRA/DATA/CH_RPG/mapSpots'

const moveCharacter = () => {

    const [ pos , setPosition ] = useState({x: 1, y: 2, done: false})
    const [ charPosition , setCharPosition ] = useState(0)

    const moveLeft = () => {
            setPosition(pos => ({ 
                x:  canMove(pos.x - 1 , pos.y) ? pos.x - 1 : pos.x, 
                y: pos.y,
                done: false 
            }))
            setCharPosition(90)
    }
    const moveRight = () => {
            setPosition(pos => ({ 
                x: canMove(pos.x + 1 , pos.y) ? pos.x + 1 : pos.x, 
                y: pos.y,
                done: false 
            }))
            setCharPosition(60)
    }
    const moveUp = () => {
            setPosition(pos => ({ 
                x: pos.x, 
                y: canMove(pos.x , pos.y - 1) ? pos.y - 1 : pos.y,
                done: false 
            }))
            setCharPosition(30)
    }
    const moveDown = () => {
            setPosition(pos => ({ 
                x: pos.x, 
                y: canMove(pos.x , pos.y + 1) ? pos.y + 1 : pos.y,
                done: false 
            }))
            setCharPosition(0)
    }

    const canMove = (x , y) => {
        
        // CAN'T MOVE OUT OF THE MAP
        if(x < 0 || y < 0) return false 

        // CAN'T MOVE BETWEEN OBSTACLES
        if(mapJson[y] !== undefined && mapJson[x] !== undefined) {
            if(mapJson[y][x] === 0) return false
        } else {
            return false
        }

        // CHARACTER DONE
        if(mapJson[y][x] === 2) {
            setPosition(pos => ({ ...pos, done: true }))
        }
        
        return true
    }

    return {
        x: pos.x,
        y: pos.y,
        done: pos.done,
        size: 30,
        charPosition: charPosition,
        moveLeft,
        moveRight,
        moveDown,
        moveUp
    }
}

export default moveCharacter