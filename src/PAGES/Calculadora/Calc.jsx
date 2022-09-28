import { useEffect , useState } from 'react';
import { useLocation } from 'react-router-dom';
import Data from '@/INFRA/DATA/menu.js'
import Details from '../../GLOBAL/TEMPLATES/Details';

function Calc() {

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
            <Details skills={routeData.skills} content={null} details={routeData} />
            
    )
}

export default Calc