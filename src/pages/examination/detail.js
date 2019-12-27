import React, { Component, Fragment } from 'react';
import { connect } from 'dva';

import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入柱饼图
import 'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legendScroll';
import Echart from './Echart';

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
  Descriptions,
  Badge,
} from 'antd';

import styles from './detail.less';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const InputGroup = Input.Group;
const { Option } = Select;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const data = [
  {
    key: '1',
    sclx: '工程量审查',
    scx: '审查项',
    fhx: '92',
    bfhx: '6',
    wfscx: '2',
  },
  {
    key: '2',
    sclx: '工程量审查',
    scx: '审查项',
    fhx: '92',
    bfhx: '6',
    wfscx: '2',
  },
  {
    key: '3',
    sclx: '工程量审查',
    scx: '审查项',
    fhx: '92',
    bfhx: '6',
    wfscx: '2',
  },
];
const data1 = [
  {
    key: '1',
    sclx: '工程量审查',
    scx: '审查项',
    fhx: '92',
    bfhx: '6',
  },
  {
    key: '2',
    sclx: '工程量审查',
    scx: '审查项',
    fhx: '92',
    bfhx: '6',
  },
  {
    key: '3',
    sclx: '工程量审查',
    scx: '审查项',
    fhx: '92',
    bfhx: '6',
  },
];

const columns = [
  {
    title: '审查类型',
    dataIndex: 'sclx',
  },
  {
    title: '审查项',
    dataIndex: 'scx',
  },
  {
    title: '符合项',
    dataIndex: 'fhx',
  },
  {
    title: '不符合项',
    dataIndex: 'bfhx',
  },
  {
    title: '无法审查项',
    dataIndex: 'wfscx',
  },
];
const columns1 = [
  {
    title: '审查项目',
    dataIndex: 'sclx',
  },
  {
    title: '送审值',
    dataIndex: 'scx',
  },
  {
    title: '审定值',
    dataIndex: 'fhx',
  },
  {
    title: '审查结果',
    dataIndex: 'bfhx',
  },
];

class detail extends Component {
  render() {
    return (
      <div>
        <div className={styles.top}>
          <div className={styles.title}>审查报告</div>
          <Breadcrumb
            style={{
              fontSize: '14px',
              lineHeight: '60px',
            }}
          >
            <Breadcrumb.Item href="" style={{ color: '#FFFFFF', marginLeft: '20px' }}>
              <span>首页</span>
            </Breadcrumb.Item>

            <Breadcrumb.Item style={{ color: '#FDDB28' }}>审查报告</Breadcrumb.Item>
          </Breadcrumb>
          ,
        </div>
        <div className={styles.content}>
          <div className={styles.detailh2}>审查报告信息</div>
          <div>
            <Button
              style={{
                backgroundColor: '#FDDB28',
                border: '1px solid #FDDB28',
                marginLeft: '20%',
                marginTop: '11px',
              }}
            >
              下载pdf文档
            </Button>
          </div>
          <div className={styles.topbox}>
            <Descriptions bordered>
              <Descriptions.Item label="项目名称" span={5}>
                项目名称
              </Descriptions.Item>
              <Descriptions.Item label="开始时间" span={5}>
                2019/12/05 下午15：18
              </Descriptions.Item>
              <Descriptions.Item label="结束时间" span={5}>
                2019/12/05 下午16：18
              </Descriptions.Item>
              <Descriptions.Item label="审查人" span={5}>
                王权富贵
              </Descriptions.Item>
              <Descriptions.Item label="审查结果" span={5}>
                通过
              </Descriptions.Item>
            </Descriptions>
          </div>
          <div className={styles.scleft}>
            <div className={styles.scheard}>分项审查</div>
            <div className={styles.sclist}>
              <Table
                columns={columns}
                dataSource={data}
                bordered
                pagination={false}
                className={styles.sctable}
              />
            </div>
          </div>
          <div className={styles.scright}>
            <div className={styles.scheard}>审查通过率</div>
            <Echart />
          </div>
          <div style={{ width: '94%', margin: '0 auto' }}>
            <Table
              columns={columns1}
              dataSource={data1}
              bordered
              pagination={true}
              className={styles.sctable}
            />
          </div>
          <div style={{ width: '94%', float: 'left', display: 'flex', marginLeft: '10%' }}>
            <span className={styles.spanFoot}>工程量对比明细表</span>
            <span className={styles.spanFoot}>物料对比明细表</span>
            <span className={styles.spanFoot}>取费对比明细表</span>
            <span
              className={styles.spanFoot}
              style={{ backgroundColor: '#2FBBB8', color: 'white', border: 0 }}
            >
              下载工程表
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default detail;
