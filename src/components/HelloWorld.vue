<template>
  <div>
    <div>
      <div id="demo">
        <button v-on:click="show = !show">
          Toggle
        </button>
        <transition name="fade">
          <p v-if="show">hello</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import instance from '../api/http';
export default {
  name: 'HelloWorld',
  data() {
    return {
      instance: '',
      datas: '',
      show: true,
    };
  },
  mounted() {
    instance
      .get('/getMemoryQuestion')
      .then((response) => {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    go() {
      console.log('aaa');
    },
    fn1() {
      return instance.get('/getMemoryQuestion');
    },
  },
};
</script>

<style scoped lang="less">
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
