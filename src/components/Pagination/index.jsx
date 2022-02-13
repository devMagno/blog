import React from 'react'
import propTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import getThemeColor from '../../utils/getThemeColor'

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
      {!isFirstPage && (
        <AniLink
          to={previousPage}
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.6}
        >
          ← Página anterior
        </AniLink>
      )}

      <p>
        {currentPage} de {numberOfPages}
      </p>

      {!isLastPage && (
        <AniLink
          to={nextPage}
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
        >
          Próxima Página →
        </AniLink>
      )}
    </S.PaginationWrapper>
  )
}

Pagination.propTypes = {
  isFirstPage: propTypes.bool.isRequired,
  isLastPage: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numberOfPages: propTypes.number.isRequired,
  previousPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
