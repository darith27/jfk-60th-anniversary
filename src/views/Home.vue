<script setup>
/* images must live in public/assets/images */
const jfkHeroImgUrl = new URL('../../assets/images/jfk-hero-image.jpg', import.meta.url).href
const moonshotImageUrl = new URL('../../assets/images/moon-shot.jpg', import.meta.url).href
const lunarWatchImgUrl = new URL('../../assets/images/lunar-watch.jpg', import.meta.url).href
const roverImgUrl = new URL('../../assets/images/rover.png', import.meta.url).href
const lunarSurfaceImgUrl = new URL('../../assets/images/lunar-surface.jpg', import.meta.url).href
const lunarBackgroundImgUrl = new URL('../../assets/images/lunar-background.jpg', import.meta.url).href
</script>

<template>

       <!-- Two (Kennedy's address at Rice) -->
      <section id="two" class="spotlight style2 right">
        <span class="image fit main"
          ><img
            :src="jfkHeroImgUrl"
            alt="President Kennedy speaking at Rice"
        /></span>
        <div id="home-content" class="content">
          <img
            id="home-jfk"
            :src="moonshotImageUrl"
            alt="JFK 60th anniversary"
          />
          <header>
            <h2>
              60 years ago, JFK’s speech invoked America’s pioneering spirit
              that established our leadership in space.
            </h2>
            <p></p>
          </header>
          <p>
            This anniversary is an opportunity to reaffirm America’s commitment
            to deep space exploration with the unveiling of NASA’s blueprint for
            sustained human transportation and habitation, infrastructure,
            operations, and science.
          </p>
          <div id="btn-container">
            <router-link to="/watch-party" class="button">
              Join a Watch Party or Host Your&nbsp;Own
            </router-link>
            <router-link to="/history" class="button">
              Learn More about NASA & JFK
            </router-link>
          </div>
        </div>
        <a href="#threeA" class="goto-next scrolly">Next</a>
      </section>

      <!-- ThreeA - Celebration Events -->
      <section id="threeA" class="spotlight style3 right watch-hero">
        <div id="mobile-container">
          <span class="image fit main bottom"
            ><img :src="lunarWatchImgUrl" alt="Lunar surface"
          /></span>
          <span class="image fit main bottom mobile"
            ><img :src="roverImgUrl" alt="Rover" />
          </span>
        </div>
        <div id="celebration-events-content" class="content">
          <header>
            <h2>Anniversary Celebration Events:<br />Sep. 10th-12th</h2>
            <p></p>
          </header>
          <p>
            <u>September 10th:</u> NASA Exhibit and Commemorative football game
            at Rice University, Rive vs McNeese State <br /><br />
            <u>September 12th:</u> NASA and Rice 60th Anniversary Celebration at
            Rice University starting at 10am. NASA Exhibit following event, open
            to the public.
          </p>
          <router-link to="/watch-party" class="button">
              Join a Watch Party or Host Your&nbsp;Own
          </router-link>
        </div>
        <div id="watch-container">
          <img id="watch-img" :src="roverImgUrl" alt="Rover" />
        </div>
        <a href="#three" class="goto-next scrolly">Next</a>
      </section>

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
          <router-link to="/watch-party" class="button">
            Join a Watch Party or Host Your&nbsp;Own
          </router-link>
        </div>
        <div id="astro-circle">
          <div
            id="astro-img"
          ></div>
        </div>
      </section>
</template>

<style>
/* images must live in src/assets/images */
#two {
  background: url('@/assets/images/jfk-hero-image.jpg') center/cover no-repeat;
}
#twoA {
  background: url('@/assets/images/lunar-background.jpg') center/cover no-repeat;
}
#three {
  background: url('@/assets/images/lunar-surface.jpg') center/cover no-repeat;
}
#threeA {
  background: url('@/assets/images/lunar-watch.jpg') center/cover no-repeat;
}
#astro-img {
  background-image: url('@/assets/images/apollo-11-flag-square.jpg');
}
</style>