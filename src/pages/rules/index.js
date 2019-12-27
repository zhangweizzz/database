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
  Radio
} from 'antd';
import styles from './index.less';
import { normalizeUnits } from 'moment';

const InputGroup = Input.Group;
const { Option } = Select;

const columns = [
  {
    title: '编号',
    dataIndex: 'bh',
  },
  {
    title: '规则名称',
    dataIndex: 'mc',
  },
  {
    title: '调整类型',
    dataIndex: 'lx',
  },
  {
    title: '作用范围',
    dataIndex: 'zy',
  },
  {
    title: '定额系数',
    dataIndex: 'de',
  },
  {
    title: '人工系数',
    dataIndex: 'rg',
  },
  {
    title: '机械系数',
    dataIndex: 'jx',
  },
  {
    title: '材料系数',
    dataIndex: 'cl',
  },
  {
    title: '状态',
    dataIndex: 'zt',
  },
];
const data = [
  {
    key: '1',
    bh: '1',
    mc: '名称',
    lx: '类型',
    zy: 'uiui',
    bz: '是',
    de: 1111,
    rg: 'pageYOffset',
    jx: 'normalizeUnits',
    cl: 'onoffline',
    zt: 'online'
  },
  {
    key: '2',
    bh: '1',
    mc: '名称',
    lx: '类型',
    zy: 'uiui',
    bz: '是',
    de: 1111,
    rg: 'pageYOffset',
    jx: 'normalizeUnits',
    cl: 'onoffline',
    zt: 'online'
  }
];

const columns2 = [
  {
    title: '编号',
    dataIndex: 'bh',
  },
  {
    title: '名称',
    dataIndex: 'mc',
  },
  {
    title: '类型',
    dataIndex: 'jc',
  },
  {
    title: '是否常用规则库',
    dataIndex: 'fl',
  },
  {
    title: '发布单位',
    dataIndex: 'cp',
  },
  {
    title: '当前状态',
    dataIndex: 'now',
  },
  {
    title: '适用工程',
    dataIndex: 'sy',
  },
  {
    title: '发布时间',
    dataIndex: 'time',
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
];
class index2 extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
      checkState: true//默认禁用
    };
  }
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
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
  add = () => {//工程量审查新增
    this.props.history.push('/rules/indexadd');
  }
  modify = () => {//工程量审查修改
      this.props.history.push('/rules/indexmodify');
  }
  addGC2 = () => {//工程规则新增
    this.props.history.push('/rules/indexaddGC');
  }
  modifyGC2 = () => {//工程规则修改
    this.props.history.push('/rules/indexmodifyGC');
  }
  render() {
    const { flag,checkState } = this.state;
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        console.log(selectedRowKeys,selectedRows);
        if (selectedRowKeys.length == 1) {
          this.setState({
            checkState: false
          })
        } else {
             this.setState({
              checkState:true
            })
        }
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };

    return (
      <div>
        <div className={styles.top}>
          <div className={flag ? styles.title : styles.active} onClick={this.card1}>
            工程量审查
          </div>
          <div className={flag ? styles.title2 : styles.active2} onClick={this.card2}>
            工程量审查规则库
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
            <Breadcrumb.Item style={{ color: '#FDDB28', fontSize: '14px' }}>
              {flag ? '工程量审查' : '取费规则'}
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
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
                <div className={styles.box}>规则编号:</div>{' '}
                <div className={styles.pox}>
                  <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
                </div>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
                <div className={styles.box}>物料名称:</div>{' '}
                <div className={styles.pox}>
                  <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
                </div>
              </Col>
              <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
                <div className={styles.box}>调整类型:</div>
                <div className={styles.pox}>
                  <InputGroup size="large" compact style={{ height: '50px', width: '180px' }}>
                    <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                      <Option value="data1">Option1-1</Option>
                      <Option value="data2">Option1-2</Option>
                    </Select>
                  </InputGroup>
                </div>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
                <div className={styles.box}>作用范围:</div>{' '}
                <div className={styles.pox}>
                  <InputGroup size="large" compact style={{ height: '50px', width: '180px' }}>
                    <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                      <Option value="data1">Option1-1</Option>
                      <Option value="data2">Option1-2</Option>
                    </Select>
                  </InputGroup>
                </div>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
                <div className={styles.box}>调整单位:</div>{' '}
                <div className={styles.pox}>
                  <InputGroup size="large" compact style={{ height: '50px', width: '180px' }}>
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
                  onClick={this.add}
                >
                  新建
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
                  onClick={()=>this.modify()}
                  disabled={checkState}
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
                  disabled={checkState}
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
        {/* 工程量审查规则库 */}
        {!flag && (
          <div className={styles.content}>
            <div className={styles.bt}>
              {' '}
              <p className={styles.contentp}></p> <h2>条件查询 :</h2>
            </div>
            <Row>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
                <div className={styles.box}>规则库名称:</div>{' '}
                <div className={styles.pox}>
                  <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
                </div>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
                <div className={styles.box}>是否常见物料:</div>{' '}
                <div className={styles.pox}>
                  <Radio.Group onChange={this.onChange} value={this.state.value}>
                    <Radio value={1}>是</Radio>
                    <Radio value={2}>否</Radio>
                  </Radio.Group>
                </div>
              </Col>
              <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
                <div className={styles.box}>规则库类型:</div>
                <div className={styles.pox}>
                  <InputGroup size="large" compact style={{ height: '50px', width: '180px' }}>
                    <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                      <Option value="data1">Option1-1</Option>
                      <Option value="data2">Option1-2</Option>
                    </Select>
                  </InputGroup>
                </div>
              </Col>
              <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
                <div className={styles.box}>发布单位:</div>
                <div className={styles.pox}>
                  <InputGroup size="large" compact style={{ height: '50px', width: '180px' }}>
                    <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                      <Option value="data1">Option1-1</Option>
                      <Option value="data2">Option1-2</Option>
                    </Select>
                  </InputGroup>
                </div>
              </Col>
              <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
                <div className={styles.box}>当前状态:</div>
                <div className={styles.pox}>
                  <InputGroup size="large" compact style={{ height: '50px', width: '180px' }}>
                    <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                      <Option value="data1">Option1-1</Option>
                      <Option value="data2">Option1-2</Option>
                    </Select>
                  </InputGroup>
                </div>
              </Col>
              <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
                <div className={styles.box}>试用工程:</div>
                <div className={styles.pox}>
                  <InputGroup size="large" compact style={{ height: '50px', width: '180px' }}>
                    <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                      <Option value="data1">Option1-1</Option>
                      <Option value="data2">Option1-2</Option>
                    </Select>
                  </InputGroup>
                </div>
              </Col>
              <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
                <div className={styles.box}>关联项目:</div>
                <div className={styles.pox}>
                  <InputGroup size="large" compact style={{ height: '50px', width: '180px' }}>
                    <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                      <Option value="data1">Option1-1</Option>
                      <Option value="data2">Option1-2</Option>
                    </Select>
                  </InputGroup>
                </div>
              </Col>
            </Row>

            <ul className={styles.btn1}>
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
                  onClick={this.addGC2}
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
                  onClick={this.modifyGC2}
                  type="primary"
                  htmlType="submit"
                  disabled={data2 == '' ? true : false}
                  style={{
                    backgroundColor: '#237F7E',
                    border: '1px solid #237F7E',
                    height: '80%',
                    width: '100%',
                  }}
                  disabled={checkState}
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
                  disabled={checkState}
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
