<template>
    <div class="content_style">
        <div v-for="form in ruleForm" :key="form.key" class="all_content">
            <el-button :disabled="ruleForm.length === 1" class="delete_class_form" type="text" @click="deleteForm(ruleForm, form.key)">删除</el-button>
            <div class="form1_content">
                <el-form
                    ref="ruleForm1"
                    class="form"
                    :model="form.ruleForm1"
                    label-width="100px"
                >
                    <el-form-item label="清单名称" prop="name" :rules="rules.name">
                        <el-input v-model="form.ruleForm1.name"></el-input>
                    </el-form-item>
                    <el-form-item label="清单类型" prop="type">
                        <el-select v-model="form.ruleForm1.type" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <div>
                <div v-for="(item, j) in form.ruleForm2" :key="item.key" class="form2_content">
                    <el-form class="form" :ref="`ruleForm2-${item.key}`" :model="item" label-width="100px">
                        <el-button :disabled="form.ruleForm2.length === 1" class="delete_class_form2" type="text" @click="deleteForm(form.ruleForm2, item.key)">删除</el-button>
                        <el-form-item :label="`活动名称${j+1}`" prop="name" :rules="rules.name">
                            <el-input v-model="item.name"></el-input>
                        </el-form-item>
                        <el-form-item label="活动类型" prop="type">
                            <el-select v-model="item.type" placeholder="请选择">
                                <el-option
                                    v-for="val in options"
                                    :key="val.value"
                                    :label="val.label"
                                    :value="val.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-for="(extra, k) in item.extraInfo" :key="extra.key" :label="`备注${k+1}`" :prop="`extraInfo.${k}.value`" :rules="rules.extraInfo">
                            <el-input v-model="extra.value"></el-input>
                            <el-button v-if="item.extraInfo.length !== 1" type="text" icon="el-icon-minus" class="delete_extra_class" @click="deleteForm(item.extraInfo, extra.key)"></el-button>
                            <el-button v-if="k === item.extraInfo.length-1" type="text" icon="el-icon-plus" class="add_extra_class" @click="addForm(item.extraInfo, 'extra')"></el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <el-button plain type="text" icon="el-icon-plus" class="add_form2_class" @click="addForm(form.ruleForm2, 'form2')"></el-button>
            </div>
        </div>
        <el-button plain type="text" icon="el-icon-plus" class="add_form_class" @click="addForm(ruleForm, 'form')"></el-button>
        <div class="button_group">
            <el-button type="primary" class="reset" size="small" @click="reset">重置</el-button>
            <el-button type="primary" class="confirm" size="small" @click="confirm">确定</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: [this.getDefaultForm(new Date().getTime())],
            options: [
                {value: '1',label: '黄金糕'}, 
                {value: '2',label: '双皮奶'}, 
                {value: '3',label: '蚵仔煎'}, 
                {value: '4',label: '龙须面'}, 
                {value: '5',label: '北京烤鸭'}
            ],
            rules: {
                name: [{required: true, message: '名称必填', trigger: ['change', 'blur']}],
                extraInfo: [{required: true, message: '备注必填', trigger: ['change', 'blur']}],
            }
        }
    },
    methods: {
        getDefaultForm2(baseKey) {
            return {
                name: '', 
                type:'', 
                key: `${baseKey}-form2`, 
                extraInfo: [this.getDefaultExtra(baseKey)]
            }
        },
        getDefaultExtra(baseKey) {
            return {
                value:'', 
                key: `${baseKey}-extra`
            }
        },
        getDefaultForm(baseKey) {
            return {
                ruleForm1: {name: '', type: ''},
                ruleForm2: [this.getDefaultForm2(baseKey)],
                key: `${baseKey}-form1`
            }
        },
        deleteForm(item, key) {
            const index = item.findIndex(v => v.key === key)
            if(index !== -1) {
                item.splice(index, 1)
            }
        },
        addForm(item, type) {
            const baseKey = new Date().getTime()
            const addMethod = {
                extra: this.getDefaultExtra,
                form: this.getDefaultForm,
                form2: this.getDefaultForm2
            }[type]
            item.push(addMethod(baseKey))
        },
        reset() {
            this.ruleForm = [this.getDefaultForm(new Date().getTime())];
        },
        confirm() {
            this.$confirm('确定提交?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '提交成功'
                });
            }).catch(() => {});
        }
    }
    
}
</script>
<style scoped lang="scss">
::v-deep.el-input {
    width: 200px
}
.add_form2_class,.add_form_class {
    width: 100%;
    border: 1px solid #ddd;
}

.all_content, .form2_content, .form1_content {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-align: left;
}
.all_content {
    text-align: end;
}
.delete_class_form2 {
    position: absolute;
    right: 40px;
    margin-bottom: 10px;
    z-index: 10;
}
.content_style {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
.button_group {
    padding: 20px 0 10px 0;
    text-align: center;
}
</style>