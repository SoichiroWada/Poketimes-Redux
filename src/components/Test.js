import React from 'react'
// import Rainbow from '../hoc/Rainbow'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p id="boil">The water would boil.</p>;
  }
  return <p id="cool">The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
    // console.log('e.target.value:',e.target.value);
    // console.log('this.props in handleChange:',this.props);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    // console.log('this.props in render:', this.props)
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}{` ( ${scale.toUpperCase()} ) `}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.clear = this.clear.bind(this);

    this.state = { scale: 'c', temperature:'' };
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature:temperature});
    // console.log(this.state);
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature:temperature});
    // console.log(this.state);
  }

  clear(){
    console.clear();
    this.setState({temperature: '', scale: 'c'});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <h4>Converter</h4>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <button id="btn" onClick={this.clear}>CLEAR</button>
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator
// export default Rainbow(Calculator)