import React, {Component,Fragment} from 'react';
import { connect } from 'dva';
import { Row, Col, Breadcrumb, Icon,Layout, Menu, Input,Select,InputNumber, Button,Table} from 'antd';

import styles from './index.less';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const InputGroup = Input.Group;
const { Option } = Select;



const columns=[
    {
        title:'编号',
        dataIndex:'biaoji',
        render: (text, record) => <a href="/engineering/detail">{record.biaoji}</a>,

    },
    {
        title:'名称',
        dataIndex:'bianhao',
        render: (text, record) => <a href="/engineering/detail">{record.bianhao}</a>,
    },
    {
        title:'性质',
        dataIndex:'mingchen',
        render: (text, record) => <a href="/engineering/detail">{record.mingchen}</a>,
    },
    {
        title:'类型',
        dataIndex:'danwei',
        render: (text, record) => <a href="/engineering/detail">{record.danwei}</a>,
    },
,
    
        {
            title:"项目划分",
            dataIndex:"rengong",
            render: (text, record) => <a href="/engineering/detail">{record.rengong}</a>,
        },
        {
            title:"预算类型",
            dataIndex:"cailiao",
            render: (text, record) => <a href="/engineering/detail">{record.cailiao}</a>,
        }
        ,{
            title:"电压类型",
            dataIndex:"jixie",
            render: (text, record) => <a href="/engineering/detail">{record.jixie}</a>,
        },
        {
            title:"项目时间",
            dataIndex:"time", 
            render: (text, record) => <a href="/engineering/detail">{record.time}</a>,
        }
      

   
    
   
]
const data=[
    {
        key:"1",
        biaoji:"标记",
        bianhao:"定额编号",
        mingchen:"项目名称",
        danwei:"单位",
        rengong:"人工费",
        cailiao:"材料费",
        jixie:"机械费",
        time:"项目时间"
    },
    {
        key:"2",
        biaoji:"标记",
        bianhao:"定额编号",
        mingchen:"项目名称",
        danwei:"单位",
        rengong:"人工费",
        cailiao:"材料费",
        jixie:"机械费" ,
        time:"项目时间"
    },
    {
        key:"3",
        biaoji:"标记",
        bianhao:"定额编号",
        mingchen:"项目名称",
        danwei:"单位",
        rengong:"人工费",
        cailiao:"材料费",
        jixie:"机械费" ,
        time:"项目时间"
    },
    {
        key:"4",
        biaoji:"标记",
        bianhao:"定额编号",
        mingchen:"项目名称",
        danwei:"单位",
        rengong:"人工费",
        cailiao:"材料费",
        jixie:"机械费" ,
        time:"项目时间"
    },
    {
        key:"5",
        biaoji:"标记",
        bianhao:"定额编号",
        mingchen:"项目名称",
        danwei:"单位",
        rengong:"人工费",
        cailiao:"材料费",
        jixie:"机械费" , 
        time:"项目时间"
    }
   
]
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

class index extends Component {
    


    render(){
        return(
            <div>
                <div className={styles.top}>
                        <div className={styles.title}>工程管理
                        </div>     
                         <Breadcrumb style={{
                         fontSize:"14px",
                        
                         lineHeight:"60px",
                         }
                            
                         }>
    <Breadcrumb.Item href=""style={{  color:"#FFFFFF",marginLeft:"20px"}}>
    <span>首页</span>
    </Breadcrumb.Item  >
  
    <Breadcrumb.Item style={{  color:"#FDDB28",}} >工程管理</Breadcrumb.Item>
    </Breadcrumb>,
                    </div> 
                    <div className={styles.content}>
                   <div className={styles.bt}> <p className={styles.contentp}></p> <h2>条件查询 :</h2></div>
                   <Row >
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} >
                        <div className={styles.box}>定额号:</div> <div className={styles.pox}><Input style={{height:"40px" , width: '85%'}} placeholder="请输入" /></div>
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} >
                        <div className={styles.box}>定额项名称:</div><div className={styles.pox}>
                        <InputGroup size="large" compact style={{height:"50px" , width: '200px'}}>
          <Select defaultValue="请选择"  style={{width:"100%",height:"50px"}}>
            <Option value="data1">Option1-1</Option>
            <Option value="data2">Option1-2</Option>
          </Select>
        </InputGroup>
                            </div>
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} >
                        <div className={styles.box}>所属定额库:</div> <div className={styles.pox}>
                        <InputGroup size="large" compact style={{height:"50px" , width: '200px'}}>
          <Select defaultValue="请选择" style={{width:"100%",height:"50px"}}>
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
                        <InputGroup size="large" compact style={{height:"50px" , width: '200px'}}>
          <Select defaultValue="请选择"  style={{width:"100%",height:"50px"}}>
            <Option value="data1">Option1-1zzzzz</Option>
            <Option value="data2">Option1-2</Option>
          </Select>
        </InputGroup>
                            </div>
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} >
                        <div className={styles.box}>工作类型:</div> <div className={styles.pox}>
                        <InputGroup size="large" compact style={{height:"50px" , width: '220px'}}>
          <Select defaultValue="请选择" style={{width:"100%",height:"50px"}}>
            <Option value="data1"  >Option1-1</Option>
            <Option value="data2">Option1-2</Option>
          </Select>
        </InputGroup>
                            </div>
                         </Col>
                             
                 
                    </Row>
                     <ul className={styles.btn}>
                            <li>
                            <Button type="primary" htmlType="submit" style={{backgroundColor:"#237F7E",border:"1px solid #237F7E",height:"80%",width:"100%"}}>
                                 查询
                            </Button>    
                            </li> 
                            <li>
                            <Button type="primary" htmlType="submit" style={{backgroundColor:"#237F7E",border:"1px solid #237F7E",height:"80%",width:"100%"}}>
                                    重置
                            </Button> 
                            </li>      
                            <li>
                            <Button type="primary" 
                            htmlType="submit"
                            
                             style={{backgroundColor:"#237F7E",border:"1px solid #237F7E",height:"80%",width:"100%"}}>
                                    新增
                            </Button> 
                            </li>   
                            <li>
                            <Button
                             type="primary"
                              htmlType="submit" 
                          
                              style={{backgroundColor:"#237F7E",
                              border:"1px solid #237F7E",height:"80%",
                              width:"100%",
                              }}>
                                 修改
                            </Button> 
                            </li>   
                            <li>
                            <Button type="primary" htmlType="submit" style={{backgroundColor:"#237F7E",border:"1px solid #237F7E",height:"80%",width:"100%"}}>
                                 删除
                            </Button> 
                            </li>   
                    </ul>

                    <Table
                     rowSelection={rowSelection}
                      columns={columns}
                       dataSource={data}
                       bordered
                       style={{marginTop:"50px",}}
                      
                       />,
                    </div>
            </div>
        )
    }

}
	
		  
		 

         
	


export default index;