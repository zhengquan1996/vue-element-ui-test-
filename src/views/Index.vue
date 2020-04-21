<template>
    <router-view></router-view>
<!--    <el-container style="height: 500px; border: 1px solid #eee">-->
<!--        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">-->
<!--            &lt;!&ndash;        default-openeds：默认 展出的菜单 default-active:默认选中&ndash;&gt;-->
<!--            &lt;!&ndash;        <el-menu :default-openeds="['1']" :default-active="'1-1'">&ndash;&gt;-->
<!--            &lt;!&ndash;          <el-submenu index="1">&ndash;&gt;-->
<!--            &lt;!&ndash;            <template slot="title"><i class="el-icon-message"></i>导航一</template>&ndash;&gt;-->
<!--            &lt;!&ndash;&lt;!&ndash;            设置菜单的子节点&ndash;&gt;&ndash;&gt;-->
<!--            &lt;!&ndash;              <el-menu-item index="1-1">选项1</el-menu-item>&ndash;&gt;-->
<!--            &lt;!&ndash;              <el-menu-item index="1-2">选项2</el-menu-item>&ndash;&gt;-->
<!--            &lt;!&ndash;              <el-submenu index="1-3">&ndash;&gt;-->
<!--            &lt;!&ndash;                <template slot="title"><i class="el-icon-apple"></i>选项3</template>&ndash;&gt;-->
<!--            &lt;!&ndash;                <el-menu-item index="1-3-1">内容1</el-menu-item>&ndash;&gt;-->
<!--            &lt;!&ndash;                <el-menu-item index="1-3-2">内容2</el-menu-item>&ndash;&gt;-->
<!--            &lt;!&ndash;              </el-submenu>&ndash;&gt;-->
<!--            &lt;!&ndash;          </el-submenu>&ndash;&gt;-->
<!--            &lt;!&ndash;        </el-menu>&ndash;&gt;-->
<!--            <el-menu router :default-openeds="['0', '1']">-->
<!--                <el-submenu v-for="(item, index) in $router.options.routes" :index="index + ''">-->
<!--                    <template slot="title"><i class="el-icon-apple"></i>{{item.name}}</template>-->
<!--                    <el-menu-item v-for="(child, j) in item.children" :index="child.path" :class="$route.path == child.path ? 'is-active' : ''">-->
<!--                        {{child.name}}-->
<!--                    </el-menu-item>-->
<!--                </el-submenu>-->
<!--            </el-menu>-->
<!--        </el-aside>-->

<!--        <el-container>-->
<!--            <el-header style="text-align: right; font-size: 12px">-->
<!--                <el-dropdown>-->
<!--                    <i class="el-icon-setting" style="margin-right: 15px"></i>-->
<!--                    <el-dropdown-menu slot="dropdown">-->
<!--                        <el-dropdown-item>查看</el-dropdown-item>-->
<!--                        <el-dropdown-item>新增</el-dropdown-item>-->
<!--                        <el-dropdown-item>删除</el-dropdown-item>-->
<!--                    </el-dropdown-menu>-->
<!--                </el-dropdown>-->
<!--                <span>王小虎</span>-->
<!--            </el-header>-->

<!--            <el-main>-->
<!--                <router-view></router-view>-->
<!--            </el-main>-->
<!--        </el-container>-->
<!--    </el-container>-->
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>