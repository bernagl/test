import React, { Component } from 'react'
import { connect } from 'react-redux'
import CuidadorForm from './components/CuidadorForm'

class App extends Component {
  render() {
    const { cuidadores } = this.props
    return (
      <div className="App">
        {cuidadores.map(cuidador => (
          <h4>{cuidador.name}</h4>
        ))}
        <hr />
        <div>
          <CuidadorForm />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ cuidadores }) => ({ cuidadores })

export default connect(mapStateToProps)(App)
