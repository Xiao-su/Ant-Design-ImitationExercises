import React from 'react';
import { Icon } from 'antd';
const Icona = () => {
  return (
    <div>
      <Icon type="home" spin />
      <Icon type="setting" theme="filled" />
      <Icon type="smile" theme="outlined" />
      <Icon type="sync" spin />
      <Icon type="smile" rotate={180} />
      <Icon type="loading" />
    </div>
  );
}

export default Icona;
