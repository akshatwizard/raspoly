import Card from '@/components/Card/Card'
import CardDetail from '@/components/CardDetails/CardDetail'
import Details from '@/components/Details/Details'
import Exprience from '@/components/Exprience/Exprience'
import Footer from '@/components/Footer/Footer'
import FounderWords from '@/components/FounderWords/FounderWords'
import Header from '@/components/Header/Header'
import LocationMap from '@/components/LocationMap/LocationMap'
import OurProducts from '@/components/OurProcucts/OurProducts'
import PreLoader from '@/components/preLoader/preLoader'
import Slider from '@/components/Slider/Slider'
import WhatWeDO from '@/components/WhatWeDo/WhatWeDO'
import React from 'react'

export default function page() {
  return (
    <>
    <PreLoader/>
    <Header/>
    <Slider/>
    <Exprience/>
    <Details/>
    <CardDetail/>
    <FounderWords/>
    {/* <OurProducts/> */}
    <Card/>
    {/* <WhatWeDO/> */}
    {/* <LocationMap/> */}
    <Footer/>
    </>
  )
}
