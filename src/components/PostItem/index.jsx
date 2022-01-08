import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled.js'

const PostItem = ({ slug, category, date, timeToRead, title, description, background, color }) => {
  return (
    <S.PostItemLink to={slug}>
      <S.PostItemWrapper>
        <S.PostItemTag background={background} color={color}>
          {category}
        </S.PostItemTag>
        <S.PostItemInfo>
          <S.PostItemDate>
            {date} • {timeToRead} min de leitura
          </S.PostItemDate>

          <S.PostItemTitle>{title}</S.PostItemTitle>

          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  )
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
}

export default PostItem
