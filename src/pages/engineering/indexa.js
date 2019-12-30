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
import styles from './indexa.less';

const InputGroup = Input.Group;
const { Option } = Select;


const columns=[
    {
        title:'编号',
        dataIndex:'bh',

    },
    {
        title:'名称',
        dataIndex:'mc',
    },
    {
        title:'单位',
        dataIndex:'dw',
    },
    {
        title:'使用量',
        dataIndex:'syl',
    },
{

    title:"定额价格",
    children: [
        {
            title:"定额单价",
            dataIndex:"de",
        },
        {
            title:"人工单价",
            dataIndex:"rg",
        }
        ,{
            title:"机械单价",
            dataIndex:"jx",
        }
      ],
},
{
    title:"费用合计",
    children: [
        {
            title:"定额单价",
            dataIndex:"de",
        },
        {
            title:"人工单价",
            dataIndex:"rg",
        }
        ,{
            title:"机械单价",
            dataIndex:"jx",
        }
      ],  
},
{
    title:"审定合计",
    children: [
        {
            title:"定额单价",
            dataIndex:"de",
        },
        {
            title:"人工单价",
            dataIndex:"rg",
        }
        ,{
            title:"机械单价",
            dataIndex:"jx",
        }
      ], 
},
{
    title:"价差",
    dataIndex:'cj'
}
]


const columnsz=[
    {
        title:'取费类型',
        dataIndex:'bh',

    },
    {
        title:'编号',
        dataIndex:'mc',
    },
    {
        title:'名称',
        dataIndex:'dw',
    },
    {
        title:'单位',
        dataIndex:'syl',
    },
    {
        title:'使用量',
        dataIndex:'yl',
    },
{

    title:"单价不含税（元）",
    children: [
        {
            title:"定额单价",
            dataIndex:"de",
        },
        {
            title:"人工单价",
            dataIndex:"rg",
        }
        ,{
            title:"机械单价",
            dataIndex:"jx",
        }
      ],
},
{
    title:"单价不含税（元）",
    children: [
        {
            title:"定额单价",
            dataIndex:"de",
        },
        {
            title:"人工单价",
            dataIndex:"rg",
        }
        ,{
            title:"机械单价",
            dataIndex:"jx",
        }
      ],  
},
{
    title:"单价不含税（元）",
    children: [
        {
            title:"定额单价",
            dataIndex:"de",
        },
        {
            title:"人工单价",
            dataIndex:"rg",
        }
        ,{
            title:"机械单价",
            dataIndex:"jx",
        }
      ], 
},
{
    title:"价差",
    dataIndex:'cj'
}
]
const  data=[
    {
    key:"1",
    bh:"编号",
    mc:"名称",
    dw:"单位",
    syl:"使用量",
    de:"定额价格",
    rg:"人工价格",
    jx:"机械单价",
    cj:'价差',
    

    },
    {
        key:"2",
        bh:"编号",
        mc:"名称",
        dw:"单位",
        syl:"使用量",
        de:"定额价格",
        rg:"人工价格",
        jx:"机械单价",
        cj:'价差'
    
        },
        {
            key:"3",
            bh:"编号",
            mc:"名称",
            dw:"单位",
            syl:"使用量",
            de:"定额价格",
            rg:"人工价格",
            jx:"机械单价",
            cj:'价差'
            },
        {
                key:"4",
                bh:"编号",
                mc:"名称",
                dw:"单位",
                syl:"使用量",
                de:"定额价格",
                rg:"人工价格",
                jx:"机械单价",
                cj:'价差'
            
         },
         {
            key:"5",
            bh:"编号",
            mc:"名称",
            dw:"单位",
            syl:"使用量",
            de:"定额价格",
            rg:"人工价格",
            jx:"机械单价",
            cj:'价差'
        
     },
     {
        key:"6",
        bh:"编号",
        mc:"名称",
        dw:"单位",
        syl:"使用量",
        de:"定额价格",
        rg:"人工价格",
        jx:"机械单价",
        cj:'价差'
    
 },
 {
    key:"7",
    bh:"编号",
    mc:"名称",
    dw:"单位",
    syl:"使用量",
    de:"定额价格",
    rg:"人工价格",
    jx:"机械单价",
    cj:'价差'

},
{
    key:"8",
    bh:"编号",
    mc:"名称",
    dw:"单位",
    syl:"使用量",
    de:"定额价格",
    rg:"人工价格",
    jx:"机械单价",
    cj:'价差'

},
{
    key:"8",
    bh:"编号",
    mc:"名称",
    dw:"单位",
    syl:"使用量",
    de:"定额价格",
    rg:"人工价格",
    jx:"机械单价",
    cj:'价差'

},
{
    key:"8",
    bh:"编号",
    mc:"名称",
    dw:"单位",
    syl:"使用量",
    de:"定额价格",
    rg:"人工价格",
    jx:"机械单价",
    cj:'价差'

},

]
const  dataz=[
    {
    key:"1",
    bh:"编号",
    mc:"名称",
    dw:"单位",
    syl:"使用量",
    de:"定额价格",
    rg:"人工价格",
    jx:"机械单价",
    cj:'价差'

    },
    {
        key:"2",
        bh:"编号",
        mc:"名称",
        dw:"单位",
        syl:"使用量",
        de:"定额价格",
        rg:"人工价格",
        jx:"机械单价",
        cj:'价差'
    
        },
        {
            key:"3",
            bh:"编号",
            mc:"名称",
            dw:"单位",
            syl:"使用量",
            de:"定额价格",
            rg:"人工价格",
            jx:"机械单价",
            cj:'价差'
            },
        {
                key:"4",
                bh:"编号",
                mc:"名称",
                dw:"单位",
                syl:"使用量",
                de:"定额价格",
                rg:"人工价格",
                jx:"机械单价",
                cj:'价差'
            
         },
         {
            key:"5",
            bh:"编号",
            mc:"名称",
            dw:"单位",
            syl:"使用量",
            de:"定额价格",
            rg:"人工价格",
            jx:"机械单价",
            cj:'价差'
        
     },
     {
        key:"6",
        bh:"编号",
        mc:"名称",
        dw:"单位",
        syl:"使用量",
        de:"定额价格",
        rg:"人工价格",
        jx:"机械单价",
        cj:'价差'
    
 },
 {
    key:"7",
    bh:"编号",
    mc:"名称",
    dw:"单位",
    syl:"使用量",
    de:"定额价格",
    rg:"人工价格",
    jx:"机械单价",
    cj:'价差'

},
{
    key:"8",
    bh:"编号",
    mc:"名称",
    dw:"单位",
    syl:"使用量",
    de:"定额价格",
    rg:"人工价格",
    jx:"机械单价",
    cj:'价差'

},
{
    key:"8",
    bh:"编号",
    mc:"名称",
    dw:"单位",
    syl:"使用量",
    de:"定额价格",
    rg:"人工价格",
    jx:"机械单价",
    cj:'价差'

},
{
    key:"8",
    bh:"编号",
    mc:"名称",
    dw:"单位",
    syl:"使用量",
    de:"定额价格",
    rg:"人工价格",
    jx:"机械单价",
    cj:'价差'

},

]
class indexa extends Component {
  constructor() {
    super();
    this.state = {
      flag: 1,

    };
  }
  card1 = () => {
    this.setState({
      flag: 1,
    });
    
  };
  card2 = () => {
    this.setState({
      flag: 2,
    });
  };
  card3 = () => {
    this.setState({
      flag: 3,
    });
  };

