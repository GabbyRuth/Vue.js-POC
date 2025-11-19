<template>
  <div class="page-layout">
    <nav class="navbar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/testing">Testing</RouterLink>
    <RouterLink to="/testid/tests">TestID</RouterLink>
    <RouterLink to="/auth">Auth</RouterLink>

  </nav>
  <div class="page-content">
    <RouterView />
  </div>
  </div>
</template>

<style scoped>
.page-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-content {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

.navbar {
  position: fixed;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
}

</style>
