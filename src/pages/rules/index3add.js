import React, { Component, Fragment } from 'react';
import { link } from 'react-router-dom';
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
  Radio
} from 'antd';
import styles from './index3add.less';

const InputGroup = Input.Group;
const { Option } = Select;

const columns = [
  {
    title: '费用名称',
    dataIndex: 'mc',
  },
  {
    title: '工程类型',
    dataIndex: 'lx',
  },
  {
    title: '备注',
    dataIndex: 'bz',
  },
];
const data = [
  {
    key: '1',
    bh: '1',
    mc: '名称',
    lx: '类型',
    bz: '是',
  },
  {
    key: '2',
    bh: '1',
    mc: '名称',
    lx: '类型',
    bz: '是',
  },
  {
    key: '3',
    bh: '1',
    mc: '名称',
    lx: '类型',
    bz: '是',
  },
  {
    key: '4',
    bh: '1',
    mc: '名称',
    lx: '类型',
    bz: '是',
  },
  {
    key: '5',
    bh: '1',
    mc: '名称',
    lx: '类型',
    bz: '是',
  },
];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
class index2 extends Component {
  constructor() {
    super();
    this.state = {
      value:1,
      flag: true,
    };
  }

  gotoindex2 = () => {
    this.props.history.push('/rules/index2');
  };
  back=()=>{
    history.go(-1)
  }
  handleChange = (value) => {
    console.log(`selected ${value}`);    
  }
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const { flag } = this.state;
    return (
      <div>
        <div className={styles.top}>
          {/* <link to="/rules/index2"> */}
          {/* <div className={styles.active} onClick={this.gotoindex2}>取费表</div> */}
          {/* </link> */}
          <div className={styles.active}>物料审查规则</div>
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
              <span>检查规则管理</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="" style={{ color: '#FFFFFF', fontSize: '14px' }}>
              <span>物料审查规则</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ color: '#FDDB28', fontSize: '14px' }}>新增</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.content}>
          <div className={styles.bt}>
            {' '}
            <p className={styles.contentp}></p> <h2>新增 :</h2>
          </div>
          <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className={styles.box}>物料编号:</div>{' '}
              <div className={styles.pox}>
                <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className={styles.box}>物料名称:</div>{' '}
              <div className={styles.pox}>
                <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
              </div>
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{display:'flex',justifyContent:'space-between',width:'20%'}}>
              <div className={styles.box}>单位:</div>
              <div className={styles.pox}>
                <InputGroup size="large" compact style={{ height: '50px', width: '220px' }}>
                  <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                    <Option value="data1">Option1-1</Option>
                    <Option value="data2">Option1-2</Option>
                  </Select>
                </InputGroup>
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className={styles.box}>单价(含税):</div>{' '}
              <div className={styles.pox}>
                <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className={styles.box}>单&emsp;&emsp;价:</div>{' '}
              <div className={styles.pox}>
                <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{display:'flex',justifyContent:'space-between',width:'20%'}}>
              <div className={styles.box}>是否常见物料:</div>{' '}
              <div className={styles.pox}>
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>是</Radio>
                  <Radio value={2}>否</Radio>
                </Radio.Group>
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{marginLeft:'8.5%'}}>
              <div className={styles.box}>物料状态:</div>{' '}
              <div className={styles.pox}>
                <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className={styles.box}>有效期限:</div>{' '}
              <div className={styles.pox}>
                <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
              </div>
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{display:'flex',justifyContent:'space-between',width:'20%'}}>
              <div className={styles.box}>关联项目:</div>
              <div className={styles.pox}>
                <InputGroup size="large" compact style={{ height: '50px', width: '220px' }}>
                  <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                    <Option value="data1">Option1-1</Option>
                    <Option value="data2">Option1-2</Option>
                  </Select>
                </InputGroup>
              </div>
            </Col>
          </Row>
          <ul className={styles.btn} style={{marginTop:'20%'}}>
            <li>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: '#237F7E',
                  border: '1px solid #237F7E',
                  height: '80%',
                  width: '100%',
                }}
              >
                保存
              </Button>
            </li>
            <li>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: '#237F7E',
                  border: '1px solid #237F7E',
                  height: '80%',
                  width: '100%',
                }}
                onClick={this.back}
              >
                取消
              </Button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default index2;
