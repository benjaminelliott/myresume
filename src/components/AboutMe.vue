<template>
  <section class="aboutme section--light" id="about">
    <header class="section__title">
      <h4 class="section__title--light">About Me</h4>
    </header>
    <main class="main">
      <img src="../assets/images/me.jpg" class="me">
      <p class="paragraph" v-for="paragraph in paragraphs" v-bind:key="paragraph">{{paragraph.msg}}</p>
    </main>
  </section>
</template>

<script>
  export default {
    name: 'AboutMe',
    data: () => ({
      paragraphs: [
        {msg:
          'I’ve always been a passionate learner with a knack for getting up to speed quickly, with whatever I put my mind to. My first experience with coding was when my brother and I did a workshop around the age of 14. We created a simple game where the player had to escape a dungeon, avoiding monsters along the way. I felt like Neo in the Matrix, when he knew he could change the world around him.'},
        {msg:
          'At present, my brother is a full-stack web developer, while my career has taken me a different route, as the Director of Coaching at a Bergen County Soccer Club. Regardless, coding has always been a passion project for me, which I’ve pursued in the gaps between employment and school. I completed web development courses on self-learning websites in-between semesters at graduate school. I reached 4th kyu on Codewars in Javascript after I’d graduated and needed another challenge to complete. On my journey, I have learned how to work remotely and meet deadlines across countries and time zones.'},
        {msg:
          'Unfortunately, my current employment has been postponed until    the global pandemic subsides. A lot of people are facing great uncertainty and are unable to find employment due to a lack of skills. I am glad that I have taught myself how to create websites in my spare time, and the current crisis has presented me with the opportunity to use my skills as my main employment.'}
      ]
    })
  }
</script>

<style scoped lang="scss">

  @import "./src/scss/_variables.scss";
  @import "./src/scss/_mixins.scss";

  .aboutme {}

  .main {
    line-height: 6vmin;
    margin: 3vw auto;
    padding: 0 0 5vw 0;
    column-width: 550px;
    font-family: 'Comfortaa', serif;

    @include sm {
      line-height: 6vmin;
    }
    @include md {
      line-height: 6.5vmin;
    }
    @include lg {
      line-height: 4vw;
    }
    @include xl {
      line-height: 3.5vmax;
      padding: 0 2vw;
      margin: 7vmin 0;
    }

    .me {
      width: 20%;
      height: auto;
      float: left ;
      padding: 3vw 5vw 1vw 10vw;
      box-sizing: content-box;

      @include sm {
        padding: 3vmin 3vw 1vmin 10vw;
        width: 20vmin;
      }
      @include lg{
        width: 15%;
        padding: 4vmin 5vmin 4vmin 10vmin;
      }
      @include xl {
        width: 30%;
        padding: 1vw 2vw 0 2vw;
      }
    }

    .paragraph {
      font-weight: 300;
      padding: 1vw 10vw;
      text-align: justify;
      font-size: 3vmin;
      @include sm {
        font-size: 2.5vw;
      }
      @include md {
        font-size: 1.75vw;
      }
      @include lg {
        padding: 2vmin 10vmin;
        font-size: 2vmin;
      }
      @include xl {
        padding: 0 2vw;
        font-size: 1vw;
      }
    }
  }

</style>
