<template>
  <section id="references" class="references section--dark">
    <header class="section__title">
        <h4 class="section__title--dark">References</h4>
    </header>
    <main class="main">
      <div class="reference" v-for="info in infos" v-bind:key="info" :class="info.class">
        <div class="person">
          <h4 class="person__name">{{ info.name }}</h4>
          <h5 class="person__role">{{ info.role }}</h5>
          <h6 class="person__organization">{{ info.organization }}</h6>
        </div>
        <div class="contacts">
          <div class="contact" v-for="i in info.contacts" v-bind:key="i">
            <a class="contact__icon" :href="i.link"><font-awesome-icon :icon="i.icon"/></a>
            <a :href="i.link"><h6 class="contact__text">{{ i.text }}</h6></a>
          </div>
        </div>
        <div v-if="infos.length-1 > info.key">
          <hr class="hr">
        </div>
      </div>
    </main>
  </section>
</template>

<script>

export default {
  name: 'References',
  data() {
    return {
        infos: [
          { key: 0,
            class: 'brian',
            name: 'Brian Deane',
            organization: 'Americans Soccer Club',
            role: 'President',
            contacts: {
                phone: {text: '+201-264-5520', icon: ['fas', 'phone' ], link: 'tel:201-264-5520', class: 'reference__phone'},
                email: {text: 'jbdeane@optonline.net', icon: ['fas', 'envelope' ], link: 'mailto:jbdeane@optonline.net?Subject=Tell%Me%About%Benjamin%Elliott', class: 'reference__email'}
            }
          },
          { key: 1,
            class: "rob",
            name: 'Dr. Robert Gilbert',
            organization: 'Montclair State University',
            role: 'Associate Professor',
            contacts: {
              phone: {text: '+973-655-5239', icon: ['fas', 'phone' ], link: 'tel:973-655-5239', class: 'reference__phone'},
              email: {text: 'gilbertr@montclair.edu', icon: ['fas', 'envelope' ], link: 'mailto:gilbertr@montclair.edu?Subject=Tell%Me%About%Benjamin%Elliott', class: 'reference__email'}
            }
          },
          { key: 2,
            class: "matt",
            name: 'Matt Myers',
            organization: 'Ridgewood Soccer Club',
            role: 'Director of Coaching',
            contacts: {
              phone: {text: '+973-494-2520', icon: ['fas', 'phone' ], link: 'tel:973-494-2520', class: 'reference__phone'},
              email: {text: 'maroonsdoc.gmail.com', icon: ['fas', 'envelope' ], link: 'mailto:maroonsdoc.gmail.com?Subject=Tell%Me%About%Benjamin%Elliott', class: 'reference__email'}
            }
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

  .references {
    background: linear-gradient($secondary, $primary);
    @include xl {
      min-height: 75vh;
    }
  }

  .main {
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 5vw;

    @include lg {
      padding: 10vh 0;
    }
    @include xl {
      width: 100%;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: stretch;
      align-content: stretch;
      margin-top: auto;
      margin-bottom: auto;
    }

    .reference{
      margin: 4vw 20vw 4vw 20vw;
      height: 100%;

      @include sm {
        margin: 2vw 30vw 0 30vw;
      }
      @include md {
        margin: 0 30vw 0 30vw;
      }
      @include lg {
        margin: 0  auto;
        padding: 0;
      }
      @include xl {
        margin: 0 auto;
        padding: 0 5vw;
      }

      .person {
        padding: 0;
        margin: auto;
        @include md {
          padding: 4vh 0;
        }
        @include xl {
          padding: 3vh 0;
        }

        &__name{
          color: $white;
          text-align: left;
          text-transform: uppercase;
          font-size: 4vw;
          font-weight: 300;
          @include sm {
            font-size: 3.5vw;
          }
          @include md {
            font-size: 2vw;
          }
          @include lg {
            font-size: 3vmin;
          }
          @include xl {
            font-size: 2vw;
          }
        }

        &__role {
          color: $lightgrey;
          text-align: left;
          font-size: 3vw;
          font-weight: 300;
          @include sm {
            font-size: 2.5vw;
          }
          @include md {
            font-size: 2vw;
          }
          @include xl {
            font-size: 1.5vw;
          }
        }

        &__organization {
          color: $grey;
          text-align: left;
          font-size: 3vw;
          font-weight: 300;
          @include sm {
            font-size: 2.5vw;
          }
          @include md {
            font-size: 2vw;
          }
          @include xl {
            font-size: 1.5vw;
          }
        }
      }

      .contacts {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-strart;

        .contact {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: flex-start;
          justify-content: flex-start;

          &__icon{
            color: $gold;
            transition: 300ms ease-in;
            box-sizing: content-box;
            padding: 0 2vw 0 0;

            &:hover {
              color:$tertiary;
            }
          }

          &__text{
            color: $white;
            transition: 300ms ease-in;
            font-weight: 300;
            font-size: 2.5vw;
            @include sm {
              font-size: 2.5vw;
            }
            @include md {
              font-size: 2vw;
            }
            @include lg {
              font-size: 2vmin;
            }
            @include xl {
              font-size: 1.1vw;
            }
            &:hover {
              color: $tertiary;
            }
          }
        }
      }

      .hr {
        border: 1px solid $primary;
        width: 150%;
        margin-top: 4vh;
        margin-left:-25%;
        margin-right:-25%;
        @include md {
          margin-top: 3vh;
        }
        @include xl {
          display: none;
        }
      }
    }
  }

</style>
