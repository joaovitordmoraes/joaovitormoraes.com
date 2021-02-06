import React from 'react'
import PropTypes from 'prop-types'
import Reset from '../../styles/generic/reset'
import Base from '../../styles/elements/base'
import Variables from '../../styles/elements/settings'

import Header from '../Header'

const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <Variables />
      <Base />
      <Header />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
