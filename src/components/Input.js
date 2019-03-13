import React from 'react'
import withForm from './formHoc'

class Input extends React.Component {
  state = { value: null }
  componentDidMount() {
    this.setValue()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value === this.props.value) return
    this.setValue()
  }

  setValue = () => {
    const { value } = this.props
    this.setState({ value })
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({ value }, () =>
      this.props.updateField(name, value)
    )
  }

  render() {
    const { label, type, name, placeholder, error } = this.props
    const { value } = this.state
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={this.onChange}
        />
      </>
    )
  }
}

export default withForm(Input)
