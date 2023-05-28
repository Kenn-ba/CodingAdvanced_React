import Header from '@/components/Header.js'
import Slide from '@/components/Slide.js'
import { useState } from 'react'
import useNetwork from '@/data/network'

export default function Home() {
  const { network, isLoading, isError } = useNetwork()
  
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  
  const stations = network.stations;

  return (
    <div className='home'>
      <Header></Header>
      <Slide></Slide>
    </div>
  )
}
