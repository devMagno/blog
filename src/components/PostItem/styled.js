import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.2s;

  display: flex;

  &:hover {
    color: #1fa1f2;
  }
`

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 2rem 3rem;
  border-bottom: 1px solid #38444d;
`

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => (props.color ? props.color : 'white')};
  min-width: 90px;
  min-height: 90px;
  font-weight: 700;
  font-size: 1.3rem;
  border-radius: 50%;
  background-color: ${props => (props.background ? props.background : 'black')};
  text-transform: uppercase;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-weight: 700;
  font-size: 1.6rem;

  margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p`
  font-weight: 300;
  line-height: 1.2;
  font-size: 1.2rem;
`
