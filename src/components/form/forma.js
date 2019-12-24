import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

const { Item } = Form;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    this.props.form.validateFields();
  }

  handleSubmit = (e) =>{
    e.preventDefault();
  }

  render() { 

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return ( 
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Item validateStatus={usernameError ? 'error': ''} help={usernameError || ''}>
          {
            getFieldDecorator('username', {
              rules: [{
                required: true, 
                message: 'Please input your username!'
              }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
            )
          }
        </Item>
        <Item validateStatus={passwordError ? 'error': ''} help={passwordError || ''}>
          {
            getFieldDecorator('password', {
              rules: [{
                required: true, 
                message: 'Please input your Password!'
              }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />
            )
          }
        </Item>
        <Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Log in
          </Button>
        </Item>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create({})(HorizontalLoginForm);
 
export default WrappedHorizontalLoginForm;