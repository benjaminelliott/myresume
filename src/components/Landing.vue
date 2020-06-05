<template>
  <section id="landing" class="landing">
    <main class="main">
      <div class="jumbo">
        <h1 class="jumbo__title">{{ infos.header }}</h1>
        <h4 class="jumbo__lead">{{infos.lead}}</h4>
        <hr class="jumbo__hr">
        <a class="jumbo__call" href="#about">{{infos.call}}</a>
      </div>
    </main>
  </section>
</template>
<script>
  const Landing = {
    data: () => ({
      infos: {
        colorSwitch: false,
        header: "Hey, I'm Benjamin",
        lead:  "I build striking, responsive & intuitive websites",
        call: "See for yourself",
      }
    }),
    methods: {
    }
  }
  export default Landing;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import "./src/scss/_variables.scss";
  @import "./src/scss/_mixins.scss";

  .landing {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;

    .main {
      background-image: url("../assets/images/hero1.1.jpg");
      background-color: #cccccc;
      height: 100vh;
      width: 100vw;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      align-items: start;
      justify-content: center;
      align-content: end;

      .jumbo {
        margin-top: 5vmin;
        width: 100%;
        text-align: right;
        padding: 5vmin 5vmin;
        color: $white;
        @include sm {
          padding-top: 10vmin;
        }
        @include md {
          padding-top: 5vmin;
          margin-top: 2vmin;;
        }
        @include lg {
          margin-top: 3vmin;
        }
        @include xl {
          margin: 0;
          padding-top: 10vmin;
        }

        &__title {
          font-weight: 200;
          font-size: 7vmin;
          color: $white;
        }

        &__lead {
          font-size: 3.5vw;
          font-weight: 400;
          color: $white;
          @include sm {
            font-size: 3vw;
          }
          @include md {
            font-size: 3.5vmin;
          }
          @include lg {
            font-size: 4vmin;
          }
          @include xl {
            font-size: 2.5vw;
          }
        }

        &__hr {
          background: linear-gradient(to right, $tertiary, $gold, $red, $lightblue);
          text-align: right;
          border: none;

          margin-left: 50%;
          padding: 2px;
        }

        &__call {
          font-size: 5vw;
          font-weight: 400;
          text-transform: uppercase;
          text-decoration: none;
          color: $white;
          transition: color 300ms ease-in-out;

          @include sm {
            font-size: 3vw;
          }
          @include md {
            font-size: 4vmin;
          }
          @include lg {
            font-size: 3vmin;
          }
          @include xl {
            font-size: 3vw;
          }
        }

        &__call:hover, :focus {
          color: $tertiary;
        }
      }
    }
  }

</style>
