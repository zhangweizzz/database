import React, { PureComponent } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入柱饼图
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legendScroll';

import { Card, Tabs, Collapse, Table, Icon } from 'antd';
const TabPane = Tabs.TabPane;

export default class Bar extends PureComponent {
  componentDidMount() {
     /*  let data=this.props.yname;
      console.log(data); */
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart'));
        // 绘制图表
    myChart.setOption({

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            data: ['通过','不通过',]
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:800, name:'通过'},
                    {value:200, name:'不通过'},

                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
        });
    }

  render() {
    return (
      <div>

            <div id="echart" style={{ width:"100%", height: "100%" }}></div>
      </div>
    );
  }
}
