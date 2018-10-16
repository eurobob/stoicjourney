import React from 'react'
import { Link } from 'gatsby'

class Layout extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <div>
        <h1>
          <Link to={'/'}>Stoic Journey</Link>
        </h1>
        {children}
      </div>
    )
  }
}

export default Layout
