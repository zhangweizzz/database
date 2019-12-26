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
import styles from './index3.less';

const InputGroup = Input.Group;
const { Option } = Select;

const columns = [
  {
    title: '编号',
    dataIndex: 'bh',
  },
  {
    title: '物料名称',
    dataIndex: 'mc',
  },
  {
    title: '单位',
    dataIndex: 'dw',
  },
  {
    title: '单价（含税）',
    dataIndex: 'djhs',
  },
  {
    title: '单价',
    dataIndex: 'dj',
  },
  {
    title: '是否常见物料',
    dataIndex: 'yn',
  },
  {
    title: '物料状态',
    dataIndex: 'zt',
  },
  {
    title: '有限期限',
    dataIndex: 'qx',
  },
  {
    title: '关联项目',
    dataIndex: 'gl',
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
  render() {
    const { flag } = this.state;

    return (
      <div>
        <div className={styles.top}>
          <div className={styles.active}>
            物料审查规则
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
              <span>检查规则管理</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="" style={{ color: '#FDDB28', fontSize: '14px' }}>
              <span>物料审查规则</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.content}>
          <div className={styles.bt}>
            {' '}
            <p className={styles.contentp}></p> <h2>条件查询 :</h2>
          </div>
          <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{display:'flex',justifyContent:'space-between',width:'20%'}}>
              <div className={styles.box}>物料编号:</div>{' '}
              <div className={styles.pox}>
                <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{display:'flex',justifyContent:'space-between',width:'20%'}}>
              <div className={styles.box}>物料名称:</div>{' '}
              <div className={styles.pox}>
                <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{display:'flex',justifyContent:'space-between',width:'20%'}}>
              <div className={styles.box}>单价(含税):</div>{' '}
              <div className={styles.pox}>
                <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{display:'flex',justifyContent:'space-between',width:'20%'}}>
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
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{display:'flex',justifyContent:'space-between',width:'20%'}}>
              <div className={styles.box}>有效期限:</div>
              <div className={styles.pox}>
                <InputGroup size="large" compact style={{ height: '50px', width: '220px' }}>
                  <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                    <Option value="data1">Option1-1</Option>
                    <Option value="data2">Option1-2</Option>
                  </Select>
                </InputGroup>
              </div>
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{display:'flex',justifyContent:'space-between',width:'20%'}}>
              <div className={styles.box}>结束期限:</div>
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
          <ul className={styles.btn} style={{ marginTop: 0 }}>
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
                查询
              </Button>
            </li>
            <li>
              <Button
                onClick={this.cz}
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: '#237F7E',
                  border: '1px solid #237F7E',
                  height: '80%',
                  width: '100%',
                }}
              >
                重置
              </Button>
            </li>
            <li>
              <Button
                onClick={this.gotocreate}
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: '#237F7E',
                  border: '1px solid #237F7E',
                  height: '80%',
                  width: '100%',
                }}
              >
                新增
              </Button>
            </li>
            <li>
              <Button
                onClick={this.cz}
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: '#237F7E',
                  border: '1px solid #237F7E',
                  height: '80%',
                  width: '100%',
                }}
                onClick={this.gotoIndex3Modify}
              >
                修改
              </Button>
            </li>
            <li>
              <Button
                onClick={this.cz}
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: '#237F7E',
                  border: '1px solid #237F7E',
                  height: '80%',
                  width: '100%',
                }}
              >
                删除
              </Button>
            </li>
          </ul>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            bordered
            style={{ marginTop: '50px' }}
          />
        </div>
      </div>
    );
  }
}

export default index3;
