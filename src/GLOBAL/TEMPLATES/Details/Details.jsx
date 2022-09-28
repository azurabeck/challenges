import * as Style from './style'
import { Icons } from '@/ASSETS/style'

const Details = (props) => {

    const { children, details , skills } = props

    return(        
        <Style.Container>
            <Style.Skills>
                <ul>
                    {                        
                        skills && skills.map((item , i) => {
                            return <Icons key={i} id={item.id}>{item.name}</Icons>;
                        })
                    }
                </ul>
            </Style.Skills>
            <Style.Content>{children}</Style.Content>
            <Style.Details>

                <Style.Card>
                    <ul>
                        <li>Nome: {details.name}</li>
                        <li>Level: {details.level}</li>
                        <li>Duração: {details.duration}</li>
                    </ul>
                </Style.Card>

                <Style.Card>
                    {details.description}
                </Style.Card>


            </Style.Details>
        </Style.Container>
    )
  };
  
export default Details