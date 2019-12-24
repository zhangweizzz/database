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
  Checkbox,
} from 'antd';
import styles from './index2.less';

const InputGroup = Input.Group;
const { Option } = Select;

const columns = [
  {
    title: '名称',
    dataIndex: 'bh',
  },
  {
    title: '角色',
    dataIndex: 'mc',
  },
  {
    title: '账号',
    dataIndex: 'dw',
  },
  {
    title: '手机号',
    dataIndex: 'djhs',
  },
  {
    title: '邮箱',
    dataIndex: 'dj',
  },
  {
    title: '备注',
    dataIndex: 'yn',
  },
  {
    title: '操作',
    dataIndex: 'zt',
  },
];
const data = [
  {
    key: '1',
    bh: '1',
    mc: '名称',
    lx: '类型',
    bz: '是',
    dw: '中天弘信',
    djhs: 65,
    dj: 200,
    yn: 'yes',
    zt: 'epterg',
    qx: 2020,
    gl: '国家电网',
  },
  {
    key: '2',
    bh: '1',
    mc: '名称',
    lx: '类型',
    bz: '是',
    dw: '中天弘信',
    djhs: 65,
    dj: 200,
    yn: 'yes',
    zt: 'epterg',
    qx: 2020,
    gl: '国家电网',
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

const plainOptions = ['Apple', 'Pear', 'Orange'];

class index3 extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
      value: 1,
    };
  }

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  gotoindex2 = () => {
    this.props.history.push('/rules/index2');
  };
  gotocreate = () => {
    this.props.history.push('/rules/index3add');
  };
  render() {
    const { flag } = this.state;

    return (
      <div>
        <div className={styles.top}>
          <div className={styles.active}>用户权限管理</div>
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
              <span>用户权限管理</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.content}>
          <div className={styles.bt}>
            {' '}
            <p className={styles.contentp}></p> <h2>用户选择 :</h2>
          </div>
          <Row style={{ marginLeft: '10%' }}>
            <Checkbox.Group options={plainOptions} />
          </Row>
          <p className={styles.hr}></p>
          <div className={styles.bt}>
            {' '}
            <p className={styles.contentp}></p> <h2>权限选择 :</h2>
          </div>

          {/* <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: '#237F7E',
              border: '1px solid #237F7E',
              height: '32px',
              width: '74px',
              marginLeft: '10%',
              marginBottom: '2%'
            }}
          >新增</Button>          
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: '#237F7E',
              border: '1px solid #237F7E',
              height: '32px',
              width: '74px',
              marginLeft: '90%',
              marginBottom: '2%'
            }}
          >返回</Button> */}
        </div>
      </div>
    );
  }
}

export default index3;
