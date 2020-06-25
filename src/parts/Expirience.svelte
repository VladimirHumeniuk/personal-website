<script>
  import { db } from './../firebase.js';
  import { collectionData } from 'rxfire/firestore';
  import { startWith, map } from 'rxjs/operators';
  import WorkEntry from './../components/WorkEntry.svelte';
  import Container from '../components/Container.svelte';

  const query = db.collection('works').orderBy('date');

  let works = collectionData(query, 'id').pipe(
    startWith([]),
    map(data => data.reverse())
  )
</script>

<section class="expirience">
  <Container>
    <h2 class="heading">Work expirience</h2>

    <div class="timeline">
      {#each $works as work}
        <WorkEntry
        period={work.period}
        title={work.title}
        company={work.company}
        descripiton={work.description} />
      {/each}
    </div>
  </Container>
</section>

<style lang="scss">
   @import '../styles/variables';

  .expirience {
    background-color: var(--c-primary);
    color: #fff;
    padding: 80px 15px 40px;
    text-align: center;
  }

  .timeline {
    position: relative;
    margin-top: 3em;

    &::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 33.33%;
      transform: translateX(-2px);
      bottom: 0px;
      width: 2px;
      background: #ddd;
    }

    &::after {
      content: "";
      display: table;
      clear: both;
    }

    @media (max-width: $mq-sm) {
      margin-left: 20px;
      padding-right: 20px;

      &::before {
        left: 0;
      }
    }
  }
</style>