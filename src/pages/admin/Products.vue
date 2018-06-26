<template>
 <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers">
 </product-form>
</template>

<script>
import ProductForm from '@/components/product/ProductForm';

export default {
  data() {
    return {
      model: {},
      manufacturers: [
        {
          _id: 'sam',
          name: 'Samsung',
        },
        {
          _id: 'apple',
          name: 'Apple',
        },
      ],
    };
  },
  methods: {
    addProduct(model) {
      /* eslint-disable */
      console.log('model', model);
    },
  },
  components: {
    'product-form': ProductForm,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
