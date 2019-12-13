import React, { Component } from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

class Typographyd extends Component {
  constructor(){
    super();
    this.state = {
      str: 'This is an editable text.'
    }
  }

  onChange = (str) => {
    console.log('Content change:', str);
    this.setState({ str });
  };


  render() { 
    const { str } = this.state;
    return ( 
        <div>
          <Paragraph editable={{ onChange: this.onChange }}>{str}</Paragraph>
          <Paragraph copyable>This is a copyable text.</Paragraph>
          <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
        </div>
     );
  }
}
 
export default Typographyd;