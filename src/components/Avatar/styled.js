import styled from 'styled-components'
import media from 'styled-media-query'

export const AvatarWrapper = styled.div`
  .gatsby-image-wrapper {
    margin: auto;
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;

    ${media.lessThan('large')`
      width: 1.875rem;
      height: 1.875rem;
    `}
  }
`
