<script setup>
import TheNavBar from './components/TheNavBar.vue'
</script>


<template>
  <header id="header">
      <div id="logo">
        <a href="./"
          ><img src="./assets/images/nasa-logo.svg" alt="NASA Logo"
        /></a>
      </div>
      <nav>
        <TheNavBar></TheNavBar>
      </nav>
    </header>
  <main>
    <router-view />
  </main>
  <footer id="footer">
    <a href="#one" class="goto-next scrolly">Next</a>
    <header>
      <h2>SHARE</h2>
      <p></p>
    </header>
    <ul class="icons">
      <li>
        <a
          href="https://twitter.com/NASA_Johnson"
          class="icon alt fa-twitter"
          title="Twitter"
          ><span class="label">Twitter</span></a
        >
      </li>
      <li>
        <a
          href=" https://www.facebook.com/NASAJSC"
          class="icon alt fa-facebook"
          title="Facebook"
          ><span class="label">Facebook</span></a
        >
      </li>
      <li>
        <a
          href="https://www.instagram.com/nasajohnson/?hl=en"
          class="icon alt fa-instagram"
          title="Instagram"
          ><span class="label">Instagram</span></a
        >
      </li>
    </ul>
    <ul class="actions">
      <li><a href="#header" class="button">Back To Top </a></li>
    </ul>
    <ul class="actions links-white">
      <li>
        <a
          href="https://www.nasa.gov/about/highlights/HP_Privacy.html"
          target="_blank"
          rel="noreferrer"
          ><span class="v-btn__content">
            Web Accessibility and Policy Notices
          </span></a
        >
      </li>
      <li>
        <a
          href="mailto:&#074;&#083;&#067;&#045;&#067;&#117;&#115;&#116;&#111;&#109;&#045;&#065;&#112;&#112;&#115;&#064;&#109;&#097;&#105;&#108;&#046;&#110;&#097;&#115;&#097;&#046;&#103;&#111;&#118;"
          target="_blank"
          rel="noreferrer"
        >
          <span class="v-btn__content">
            Curator: JSC Custom Applications
          </span>
        </a>
      </li>
      <li>
        <a
          href="mailto:&#099;&#097;&#114;&#108;&#097;&#046;&#097;&#046;&#115;&#097;&#110;&#116;&#105;&#097;&#103;&#111;&#064;&#110;&#097;&#115;&#097;&#046;&#103;&#111;&#118;"
          ><span class="v-btn__content">
            Responsible NASA Official: Carla&nbsp;Santiago
          </span></a
        >
      </li>
      <li>Last Updated: 08/05/2022</li>
    </ul>
  </footer>
</template>

<style>
@import "./assets/css/main.css";
</style>