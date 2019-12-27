//数据字典管理
import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  Row,
  Col,
  Breadcrumb,
  Icon,
  Layout,
  Menu,
  Input,
  Select,
  InputNumber,
  Button,
  Table,
  Radio,
} from 'antd';
import styles from './index5.less';

const InputGroup = Input.Group;
const { Option } = Select;

const columns = [
  {
    title: '序号',
    dataIndex: 'bh',
  },
  {
    title: '字典类型名称',
    dataIndex: 'mc',
  },
  {
    title: '字典类型代码',
    dataIndex: 'dw',
  },
  {
    title: '操作',
    dataIndex: 'djhs',
  }
];
const data = [
  {
    key: '1',
    bh: '1',
    mc: '名称',
    lx: '类型',
    bz: '是',
    dw: '中天弘信',
    djhs: 65
  },
  {
    key: '2',
    bh: '1',
    mc: '名称',
    lx: '类型',
    bz: '是',
    dw: '中天弘信',
    djhs: 65
  },
];
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//   },
//   getCheckboxProps: record => ({
//     disabled: record.name === 'Disabled User', // Column configuration not to be checked
//     name: record.name,
//   }),
// };
// function handleChange(value) {
//   console.log(`selected ${value}`);
// }
class index3 extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
      value: 1,
    };
  }

  handleChange=(value)=> {
    console.log(`selected ${value}`);
  }

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
 
  back = () => {
    this.props.history.go(-1);
  }
  render() {
    const { flag } = this.state;

    return (
      <div>
        <div className={styles.top}>
          <div className={styles.active} onClick={this.gotoindex2}>
            费率表
          </div>
          <Breadcrumb
            style={{
              fontSize: '22px',
              lineHeight: '60px',
            }}
          >
            <Breadcrumb.Item
              href=""
              style={{ color: '#FFFFFF', marginLeft: '20px', fontSize: '14px' }}
            >
              <span>首页</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="" style={{ color: '#FFFFFF', fontSize: '14px' }}>
              <span>系统管理</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="" style={{ color: '#FDDB28', fontSize: '14px' }}>
              <span>费率表</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.content} style={{paddingLeft:0}}>
          {/* 左边盒子 */}
          <div style={{ width: '20%',marginLeft:0}}>
            <div style={{width:'100%',background:'#2FBBB8',height:'5%'}}>费率表分类</div>
          </div>
          {/* 右边盒子 */}
          <div style={{ width: '45%' }}>
            <div className={styles.pox} style={{ display: 'flex', marginBottom: 15 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: '#237F7E',
                  border: '1px solid #237F7E',
                  height: '32px',
                  width: '74px',
                  marginLeft: 0
                }}
              >新建</Button>
              <Select defaultValue="lucy" style={{ width: '50%',marginLeft:'5%' }} onChange={this.handleChange}>
                <Option value="1">Jack</Option>
                <Option value="2">Lucy</Option>
                <Option value="3">yimi</Option>
              </Select>
            </div>
            <Table
              columns={columns}
              dataSource={data}
              bordered
              pagination={false}
              style={{ width: '90%' }}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default index3;
