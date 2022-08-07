<template>
  <header id="header">
      <div id="logo">
        <a href="./"
          ><img src="assets/images/nasa-logo.svg" alt="NASA Logo"
        /></a>
      </div>
      <nav>
        <ul id="desktop-menu">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/history">History</router-link></li>
          <li><router-link to="/watch-party">Watch Party</router-link></li>
          <li><a href="#footer">Share</a></li>
        </ul>
      </nav>
    </header>
  <main>
    <router-view />
  </main>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>