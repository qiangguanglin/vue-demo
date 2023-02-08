<template>
  <div id="app">
    <h3>基本信息</h3>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="策略类型" prop="radio">
        <el-radio v-model="form.radio" label="1">禁售</el-radio>
        <el-radio v-model="form.radio" label="2">成本管理</el-radio>
      </el-form-item>
      <el-form-item label="策略名称" prop="name">
        <el-input class='input-class' v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="销售日期" prop="date">
        <el-date-picker
          v-model="form.date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="审批流程" prop="select">
        <el-select v-model="form.select" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

    </el-form>
    <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
    <el-button @click="resetForm('form')">重置</el-button>
  </div>
</template>




<script>
export default {
  data() {
    return{
      rules:{
        radio: [{ required: true, message: '请选择策略类型', trigger: ['blur','change']}],
        name: [{ required: true, message: '请输入策略名称', trigger: ['blur','change']}],
        date: [{ required: true, message: '请选择日期', trigger: ['blur','change']}],
        select: [{ required: true, message: '请选择审批流程', trigger: ['blur','change']}],
      },
      form: {
        radio: '',
        name: '',
        date: '',
        select: ''
      },
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('success submit!!');
            this.$message.success('success!');
          } else {
            console.log('error submit!!');
            this.$message.error('fail!');
            // return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style scoped>
  .input-class {
    width: 350px;
  }
</style>