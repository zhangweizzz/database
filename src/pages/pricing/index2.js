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
import styles from './pricing2.less';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const InputGroup = Input.Group;
const { Option } = Select;

class index2 extends Component {
  render() {
    const columns = [
      {
        title: '期号',
        dataIndex: 'id',
        render: text => <a>{text}</a>,
      },
      {
        title: '信息价名称',
        dataIndex: 'name',
      },
      {
        title: '信息价类别',
        dataIndex: 'type',
      },
      {
        title: '发布单位',
        dataIndex: 'address',
      },
      {
        title: '年度',
        dataIndex: 'year',
      },
      {
        title: '季度',
        dataIndex: 'quarter',
      },
      {
        title: '关联项目',
        dataIndex: 'project',
      },
    ];
    const data = [
      {
        key: '1',
        id: 'A001',
        name: 'John Brown',
        year: '2019',
        quarter: '第四季',
        type: 32,
        address: 'New York No. 1 Lake Park',
        project: '国家电网',
      },
      {
        key: '2',
        id: 'A001',
        name: 'Jim Green',
        year: '2019',
        quarter: '第四季',
        type: 42,
        address: 'London No. 1 Lake Park',
        project: '国家电网',
      },
      {
        key: '3',
        id: 'A001',
        name: 'Joe Black',
        year: '2019',
        quarter: '第四季',
        type: 32,
        address: 'Sidney No. 1 Lake Park',
        project: '国家电网',
      },
      {
        key: '4',
        id: 'A001',
        name: 'Disabled User',
        year: '2019',
        quarter: '第四季',
        type: 99,
        address: 'Sidney No. 1 Lake Park',
        project: '国家电网',
      },
    ];

    // rowSelection objects indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    return (
      <div>
        <div className={styles.top}>
          <div className={styles.title}>信息价</div>
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
              <span>信息价管理</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ color: '#FDDB28', fontSize: '14px' }}>信息价</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.content}>
          <div className={styles.bt}>
            {' '}
            <p className={styles.contentp}></p> <h2>条件查询 :</h2>
          </div>
          <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className={styles.box}>信息价库:</div>
              <div className={styles.pox}>
                <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className={styles.box}>信息价类别:</div>
              <div className={styles.pox}>
                <InputGroup size="large" compact style={{ height: '50px', width: '180px' }}>
                  <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                    <Option value="data1">Option1-1</Option>
                    <Option value="data2">Option1-2</Option>
                  </Select>
                </InputGroup>
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
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
          </Row>
          <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className={styles.box}>期&emsp;&emsp;号:</div>
              <div className={styles.pox}>
                <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className={styles.box}>年&emsp;&emsp;度:</div>
              <div className={styles.pox}>
                <InputGroup size="large" compact style={{ height: '50px', width: '180px' }}>
                  <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                    <Option value="data1">2000-2001</Option>
                    <Option value="data2">2002-2003</Option>
                  </Select>
                </InputGroup>
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className={styles.box}>季&emsp;&emsp;度:</div>
              <div className={styles.pox}>
                <InputGroup size="large" compact style={{ height: '50px', width: '180px' }}>
                  <Select defaultValue="请选择" style={{ width: '100%', height: '50px' }}>
                    <Option value="data1">第一季度</Option>
                    <Option value="data2">第二季度</Option>
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
          </ul>
          <div>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
              style={{ textAlign: 'center' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default index2;
