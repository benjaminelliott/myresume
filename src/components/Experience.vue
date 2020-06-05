<template>
  <section class="experience section--light" id="experience">
    <header class="section__title">
      <h4 class="section__title--light">Experience</h4>
    </header>
    <main class="main">
      <div class="job" v-for="job in jobs" :key="job">
        <div class="organization">
          <img :src="getImgUrl(job.image)" :alt="pic" class="organization__img"/>
          <a class="organization__link" :href="job.website">{{ job.website }}</a>
          <p class="organization__description">{{ job.description }}</p>
          <p class="organization__type">{{ job.type }}</p>
          <p class="organization__place text-center font-italic">{{ job.place }}</p>
        </div>
        <div class="roles">
          <h4 class="roles__main">{{ job.role.main }}</h4>
          <h6 class="roles__sub">{{ job.role.sub }}</h6>
          <h6 class="roles__time">{{ job.time }}</h6>
          <ul class="duties">
            <li class="duties__duty" v-for="duty in job.duties" v-bind:key="duty">{{ duty.msg }}</li>
          </ul>
        </div>
      </div>
    </main>
  </section>
</template>

<script>

export default {
  name: 'Experience',
  data() {
    return {
        jobs: [
          { key: 0,
            organization: 'Americans Soccer Club of NJ',
            image: 'americans',
            website: 'https://www.americanssoccerclub.org/',
            role: {main: 'Director of Coaching', sub: 'Young Americans Program'},
            time: 'March 2018 - Present',
            description: 'Community not-for-profit soccer club',
            place: 'Bergen County, NJ',
            duties: [
              {msg: 'Developing age-appropriate curriculums for players'},
              {msg: 'Liaising with other clubs, dealing with parent queries'},
              {msg: 'Being a role model for aspiring young athletes'}
            ]
          },
          { key: 1,
            organization: 'Golden Goal Sports Park',
            image: 'golden',
            website: 'https://www.goldengoalpark.com/',
            role: {main: 'Community Manager', sub: '& Copywriter'},
            time: 'October 2015 - January 2017',
            description: 'Remote work for multi-sport training camp',
            place: 'Fort Ann, NY',
            duties: [
              {msg: 'Working remotely as part of an international team'},
              {msg: 'Creating impactful copy for both digital & print'},
              {msg: 'Managing Constant Contact email distribution'}
            ]
          },
          { key: 2,
            organization: 'World Class Arena Ltd',
            image: 'world',
            website: 'https://www.worldclassarena.org/',
            role: {main: 'Team Leader', sub: '& PISA Test Marker'},
            time: 'November 2015 - February 2016',
            description: 'Exam marking specialists',
            place: 'London, UK',
            duties: [
              {msg: 'Showing focus to mark thousands of responses'},
              {msg: 'Ability to meet deadlines while helping co-workers'},
              {msg: 'Being the go-to person to resolve conflicts'}
            ]
          },
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

<style scoped lang="scss">

  @import "./src/scss/_variables.scss";
  @import "./src/scss/_mixins.scss";

  .experience {
    min-height: 100vh;
  }

  .main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100vw, 1fr));
    justify-items: center;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 10vmin;
    @include xl {
      grid-template-columns: repeat(auto-fit, minmax(33vw, 1fr));
      padding: auto;
    }
  }

  .job {
    display: grid;
    grid-template-areas:
      "organization"
      "roles";
    @include xl {
      padding: 8vmin 0;
    }
  }

  .organization {
    text-align: center;
    grid-area: "organization";
    align-self: end;
    display: grid;
    align-items: stretch;
    font-style: italic;
    color: $black;

    &__img {
      margin: 0 auto;
      padding:  0;
      display: block;
      width: 200px;
      height: 200px;
      object-fit: contain;
      @include xl {
        padding: 0 0 3vmin 0;
      }

    }

    &__link {
      margin: 0 auto;
      padding: 0.5vh 0;
      font-size: 3vw;
      padding: 0;
      color: $pink;
      text-decoration: none;
      @include sm {
        font-size: 2vw;
      }
      @include md {
        font-size: 1.5vw;
      }
      @include xl {
        font-size: 1vw;
      }

      &:hover{
        color: $tertiary;
      }
    }

    &__description {
      font-size:  3vw;
      margin: 0;
      padding: 0.5vh 0;
      @include sm {
        font-size: 2vw;
      }
      @include md {
        font-size: 1.5vw;
      }
      @include xl {
        font-size: 1vw;
      }
    }

    &__type {
      font-size:  3vw;
      margin: 0;
      @include sm {
        font-size: 2vw;
      }
      @include md {
        font-size: 1.5vw;
      }
      @include xl {
        font-size: 1vw;
      }
    }

    &__place {
      font-style: italic;
      font-size:  3vw;
      @include sm {
        font-size: 2vw;
      }
      @include md {
        font-size: 1.5vw;
      }
      @include xl {
        font-size: 1vw;
      }
    }
  }

  .roles {
      text-align: center;
      grid-area: "roles";
      align-self: start;
      padding: 0 2vmin;
      color: $black;

        &__main {
          color: $secondary;
          font-weight: 300;
          text-transform: uppercase;
          font-size: 5vmin;
          width: 100%;
          margin: 0;
          padding: 0.5vh 0;
          @include xl {
            font-size: 3vmin;
          }
        }

        &__sub {
          color: $tertiary;
          font-weight: 300;
          margin: 0;
          padding: 0.5vh 0;
          font-size: 4vmin;
          @include xl {
            font-size: 2.5vmin;
          }
        }

        &__time {
          color: $gold;
          font-weight: 300;
          margin: 0;
          padding: 0.5vh 0;
          font-style: italic;
          @include md {
            font-size: 2vw;
          }
          @include lg {
            font-size: 2vmin;
          }
          @include xl {
            font-size: 2vmin;
          }
        }
  }

  .duties {
    text-align: center;
    color: $black;
    padding: 2vmin 0 0 0;
    font-family: 'Comfortaa', serif;

    &__duty {
      font-size: 3vw;
      font-weight: 300;
      border: none;
      list-style: none;
      margin: 0;
      padding: 1vh 0;
      @include sm {
        font-size: 2vw;
      }
      @include md {
        font-size: 1.5vw;
      }
      @include xl {
        font-size: 1vw;
      }
    }
  }

</style>
