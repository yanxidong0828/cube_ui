<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        @change="changeHandler">
      </cube-tab-bar>
    </div>

  </div>
</template>
<script>
  export default {
      name:"app",
      data(){
          return {
              selectedLabelDefault: '/',
              tabs: [{
                  label: '首页',
                  value:'/',
                  icon: 'cubeic-home'
              }, {
                  label: '我的课程',
                  value:'/course',
                  icon: 'cubeic-like'
              }, {
                  label: '个人中心',
                  value:'/profile',
                  icon: 'cubeic-vip'
              },
              ]
          }
      },
      watch:{
          $route:{
              //默认让函数先执行一次
              handler(to,from){
                  console.log(this.$route.path)
                 this.selectedLabelDefault = to.path;
              },
              immediate:true
          }
      },
      methods: {
          changeHandler (label) {
              this.$router.push(label)
          }
      }

  }
</script>
<style lang="stylus">
  body,html,#app {
    width:100%;height:100%;
  }
  #app{
    display:flex;
    flex-direction:column;
  }
  .content{
    flex:1;
  }
  .footer{
    background:#f2f2f2;
  }
</style>
