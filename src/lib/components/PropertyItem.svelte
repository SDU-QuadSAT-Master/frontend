<script lang="ts">
  import { PropertyItem } from '$lib/components'
  import { Button } from 'flowbite-svelte'

  export let key: any
  export let value: any

  let showNested = false

  function toggleNested() {
    showNested = !showNested
  }
</script>

<div class="mb-2">
  <strong class="text-blue-600">{key}:</strong>
  {#if typeof value === 'object' && value !== null}
    <Button size="xs" on:click={toggleNested}>
      {showNested ? 'Hide' : 'Show'}
    </Button>
    {#if showNested}
      <div class="ml-4">
        {#each Object.entries(value) as [nestedKey, nestedValue]}
          <PropertyItem key={nestedKey} value={nestedValue} />
        {/each}
      </div>
    {/if}
  {:else}
    <pre class="text-gray-800 inline">{value}</pre>
  {/if}
</div>
