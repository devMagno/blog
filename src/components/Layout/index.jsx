import * as React from 'react'
import PropTypes from 'prop-types'

import Sidebar from '../Sidebar'
import MenuBar from '../Menubar'
import GlobalStyles from '../../styles/global'

import * as S from './styled'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <S.mainContent>{children}</S.mainContent>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
