<template>
  <header id="navbar">
    <div class="navbar" v-for="info in infos" v-bind:key="info" :class="{ active: show }" @click="changeShow()">
      <div class="top">
        <h1 class="top__title">{{ info.title }}</h1>
        <div class="top__icons">
          <a v-for="i in info.icons" v-bind:key="i" :href="i.link" target="top" @click="changeShow()">
            <font-awesome-icon class="top__icons__icon" :icon="i.icon" />
          </a>
        </div>
      </div>
      <div class="drop" v-show="show">
        <h4 class="drop__job">Front-end web developer</h4>
        <div class="drop__links">
          <div v-for="drop_info in info.drop_items" :key="drop_info">
            <a :href="'#' + drop_info" @click="changeShow()" :class="drop__links__link">{{drop_info}}</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

  export default {
  name: 'TopNavbar',
  data() {
    return {
      show: false,
      infos: [
        {
          title: "Benjamin Elliott",
          icons: [
            {icon: [ 'fab', 'html5' ], link: 'http://html5.com/'},
            {icon: [ 'fab', 'css3' ], link: 'http://www.css3.info/'},
            {icon: [ 'fab', 'js' ], link: 'https://www.javascript.com/'},
            {icon: [ 'fab', 'sass' ], link: 'https://sass-lang.com/'},
            {icon: [ 'fab', 'bootstrap' ], link: 'https://getbootstrap.com/'},
            {icon: [ 'fab', 'vuejs' ], link: 'https://vuejs.org/'},
            {icon: [ 'fab', 'python' ], link: 'https://www.python.org/'},
            {icon: [ 'fab', 'react' ], link: 'https://reactjs.org/'},
            {icon: [ 'fab', 'github' ], link: 'https://github.com/'}
          ],
          drop_items: [
            'about',
            'skills',
            'experience',
            'certification',
            'education',
            'references'
          ]
        }
      ]
    }
  },
  methods: {
    changeShow() {
      this.show = !this.show
    },
    showDrop() {
      if (!this.show) {
        document.querySelector(".drop").style.position = "static";
        document.querySelector(".drop").style.top = "0px";
      }
    }
  }
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";

  } else {
    document.querySelector(".navbar").style.top = "-500px";
  }
  prevScrollpos = currentScrollPos;
}



</script >

<style scoped lang="scss">

  @import "./src/scss/_variables.scss";
  @import "./src/scss/_mixins.scss";

  .navbar{
    position: fixed;
    width: 100vw;
    margin: 0;
    border: none;
    z-index: 10;
    top: 0;
    background: $primary;
    color: $white;
    height: auto;
    text-align: center;
    transition: color 300ms ease-in-out, background-color 300ms ease-in-out, visibility 100ms ease-in-out, top 300ms;

    .top {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: nowrap;

      &__title {
        text-transform: uppercase;
        font-weight: 100;
        font-size: 4vw;
        flex-shrink: 0;
        padding: 0;
        margin: 0;

        @include sm {
          font-size: 3vw;
        }
        @include md {
          font-size: 3vmin;
        }
        @include lg {
          font-size: 3vmin;
        }
        @include xl {
          font-size: 2vw;
        }
      }

      &__icons {
        padding-left: 5vw;;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        &__icon {
          padding: auto;
          font-size: 2vmin;
          @include xl {
            font-size: 1vw;
          }

          &:hover {
            color: $tertiary;
          }
        }
      }

    }

    .drop {
      border-style: none;
      font-size: 3vh;
      text-align: center;
      padding: 0;
      margin: 0;
      width: 100%;
      position: static;
      display: flex;
      flex-wrap: wrap;

      &__job {
        width: 100%;
        font-weight: 200;
        text-transform: uppercase;
        font-size: 3vmin;
        padding: 1vh 0;
        margin: 0;
      }

      &__links {
        width: 100%;
        font-weight: 200;
        text-transform: uppercase;
        font-size: 3vw;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: baseline;
        justify-content: space-evenly;
        flex-wrap: wrap;
        @include sm {
          font-size: 2vw
        }
        @include lg {
          font-size: 2vmin;
        }
        @include xl {
          font-size: 1vw;
        }
      }

      &__link {
        flex-basis: 33%;
        text-decoration: none;
        color: $primary;
        @include sm {
          flex-basis: auto;
        }
      }
    }
    a {
      color: inherit;
      text-decoration: none;
      background-color: transparent;
      transition: color 300ms ease-in-out;
    }

    a:hover {
      color: $tertiary;
      text-decoration: none;
    }
  }

  @keyframes dropdown {
    from {
      top: -500px;
    }
    to {
      top: 0px;
    }
  }

  .active{
    color: $white;
    background: linear-gradient(to right, $tertiary, $gold, $red, $lightblue);
  }

</style>