  render() {
    const { flag } = this.state;
    // console.log(flag)
    return (
      <div>
        <div className={styles.top}>
          <div className={flag==1 ? styles.title : styles.active} onClick={this.card1}>
          工程量对比明细表
          </div>
          <div className={flag==2 ? styles.title2 : styles.active2} onClick={this.card2}>
          物料对比明细表
          </div>
          <div className={flag==3? styles.title2 : styles.active2} onClick={this.card3}>
          取费对比明细表
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
              <span>工程管理</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="" style={{ color: '#FDDB28', fontSize: '14px' }}>
              <span>工程量对比明细表</span>
            </Breadcrumb.Item>
            {/* <Breadcrumb.Item style={{ color: '#FDDB28', fontSize: '14px' }}>
              {flag ? '取费表' : '取费规则'}
            </Breadcrumb.Item> */}
          </Breadcrumb>
        </div>
        {/* 取费表 */}
        {flag==1 && (
          <div className={styles.content}>
           <Table
       
                      columns={columns}
                       dataSource={data}
                       bordered
                       style={{marginTop:"20px",}}
                       pagination={ false }
                       />,
         
          </div>
        )}
        {/* 取费规则 */}
        {flag==2&& (
          <div className={styles.content}>
     

         
          </div>
        )}

                {flag==3&& (
          <div className={styles.content}>
         
         <Table
       
       columns={columnsz}
        dataSource={dataz}
        bordered
        style={{marginTop:"20px",}}
        pagination={ false }
        />,
         
          </div>
        )}
      </div>
    );
  }
}

export default indexa;
