import React from 'react'

type TitleProps = {
  title: string
}

const Title = ({title} : TitleProps) => {
  return (
    <h2 className='text-4xl xs:text-5xl font-bold text-center xl:text-7xl'>
      {title}
    </h2>
  )
}

export default Title
