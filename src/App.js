
import React, { Component } from 'react';
import { Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Botonera(props) {
  //COMPONENTE QUE RENDERIZA EL TABLERO
  let campoAux = [];

  for (let i = 0; i < props.campo.length; i++) {
    let fila = [];
    for (let j = 0; j < props.campo[i].length; j++) {
      fila.push(<Button className='btnClass' color="secondary"></Button>)
    }
    campoAux.push(fila)
    campoAux.push(<br></br>)
  }
  return campoAux;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campo: Array(8).fill(0),
    }
  }

  componentWillMount() {
    let arr = [];
    for (let i = 0; i < 8; i++) {
      let fila = [];
      for (let j = 0; j < 8; j++) {
        fila.push(0);
      }
      arr.push(fila);
    }
    console.log(arr);
    this.setState({campo:arr});
  }

  render() {
    return (
      <div className="App">
          <Botonera campo={this.state.campo} />
          <h1>hola</h1>
      </div>
    );
  }
}

export default App;
