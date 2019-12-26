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
import styles from './index2detail.less';

const InputGroup = Input.Group;
const { Option } = Select;
const columns = [
  {
    title: '取费表',
    dataIndex: 'j',
    key: 'j',
    width: '15%'
  },
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
    width: '5%',
    // render: (text) => <a href="/rules/index2detail">{text}</a>
  },
  {
    title: '费用名称',
    dataIndex: 'name',
    key: 'name',
    width: '24%',
  },
  {
    title: '代码',
    dataIndex: 'age',
    key: 'age',
    width: '5%',
  },
  {
    title: '取费基数',
    dataIndex: 'address',
    width: '10%',
    key: 'address',
  },
  {
    title: '费率',
    dataIndex: 'fl',
    width: '5%',
    key: 'fl',
  },
  {
    title: '单位',
    dataIndex: 'dw',
    width: '10%',
    key: 'dw',
  },
  {
    title: '价格',
    dataIndex: 'money',
    width: '10%',
    key: 'money',
  },
  {
    title: '备注',
    dataIndex: 'bz',
    width: '26%',
    key: 'bz',
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: '啦啦啦啦啦啦',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: '啦啦啦啦啦啦',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: '啦啦啦啦啦啦',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: '啦啦啦啦啦啦',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
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
  Reset = () => {
    //重置
    console.log(111111)
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
              {flag ? '取费表新建' : '取费规则'}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {/* 取费表新建 */}
        {flag && (
          <div className={styles.content}>            
            <Table
              columns={columns}
              dataSource={data}
              bordered
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
                  onClick={this.Reset}
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
            </ul>
            <Table
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
