<script lang="ts">
  import { buildMonthSurprises, type MonthSurprise } from '$lib/data/month-surprises';
  import { clampYear, isMonthUnlocked } from '$lib/utils/month-unlock';
  import MonthDoor from './MonthDoor.svelte';
  import MonthSurpriseModal from './MonthSurpriseModal.svelte';

  type Props = {
    year?: number; // default current year
  };

  let { year = new Date().getFullYear() }: Props = $props();
  year = clampYear(year);

  let now = $state(new Date());
  let selectedMonthIndex0 = $state<number | null>(null);
  let modalOpen = $state(false);

  const surprises = $derived(buildMonthSurprises());

  const selectedSurprise = $derived<MonthSurprise | null>(
    selectedMonthIndex0 !== null ? (surprises.find((s) => s.monthIndex0 === selectedMonthIndex0) ?? null) : null
  );

  $effect(() => {
    // minute resolution is enough
    const id = window.setInterval(() => {
      now = new Date();
    }, 60_000);
    return () => window.clearInterval(id);
  });

  function openMonth(monthIndex0: number) {
    selectedMonthIndex0 = monthIndex0;
    modalOpen = true;
  }

  function closeModal() {
    modalOpen = false;
  }
</script>

<section class="mx-auto w-full max-w-3xl px-4 py-6">
  <header class="mb-5">
    <h1 class="text-xl font-semibold text-stone-900">Monthly Surprise Calendar {year}</h1>
    <p class="mt-1 text-sm text-stone-600">
      On the 1st of each month, a new door opens. Opened doors remain accessible.
    </p>
  </header>

  <section class="grid grid-cols-1 gap-3 sm:grid-cols-2">
    {#each surprises as s (s.monthIndex0)}
      <MonthDoor {year} surprise={s} unlocked={isMonthUnlocked(now, year, s.monthIndex0)} onOpen={openMonth} />
    {/each}
  </section>

  <MonthSurpriseModal open={modalOpen} surprise={selectedSurprise} onClose={closeModal} />
</section>
