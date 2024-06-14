import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

type Props = {
  url: string
}

const WorkCard = ({url}: Props) => {
  return (
    <Card className='my-5 sm:my-0'>
    <CardHeader className='p-0'>
      <img src="/household.png" alt="workCard" />
    </CardHeader>
    <CardContent className='py-4 sm:py-3'>
      <p className='text-center text-xl font-bold'>Household</p>
    </CardContent>
    <a href={url} target='_blank'>
    <Button className='w-full rounded-t-none bg-blue-500 hover:bg-blue-700'>View More</Button>
    </a>
  </Card>
  )
}

export default WorkCard
