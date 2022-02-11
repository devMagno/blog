import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.2s;

  display: flex;

  &:hover {
    color: var(--highlight);
  }

  body#grid & {
    background-color: var(--background);
  }
`

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 2rem 3rem;
  border-bottom: 1px solid var(--borders);

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
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

  body#grid & {
    margin-bottom: 1.5rem;
  }
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

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-weight: 300;
  line-height: 1.2;
  font-size: 1.2rem;
`
