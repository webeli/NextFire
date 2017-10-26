import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import SiteLayout from '../components/SiteLayout'

class Home extends React.Component {
  render() {
    return (
      <SiteLayout title="Home">
        <div>Welcome to next.js!</div>
      </SiteLayout>
    )
  }
}

export default withRedux(initStore)(Home)