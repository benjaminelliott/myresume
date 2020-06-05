<template>
  <div id="app">
    <topnavbar></topnavbar>
    <landing></landing>
    <aboutme></aboutme>
    <skills></skills>
    <experience></experience>
    <certification></certification>
    <education></education>
    <references></references>
    <bottomnavbar></bottomnavbar>
  </div>
</template>

<script>

  import TopNavbar from './components/TopNavbar.vue'
  import Landing from './components/Landing.vue'
  import AboutMe from './components/AboutMe.vue'
  import Skills from './components/Skills.vue'
  import Experience from './components/Experience.vue'
  import Education from './components/Education.vue'
  import Certification from './components/Certification.vue'
  import References from './components/References.vue'
  import BottomNavbar from './components/BottomNavbar.vue'

  export default {
    name: 'App',
    components: {
      'topnavbar': TopNavbar,
      'landing': Landing,
      'aboutme': AboutMe,
      'skills': Skills,
      'experience': Experience,
      'education': Education,
      'certification': Certification,
      'references': References,
      'bottomnavbar': BottomNavbar
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      changeShow: () => (
        this.show = !this.show
      )
    },
    metaInfo() {
        return {
            title: "Web Developer | Benjamin Elliott",
            meta: [
                { name: 'description', content:  'I build striking, responsive & intuitive websites'}
            ]
        }
    }
  }
//window.addEventListener("hashchange", function() { scrollBy(0, -40) })
</script>

<style lang="scss">
  @import "./src/scss/_variables.scss";
  @import "./src/scss/_mixins.scss";

  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

html, body {
    max-width: 100vw;
    overflow-x: hidden;
    background: $white;
    scroll-behavior: smooth;
}

  #app{
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 200;
  }

  .section--light {
    min-height: 100vh;
    color: $primary;
    text-align: center;
    background: $white;
  }

  .section--dark {
    @extend .section--light;
    color: $white;
    background: linear-gradient($primary, $secondary, $tertiary);
  }

  .section__title {
    padding: 0;
    margin: 0 auto;
    background: transparent;
  }

  .section__title--light {
    background: linear-gradient(#eee, $white);
    color: $secondary;
    text-transform: uppercase;
    width: 100%;
    margin: 0 auto;
    font-weight: 200;
    font-size: 5vmin;
    padding: 4vh 0;
    @include sm {
      font-size: 4vw;
    }
    @include md {
      font-size: 3vmin;
    }
    @include lg {
      font-size: 3vmin;
    }
    @include xl {
      font-size: 3vmin;
    }
  }

  .section__title--dark {
    @extend .section__title--light;
    background: transparent;
    color: $white;
  }

</style>
