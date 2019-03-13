import React from 'react'
import Form from './Form'
import Input from './Input'

export default class CuidadorForm extends React.Component {
  render() {
    return (
      <Form>
        <Input
          name="name"
          label="Nombre"
          placeholder="Ingresa el nombre del usuario"
          value="Luis"
        />
      </Form>
    )
  }
}
