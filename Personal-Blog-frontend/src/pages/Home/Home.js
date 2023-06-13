import React from 'react'
import Trends from '../../components/Trends/Trends'
import ListPostes from '../../components/ListPostes/ListPostes'
import Header from '../../components/Header/Header'
import './Home.css'
const Home = () => {
  return (
    <div className='Home'>
      <Header/>
      <Trends/>
      <ListPostes/>
    </div>
  )
}

export default Home