import styled from 'styled-components'

export const PaginationWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--texts);
  padding: 1.5rem 3rem;
  border-top: 1px solid var(--borders);

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: var(--highlight);
    }
  }
`
