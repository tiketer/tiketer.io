import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'

import 'normalize.css'

injectGlobal`
  html {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: sans-serif;
  }

  html,
  body {
    height: 100%;
  }
  
  #___gatsby {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`

const Layout = ({ children, data }) => (
  <Fragment>
    <Helmet
      title={data.site.siteMetadata.title}
    />
    {children()}
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
