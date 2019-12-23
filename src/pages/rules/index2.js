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
} from 'antd';
import styles from './index2.less';

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

const columns2 = [
  {
    title: '规则编号',
    dataIndex: 'bh',
  },
  {
    title: '费用名称',
    dataIndex: 'mc',
  },
  {
    title: '取费基础',
    dataIndex: 'jc',
  },
  {
    title: '费率',
    dataIndex: 'fl',
  },
  {
    title: '计算式',
    dataIndex: 'cp',
  },
];
const data2 = [
  {
    key: '1',
    bh: '1',
    mc: '名称',
    jc: '类型',
    fl: '是',
    cp: '关联项目',
  },
  {
    key: '2',
    bh: '1',
    mc: '名称',
    jc: '类型',
    fl: '是',
    cp: '关联项目',
  },
  {
    key: '3',
    bh: '1',
    mc: '名称',
    jc: '类型',
    fl: '是',
    cp: '关联项目',
  },
  {
    key: '4',
    bh: '1',
    mc: '名称',
    jc: '类型',
    fl: '是',
    cp: '关联项目',
  },
  {
    key: '5',
    bh: '1',
    mc: '名称',
    jc: '类型',
    fl: '是',
    cp: '关联项目',
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
      flag: true,
    };
  }
  card1 = () => {
    this.setState({
      flag: true,
    });
  };
  card2 = () => {
    this.setState({
      flag: false,
    });
  };
  creatR2 = () => {
    this.props.history.push('/rules/index2add');
  };
  render() {
    const { flag } = this.state;

    return (
      <div>
        <div className={styles.top}>
          <div className={flag ? styles.title : styles.active} onClick={this.card1}>
            取费表
          </div>
          <div className={flag ? styles.title2 : styles.active2} onClick={this.card2}>
            取费规则
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
            <Breadcrumb.Item href="" style={{ color: '#FFFFFF', fontSize: '14px' }}>
              <span>取费审查</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ color: '#FDDB28', fontSize: '14px' }}>
              {flag ? '取费表' : '取费规则'}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {/* 取费表 */}
        {flag && (
          <div className={styles.content}>
            <div className={styles.bt}>
              {' '}
              <p className={styles.contentp}></p> <h2>条件查询 :</h2>
            </div>
            <Row>
              <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.box}>费用名称:</div>
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
                <div className={styles.box}>工程类型:</div>{' '}
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
            <ul className={styles.btn}>
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
                  新建
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
        )}
        {/* 取费规则 */}
        {!flag && (
          <div className={styles.content}>
            <div className={styles.bt}>
              {' '}
              <p className={styles.contentp}></p> <h2>条件查询 :</h2>
            </div>
            <Row>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.box}>规则编号:</div>{' '}
                <div className={styles.pox}>
                  <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
                </div>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.box}>费用名称:</div>{' '}
                <div className={styles.pox}>
                  <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
                </div>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.box}>费用基础:</div>{' '}
                <div className={styles.pox}>
                  <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
                </div>
              </Col>
            </Row>

            <ul className={styles.btn}>
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
                  onClick={this.creatR2}
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
                  onClick={this.creatR2}
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: '#237F7E',
                    border: '1px solid #237F7E',
                    height: '80%',
                    width: '100%',
                  }}
                >
                  新建
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
            </ul>
            <Table
              rowSelection={rowSelection}
              columns={columns2}
              dataSource={data2}
              bordered
              style={{ marginTop: '50px' }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default index2;
