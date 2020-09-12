<template>
  <div id="visual" style="height:100%"></div>
</template>
<script>
  import echarts from 'echarts'
  import {convertData,renderItem,geoCoordMap,dataValue} from '@/utils/visual.js'
    export default {
        name: 'visual',
        data () {
            return {
               
            }
        },
        methods:{
            drawPie(id){
               let option = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }]
                }

                var charts = echarts.init(document.getElementById(id))
                charts.setOption(option,true)
        
            }
        },
        mounted(){
            this.drawPie('visual')
        }
    }
</script>
<style lang='stylus' scoped>
  .visual
    width 100%
</style>