import React, { Component } from 'react';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {
  ConfigProvider,
  Radio,
} from 'antd';
import './App.css';
import Page from './components/page'


moment.locale('en');

class App extends Component {
  constructor(){
    super();
    this.state = {
      locale: enUS
    }
  }

  changeLocale = (e) =>{
    const localeValue = e.target.value;
    this.setState({
      locale: localeValue
    });
    if (!localeValue) {
      moment.locale('en');
    } else {
      moment.locale('zh-cn');
    }
  }

  render(){
    const { locale } = this.state;

    return (
      <div>
        <div className="change-locale">
          <span style={{marginRight: 16}}>Change locale of components:</span>
          <Radio.Group value={locale} onChange={this.changeLocale}>
            <Radio.Button key="en" value={enUS}>
              English
            </Radio.Button>
            <Radio.Button key="cn" value={zhCN}>
              中文
            </Radio.Button>
          </Radio.Group>
        </div>
        <ConfigProvider locale={locale}>
            <Page key={locale ? locale.locale : 'en'} />
        </ConfigProvider>
      </div>
    );
  }
}

export default App;
