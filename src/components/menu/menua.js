import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu, Item, ItemGroup } = Menu;

class Menua extends Component {
    constructor() {
        super();
        this.state = { 
            current: 'mail'
         }
    }

    handleClick = (e) =>{
        console.log('click ', e);
        this.setState({
        current: e.key,
        });
    }

    render() { 
        const submenuTitle = (
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Navigation Three - Submenu
            </span>
        );

        return ( 
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Item key="mail">
                  <Icon type="mail" />Navigation One
                </Item>
                <Item key="app" disabled>
                  <Icon type="appstore" />Navigation Two
                </Item>
                <SubMenu title={submenuTitle}>
                    <ItemGroup title="Item 1">
                        <Item key="setting:1">Option 1</Item>
                        <Item key="setting:2">Option 2</Item>
                    </ItemGroup>
                    <ItemGroup title="Item 2">
                        <Item key="setting:3">Option 3</Item>
                        <Item key="setting:4">Option 4</Item>
                    </ItemGroup>
                </SubMenu>
                <Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                </Item>
            </Menu>
         );
    }
}
 
export default Menua;