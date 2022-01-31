import { Link } from 'gatsby'
import propTypes from 'prop-types'
import React from 'react'

import * as S from './styled'

const Pagination = ({
  isFirstPage,
  isLastPage,
  currentPage,
  numberOfPages,
  previousPage,
  nextPage,
}) => {
  return (
    <S.PaginationWrapper>
      {!isFirstPage && <Link to={previousPage}>← Página anterior</Link>}

      <p>
        {currentPage} de {numberOfPages}
      </p>

      {!isLastPage && <Link to={nextPage}>Próxima Página →</Link>}
    </S.PaginationWrapper>
  )
}

Pagination.propTypes = {
  isFirstPage: propTypes.bool.isRequired,
  isLastPage: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numberOfPages: propTypes.number.isRequired,
  previousPage: propTypes.string,
  nextPage: propTypes.string
}

export default Pagination
