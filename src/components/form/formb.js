import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const { Item } = Form;
const style = {
  loginForm:{
    maxWidth: '300px',
  },
  loginFormForgot:{
    float: 'right',
  },
  loginFormButton:{
    width: '100%',
  }
}

class NormalLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() { 
    const { getFieldDecorator } = this.props.form;

    return (  
      <Form onSubmit={this.handleSubmit} style={style.loginForm}>
        <Item>
          {
            getFieldDecorator('username',{
              rules:[{ required: true, message: 'Please input your username!' }]
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
            )
          }
        </Item>
        <Item>
          {
            getFieldDecorator('password',{
              rules: [{ required: true, message: 'Please input your Password!' }]
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
          {
            getFieldDecorator('remember',{
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )
          }
          <a style={style.loginFormForgot} href="">Forgot password</a>
          <Button type="primary" htmlType="submit" style={style.loginFormButton}>
            Log in
          </Button>Or <a href="">register now!</a>
        </Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);
 
export default WrappedNormalLoginForm;