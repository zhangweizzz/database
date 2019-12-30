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
  Upload,
  Modal,
  Tree
} from 'antd';

import styles from './index.less';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const InputGroup = Input.Group;
const { Option } = Select;
const { TreeNode, DirectoryTree } = Tree;


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
  }
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


const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      checkState: true,//修改默认禁用
      delState: true,//删除默认禁用
      visible: false,
      visible2: false,
      editingKey: ''
    };
  }
  isEditing = record => record.key === this.state.editingKey;
  onSelect = (keys, event) => {
    console.log('Trigger Select', keys, event);
  };

  onExpand = () => {
    console.log('Trigger Expand');
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  showModal2 = () => {
    this.setState({
      visible2: true,
    });
  };

  handleOk2 = e => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  };

  handleCancel2 = e => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  };

  indexadd = () => {
    this.props.history.push('/dashboard/indexadd');
  };

  render() {
    const { flag, checkState, delState } = this.state;
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        console.log(selectedRowKeys, selectedRows);
        if (selectedRowKeys.length == 1) {
          this.setState({
            checkState: false,//修改按钮
            delState: false//删除按钮
          })
        } else if (selectedRowKeys.length > 1) {
          this.setState({
            checkState: true,//修改按钮
            delState: false//删除按钮
          })
        } else {
          this.setState({
            checkState: true,
            delState: true
          })
        }
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    const columns = [
      {
        title: '编号',
        dataIndex: 'bh',
    
        render: (text, record) => <a href="/dashboard/detaila">{record.bh}</a>,
      },
      {
        title: '名称',
        dataIndex: 'mc',
        render: (text, record) => <a href="/dashboard/detaila">{record.mc}</a>,
      },
      {
        title: '类型',
        dataIndex: 'lx',
        render: (text, record) => <a href="/dashboard/detaila">{record.lx}</a>,
      },
      {
        title: '是否常用定额库',
        dataIndex: 'sf',
        render: (text, record) => <a href="/dashboard/detaila">{record.sf}</a>,
      },
      {
        title: '发布单位',
        dataIndex: 'dw',
        render: (text, record) => <a href="/dashboard/detaila">{record.dw}</a>,
      },
      {
        title: '当前状态',
        dataIndex: 'dq',
        render: (text, record) => <a href="/dashboard/detaila">{record.dq}</a>,
      },
      {
        title: '适用工程',
        dataIndex: 'sy',
        render: (text, record) => <a href="/dashboard/detaila">{record.sy}</a>,
      },
      {
        title: '发布时间',
        dataIndex: 'fb',
        render: (text, record) => <a href="/dashboard/detaila">{record.fb}</a>,
      },
      {
        title: '版本号',
        dataIndex: 'bb',
        render: (text, record) => <a href="/dashboard/detaila">{record.bb}</a>,
      },
      {
        title: '关联项目',
        dataIndex: 'gl',
        // render: (text, record) => <a href="/dashboard/detail">{record.gl}</a>,
        render: (text, record) => {
         return(
          <a
          onClick={() => this.showModal2(record.key)}
          style={{ marginRight: 8 }}
        >{record.gl}</a>
         )
        }
      }
    ];
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
            <Breadcrumb.Item style={{ color: '#FDDB28' }}>定额库</Breadcrumb.Item>
          </Breadcrumb>
          ,
        </div>
        <div className={styles.content}>
          <div className={styles.bt}>
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
          </Row>
          <Row>
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
              <Upload {...props} style={{ float: "left" }}>
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
              </Upload>,
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
                onClick={this.showModal2}
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
                disabled={checkState}
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
                disabled={delState}
                style={{
                  backgroundColor: '#237F7E',
                  border: '1px solid #237F7E',
                  height: '80%',
                  width: '100%',
                }}
                onClick={this.showModal}
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
          {/* 弹出框 */}
          <Modal
            title="删除提示"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>（定额库）确认删除？</p>
          </Modal>
          <Modal
            title="关联项目"
            visible={this.state.visible2}
            onOk={this.handleOk2}
            onCancel={this.handleCancel2}
          >
            <p style={{ width: '100%', borderBottom: '1px solid #E8E8E8', display: 'flex', justifyContent: 'space-around', height: 30, lineHeight: 2, textAlign: 'center' }}>
              <span style={{ width: '30%' }}>项目分类</span><span style={{ width: '70%' }}>项目列表</span>
            </p>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
              <div style={{ width: '40%' }}>
                <DirectoryTree multiple defaultExpandAll onSelect={this.onSelect} onExpand={this.onExpand}>
                  <TreeNode title="项目分类" key="0-0">
                    <TreeNode title="leaf 0-0" key="0-0-0" isLeaf />
                    <TreeNode title="leaf 0-1" key="0-0-1" isLeaf />
                  </TreeNode>
                  <TreeNode title="项目分类" key="0-1">
                    <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
                    <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
                  </TreeNode>
                </DirectoryTree>
              </div>
              <div style={{ width: '50%' }}>
                <DirectoryTree multiple defaultExpandAll onSelect={this.onSelect} onExpand={this.onExpand}>
                  <TreeNode title="国家电网1" key="000" isLeaf />
                  <TreeNode title="国家电网2" key="111" isLeaf />
                </DirectoryTree>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default index;
