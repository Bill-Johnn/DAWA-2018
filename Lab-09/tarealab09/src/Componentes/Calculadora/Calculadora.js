import React, {Component} from 'react';

import estilo from './Calculadora.css'

export default class Calculadora extends Component{
    state = {}
    lectura = (num) => {
        if(num.target.id == "N1"){
			this.setState({
				N1: parseFloat(num.target.value)
			});
		}else if (num.target.id == "N2"){
			this.setState({
				N2: parseFloat(num.target.value)
			});
        }
    }

    suma = () => {
        this.setState({
            result: this.state.N1 + this.state.N2,
            operacion: " + "
        });
    }
    resta = () => {
        this.setState({
            result: this.state.N1 - this.state.N2,
            operacion: " - "
        });
    }
    multiplicacion = () => {
        this.setState({
            result: this.state.N1 * this.state.N2,
            operacion: " * "
        });
    }
    division = () => {
        this.setState({
            result: this.state.N1 / this.state.N2,
            operacion: " / "
        });
    }
    porcentaje = () => {
        this.setState({
            result: ("Valor1: " + (this.state.N1/100)),
            operacion: " % "
        })
    }
    clean = () => {
        this.setState({
            nu1: "",
            nu2: "",
            result: "",
            operacion: "???"
        });
    }
    render(){
        return (<div>
            <h1>Este es mi componente de calculadora</h1>
            <p><button className={estilo.button} onClick={this.suma}> + </button>
               <button onClick={this.resta}> - </button>
               <button onClick={this.multiplicacion}> * </button>
               <button onClick={this.division}> / </button>
               <button onClick={this.porcentaje}> % </button>
               <button onClick={this.clean}> Limpiar </button></p>
	        <input id="N1" value={this.state.nu1} onChange={this.lectura}/>
	        <label>{this.state.operacion}</label>
	        <input id="N2" value={this.state.nu2} onChange={this.lectura}/>
	        <button id="result"> = </button>
	        { this.state.result }
        </div>)
    }
}