<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="id"
                    label="编号">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="图书名">
            </el-table-column>
            <el-table-column
                    prop="author"
                    label="作者">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作">
                <template slot-scope="scope">
                    <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
                    <el-button @click="deleteBook(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="pageTotal"
                @current-change="page">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "PageOne",
        data() {
            return {
                tableData: [
                    {
                        id: 1,
                        name: '解忧杂货店',
                        author: '东野圭吾'
                    },
                    {
                        id: 2,
                        name: '追风筝的人',
                        author: '卡勒德·胡赛尼'
                    }
                ],
                pageSize: 5,
                pageTotal: 30
            }
        },
        methods: {
            edit(row) {
                console.log(row);
                this.$router.push({
                    path: '/bookUpdate',
                    query: {
                        id: row.id
                    }
                });
            },
            page(curPage){
                const _this = this;
                axios.get('http://localhost:8181/book/findAllByPage/' + (curPage-1) + '/' + _this.pageSize).then(res => {
                    console.log(res);
                    _this.tableData = res.data.content;
                    _this.pageTotal = res.data.totalElements;
                });
            },
            deleteBook(row){
                debugger;
                axios.delete('http://localhost:8181/book/deleteById/' + row.id).then(resp => {
                    if(resp.status == '200'){
                        this.$alert('《' + row.name + '》删除成功！', '消息', {
                            confirmButtonText: '确定',
                            callback: action => {
                                window.location.reload();
                            }
                        })
                    }else{
                        this.$alert('删除失败！');
                    }
                })
            }
        },
        created() {
            const _this = this;
            axios.get('http://localhost:8181/book/findAllByPage/0/' + _this.pageSize).then(res => {
               console.log(res);
               _this.tableData = res.data.content;
               _this.pageTotal = res.data.totalElements;
            });
        }
    }
</script>

<style scoped>

</style>