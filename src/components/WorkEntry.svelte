<script>
  export let period;
  export let title;
  export let company;
  export let descripiton;
</script>

<div class="work-entry">
  <div class="work-entry__title">
    <h3>{ company }</h3>
    <span>{ period }</span>
  </div>

  <div class="work-entry__body">
    <p class="work-entry__position">{ title }</p>
    <p class="work-entry__description">{ descripiton }</p>
  </div>
</div>

<style lang="scss">
   @import '../styles/variables';

  .work-entry {
    position: relative;
    text-align: left;
    clear: both;

    &::after {
      content: '';
      display: table;
      clear: both;
    }

    &:last-child {
      .work-entry__body {
        margin-bottom: 1.5em;
      }
    }
  }

  .work-entry__title {
    position: relative;
    float: left;
    width: 33.33%;
    padding-right: 30px;
    margin-bottom: .5em;
    text-align: right;

    &::before {
      content: '';
      position: absolute;
      width: 18px;
      height: 18px;
      border: 4px solid var(--c-accent);
      background-color:#fff;
      border-radius: 50%;
      top: 15%;
      right: -8px;
      z-index: 99;
    }

    @media (max-width: $mq-sm) {
      float: none;
      width: 100%;
      padding-right: 0;
      padding-left: 30px;
      text-align-last: left;

      &::before {
        left: -9px;
        right: unset;
      }
    }
  }

  .work-entry__body {
    margin: 0 0 3em;
    float: right;
    width: 66.66%;
    padding-left: 30px;

    @media (max-width: $mq-sm) {
      float: none;
      width: 100%;
    }
  }

  .work-entry__position {
    font-size: 20px;
    line-height: 1;
  }

  .work-entry__description {
    color: #d1e2ff;
    margin-bottom: 0;
    text-align: justify;
  }
</style>