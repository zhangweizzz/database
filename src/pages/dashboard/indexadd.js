import React, {Component,Fragment} from 'react';
import { connect } from 'dva';
import { Row, Col, Breadcrumb, Icon,Layout, Menu, Input,Select,InputNumber, Button,Table,Checkbox,Upload, message } from 'antd';

import styles from './quoat.less';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const InputGroup = Input.Group;
const { Option } = Select;


const data=[
    {
        key:"1",
        mingchen:"名称",
        danwei:"20m",
        shuliang:100
  
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
   
]

const columns=[
    {
        title:'名称',
        dataIndex:'mingchen',
        
     

    },
    {
        title:'单位',
        dataIndex:'danwei',
       
    },
    {
        title:'数量',
        dataIndex:'shuliang',
     
    },
 

   
    
   
]
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
  

class indexadd extends Component {

   
    
    



    render(){

      

        return(
            <div >    
                    <div className={styles.top}>
                        <div className={styles.title}>定额
                        </div>     
                         <Breadcrumb style={{
                         fontSize:"14px",
                        
                         lineHeight:"60px",
                         }
                            
                         }>
    <Breadcrumb.Item href=""style={{  color:"#FFFFFF",marginLeft:"20px"}}>
    <span>首页</span>
    </Breadcrumb.Item  >
    <Breadcrumb.Item href=""style={{  color:"#FFFFFF",}} >
      <span>定额数据管理</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item href=""style={{  color:"#FFFFFF",}} >
      <span>定额库</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item style={{  color:"#FDDB28",}} >新增</Breadcrumb.Item>
    </Breadcrumb>
                        <div className={styles.indexaddcontent}>

                        <div className={styles.bt}> <p className={styles.contentp}></p> <h2>新增:</h2></div>
                        <Row >
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} >
                        <div className={styles.box}>定额库编号:</div> <div className={styles.pox}><Input style={{height:"40px" , width: '85%'}} placeholder="请输入" /></div>
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} >
                        <div className={styles.box}>定额库名称:</div> <div className={styles.pox}><Input style={{height:"40px" , width: '85%'}} placeholder="请输入" /></div>
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} >
                        <div className={styles.box}>定额库类型:</div> <div className={styles.pox}><Input style={{height:"40px" , width: '85%'}} placeholder="请输入" /></div>
                        </Col>
                    </Row>
                    <Row >
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} >
                        <div className={styles.zox}>是否常用定额库:</div> <div className={styles.pox}><Checkbox onChange={onChange}>是</Checkbox><Checkbox onChange={onChange}>否</Checkbox></div>
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} >
                        <div className={styles.box}>发布单位:</div><div className={styles.pox}>
                        <InputGroup size="large" compact style={{height:"50px" , width: '200px'}}>
                  <Select defaultValue="工程类型"  style={{width:"100%",height:"50px"}}>
            <Option value="data1">Option1-1</Option>
            <Option value="data2">Option1-2</Option>
            </Select>
                </InputGroup>
                            </div>
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} >
                        <div className={styles.box}>发布时间:</div> <div className={styles.pox}><Input style={{height:"40px" , width: '85%'}} placeholder="请输入" /></div>
                        </Col>
                    </Row>
                    <Row >
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} >
                        <div className={styles.box}>适用工程:</div> <div className={styles.pox}><Input style={{height:"40px" , width: '85%'}} placeholder="请输入" /></div>
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} >
                        <div className={styles.box}>当前状态:</div><div className={styles.pox}>
                        <InputGroup size="large" compact style={{height:"50px" , width: '200px'}}>
                  <Select defaultValue="待初始化"  style={{width:"100%",height:"50px"}}>
            <Option value="data1">Option1-1</Option>
            <Option value="data2">Option1-2</Option>
            </Select>
                </InputGroup>
                            </div>
                        </Col>
                       
                    </Row>


                    <Row >
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} >
                        <div className={styles.zox} >导入定额文件:</div>
                         <div className={styles.pox}>
                             <Input style={{height:"40px" , width: '65%'}} placeholder="请输入" />
                             <Upload {...props} style={{float:"left"}}>
    <Button style={{backgroundColor:"#237F7E",color:"#FFFFFF"}}>
      导入
    </Button>
  </Upload>,
                        </div>
             
                        </Col>
                       
                    </Row>
                         {/* 分割线 */}
                         {/* <div className={styles.bt}> 
                         <p className={styles.contentp}></p>
                          <p className={styles.twop}>人工:</p>
                          <div className={styles.addname}>添加</div>
                          <div className={styles.removes}>删除</div>
                         </div>
                          <Table
                   
                   columns={columns}
                    dataSource={data}
                    bordered
                    pagination={ false }
                    />


            <div className={styles.bta}> 
                         <p className={styles.contentpa}></p>
                          <p className={styles.twopa}>计价材料:</p>
                          <div className={styles.addnamea}>添加</div>
                          <div className={styles.removesa}>删除</div>
                         </div>
                         <Table
                   
                   columns={columns}
                    dataSource={data}
                    bordered
                    pagination={ false }
                    />
    <div className={styles.bta}> 
                         <p className={styles.contentpa}></p>
                          <p className={styles.twopa}>机械:</p>
                          <div className={styles.addnamea}>添加</div>
                          <div className={styles.removesa}>删除</div>
                         </div>
                         <Table
                   
                   columns={columns}
                    dataSource={data}
                    bordered
                    pagination={ false }
                    /> */}

                         <div className={styles.footera}>
                             <Button style={{backgroundColor:"#237F7E", color:"#FFFFFF",marginRight:"4%"}}>保存</Button>
                             <Button style={{backgroundColor:"#237F7E",color:"#FFFFFF"}}>取消</Button>
                         </div>
                        </div>
                    </div> 
            </div>
        )
    }

}
	
		  
		 

         
	


export default indexadd;
