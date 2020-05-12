<template>
  <div>
    <el-row :gutter="20">
      <el-col :span='6'>
        <div class="pb-10">
          <el-button type='primary' size='small' @click="handleReg">生成</el-button>
          <el-button size='small' @click="exportExcel">导出</el-button>
        </div>
        <el-input
          type="textarea"
          placeholder="请输入内容"
          rows='31'
          v-model="textarea">
        </el-input>
      </el-col>
      <el-col :span='18'>
        <el-table
          :data="data"
          height='700'
          width='500'
          id="table"
        >
          <el-table-column type="index" label='序号'/>
          <el-table-column prop="plate" label="车号"/>
          <el-table-column prop="name" label="姓名"/>
          <el-table-column prop="id" label="身份证"/>
          <el-table-column prop="phone" label="电话"/>
          <el-table-column prop="dun" label="吨数"/>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import ExportJsonExcel from 'js-export-excel'

import { Table, TableColumn, Col, Row, Input, Button, Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue
.use(Table)
.use(TableColumn)
.use(Row)
.use(Col)
.use(Input)
.use(Button)

export default {
  name: 'exportData',
  data () {
    return {
      data: [],
      textarea: ''
    }
  },
  created () {
    
  },
  methods: {
    exportExcel () {
      if (!this.data.length) {
        return Message({
          message: '请输入数据',
          type: 'warning'
        })
      }
      const data = this.data
      var option={};
      option.fileName = 'excel'
      option.datas=[
        {
          sheetData: data,
          sheetName:'sheet',
          sheetFilter:['index','plate', 'name', 'id', 'phone', 'dun'],
          sheetHeader:['序号','车号', '姓名', '身份证', '电话', '吨数'],
          columnWidths: [5, 6, 6, 10, 6, 6]
        }
      ];

      var toExcel = new ExportJsonExcel(option); //new
      toExcel.saveExcel(); //保存
    },
    handleReg (){
      if (!this.textarea) {
        return Message({
          message: '请输入数据',
          type: 'warning'
        })
      }
      var plateReg = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}/g
      var idReg = /[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]/g
      var phoneReg = /1[2-9][0-9]{9}/g
      var nameReg = /[\u4e00-\u9fa5]{2,3}/g
      
      var textarea = this.textarea

      textarea = textarea.split(`提32吨`).map(val => {
        return val.trim()
      })
      var arr = []
      textarea.forEach((val, i) => {
        var copy = val
        var obj = {
          plate: copy.match(plateReg).join(``),
          id: copy.match(idReg).join(''),
          name: '',
          phone: '',
          dun: 32,
          index: i + 1
        }
        copy = copy.replace(/[司机身份证电话]/g, '')

        name = copy.match(nameReg).join('')
        obj.name = name
        // 将身份证删除  以便匹配手机号
        if (obj.id) {
          copy = copy.replace(obj.id, '')
        }
        obj.phone = copy.match(phoneReg).join('')
        arr.push(obj)
      })
      this.data = arr
    }
  },
}
</script>

<style scoped>
.pb-10 {
  padding-bottom: 10px
}
</style>