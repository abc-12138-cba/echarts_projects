// 柱状图 左1
(function () {
    var myCharts = echarts.init(document.querySelector('div.bar .chart'));
    var option = {
        color: ["#2f89cf"],
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            //是否显示y轴上刻度
            containLabel: true,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                //指示器类型 shadow|line|nonoe|cross
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
            //x坐标轴上的样式设置
            axisLabel: {
                color: 'rgba(255,255,255,.6)',
                fontSize: "12"
            },
            //x坐标轴线
            axisLine: {
                show: false //不显示  
            }
        },
        yAxis: {
            type: 'value',
            //y坐标上字体样式
            axisLabel: {
                color: 'rgba(255,255,255,.6)',
                fontSize: "12"
            },
            //y坐标轴线
            axisLine: {
                lineStyle: {
                    //设置y轴线样式
                    color: "rgba(255,255,255,.1)",
                }
            },
            //y轴标度分割线
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1) '
                }
            }
        },
        series: [{
            data: [200, 300, 300, 900, 1500, 1200, 600],
            type: 'bar',
            //图形样式
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            },
            barWidth: '35%'
        }]
    };
    myCharts.setOption(option);
    //自适应
    window.addEventListener("resize", function () {
        myCharts.resize();
    });
})();

//柱形图 右1
(function () {
    let myCharts = echarts.init(document.querySelector('div.bar2 .chart'));
    let option = {
        // 图表位置
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%",
            containLabel: false
        },
        xAxis: {
            show: false
        },
        yAxis: [
            {//左侧y轴
                type: 'category',
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                //y轴线隐藏
                axisLine: {
                    show: false
                },
                //y轴刻度隐藏
                axisTick: {
                    show: false
                },
                //y轴刻度标签设置
                axisLabel: {
                    color: "#fff"
                }
            },
            {//右侧y轴
                type: 'category',
                data: [702, 350, 610, 793, 664],
                //翻转数据
                inverse: true,
                //y轴线隐藏
                axisLine: {
                    show: false
                },
                //y轴刻度隐藏
                axisTick: {
                    show: false
                },
                //y轴刻度标签设置
                axisLabel: {
                    color: "#fff"
                }
            }

        ],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                yAxisIndex: 0,
                //柱子之间距离
                barCategoryGap: 50,
                //柱子宽度
                barWidth: 10,
                //图形样式
                itemStyle: {
                    barBorderRadius: 20,
                    color: function (params) {
                        var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
                        // dataIndex 是当前柱子的索引号
                        return myColor[params.dataIndex];
                    }
                },
                //图形上的文字
                label: {
                    normal: {
                        show: true,
                        //柱形内显示
                        position: 'inside',
                        //数据 
                        formatter: '{c}%',
                        color: '#fff'
                    }
                }

            },
            {
                name: '框',
                type: 'bar',
                data: [100, 100, 100, 100, 100],
                yAxisIndex: 1,
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                }
            },

        ]
    };
    myCharts.setOption(option);
    //自适应
    window.addEventListener("resize", function () {
        myCharts.resize();
    });
})();

//折线图 左2
(function () {
    var yearData = [
        {
            year: '2020',  // 年份
            data: [  // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2021',  // 年份
            data: [  // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];
    var myCharts = echarts.init(document.querySelector('div.line .chart'));

    let option = {
        //颜色面板
        color: ['#00f2f1', '#ed3f35'],
        // 设置网格样式
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,//显示边框
            borderColor: "：#012f4a",//边框颜色
            containLabel: true // 包含刻度文字在内
        },
        //提示框组件
        tooltip: {
            trigger: 'axis',

        },
        //图例组件
        legend: {
            right: '18%',
            textStyle: {
                color: '#4c9bfd'
            }
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            //刻度
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                lineStyle: {
                    color: 'none'
                }
            },
            boundaryGap: false//去除内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        series: [{
            name: '新增粉丝',
            data: yearData[0].data[0],
            type: 'line',
            smooth: true,//是否平滑
        },
        {
            name: '新增游客',
            data: yearData[0].data[1],
            type: 'line',
            smooth: true,//是否平滑
        }]
    };
    myCharts.setOption(option);
    //自适应
    window.addEventListener("resize", function () {
        myCharts.resize();
    });

    //年份不同切换数据 
    $('.line h2 ').on('click', 'a', function (e) {
        // console.log($(this).index());//a的序号 
        $(e.target).addClass('active').siblings().removeClass('active')
        let targetData = yearData[$(this).index()].data;//Arr
        for (let i = 0; i < targetData.length; i++) {
            option.series[i].data = targetData[i]
        };
        //需重新渲染
        myCharts.setOption(option);
    })
})();

//折线图 右2 
(function () {
    var myCharts = echarts.init(document.querySelector('div.line2 .chart'));
    var option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: 12
            }
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                // 修改分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'line',
                smooth: true,
                symbol: 'circle',// 设置拐点 小圆点
                symbolSize: 8,//设置拐点大小
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                showSymbol: false,//// 开始不显示拐点， 鼠标经过显示
                lineStyle: {
                    color: "#0184d5",
                    width: '2'
                },
                //折线图的高亮状态。
                emphasis: {
                    lineStyle: {
                        //线宽设置为2
                        width: 2
                    }
                },
                //填充区域
                areaStyle: {
                    //渐变色
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.9)"   // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
            },
            {
                name: '搜索引擎',
                type: 'line',
                smooth: true,
                showsymbol: false,
                symbol: 'circle',
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
            }
        ]
    };

    myCharts.setOption(option);
    //自适应
    window.addEventListener("resize", function () {
        myCharts.resize();
    });


})();

//饼状图 左3
(function () {
    var myCharts = echarts.init(document.querySelector('div.pie .chart'));

    let option = {
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
        ],
        tooltip: {
            trigger: 'item',
            //a : series里的name;b:data中的name;c:data中的value;d:计算得到的百分比
            formatter: '{a}<br/>{b}: {c} {d}%'
        },
        legend: {
            // 距离底部为0%
            bottom: "0%",
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '50%'],
                //修改内圆与外圆半径
                radius: ['40%', '60%'],
                //labelLine、label 引导线与对应文字
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ]
            }
        ]
    };
    myCharts.setOption(option);
    //自适应
    window.addEventListener("resize", function () {
        myCharts.resize();
    });
})();

//饼状图 右3
(function () {
    var myCharts = echarts.init(document.querySelector('div.pie2 .chart'));

    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        legend: {
            top: 'bottom',
            // 修改图例组件的文字为 12px
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        //提示框
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: '点位统计',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                label: {
                    fontSize: 10,
                    color: "rgba(255,255,255,.5)"
                },
                //引导线
                labelLine: {
                    // 连接扇形图线长
                    length: 8,
                    // 连接文字线长
                    length2: 8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ]
            }
        ]
    };
    myCharts.setOption(option);
    //自适应
    window.addEventListener("resize", function () {
        myCharts.resize();
    });
})();

 

