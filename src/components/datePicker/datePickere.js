import React, { Component } from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

class ControlledDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mode: 'time'
    }
  };

  handleOpenChange = open => {
    if (open) {
      this.setState({ mode: 'time' });
    }
  };


  handlePanelChange = (value, mode) => {
    this.setState({ mode });
  };

  render() { 
    return ( 
      <DatePicker
        mode={this.state.mode}
        showTime
        onOpenChange={this.handleOpenChange}
        onPanelChange={this.handlePanelChange}
      />
     );
  };
}


class ControlledRangePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mode: ['month', 'month'],
      value: []
    }
  };

  handlePanelChange = (value, mode) => {
    this.setState({
      value,
      mode: [mode[0] === 'date' ? 'month' : mode[0], mode[1] === 'date' ? 'month' : mode[1]],
    });
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() { 
    const { value, mode } = this.state;

    return ( 
      <RangePicker
        placeholder={['Start month', 'End month']}
        format="YYYY-MM"
        value={value}
        mode={mode}
        onChange={this.handleChange}
        onPanelChange={this.handlePanelChange}
      />
    );
  }
}
 

const datepickere = () => {
  return (  
    <div>
      <ControlledDatePicker />
      <br />
      <ControlledRangePicker />
    </div>
  );
}


export default datepickere;