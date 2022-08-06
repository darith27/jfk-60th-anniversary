<template>
    <router-link class="text-decoration-none" :to="to" tag="span">
        <v-btn class="nav-link" text :style="bgcolor">{{pagename}}</v-btn>
    </router-link>
</template>

<script>
export default {
    name: 'NavItem',
    props: {
        to: String,
        pagename: String,
        bgcolor: String,
    }
}
</script>