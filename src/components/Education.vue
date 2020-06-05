<template>
  <section class="education section--light" id="education">
    <header class="section__title" >
      <h4 class="section__title--light">Education</h4>
    </header>
    <main class="main">
      <div class="college" v-for="info in infos" v-bind:key="info">
        <div class="institution">
          <img :src="getImgUrl(info.image)" :alt="pic" class="institution__img"/>
          <a class="institution__link" :href="info.website">{{ info.website }}</a>
          <p class="institution__description">{{ info.place }}</p>
        </div>
        <div class="degree">
          <h4 class="degree__major">{{ info.degree.main }}</h4>
          <h6 class="degree__type">{{ info.degree.sub }}</h6>
          <h6 class="degree__time">{{ info.time }}</h6>
          <h6 class="degree__grade">{{ info.grade }}</h6>
        </div>
      </div>
    </main>
  </section>
</template>

<script>

export default {
  name: 'Education',
  data() {
    return {
        infos: [
        {
          key: 0,
          college: 'Montclair State University',
          website: 'https://www.montclair.edu/',
          image: 'montclair',
          degree: {main: 'Exercise Science & Phys. Ed.', sub: 'Masters'}
          ,
          time: 'Spring 2017 - Fall 2019',
          place: 'Montclair, NJ',
          grade: 'GPA: 3.97'
      },
        { key: 1,
          college: 'University of Canterbury at Kent',
          website: 'https://www.kent.ac.uk/',
          image: 'kent',
          degree: {main: 'Philosophy', sub: 'Undergrad.'}
          ,
          time: 'Fall 2006 - Spring 2010',
          place: 'Canterbury, UK',
          grade: 'Award: 2:2'
        }
      ]
    }
  },
  methods: {
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

  .education {
    min-height: 100vh;
  }

  .main {
    display: grid;

    justify-items: center;
    align-items: center;
    justify-content: center;
    @include lg {
      grid-template-columns: repeat(auto-fill, minmax(40vw, 1fr));
    }

    .college {
      text-align: center;
      padding-bottom: 5vmin;
      margin: 0 auto;

      .institution {

        &__img {
          height: 100%;
          max-height: 200px;
          margin: 0 auto;
          object-fit: contain;
          display: block;
        }

        &__link {
          font-size: 3vw;
          color: $tertiary;
          margin: 0 auto 0 auto;
          text-align: center;
          text-decoration: none;
          color: $pink;
          @include sm {
            font-size:  2.5vw;
          }
          @include md {
            font-size: 1.5vw;
          }
          @include xl {
            font-size:  1.5vw;
          }

          &:hover {
            color: $tertiary;
          }
        }

        &__description {
          font-style: italic;
          font-size:  3vw;
          color: $black;
          margin: 0 auto 0 auto;
          text-align: center;
          @include sm {
            font-size:  2.5vw;
          }
          @include md {
            font-size: 1.5vw;
          }
          @include xl {
            font-size:  1.5vw;
          }
        }

      }

        .degree {
          padding-top: 3vw;

          &__major {
            color: $secondary;
            text-transform: uppercase;
            width: 100%;
            text-align: center;
            margin: 0;
            padding: 1vh 0;
            font-size: 4vw;
            font-weight: 300;
            @include sm {
              font-size:  3vw;
            }
            @include md {
              font-size: 2vw;
            }
            @include xl {
              font-size: 2vw;
            }
          }

          &__type {
            color: $tertiary;
            font-weight: 300;
            font-size: 4vw;
            padding: 1vh 0;
            @include sm {
              font-size:  3.5vw;
            }
            @include md {
              font-size: 1.5vw;
            }
            @include xl {
              font-size: 2vw;
            }
          }

          &__time {
            color: $gold;
            font-size: 4vw;
            font-weight: 300;
            font-style: italic;
            padding: 1vh 0;
            @include sm {
              font-size:  3.5vw;
            }
            @include md {
              font-size: 2vw;
            }
            @include xl {
              font-size:  1.5vw;
            }
          }

          &__grade {
            margin-top: 5vmin;
            color: $black;
            font-size: 4vw;
            font-family: 'Comfortaa', serif;
            padding: 1vh 0;
            @include sm {
              font-size:  3vw;
            }
            @include md {
              font-size: 2vw;
            }
            @include xl {
              font-size:  2vw;
            }
          }
        }

    }

  }

</style>
