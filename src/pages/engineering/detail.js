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
  Divider,
} from 'antd';

import styles from './detail.less';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const InputGroup = Input.Group;
const { Option } = Select;

const data = [
  {
    key: '1',
    mingchen: '名称',
    danwei: '20m',
    shuliang: 100,
  },
  // {
  //     key:"2",
  //     mingchen:"名称",
  //     danwei:"单位",
  //     shuliang:"数量"

  // },
  // {
  //     key:"3",
  //     mingchen:"名称",
  //     danwei:"单位",
  //     shuliang:"数量"

  // },
  // {
  //     key:"4",
  //     mingchen:"名称",
  //     danwei:"单位",
  //     shuliang:"数量"

  // },
  // {
  //     key:"5",
  //     mingchen:"名称",
  //     danwei:"单位",
  //     shuliang:"数量"

  // }
];

const columns = [
  {
    title: '名称',
    dataIndex: 'mingchen',
  },
  {
    title: '单位',
    dataIndex: 'danwei',
  },
  {
    title: '数量',
    dataIndex: 'shuliang',
  },
];

class detail extends Component {
  goback = () => {
    this.props.history.push('/engineering/index');
  };

  schedule=()=>{
    this.props.history.push('/engineering/indexa');
  };
  Collection=()=>{
    this.props.history.push('/engineering/indexa');
};
comparison=()=>{
    this.props.history.push('/engineering/indexa');
};

  render() {
    return (
      <div>
        <div className={styles.top}>
          <div className={styles.title}>工程管理</div>
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
              <span>工程管理</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ color: '#FDDB28' }}>工程详情</Breadcrumb.Item>
          </Breadcrumb>
          <div className={styles.addcontent}>
            <div className={styles.bt}>
              {' '}
              <p className={styles.contentp}></p> <h2>项目详情:</h2>
            </div>
            <Row>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>项目名称: 110KV线路工程</div>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>项目编号： XL11052396</div>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>项目划分： 110KV线路工程</div>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>项目性质： 新建</div>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>预算类型： 初步设计概算</div>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>电压等级： 110KV</div>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>地区分类： Ⅰ类</div>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>架线类型： 一般线路</div>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>配置选型： DL/T 54XX导则</div>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>工程所在地： 上海</div>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>社会保险缴费费率（%）： 110KV线路工程</div>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>住房公积金缴费费率（%）： 12</div>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>工程税率（%）： 3.41</div>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>基本预备费费率（%）： 2</div>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>线路亘长（km）： 29.6</div>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>调差系数年份： 2016</div>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <div className={styles.detailbox}>甲供材料计入本体： 是</div>
              </Col>
            </Row>
            <Divider />
            <div>
            <Button 
            onClick={this.schedule}
            style={{backgroundColor:"#FFFFFF",color:"#169BD5",border:"1px solid #169BD5",marginLeft:"3%",marginRight:"2%"}}
            >

            工程量对比明细表
            </Button>
            <Button 
            style={{backgroundColor:"#FFFFFF",color:"#169BD5",border:"1px solid #169BD5",marginLeft:"3%",marginRight:"2%"}}
            onClick={this.comparison}
            >
            物料对比明细表
            </Button>
            <Button
            onClick={this.Collection}
             style={{backgroundColor:"#FFFFFF",color:"#169BD5",border:"1px solid #169BD5",marginLeft:"3%",marginRight:"2%"}}>
            取费对比明细表
            </Button>
            <Button style={{border:"1px solid #169BD5",marginLeft:"3%",marginRight:"2%"}}>
            下载工程量表
            </Button>
            </div>
            <ul className="detailm-footer">
                <li>
            <Button style={{ marginLeft: '80%' }} >
              修改
            </Button>
             </li>
             <li>
            <Button style={{ marginLeft: '80%' }} >
              删除
            </Button>
             </li>
             <li>
            <Button style={{ marginLeft: '80%' }} onClick={this.goback}>
              返回
            </Button>
             </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default detail;
