import React from 'react'

export default function withForm(Component) {
  return class extends React.Component {
    state = { model: {}, canSubmit: false }

    updateField = (name, value) => {
      this.setState(({ model }) => ({ model: { ...model, [name]: value } }))
    }

    render() {
        console.log(this.state)
      return (
        <Component
          {...this.state}
          {...this.props}
          updateField={this.updateField}
        />
      )
    }
  }
}
