import React from 'react'
import PostItem from '../PostItem'

const Hit = ({ hit }) => {
  var { title, date, background, description, category, timeToRead } = hit

  return (
    <PostItem
      slug={hit.fields.slug}
      title={title}
      date={date}
      background={background}
      description={description}
      category={category}
      timeToRead={timeToRead}
    />
  )
}

export default Hit
