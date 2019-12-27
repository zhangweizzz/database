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

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const InputGroup = Input.Group;
const { Option } = Select;
// import styles from "../dashboard/quota.less";
import styles from './pricing.less';

class index extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
      checkState: true,//修改默认禁用
      delState: true//删除默认禁用
    };
  }
  cz = () => {
    this.props.history.push('');
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
    this.props.history.push('/pricing/index2')
  };
  render() {
    const { flag,checkState,delState } = this.state;
    const columns = [
      {
        title: '编号',
        dataIndex: 'id',
        render: text => <a>{text}</a>,
      },
      {
        title: '名称',
        className: 'column-money',
        dataIndex: 'name',
      },
      {
        title: '类别',
        dataIndex: 'type',
      },
      ,
      {
        title: '发布单位',
        dataIndex: 'address',
      },
      {
        title: '属性组合',
        dataIndex: 'a',
      },
      {
        title: '信息价',
        dataIndex: 'msg',
      },
      {
        title: '信息价（不含税）',
        dataIndex: 'msg1',
      },
      {
        title: '关联项目',
        dataIndex: 'pro',
      },
    ];

    const data = [
      {
        key: '1',
        id: '编号',
        name: '整个项目',
        type: '类别',
        address: '国务院',
        a: '属性组合',
        msg: '信息价',
        msg1: '信息价1',
        pro: '关联项目',
      },
      {
        key: '1',
        id: '编号',
        name: '整个项目',
        type: '类别',
        address: '国务院',
        a: '属性组合',
        msg: '信息价',
        msg1: '信息价1',
        pro: '关联项目',
      },
      {
        key: '1',
        id: '编号',
        name: '整个项目',
        type: '类别',
        address: '国务院',
        a: '属性组合',
        msg: '信息价',
        msg1: '信息价1',
        pro: '关联项目',
      },
    ];
    return (
      <div>
        <div className={styles.top}>
        <div className={flag ? styles.title : styles.active} onClick={this.card1}>
            信息价
          </div>
          <div className={flag ? styles.title2 : styles.active2} onClick={this.card2}>
            信息价库
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
              <div className={styles.box}>定额号:</div>{' '}
              <div className={styles.pox}>
                <Input style={{ height: '40px', width: '100%' }} placeholder="请输入" />
              </div>
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <div className={styles.box}>定额项名称:</div>
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
              <div className={styles.box}>所属定额库:</div>{' '}
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
          </ul>
          <div>
            <Table columns={columns} dataSource={data} bordered></Table>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
