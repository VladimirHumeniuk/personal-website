<script>
  import Icon from 'fa-svelte';
  import { icons } from '../helpers/IconsResolver';

  export let title;
  export let iconName;
  export let skills = [];
</script>

<div class="skill-block">
  <div class="skill-block__icon">
    <Icon icon={icons[iconName]} />
  </div>

  <div class="skill-block__content">
    <h3>{ title }</h3>
    <ul class="skill-block__list">

      {#if skills.length > 0}
        {#each skills as skill}
          <li>{ skill }</li>
        {/each}
      {/if}

    </ul>
  </div>
</div>

<style lang="scss">
  .skill-block {
    --border-radius: 14px;

    display: flex;
    padding: 24px;
    border-radius: var(--border-radius);
    background-color: #fff;
    box-shadow: 0 0 35px rgba(0,0,0,.06);
  }

  .skill-block__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 56px;
    width: 56px;
    height: 56px;
    font-size: 1.5rem;
    margin-right: 20px;
    border-radius: var(--border-radius);
    color: #fff;
    background-color: var(--c-primary);
  }

  .skill-block__list {
    display: flex;
    flex-wrap: wrap;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    list-style: none;

    li:not(:last-child) {
      margin-right: 6px;
    }

    li:not(:last-child)::after {
      content: ',';
    }
  }
</style>