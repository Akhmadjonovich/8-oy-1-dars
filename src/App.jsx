import React from 'react'
import Desserts from './components/Desserts'
import YourCard from './components/YourCard'
import { useFetch } from './hooks/useFetch'
import { useSelector } from 'react-redux'

const App = () => {
  
  
  let {data, error, loading} = useFetch(
"https://json-api.uz/api/project/dessertss/desserts"
  )
  return (
    <div className='container'>
      {
        loading && (<div>Loading...</div>)
      }
      {
        data && <Desserts desserts={data.data}/>
      }
      
      <YourCard/>
    </div>
  )
}

export default App
