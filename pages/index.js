import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import SiteLayout from '../components/SiteLayout'

class Home extends React.Component {
  static async getInitialProps({ req }) {
    const res = await fetch('https://firecms-1.firebaseio.com/categories.json')
    const json = await res.json()
    return { categories: json }
  }

  render() {
    return (
      <SiteLayout title='Home' page={this.props}>
        <div>Welcome to next.js!</div>
      </SiteLayout>
    )
  }
}

export default withRedux(initStore)(Home)
