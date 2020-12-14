<template>
    <div>

    </div>
</template>

<script>
/**
     * Created by 简小
     * Created on lucky 2020/12/14  19:53
     */
import User from '../../config/User'
export default {
  name: 'SettingIndex',
  methods: {
    ensureProductAdd () {
      this.$store.dispatch('ProductAddAct', 123)
    },
    testUserLogin () {
      console.log('LOGIN INFO:::', User.appkey)
    }
  },
  mounted () {
    this.testUserLogin()
  }
}
</script>

<style scoped>

</style>
