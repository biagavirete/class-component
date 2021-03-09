import { Component } from 'react';

export interface ContactProps {
  name: string;
  phone: string;
}

class Contact extends Component<ContactProps> {

  render() {
    return (
      <>
        <strong>{this.props?.name}</strong>
        <p>{this.props?.phone}</p>
      </>
    )
  }
}

export default Contact;

