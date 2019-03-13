import React from 'react'
import withForm from './formHoc'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.formRef = React.createRef()
  }

  onSubmit = event => {
    event.preventDefault()
    console.log(this.props)
  }

  render() {
    const { children } = this.props
    console.log(this.props)
    return (
      <form onSubmit={this.onSubmit} ref={this.formRef}>
        <div>here goes the gorm</div>
        {children}
        <button>Submit</button>
      </form>
    )
  }
}

export default withForm(Form)
