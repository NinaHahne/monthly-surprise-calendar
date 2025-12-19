<script lang="ts">
  import type { MonthSurprise } from '$lib/data/month-surprises';
  import { monthLabelDE } from '$lib/data/month-surprises';

  type Props = {
    year: number;
    surprise: MonthSurprise;
    unlocked: boolean;
    onOpen: (monthIndex0: number) => void;
  };

  let { surprise, unlocked, onOpen }: Props = $props();

  const label = $derived(monthLabelDE(surprise.monthIndex0));
  const short = $derived(`${surprise.monthIndex0 + 1}`);
</script>

<button
  type="button"
  class={[
    'group relative w-full overflow-hidden rounded-2xl border p-4 text-left shadow-sm transition active:scale-[0.99]',
    unlocked ? 'border-stone-200 bg-white' : 'border-stone-200 bg-stone-50 opacity-90',
  ].join(' ')}
  disabled={!unlocked}
  aria-disabled={!unlocked}
  onclick={() => unlocked && onOpen(surprise.monthIndex0)}
>
  <div class="flex items-center justify-between gap-3">
    <div>
      <!-- <div class="text-sm font-semibold text-stone-800">{short}</div> -->
      <div class="text-sm font-semibold text-stone-800">{label}</div>
      <!-- <div class="mt-1 text-xs text-stone-500">
        {unlocked ? 'Unlocked / available' : 'Not yet available'}
      </div> -->
    </div>

    <div
      class={[
        'flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold',
        unlocked ? 'border-stone-200 bg-stone-50 text-stone-700' : 'border-stone-200 bg-white text-stone-400',
      ].join(' ')}
      aria-hidden="true"
    >
      {unlocked ? '👀' : '🔒'}
    </div>
  </div>

  <div class="mt-3">
    <div
      class={[
        'h-20 w-full rounded-xl bg-gradient-to-br from-stone-100 to-stone-50',
        unlocked ? 'opacity-100' : 'opacity-60',
      ].join(' ')}
    ></div>
  </div>

  <span
    class="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-stone-300 transition group-focus-visible:ring-2"
  ></span>
</button>
