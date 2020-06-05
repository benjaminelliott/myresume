<template>
  <section class="skills section--dark" id="skills">
    <header class="section__title">
      <h4 class="section__title--dark">Skills</h4>
    </header>
    <main class="main">
      <div class="level" v-for="skill in skills" :key="skill" :style="{'color': skill.color}">
        <h6 class="level__title" >{{ skill.description }}</h6>
        <div class="level__language" v-for="language in skill.languages" :key="language" >
          <font-awesome-icon class="level__language_link" :icon="language.icon"/>
          <a class="level__language_text" :href="language.link" target="top">{{ language.text }}</a>
        </div>
      </div>
    </main>
  </section>
</template>

<script>

export default {
  name: 'Skills',
  data() {
    return {
        skills: [
          {
            key: 0,
            description: 'Fluent in',
            color: '#af9775',
            languages: [
              {
                icon: [ 'fab', 'html5' ],
                text: 'HTML5',
                link: 'http://html5.com/'
              },
              {
                icon: [ 'fab', 'css3' ],
                text: 'CSS3',
                link: 'http://www.css3.info/'
              },
              {
                icon: [ 'fab', 'js' ],
                text: 'JS',
                link: 'https://www.javascript.com/'
              }
            ]

          },
          {
            key: 1,
            description: 'Playing with',
            color: '#b47f90',
            languages: [
              {
                icon: [ 'fab', 'sass' ],
                text: 'SASS',
                link: 'https://sass-lang.com/'
              },
              {
                icon: [ 'fab', 'bootstrap' ],
                text: 'Bootstrap',
                link: 'https://getbootstrap.com/'
              },
              {
                icon: [ 'fab', 'vuejs' ],
                text: 'Vue JS',
                link: 'https://vuejs.org/'
              }
            ]

          },
          {
            key: 2,
            description: 'Ongoing',
            color: '#b65d57',
            languages: [
              {
                icon: [ 'fab', 'python' ],
                text: 'Python',
                link: 'https://www.python.org/'
              },
              {
                icon: [ 'fab', 'react' ],
                text: 'React',
                link: 'https://reactjs.org/'
              },
              {
                icon: [ 'fab', 'github' ],
                text: 'GitHub',
                link: 'https://github.com/'
              }
            ]
          }
        ]
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import "./src/scss/_variables.scss";
  @import "./src/scss/_mixins.scss";

  .skills {
    padding: 0 0 10vmin 0;
  }

  .main {

    .level {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0 10vmin;
      margin: 12vmin 0;
      @include sm {
        margin: 5vmin 0;
      }
      @include md {
        margin: 2vmin 0;
      }
      @include lg {
        margin: 0.5vmin;
      }
      @include xl {
        margin: 2vmin;
      }

    &__title {
      width: 100%;
      font-size: 5vw;
      text-transform: uppercase;
      padding: 5vw 0;
      font-weight: 300;
      color: $white;
      @include sm {
        font-size: 2vmin;
      }
      @include md {
        font-size: 3vmin;
      }
      @include lg {
        font-size: 2vmin;
      }
      @include xl {
        font-size: 1.5vw;
        padding: 5vh 0;
      }
    }

    &__language {
      text-decoration: none;

      display: flex;
      flex-direction: column;
      flex-basis: 33%;
      align-items: center;
      justify-content: space-between;
      transition: color 100ms ease-in-out;

      &:hover {
        color: $tertiary;
      }

      &_link {
        font-size: 8vmin;
        padding: 0 0 2vmin 0;
        @include lg {
          font-size: 6vmin;
        }
      }

      &_text {
        font-size: 4vw;
        font-weight: 300;
        text-decoration: none;
        color: $white;
        @include sm {
          font-size: 2vmin;;
        }
        @include md {
          font-size: 2vmin;}
        @include xl {
          font-size: 1vw;
        }
      }
    }
  }
}

</style>
