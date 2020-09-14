<template>
  <div class="home">
    <h5></h5>
    <el-input v-model="name"></el-input>
    <el-button @click="submit">保存</el-button>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Home',
  data () {
    return {
      id: '',
      name: ''
    }
  },
  created () {
    $.ajax({
      type: "get",
      url: "/api/users/getName",
      success: result => {
        this.name = result.name
        this.id = result.id
      },
      error: (e) => {
        console.log(e);
      }
    })
  },
  methods: {
    submit () {
      $.ajax({
        type: "post",
        data: {
          id: this.id,
          name: this.name
        },
        url: "/api/users/saveName",
        success: result => {
          this.$message.success('保存成功')
        },
        error: function(e) {
          console.log(e);
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
