<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width: 60%">
            <el-form-item label="图书编号" prop="name">
                <el-input v-model="ruleForm.id" disabled></el-input>
            </el-form-item>
            <el-form-item label="图书名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="作者" prop="author">
                <el-input v-model="ruleForm.author"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "BookUpdate",
        data() {
            return {
                ruleForm: {
                    id: '',
                    name: '',
                    author: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入图书名称', trigger: 'blur' },
                        { min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur' }
                    ],
                    author: [
                        { required: true, message: '请输入作者姓名', trigger: 'blur' },
                        { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://localhost:8181/book/update', this.ruleForm).then(resp => {
                            console.log(resp);
                            if(resp.data == 'success'){
                                // this.$message('添加成功！')
                                // this.$refs[formName].resetFields();
                                // this.$router.push('/BookManger');
                                this.$alert('《'+ this.ruleForm.name +'》修改成功', '提示', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        this.$router.push('/BookManger');
                                    }
                                })

                            }else{
                                this.message('添加失败！')
                            }
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        created() {
            const id = this.$route.query.id
            axios.get('http://localhost:8181/book/queryById/' + id).then(resp => {
                this.ruleForm = resp.data;
            })
        }
    }
</script>

<style scoped>

</style>