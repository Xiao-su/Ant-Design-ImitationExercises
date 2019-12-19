import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

const { Item } = Menu;

const menu = () =>(
  <Menu>
    <Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Item>
    <Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Item>
    <Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Item>
  </Menu>
)

const dropdowna = () => {
  return (
    <Dropdown>
      
    </Dropdown>
  );
}

export default dropdowna;
