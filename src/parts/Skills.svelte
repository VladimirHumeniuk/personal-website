<script>
  import { db } from './../firebase.js';
  import { collectionData } from 'rxfire/firestore';
  import { startWith, switchMap } from 'rxjs/operators';

  import Container from '../components/Container.svelte';
  import SkillBlock from '../components/SkillBlock.svelte';

  const query = db.collection('skills').orderBy('order');

  let skills = collectionData(query, 'id').pipe(startWith([]))
</script>

<article class="skills">
  <Container>
    <h2 class="heading">My skills and knowledge</h2>

    <section class="skills__list">
      {#each $skills as skill}
        <SkillBlock
        title={ skill.title }
        iconName={ skill.icon }
        skills={ skill.values } />
      {/each}

    </section>

  </Container>
</article>

<style lang="scss">
  @import '../styles/variables';

  .skills {
    padding-bottom: 40px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .skills__list {
    display: grid;
    gap: 15px;

    @media (min-width: $mq-sm) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: $mq-lg) {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 30px;
    }
  }
</style>