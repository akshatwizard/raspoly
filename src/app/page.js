import Card from '@/components/Card/Card'
import CardDetail from '@/components/CardDetails/CardDetail'
import Certificate from '@/components/Certificate/Certificate'
import Details from '@/components/Details/Details'
import Exprience from '@/components/Exprience/Exprience'
import FounderWords from '@/components/FounderWords/FounderWords'
import LocationMap from '@/components/LocationMap/LocationMap'
import PreLoader from '@/components/preLoader/preLoader'
import Slider from '@/components/Slider/Slider'
import React from 'react'

export default function page() {
  return (
    <>
    <PreLoader/>
    <Slider/>
    <Exprience/>
    <Details/>
    <CardDetail/>
    <FounderWords/>
    <Card/>
    <Certificate/>
    <LocationMap/>
    </>
  )
}
