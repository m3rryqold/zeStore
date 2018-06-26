<template>
  <div>
    <!-- <nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand"> -->
        <!-- navbar items, navbar burger -->
          <!-- <router-link to="/">
          <a href="" class="navbar-item">
            <img src="http://logos-download.com/wp-content/uploads/2016/05/MG_logo_silver.png" alt="">
            <h3 class="subtitle" id="menuheader">
              ZeStore
            </h3>
            </a>
          </router-link> -->
        <!-- navbar burger -->
        <!-- <div class="navbar-burger burger" data-target="mynav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> -->

      <!-- main nav -->

      <!-- <div id="mynav" class="navbar-menu">
        <div class="navbar-start">
            <router-link to="/" class="navbar-item">Home</router-link>
        </div>
        <div class="navbar-end">
            <router-link to="/admin" class="navbar-item">Admin</router-link>
        </div>
        <div class="navbar-end">
            <router-link to="/cart" class="navbar-item">Cart</router-link>
        </div>
      </div>
    </nav> -->

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="">
        <img src="http://logos-download.com/wp-content/uploads/2016/05/MG_logo_silver.png" alt="">
        <h3>ZeStore</h3>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Admin</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="">Cart</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <section class="section">
       <router-view/>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};

// document.addEventListener('DOMContentLoaded', () => {
//   // Get all "navbar-burger" elements
//   const $navbarBurgers
// = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

//   // Check if there are any navbar burgers
//   if ($navbarBurgers.length > 0) {
//     // Add a click event on each of them
//     $navbarBurgers.forEach(($el) => {
//       $el.addEventListener('click', () => {
//         // Get the target from the "data-target" attribute
//         const target = $el.dataset.target;
//         const $target = document.getElementById(target);

//         // Toggle the class on both the "navbar-burger" and the "navbar-menu"
//         $el.classList.toggle('is-active');
//         $target.classList.toggle('is-active');
//       });
//     });
//   }
// });
</script>

<style>
  #menuheader {
  color:#C0C0C0;
}
</style>
