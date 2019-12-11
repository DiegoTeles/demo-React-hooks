import React, { Component } from "react";

class SemHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: { name: "" },
      name: "",
      isActive: false,
      ammount: 0,
      items: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isActive !== this.state.isActive) {
      this.setState({
        name: "Diego Telles"
      });
    }
  }

  handleClick = () => {
    this.setState({
      isActive: true,
      ammount: this.state.ammount + 1
    });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value
      }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { values } = this.state;

    this.setState(prevState => ({
      items: [...prevState.items, values.name]
    }));
  };

  render() {
    const { items } = this.state;
    console.log("items final :", items);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Meu nome é: {this.state.name}
          Minha contagem: {this.state.ammount}
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.values.name}
          />
          <button type="submit">Salvar</button>
          <div>
            {this.state.items.map((item, index) => {
              return (
                <div key={index}>
                  <b>{item}</b>
                </div>
              );
            })}
          </div>
          <button onClick={this.handleClick}> Clique aqui</button>
        </form>
      </div>
    );
  }
}

export default SemHooks;
