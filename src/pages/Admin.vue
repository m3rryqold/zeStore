<template>
  <div>
    <div>
      <h1>
        {{msg}}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data() {
    return {
      msg: 'Admin Page',
    };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
