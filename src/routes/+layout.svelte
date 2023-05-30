<!-- __layout.svelte -->
<script>
  import '../app.postcss'
  import { Navbar, NavLi, NavUl } from 'flowbite-svelte'
</script>

<Navbar let:hidden let:toggle class="bg-white shadow-md">
  <NavUl {hidden} class="bg-white">
    <NavLi href="/" active={true} class="text-gray-800">Home</NavLi>
    <NavLi href="/antennas" class="text-gray-800">Antennas</NavLi>
    <NavLi href="/drones" class="text-gray-800">Drones</NavLi>
    <NavLi href="/missions" class="text-gray-800">Missions</NavLi>
    <NavLi href="/scanplans" class="text-gray-800">Scan Plans</NavLi>
    <NavLi href="/calibrationplans" class="text-gray-800">Calibration Plans</NavLi>
  </NavUl>
</Navbar>
<main class="bg-gradient-to-br from-blue-400 to-indigo-500">
  <slot />
</main>

<style>
  :global(html, body) {
    height: 100%;
    margin: 0;
  }
  :global(body) {
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom right, #2563eb, #4f46e5);
  }
  main {
    flex-grow: 1;
  }
</style>
