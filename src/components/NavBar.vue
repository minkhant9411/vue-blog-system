<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="justify-content-between d-flex w-100 container">
      <router-link :to="{ name: 'home' }" class="navbar-brand">
        My Blog
      </router-link>
      <div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }"> Home </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'create-blog' }"> Create </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>


<style>
nav a {
  text-decoration: none;
  padding: 10px;
  color: #666;
}
nav a:hover {
  color: #111;
}
.router-link-active {
  color: #111;
  border-bottom: 1px solid crimson;
}
.navbar-brand {
  border: none;
}
</style>