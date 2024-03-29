import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarWrapper = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--mediumBackground);

  width: 20rem;
  padding: 2rem;
  height: 100vh;
  position: fixed;
  text-align: center;

  ${media.lessThan('large')`
    height: auto;
    width: 100%;
    padding: 1rem 2rem;
    align-items: flex-start;
  `}
`
