import { Component } from 'react';
import Contact, { ContactProps } from '../Contato';

class Agenda extends Component<any> {

  state = {
    array: [
      { name: 'Ana', phone: '1234-5678' },
      { name: 'Bia', phone: '2234-5678' },
      { name: 'Carla', phone: '3234-5678' },
      { name: 'Daniela', phone: '4234-5678' },
    ],
    showContact: false
  };

  handleToggle = () => {
    this.setState({
      showContact: !this.state.showContact
    })
  };

  render() {
    return (
      <div>
        <h1>Agenda</h1>
        <button onClick={this.handleToggle}>Listar contatos</button>
        <div className="contacts">
          {this.state.showContact &&
            this.state.array.map((item: ContactProps) => (
              <Contact name={item.name} phone={item.phone} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default Agenda;

