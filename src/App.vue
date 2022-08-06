<template>
  <v-app>
    <router-link class="sr-only" to="/SiteMap">
      SiteMap
    </router-link>
    <v-app-bar app dense v-if="$vuetify.breakpoint.xl">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          class="nav-gif"
          gradient="to top right, rgba(0,0,0,0.64), rgba(0,0,0,0.64)"
        ></v-img>
      </template>

      <v-container>
        <v-toolbar-items class="align-center hidden-md-and-down justify-space-between">
          <router-link class="text-decoration-none" to="/">
            <div class="d-flex align-center">
              <v-app-bar-title class="white--text montserrat">JFK 60th Anniversary Moonshot Speech</v-app-bar-title>
            </div>
          </router-link>
          <div>
            <NavItem v-for="link in NavLinks" :key="link.to" :to="link.to" :pagename="link.pagename" :bgcolor="link.to === $route.path ? 'background-color:#0D47A1' : ''"></NavItem>
          </div>
        </v-toolbar-items>
      </v-container>
    </v-app-bar>


    <v-navigation-drawer v-model="drawer" app temporary right>
      <v-list nav dense>
        <v-list-item-group active-class="text--accent-4">

          <router-link class="text-decoration-none white--text" to="/History">
            <v-list-item>
              <v-list-item-title text>History</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link class="text-decoration-none white--text" to="/Watch-Party">
            <v-list-item>
              <v-list-item-title text>Watch Party</v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>


    <v-container id="notification" class="d-none">
      <v-row class="flex-row-reverse">
        <v-col cols="12" lg="3" md="6" sm="6" style="position:fixed;bottom:10px;z-index:1;">
          <v-card class="float-right" outlined elevation="10" style="border-width: 2px;border-color:#616161;">
            <v-card-title class="justify-center text-center">
              <span>A new version of this site is available! <v-icon class="pb-2" aria-hidden="false">mdi-rocket-launch-outline</v-icon></span>
            </v-card-title>
            <v-card-actions class="justify-center mb-2"><v-btn color="#0D47A1" @click="reload()">Click here to update</v-btn></v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-footer class="mt-5">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="12" md="8" sm="6" class="text-center">
            <v-btn color="white" small text rounded class="my-2 footerlink" target="_blank" href="https://www.nasa.gov/about/highlights/HP_Privacy.html" rel="noreferrer">
              Web Accessibility and Policy Notices
            </v-btn>
            <v-btn color="white" small text rounded class="my-2 footerlink" target="_blank" href="https://www.nasa.gov/" rel="noreferrer">
              2022 — NASA
            </v-btn>
            <v-btn color="white" small text rounded class="my-2 footerlink" href="mailto:JSC-Custom-Apps@mail.nasa.gov">
              Curator: JSC Custom Applications
            </v-btn>
            <v-btn color="white" small text rounded class="my-2 footerlink" href="mailto:carla.a.santiago@nasa.gov">
              Responsible NASA Official: Carla Santiago
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-0">
          <v-col class="text-center">
            <a class="text-decoration-none" target="_blank" href="https://www.instagram.com/nasajohnson/" aria-label="instagram logo footer" rel="noreferrer">
              <v-icon class="ml-1 mr-1" aria-hidden="false">
                mdi-instagram
              </v-icon>
            </a>
            <a class="text-decoration-none" target="_blank" href="https://twitter.com/NASA_Johnson?s=20" aria-label="twitter logo footer" rel="noreferrer">
              <v-icon class="ml-1 mr-1" aria-hidden="false">
                mdi-twitter
              </v-icon>
            </a>
            <a class="text-decoration-none" target="_blank" href="https://www.facebook.com/NASAJSC/" aria-label="facebook logo footer" rel="noreferrer">
              <v-icon class="ml-1 mr-1" aria-hidden="false">
                mdi-facebook
              </v-icon>
            </a>
          </v-col>
        </v-row>
        <div style="display: none">test</div>
      </v-container>
    </v-footer>

  </v-app>
</template>
<script>
  import NavItem from "@/components/NavItem.vue";
  export default {
    components: {
      NavItem
    },
    data: () => ({
      drawer: false,
      NavLinks: [
        {
          to: '/History',
          pagename: 'History'
        },
        {
          to: '/Watch-Party',
          pagename: 'Watch Party'
        },
      ]
    }),
    mounted () {
      this.onResize()
      window.addEventListener('resize', this.onResize, { passive: true })
    },
    methods: {
      reload () {
        const notification = document.getElementById('notification')
        notification.classList.add('d-none');
        window.location.reload()
      },
      onResize () {
        let footerelms = document.getElementsByClassName("footerlink")
        if (window.innerWidth <= 960) {
          Array.from(footerelms).forEach((element) => {
            element.classList.remove("v-size--small")
            element.classList.add("v-size--x-small")
          })
        } 
        else {
          Array.from(footerelms).forEach((element) => {
            element.classList.remove("v-size--x-small")
            element.classList.add("v-size--small")
          })        
        }
      },
    } 
  }
</script>
