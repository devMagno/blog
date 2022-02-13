import * as React from 'react'
import PropTypes from 'prop-types'

import Sidebar from '../Sidebar'
import MenuBar from '../Menubar'
import GlobalStyles from '../../styles/global'
import { TransitionPortal } from 'gatsby-plugin-transition-link'

import * as S from './styled'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <S.mainContent>{children}</S.mainContent>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
