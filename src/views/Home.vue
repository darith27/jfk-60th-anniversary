<script setup>
const lunarSurfaceImgUrl = new URL('../../assets/images/lunar-surface.jpg', import.meta.url).href
const lunarBackgroundImgUrl = new URL('../../assets/images/lunar-background.jpg', import.meta.url).href
</script>


<template>

      <!-- Three (Kennedy Quote and Video) -->
      <section id="three" class="spotlight style3 left">
        <!-- image inside of a span? - DY -->
        <span class="image fit main bottom"
          ><img :src="lunarSurfaceImgUrl" alt="Lunar Surface"></span>
        <div
          class="content"
        >
          <header>
            <h2></h2>
            <p></p>
          </header>
          <p id="quote">
            We choose to go to the moon in this decade and do the other things,
            not because they are easy, but because they are hard.
          </p>
        </div>
        <div id="jfk-video">
          <div class="vid-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WZyRbnpGyzQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <a href="#twoA" class="goto-next scrolly">Next</a>
      </section>

      <!-- TwoA (Buzz Aldrin on the moon) -->
      <section id="twoA" class="spotlight style2 right">
        <span class="image fit main"
          ><img :src="lunarBackgroundImgUrl" alt="Lunar Background"></span>
        <div id="party-content" class="content">
          <header>
            <h2></h2>
            <p></p>
          </header>
          <p>
            Now is the time to celebrate our past, reaffirm our nation’s
            commitment to push the frontiers of deep space exploration,
            highlight the space economy, and leverage the diversity of our
            people.
          </p>
          <p>
            This anniversary is an opportunity to reaffirm America’s commitment
            to deep space exploration with the unveiling of NASA’s blueprint for
            sustained human transportation and habitation, infrastructure,
            operations, and science.
          </p>
          <p>Join us virtually September 12th at 10am CDT.</p>
          <a href="./watch-party" class="button"
            >Join a Watch Party or Host Your&nbsp;Own
          </a>
        </div>
        <div id="astro-circle">
          <div
            id="astro-img"
          ></div>
        </div>
      </section>
</template>

<style scoped>
#twoA {
  background: url('@/assets/images/lunar-surface.jpg') center/cover no-repeat;
}
#three {
  background: url('@/assets/images/lunar-surface.jpg') center/cover no-repeat;
}
#astro-img {
  background-image: url('@/assets/images/apollo-11-flag-square.jpg');
}
</style>