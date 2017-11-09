import React from 'react'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import SiteLayout from '../components/SiteLayout'

class Category extends React.Component {
  static async getInitialProps({ req }) {
    const res = await fetch('https://firecms-1.firebaseio.com/categories.json')
    const json = await res.json()
    return { categories: json }
  }

  render() {
    return (
      <SiteLayout title='Category' page={this.props}>
        <div>Category! {this.props.url.query.c}</div>
      </SiteLayout>
    )
  }
}

Category.propTypes = {
  url: PropTypes.any
}

export default withRedux(initStore)(Category)
