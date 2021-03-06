import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Row, Col, Breadcrumb, Icon, Layout, Menu, Input, Select, InputNumber, Button, Table, Popconfirm, Modal } from 'antd';

import styles from './quoat.less';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const InputGroup = Input.Group;
const { Option } = Select;



const columns = [
  {
    title: '标记',
    dataIndex: 'biaoji',
    render: text => <a>{text}</a>,

  },
  {
    title: '定额编号',
    dataIndex: 'bianhao',
  },
  {
    title: '项目名称',
    dataIndex: 'mingchen',
  },
  {
    title: '单位',
    dataIndex: 'danwei',
  },
  {

    title: "基价",
    children: [
      {
        title: "人工费",
        dataIndex: "rengong",
      },
      {
        title: "材料费",
        dataIndex: "cailiao",
      }
      , {
        title: "机械费",
        dataIndex: "jixie",
      }
    ],
  }



]
const data = [
  {
    key: "1",
    biaoji: "标记",
    bianhao: "定额编号",
    mingchen: "项目名称",
    danwei: "单位",
    rengong: "人工费",
    cailiao: "材料费",
    jixie: "机械费"
  },
  {
    key: "2",
    biaoji: "标记",
    bianhao: "定额编号",
    mingchen: "项目名称",
    danwei: "单位",
    rengong: "人工费",
    cailiao: "材料费",
    jixie: "机械费"
  },
  {
    key: "3",
    biaoji: "标记",
    bianhao: "定额编号",
    mingchen: "项目名称",
    danwei: "单位",
    rengong: "人工费",
    cailiao: "材料费",
    jixie: "机械费"
  },
  {
    key: "4",
    biaoji: "标记",
    bianhao: "定额编号",
    mingchen: "项目名称",
    danwei: "单位",
    rengong: "人工费",
    cailiao: "材料费",
    jixie: "机械费"
  },
  {
    key: "5",
    biaoji: "标记",
    bianhao: "定额编号",
    mingchen: "项目名称",
    danwei: "单位",
    rengong: "人工费",
    cailiao: "材料费",
    jixie: "机械费"
  }

]




class Quota extends Component {
  constructor() {
    super();
    this.state = {
      detailok: true,
      detailmodel: false,
      checkState: true,//修改默认禁用
      delState: true//删除默认禁用 
    };
  }


  add = () => {
    this.props.history.push("/dashboard/add")
  }
  amend = () => {
    this.props.history.push("/dashboard/amend")
  }
  detail = () => {
    this.setState({
      detailmodel: true,
    });
  }
  handleOk = e => {
    console.log(e);
    this.setState({
      detailmodel: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      detailmodel: false,
    });
  };


  render() {

    const { detailok, checkState, delState } = this.state

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

    return (
      <div>
        <div className={styles.top}>
          <div className={styles.title}>定额
                        </div>
          <Breadcrumb style={{
            fontSize: "14px",

            lineHeight: "60px",
          }

          }>
            <Breadcrumb.Item href="" style={{ color: "#FFFFFF", marginLeft: "20px" }}>
              <span>首页</span>
            </Breadcrumb.Item  >
            <Breadcrumb.Item href="" style={{ color: "#FFFFFF", }} >
              <span>定额数据管理</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ color: "#FDDB28", }} >定额</Breadcrumb.Item>
          </Breadcrumb>,
                    </div>
        <div className={styles.content}>
          <div className={styles.bt}> <p className={styles.contentp}></p> <h2>条件查询 :</h2></div>
          <Row >
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} >
              <div className={styles.box}>定额号:</div> <div className={styles.pox}><Input style={{ height: "40px", width: '85%' }} placeholder="请输入" /></div>
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} >
              <div className={styles.box}>定额项名称:</div><div className={styles.pox}>
                <InputGroup size="large" compact style={{ height: "50px", width: '200px' }}>
                  <Select defaultValue="请选择" style={{ width: "100%", height: "50px" }}>
                    <Option value="data1">Option1-1</Option>
                    <Option value="data2">Option1-2</Option>
                  </Select>
                </InputGroup>
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} >
              <div className={styles.box}>所属定额库:</div> <div className={styles.pox}>
                <InputGroup size="large" compact style={{ height: "50px", width: '200px' }}>
                  <Select defaultValue="请选择" style={{ width: "100%", height: "50px" }}>
                    <Option value="data1"  >Option1-1</Option>
                    <Option value="data2">Option1-2</Option>
                  </Select>
                </InputGroup>
              </div>
            </Col>
          </Row>
          <Row >

            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} >
              <div className={styles.box}>数据来源:</div><div className={styles.pox}>
                <InputGroup size="large" compact style={{ height: "50px", width: '200px' }}>
                  <Select defaultValue="请选择" style={{ width: "100%", height: "50px" }}>
                    <Option value="data1">Option1-1zzzzz</Option>
                    <Option value="data2">Option1-2</Option>
                  </Select>
                </InputGroup>
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} >
              <div className={styles.box}>工作类型:</div> <div className={styles.pox}>
                <InputGroup size="large" compact style={{ height: "50px", width: '220px' }}>
                  <Select defaultValue="请选择" style={{ width: "100%", height: "50px" }}>
                    <Option value="data1"  >Option1-1</Option>
                    <Option value="data2">Option1-2</Option>
                  </Select>
                </InputGroup>
              </div>
            </Col>


          </Row>
          <ul className={styles.btn}>
            <li>
              <Button type="primary" htmlType="submit" style={{ backgroundColor: "#237F7E", border: "1px solid #237F7E", height: "80%", width: "100%" }}>
                查询
                            </Button>
            </li>
            <li>
              <Button type="primary" htmlType="submit" style={{ backgroundColor: "#237F7E", border: "1px solid #237F7E", height: "80%", width: "100%" }}>
                重置
                            </Button>
            </li>
            <li>
              <Button type="primary"
                htmlType="submit"
                onClick={this.add}
                style={{ backgroundColor: "#237F7E", border: "1px solid #237F7E", height: "80%", width: "100%" }}>
                新增
                            </Button>
            </li>
            <li>
              <Button
                type="primary"
                htmlType="submit"
                onClick={this.amend}
                style={{
                  backgroundColor: "#237F7E",
                  border: "1px solid #237F7E", height: "80%",
                  width: "100%",
                }}
                disabled={checkState}
              >
                修改
                            </Button>
            </li>
            <li>
              <Button type="primary"
                htmlType="submit"
                onClick={this.detail}
                style={{ backgroundColor: "#237F7E", border: "1px solid #237F7E", height: "80%", width: "100%" }}
                disabled={delState}
              >
                删除
                            </Button>
              <Modal
                title="删除"
                visible={this.state.detailmodel}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                closable={false}
                keyboard={true}
                centered={true}
              >
                <p>您确定要删除此物料审查规则吗？</p>
              </Modal>
            </li>
          </ul>

          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            bordered
            style={{ marginTop: "50px", }}

          />,
                    </div>
      </div>
    )
  }

}








export default Quota;