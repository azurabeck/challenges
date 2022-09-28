import { useEffect , useState } from 'react';
import { useLocation } from 'react-router-dom';
import useCharecter from './Challenge/Character/Hook'
import Data from '@/INFRA/DATA/menu.js'
import Details from '../../GLOBAL/TEMPLATES/Details';
import Content from './Challenge/MainContent'

const Rpg = () => {

    const location = useLocation()
    const path = location.pathname

    const [routeData, getRouteData] = useState(null)

    useEffect(() => {
        if(Data) {
            Data.filter(item => item.route === path && getRouteData(item))
        }
    }, [])

    return(
        routeData &&
            <Details skills={routeData.skills} details={routeData}>
                <Content />                
            </Details>            
    )
}

export default Rpg