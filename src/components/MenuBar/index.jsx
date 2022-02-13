import React, { useState, useEffect } from 'react'
import * as S from './styled'

import { Home } from '@styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as UpArrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { Lightbulb } from '@styled-icons/fluentui-system-regular/Lightbulb'
import { Grid } from '@styled-icons/boxicons-solid/Grid'
import { TextBulletListLtr as List } from '@styled-icons/fluentui-system-regular/TextBulletListLtr'

import getThemeColor from '../../utils/getThemeColor'

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === 'dark'
  const isListMode = display === 'list'

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }

    window.__onDisplayChange = () => {
      setDisplay(window.__display)
    }
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          title="Página inicial"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search/"
          title="Pesquisar"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
          className={theme}
        >
          <Lightbulb />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir apra o topo">
          <UpArrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
