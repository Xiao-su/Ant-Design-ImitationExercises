import React, { Component } from 'react';
import '../App.css';
import { 
    Pagination,
    Select,
    DatePicker,
    TimePicker,
    Modal,
    Button,
    Popconfirm,
    Transfer,
    Calendar,
    Table
 } from 'antd';
 import moment from 'moment';

const { Option } = Select;
const { RangePicker } = DatePicker;

class Page extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false,
        }
    }

    showModal = () => {
        this.setState({ visible: true });
    }

    hideModal = () =>{
        this.setState({ visible: false });
    }

    render(){

        const info = ()=>{
            Modal.info({
                title: 'some info',
                content: 'some info',
              });
        };
        const confirm = () => {
            Modal.confirm({
              title: 'some info',
              content: 'some info',
            });
          };
        
        const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            filters: [
            {
                text: 'filter1',
                value: 'filter1',
            },
            ],
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        ];


        return(
            <div className="locale-components">
                <div className="example">
                    <Pagination defaultCurrent={1} total={50} showSizeChanger />
                </div>
                <div className="example">
                <Select showSearch style={{ width: 200 }}>
                    <Option value="jack">jack</Option>
                    <Option value="lucy">lucy</Option>
                </Select>
                <DatePicker />
                <TimePicker />
                <RangePicker style={{ width: 200 }} />
                </div>
                <div className="example">
                <Button type="primary" onClick={this.showModal}>
                    Show Modal
                </Button>
                <Button onClick={info}>Show info</Button>
                <Button onClick={confirm}>Show confirm</Button>
                <Popconfirm title="Question?">
                    <a href="#">Click to confirm</a>
                </Popconfirm>
                </div>
                <div className="example">
                    <Transfer dataSource={[]} showSearch targetKeys={[]} render={item => item.title} />
                </div>
                <div style={{ width: 319, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                    <Calendar fullscreen={false} value={moment()} />
                </div>
                <div className="example">
                    <Table dataSource={[]} columns={columns} />
                </div>
                <Modal title="Locale Modal" visible={this.state.visible} onCancel={this.hideModal}>
                    <p>Locale Modal</p>
                </Modal>
            </div>
        );
    }
}

export default Page;