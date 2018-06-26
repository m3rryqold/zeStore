<template>
  <div>

    <ul>
    <!-- Linkz to siblings -->
    <li>
        <router-link to="/admin">
            View Products
        </router-link>
    </li>
    <li>
        <router-link to="/admin/new">
            New Product
        </router-link>
    </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data() {
    return {
    };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
