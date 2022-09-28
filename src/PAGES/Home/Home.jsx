import Card from '@/GLOBAL/ORGANISM/Card'
import { useSelector, useDispatch } from 'react-redux'
import { Template } from './style'
import Data from '@/INFRA/DATA/menu.js'

function Home() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Template className="App">
      {
        Data && Data.map((item, i) => {
          return <Card key={i} card={item}></Card>
        })
      }
    </Template>
  )
}

export default Home
