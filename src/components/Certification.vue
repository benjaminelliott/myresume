<template>
  <section class="certification section--dark" id="certification">
    <header class="section__title">
      <h4 class="section__title--dark">Certification</h4>
    </header>
    <main class="main">
      <button class="button" @click="previous">
        <label class="button__label" for="button__arrow__prev">Previous</label>
        <font-awesome-icon :icon="[ 'fas', 'chevron-left' ]" class="button__arrow__prev" />
      </button>
        <transition-group class="carousel" tag="div">
          <div v-for="slide in slides" class="slide" :key="slide.id">
            <img :src="getImgUrl(slide.title)" :alt="pic" class="slide__image"/>
            <div class="slide__text">
              <a class="slide__text__title" :href="slide.link" target="top">{{ slide.title }}</a>
              <h6 class="slide__text__sub">{{ slide.msg }}</h6>
              <p  class="slide__text__description">{{ slide.description }}</p>
            </div>
          </div>
        </transition-group>
      <button class="button" @click="next">
        <label class="button__label" for="button__arrow__next">Next</label>
        <font-awesome-icon :icon="[ 'fas', 'chevron-right' ]" class="button__arrow__next"/>
      </button>
    </main>
  </section>
</template>
<script>

  export default {
    name: 'Certification',
    data: () => ({
      show: 1,
      slides: [
        {
          title: 'freecodecamp',
          id: 0,
          msg: 'Responsive Web Design',
          description: '300 hours of coursework on HTML, CSS & JS',
          image: "../assets/images/freecodecamp.png",
          link: 'https://www.freecodecamp.org/certification/benjaminelliott/responsive-web-design'
        },
        {
          title: 'codecademy',
          id: 1,
          msg: 'Responsive Web Design',
          description: 'Building responsive websites with SASS & JS',
          image: "../assets/images/codecademy.png",
          link: 'https://www.codecademy.com/profiles/benjaminelliott'
        },
        {
          title: 'codewars',
          id: 2,
          msg: '4th Kyu in Javascript',
          description: 'Solved over 800 user-created challenges',
          image: "../assets/images/codewars.png",
          link: 'https://www.codewars.com/users/benjaminelliott'
        }
      ]
    }),
    methods: {
      next() {
        if (this.show < this.slides.length-1) {
          this.show++;
        } else {
          this.show = 0;
        }
        const first = this.slides.shift()
        this.slides = this.slides.concat(first)

      },
      previous() {
        if (this.show > 0) {
          this.show--;
        } else {
          this.show = this.slides.length-1;
        }
        const last = this.slides.pop()
        this.slides = [last].concat(this.slides)
      },
      getImgUrl(image) {
        var images = require.context('../assets/images/', false, /\.png$/)
        return images('./' + image + ".png")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import "./src/scss/_variables.scss";
  @import "./src/scss/_mixins.scss";

  .certification {
  }

  .main {
    padding: auto;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
    align-content: center;
    grid-template-areas: "button__arrow__prev carousel button__arrow__next";
  }

  .carousel {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;
    align-content: center;
    flex-wrap: nowrap;
    height: 100%;
    width: 80vw;
  }

  .slide {
    position: relative;
    z-index: 1;
    flex-shrink: 0;
    flex-basis: 60%;
    display: grid;
    border-radius: 1%;
    align-items: center;
    justify-content: center;
    align-content: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "slide__image"
      "slide__text";
    grid-row-gap: 0;
    transform: rotate(0deg) translateY(0px) translateX(0px);
    transition: 500ms ease-in-out;


    &:first-of-type {
      opacity: 0.1;
      transform: rotate(-20deg) translateY(10vh) translateX(-10vmin);
      flex-shrink: 1;
      flex-grow: 0;
      flex-basis: 20%;
    }

    &:last-of-type {
      opacity: 0.1;
      transform: rotate(20deg) translateY(10vh) translateX(10vmin);
      flex-shrink: 1;
      flex-grow: 0;
      flex-basis: 20%;
    }

    &__image{
      margin: 0 auto;
      width: 80vw;
      height: auto;
      object-fit: cover;
      transition: opacity 200ms ease-out;

      @include md {
        width: 60vw;
      }
      @include lg {
        width: 50vw;

      }
      @include xl {
        width: 40vw;
      }

      &:hover {
        opacity: 0.5;
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: stretch;
      align-content: center;
      overflow: visible;
      color: $white;
      width: 100%;
      white-space: nowrap;

      &__title {
        font-size: 6vw;
        color: $white;
        font-weight: 300;
        text-decoration: none;
        transition: color 300ms ease-in;
        @include sm {
          font-size: 3vw;
        }
        @include md {
          font-size: 4vmin;
        }
        @include lg {
          font-size: 4vmin;
        }
        @include xl {
          font-size: 3vw;
        }

        &:hover {
          color: $tertiary;
        }
      }

      &__sub {
        font-size: 4vw;
        font-weight: 300;
        @include sm {
          font-size: 2.5vw;
        }
        @include md {
          font-size: 2.5vmin;
        }
        @include lg {
          font-size: 3vmin;
        }
        @include xl {
          font-size: 2vw;
        }
      }

      &__description {
        font-size: 3.5vw;
        font-family: 'Comfortaa', serif;
        @include sm {
          font-size: 2.5vw;
        }
        @include md {
          font-size: 2vmin;
        }
        @include lg {
          font-size: 2.5vmin;
        }
        @include xl {
          font-size: 1vw;
        }
      }
    }
  }

  .button {
    position: relative;
    z-index: 2;
    width: 20px;
    border: none;
    padding: 0 5vw;
    margin: 0;
    background: transparent;

    display: grid;
    justify-content: center;

    &__label {
      color: $black;
      font-weight: 300;
      text-align: center;
      font-size: 2vmin;
      opacity: 0;
    }

    &__arrow__prev {
      z-index: 2;
      font-size: 5vw;
      color: $white;
      margin: 0 auto;
      padding: 0;
      transition: 300ms ease-out;


      @include md {
        font-size: 3vw;
      }
      @include xl {
        font-size: 3vw;
      }

      &:hover {
        color: $white;
        transform: translateX(-10px);
      }
    }

    &__arrow__next {
      font-size: 5vw;
      color: $white;
      margin: 0 auto;
      padding: 0;
      transition: 300ms ease-out;
      @include md {
        font-size: 3vw;
      }
      @include xl {
        font-size: 3vw;
      }
      &:hover {
        color: $white;
        transform: translateX(10px);
      }
    }
  }
</style>
