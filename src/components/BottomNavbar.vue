<template>
  <footer id="contact">
    <main class="footer">
      <h6 class="section__title--dark footer__title">Contact Me</h6>
      <div class="footer__contacts">
          <a v-for="i in contacts" :href="i.link" v-bind:key="i">
            <font-awesome-icon :icon="i.icon" class="footer__contacts__icon"/>
          </a>
      </div>
    <p class="footer__goodbye">Built By Benjamin Elliott in 2020</p>
    </main>
  </footer>
</template>

<script>

  export default {
  name: 'BottomNavbar',
  data() {
    return {
          contacts:
            {
              email: {icon: ['fas', 'envelope' ], text: 'benjamin.elliott.be@gmail.com', link: 'mailto:benjamin.elliott.be@gmail.com?Subject=Hello%Benjamin', style: 'font-size: 4vw'},
              phone: {icon: ['fas', 'phone' ], text: '+973 289-3674', link: 'tel:973 289-3674', style: 'font-size: 6vw'},
              insta: {icon: ['fab', 'instagram' ], text: '@therealbenjaminelliott', link: 'https://www.instagram.com/therealbenjaminelliott/', style: 'font-size: 5vw'}
            },
          icons: [
            [ 'fab', 'html5' ],
            [ 'fab', 'css3' ],
            [ 'fab', 'js' ],
            [ 'fab', 'sass' ],
            [ 'fab', 'bootstrap' ],
            [ 'fab', 'vuejs' ],
            [ 'fab', 'python' ],
            [ 'fab', 'react' ],
            [ 'fab', 'github' ]
          ]

    }
  }
}
</script>

<style scoped lang="scss">

  @import "./src/scss/_variables.scss";
  @import "./src/scss/_mixins.scss";

  .footer{
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 30vw auto 30vw;
    grid-template-areas: "title contact goodbye";
    width: 100vw;
    height: 10vmax;
    justify-items: stretch;
    padding: 5vw 0 0 0;
    background: $primary;
    text-align: center;
    color: $white;
    @include xl {
      min-height: 25vh;
      padding: 1vw 0 0 0;
    }

    .footer__title{
      grid-area: "title";
      padding: 0;
      margin: auto 0;
    }
  }



  .footer__contacts {
    grid-area: "contact";
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    padding: 0;
  }

  .footer__contacts__icon {
    color: $white;
    transition: color 300ms ease-in;
  }

  .footer__contacts__icon:hover {
    color: $tertiary;
    font-size: 2vh;
  }

  .footer__goodbye{
    grid-area: "goodbye";
    font-size: 3vw;
    font-weight: 300;
    margin: auto 0;
    @include sm {
      font-size:  2vw;
    }
    @include md {
      font-size: 1.5vw;
    }
    @include xl {
      font-size:  1vw;
      padding: 0 0 0.5vw 0;
    }
  }

</style>
