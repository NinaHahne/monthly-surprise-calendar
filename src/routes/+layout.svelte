<!-- Global layout for all pages -->
<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import '../styles/app.css';

  let { children } = $props();

  const getScrollbarWidth = () => {
    // Scrollbar-Breite ermitteln
    const e = document.createElement('div');
    (e.style.visibility = 'hidden'), (e.style.width = '100px'), document.body.append(e);
    const t = e.offsetWidth;
    e.style.overflow = 'scroll';
    const o = document.createElement('div');
    (o.style.width = '100%'), e.append(o);
    const d = o.offsetWidth;
    e.remove();
    document.body.style.setProperty('--scrollbar-width', t - d + 'px');
  };

  let container: HTMLElement;
  let resizeObserver: ResizeObserver;
  let isBodyOverflowing = $state(false);

  const checkBodyOverflow = () => {
    isBodyOverflowing = document.body.scrollHeight > window.innerHeight;
  };

  let showMenu: boolean = $state(false);
  let showNavigation = $state(false);

  const toggleMenu = () => {
    // Check screen size before toggling
    if (window.matchMedia('(max-width: 1023px)').matches) {
      showMenu = !showMenu;
    }
  };

  const toggleMenuIfOpen = () => {
    !showMenu || toggleMenu();
  };

  onMount(() => {
    getScrollbarWidth();

    resizeObserver = new ResizeObserver(() => {
      // console.log("Layout changed!");

      // Handle layout changes here
      checkBodyOverflow();
    });
    if (container) {
      resizeObserver.observe(container);
    }

    showNavigation = true;
  });

  onDestroy(() => {
    // console.log("layout onDestroy");
    resizeObserver?.disconnect();
  });
</script>

<svelte:head>
  <title>Monthly Surprise Calendar</title>
</svelte:head>

<div
  bind:this={container}
  class="relative flex min-h-dvh w-full flex-col justify-between"
  class:overflowing={isBodyOverflowing}
  class:show-menu={showMenu}
>
  <header class="pointer-events-none fixed top-0 z-50 flex h-16 w-full justify-between p-4">
    <!-- <nav class="relative flex h-full items-center justify-center gap-4 pointer-events-auto">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav> -->
  </header>

  <main class="relative flex flex-col p-4">
    {@render children()}
  </main>

  <!-- <footer class="relative">
  </footer> -->
</div>
