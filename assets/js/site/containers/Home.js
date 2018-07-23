import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    componentDidMount() {
        // Fetch some stuff...
    }

    render() {
        return (<h1>Home</h1>)
    }
}

const mapStateToProps = (state) => ({
    loading: state.siteState.loading,
    baseUrl: state.siteState.baseUrl,
});

export default connect(mapStateToProps)(Home)
