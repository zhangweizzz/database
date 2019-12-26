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
import styles from './systemLog.less';

const InputGroup = Input.Group;
const { Option } = Select;

const columns = [
  {
    title: '选择',
    dataIndex: 'bh',
  },
  {
    title: '管理员',
    dataIndex: 'mc',
  },
  {
    title: '操作',
    dataIndex: 'dw',
  },
  {
    title: '方式',
    dataIndex: 'djhs',
  },
  {
    title: '访问IP',
    dataIndex: 'dj',
  },
  {
    title: '时间',
    dataIndex: 'yn',
  },
  {
    title: 'Query参数',
    dataIndex: 'zt',
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
    djhs: 65,
    dj: 200,
    yn: 'yes',
    zt: 'epterg'
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
    zt: 'epterg'
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

  gotocreate = () => {
    this.props.history.push('/rules/index3add');
  };
  gotoIndex3Modify = () => {
    this.props.history.push('/rules/index3modify');
  };
  back = () => {
    this.props.history.go(-1)
  }
  render() {
    const { flag } = this.state;

    return (
      <div>
        <div className={styles.top}>
          <div className={styles.active}>
            系统概览
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
              <span>系统日志管理</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.content}>
          <div className={styles.bt}>
            {' '}
            <p className={styles.contentp}></p> <h2>条件查询 :</h2>
          </div>
          <Row>
          <Col xs={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ display: 'flex', justifyContent: 'space-between', width: '15%' }}>
                <div className={styles.box}>管理员:</div>
                <div className={styles.pox}>
                  <InputGroup size="large" compact style={{ height: '50px', width: '180px' }}>
                    <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                      <Option value="data1">admin1</Option>
                      <Option value="data2">admin2</Option>
                    </Select>
                  </InputGroup>
                </div>
              </Col>
              <Col xs={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ display: 'flex', justifyContent: 'space-between', width: '15%' }}>
                <div className={styles.box}>IP地址:</div>
                <div className={styles.pox}>
                  <InputGroup size="large" compact style={{ height: '50px', width: '180px' }}>
                    <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                      <Option value="data1">Option1-1</Option>
                      <Option value="data2">Option1-2</Option>
                    </Select>
                  </InputGroup>
                </div>
              </Col>
              <Col xs={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ display: 'flex', justifyContent: 'space-between', width: '30%' }}>
                <div className={styles.box}>时间:</div>
                <div className={styles.pox}>
                  <InputGroup size="large" compact style={{ height: '50px', width: '180px' }}>
                    <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                      <Option value="data1">Option1-1</Option>
                      <Option value="data2">Option1-2</Option>
                    </Select>
                  </InputGroup>
                </div>
                  <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: '#237F7E',
                    border: '1px solid #237F7E',
                    height: '32px',
                    width: '74px',
                    marginLeft: 16,
                    marginTop:'4%'
                  }}
                >
                  查询
                </Button>
              </Col>
          </Row>

          <Table
            columns={columns}
            dataSource={data}
            bordered
            style={{ width:'90%',margin:'0 auto',marginTop: '50px'}}
          />
          <ul className={styles.btn} style={{ marginTop: 0,marginLeft:'80%' }}>
            <li>
              <Button
                onClick={this.back}
                type="primary"
                style={{
                  backgroundColor: '#237F7E',
                  border: '1px solid #237F7E',
                  height: '80%',
                  width: '100%',
                }}
              >
                返回
              </Button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default index3;
