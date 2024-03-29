import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'

import Hit from './Hit'
import * as S from './styled'

const Search = ({ algolia }) => {
  var { appId, searchOnlyApiKey, indexName } = algolia
  
  const searchClient = algoliasearch(appId, searchOnlyApiKey)

  return (
    <S.SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={indexName}>
        <SearchBox autoFocus translations={{ placeholder: 'Pesquisar...' }} />

        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
            },
          }}
        />

        <Hits hitComponent={Hit} />
      </InstantSearch>
    </S.SearchWrapper>
  )
}

export default Search
