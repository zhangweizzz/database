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
  Checkbox,
} from 'antd';

import styles from './quoat.less';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const InputGroup = Input.Group;
const { Option } = Select;

const columns = [
  {
    title: '编号',
    dataIndex: 'bh',
    render: text => <a>{text}</a>,
  },
  {
    title: '名称',
    dataIndex: 'mc',
  },
  {
    title: '类型',
    dataIndex: 'lx',
  },
  {
    title: '是否常用定额库',
    dataIndex: 'sf',
  },
  {
    title: '发布单位',
    dataIndex: 'dw',
  },
  {
    title: '当前状态',
    dataIndex: 'dq',
  },
  {
    title: '适用工程',
    dataIndex: 'sy',
  },
  {
    title: '发布时间',
    dataIndex: 'fb',
  },
  {
    title: '版本号',
    dataIndex: 'bb',
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
    sf: '是',
    dw: '发布单位',
    dq: '当前状态',
    sy: '适用工程',
    fb: '发布时间',
    bb: '版本号',
    gl: '关联项目',
  },
  {
    key: '2',
    bh: '1',
    mc: '名称',
    lx: '类型',
    sf: '是',
    dw: '发布单位',
    dq: '当前状态',
    sy: '适用工程',
    fb: '发布时间',
    bb: '版本号',
    gl: '关联项目',
  },
  {
    key: '3',
    bh: '1',
    mc: '名称',
    lx: '类型',
    sf: '是',
    dw: '发布单位',
    dq: '当前状态',
    sy: '适用工程',
    fb: '发布时间',
    bb: '版本号',
    gl: '关联项目',
  },
  {
    key: '4',
    bh: '1',
    mc: '名称',
    lx: '类型',
    sf: '是',
    dw: '发布单位',
    dq: '当前状态',
    sy: '适用工程',
    fb: '发布时间',
    bb: '版本号',
    gl: '关联项目',
  },
  {
    key: '5',
    bh: '1',
    mc: '名称',
    lx: '类型',
    sf: '是',
    dw: '发布单位',
    dq: '当前状态',
    sy: '适用工程',
    fb: '发布时间',
    bb: '版本号',
    gl: '关联项目',
  },
  {
    key: '6',
    bh: '1',
    mc: '名称',
    lx: '类型',
    sf: '是',
    dw: '发布单位',
    dq: '当前状态',
    sy: '适用工程',
    fb: '发布时间',
    bb: '版本号',
    gl: '关联项目',
  },
  {
    key: '7',
    bh: '1',
    mc: '名称',
    lx: '类型',
    sf: '是',
    dw: '发布单位',
    dq: '当前状态',
    sy: '适用工程',
    fb: '发布时间',
    bb: '版本号',
    gl: '关联项目',
  },
  {
    key: '8',
    bh: '1',
    mc: '名称',
    lx: '类型',
    sf: '是',
    dw: '发布单位',
    dq: '当前状态',
    sy: '适用工程',
    fb: '发布时间',
    bb: '版本号',
    gl: '关联项目',
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

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
class detaila extends Component {
  indexadd = () => {
    this.props.history.push('/dashboard/indexadd');
  };

  render() {
    return (
      <div>
        <div className={styles.top}>
          <div className={styles.title}>定额库</div>
          <Breadcrumb
            style={{
              fontSize: '14px',

              lineHeight: '60px',
            }}
          >
            <Breadcrumb.Item href="" style={{ color: '#FFFFFF', marginLeft: '20px' }}>
              <span>首页</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="" style={{ color: '#FFFFFF' }}>
              <span>定额数据管理</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="" style={{ color: '#FFFFFF' }}>
              <span>定额库</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ color: '#FDDB28' }}>定额库详情</Breadcrumb.Item>
          </Breadcrumb>
          ,
        </div>
        <div className={styles.content}>
          {/* <div className={styles.bt}>
            {' '}
            <p className={styles.contentp}></p> <h2>条件查询 :</h2>
          </div>
          <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className={styles.box}>定额库名称:</div>{' '}
              <div className={styles.pox}>
                <Input style={{ height: '40px', width: '85%' }} placeholder="请输入" />
              </div>
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className={styles.zox}>是否常用定额库:</div>{' '}
              <div className={styles.pox}>
                <Checkbox onChange={onChange}>是</Checkbox>
                <Checkbox onChange={onChange}>否</Checkbox>
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className={styles.box}>定额库类型:</div>{' '}
              <div className={styles.pox}>
                <InputGroup size="large" compact style={{ height: '50px', width: '200px' }}>
                  <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                    <Option value="data1">Option1-1</Option>
                    <Option value="data2">Option1-2</Option>
                  </Select>
                </InputGroup>
              </div>
            </Col>
          </Row> */}
          {/* <Row>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className={styles.box}>发布单位:</div>
              <div className={styles.pox}>
                <InputGroup size="large" compact style={{ height: '50px', width: '200px' }}>
                  <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                    <Option value="data1">Option1-1zzzzz</Option>
                    <Option value="data2">Option1-2</Option>
                  </Select>
                </InputGroup>
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className={styles.box}>当前状态:</div>{' '}
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
              <div className={styles.box}>适用工程:</div>{' '}
              <div className={styles.pox}>
                <InputGroup size="large" compact style={{ height: '50px', width: '220px' }}>
                  <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                    <Option value="data1">Option1-1</Option>
                    <Option value="data2">Option1-2</Option>
                  </Select>
                </InputGroup>
              </div>
            </Col>
            <Row>
              <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.box}>关联项目:</div>
                <div className={styles.pox}>
                  <InputGroup size="large" compact style={{ height: '50px', width: '200px' }}>
                    <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                      <Option value="data1">Option1-1zzzzz</Option>
                      <Option value="data2">Option1-2</Option>
                    </Select>
                  </InputGroup>
                </div>
              </Col>
            </Row>
          </Row>
          <ul className={styles.btn2}>
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
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: '#237F7E',
                  border: '1px solid #237F7E',
                  height: '80%',
                  width: '100%',
                }}
              >
                历史版本
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
              >
                导入
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
              >
                导出
              </Button>
            </li>
            <li>
              <Button
                type="primary"
                htmlType="submit"
                onClick={this.indexadd}
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
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: '#237F7E',
                  border: '1px solid #237F7E',
                  height: '80%',
                  width: '100%',
                }}
              >
                修改
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
              >
                删除
              </Button>
            </li>
          </ul> */}
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            bordered
            style={{ marginTop: '50px' }}
          />
          ,
        </div>
      </div>
    );
  }
}

export default detaila;
