<template>
  <div class="home">
    
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Home',
  data () {
    return {
      name: ''
    }
  },
  created () {
    $.ajax({
      type: "get",
      url: "/api/users/getName",
      success: result => {
        this.name = result
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
