<script>
  import { onMount } from 'svelte';

  function isVisible() {
    let el = document.getElementById("laptop");
    let top = el.offsetTop;
    let height = el.offsetHeight;
    const visible = top < (window.pageYOffset + window.innerHeight) && (top + height + 100) > window.pageYOffset;

    if (visible) {
      el.classList.add('opened');
    } else {
      el.classList.remove('opened');
    }
  }

  function laptopSetup() {
    let el = document.getElementById("laptop");

    function setup() {
      el.classList.add('loaded');
      el.classList.add('opened')
    }

    setTimeout(setup, 10);
  }

  onMount(() => {
    laptopSetup();
  });
</script>

<svelte:window on:wheel={isVisible} />

<main class="hero">
  <div class="hero__headings">
    <h1 class="hero__title">Vladimir Humeniuk</h1>
    <h2 class="hero__subtitle">Front End developer</h2>
  </div>

  <section class="laptop">
    <div class="laptop__wrapper">
      <div
      id="laptop"
      class="laptop__mockup">
        <div class="laptop__part laptop__part--top">
          <img src="assets/images/laptop-parts/laptop-top.svg" alt="" class="top">
          <img src="assets/images/laptop-parts/laptop-cover.svg" alt="" class="cover">
          <!-- <img src="/assets/laptop-parts/laptop-content.png" class="content" alt=""> -->
        </div>

        <div class="laptop__part laptop__part--bottom">
          <img src="assets/images/laptop-parts/laptop-cover.svg" alt="" class="cover">
          <img src="assets/images/laptop-parts/laptop-bottom.svg" alt="" class="bottom">
        </div>
      </div>
    </div>
  </section>
</main>

<style lang="scss">
  @import '../styles/variables';

  .hero {
    position: relative;
    color: #fff;
    overflow: hidden;
    z-index: 2;
    padding: 0 35px;
    background-image: linear-gradient(60deg,#347eff 0,#4c6df9 50%,#4a68ef 50%,#5b5ef4 100%);
    background-repeat: no-repeat;
    background-size: cover;
    height: 70vh;

    @media (min-width: 440px) {
      height: 80vh;
    }

    @media (min-width: 600px) {
      height: 90vh;
    }

    @media (min-width: 700px) {
      height: 720px;
    }

    @media (min-width: 740px) {
      height: 780px;
    }

    @media (min-width: 820px) {
      height: 820px;
    }

    @media (min-width: $mq-lg) {
      height: 920px;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      z-index: 2;
      background-color: var(--c-background);
    }

    &::before {
      bottom: -30%;
      left: 0;
      width: 40%;
      height: 30%;
      transform-origin: 100% 0;
      transform: scale(3.5,1) rotate(33deg);
    }

    &::after {
      bottom: -50%;
      right: 0;
      width: 60%;
      height: 50%;
      transform-origin: 0 0;
      transform: scale(4,1) rotate(-36deg);
    }
  }

  .hero__headings {
    padding-top: 80px;
    padding-bottom: 60px;
    text-align: center;
  }

  .hero__title {
    color: #fff;
    font-size: 40px;
    line-height: 1.25;
    font-weight: 300;

    b {
      font-weight: 400;
    }
  }

  .hero__subtitle {
    font-weight: 300;
    font-size: 18px;
    color: #fff;
    line-height: 1.5;
  }

  .laptop {
    @media (max-width: 900px) {
      padding-left: 8%;
      padding-right: 8%;
    }

    .laptop__mockup {
      display: inline-block;
      position: relative;
      z-index: 3;
      text-align: center;
      font-size: 0;
      perspective: 2400px;
      perspective-origin: 50% 100%;
      opacity: 1;
      transition: 500ms opacity;

      &.loaded {
        opacity: 1;
      }

      img {
        display: block;
        max-width: 100%;
        backface-visibility: hidden;
      }

      &.opened {
        .laptop__part {
          &--top {
            transform: translate3d(0,0,0) rotateX(0deg);
          }
        }
      }
    }

    .laptop__part {
      display: inline-block;
      position: relative;
      transform-style: preserve-3d;
      transform-origin: 50% 100%;
      transition: 900ms;
      will-change: transform;

      &--top {
        transform: translate3d(0,0,0) rotateX(-90deg);
      }

      &--bottom {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate3d(0,0,0) rotateX(-90deg);
      }

      .cover {
        position: relative;
      }

      .top {
        transform-origin: 50% 0;
        transform: translate3d(0,0,-11px) rotateX(90deg);
        transition: 900ms;

        @media (max-width: 900px) {
          transform: translate3d(0,0,-6px) rotateX(90deg);
        }
      }

      .bottom {
        transform-origin: 50% 0;
        transform: translate3d(0,0,0) rotateX(90deg);
      }

      .top,
      .bottom {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  .laptop__wrapper {
    max-width: 880px;
    margin: 0 auto;
    position: relative;
    width: 100%;
    text-align: center;
  }

  .content {
    display: block;
    position: absolute;
    top: 6.7%;
    left: 4%;
    width: 92%;
    border-radius: 6px;
    backface-visibility: hidden;
    transform: translate3d(0,0,1px);
  }
</style>