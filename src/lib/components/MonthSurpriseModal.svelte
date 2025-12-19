<script lang="ts">
  import type { MonthSurprise } from '$lib/data/month-surprises';

  type Props = {
    open: boolean;
    surprise: MonthSurprise | null;
    onClose: () => void;
  };

  let { open, surprise, onClose }: Props = $props();

  $effect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });
</script>

{#if open && surprise}
  <div class="fixed inset-0 z-50">
    <button type="button" class="absolute inset-0 bg-black/40" aria-label="Close" onclick={onClose}></button>

    <section
      class="absolute inset-x-0 bottom-0 mx-auto w-full max-w-lg rounded-t-3xl bg-white p-5 shadow-2xl"
      role="dialog"
      aria-modal="true"
      aria-label={surprise.title}
    >
      <div class="flex items-start justify-between gap-4">
        <div>
          <!-- <div class="text-xs font-semibold text-stone-500">Surprise</div> -->
          <h2 class="mt-1 text-lg font-semibold text-stone-900">{surprise.title}</h2>
        </div>

        <button
          type="button"
          class="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-700"
          onclick={onClose}
        >
          Close
        </button>
      </div>

      {#if surprise.image}
        <img
          class="mt-4 h-56 w-full rounded-2xl object-cover"
          src={surprise.image}
          alt={surprise.title}
          loading="lazy"
        />
      {/if}

      {#if surprise.text}
        <p class="mt-4 text-sm leading-relaxed text-stone-700">{surprise.text}</p>
      {/if}

      {#if surprise.link}
        <a
          class="mt-4 inline-flex w-full items-center justify-center rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-800"
          href={surprise.link.href}
          target="_blank"
          rel="noreferrer"
        >
          {surprise.link.label}
        </a>
      {/if}
    </section>
  </div>
{/if}
