import React from 'react'
import PropTypes from 'prop-types'
import { TransitionPortal } from 'gatsby-plugin-transition-link'
import Reset from '../../styles/generic/reset'
import Base from '../../styles/elements/base'
import Variables from '../../styles/elements/settings'

import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <Variables />
      <Base />
      <TransitionPortal level="top">
        <Header />
      </TransitionPortal>
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
