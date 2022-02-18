import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as S from './styled'

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <StaticImage
        src="../../images/profile-picture.jpg"
        alt="Guilherme Magno avatar"
        placeholder="blurred"
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
