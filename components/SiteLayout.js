import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, toggleDrawer } from '../store'
import { connect } from 'react-redux'
import Head from 'next/head'
import Header from './Header'
import Drawer from './Drawer'

class SiteLayout extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Drawer toggleDrawer={() => this.props.toggleDrawer()} open={this.props.drawerOpen} />
        <Header toggleDrawer={() => this.props.toggleDrawer()} />
        {this.props.children}
        <style global jsx>{`
        body {
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          margin: 0;
          padding: 0;
        }
      `}</style>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.drawerOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: bindActionCreators(toggleDrawer, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteLayout)