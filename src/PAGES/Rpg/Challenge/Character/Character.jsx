import * as Style from './style'

const Character = (props) => {

    const { charPosition , size, x , y } = props

    return(
        <Style.Character charPosition={charPosition} x={x * size} y={y * size} size={size}/>
    )
}

export default Character