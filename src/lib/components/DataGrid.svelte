<script lang="ts">
  import { Button } from 'flowbite-svelte'
  import { ObjectCard, CreateObjectModal } from '$lib/components'
  export let items: any[] = []
  export let objectType: string
  export let onCreate = (item: any) => {}
  export let onUpdate = (item: any) => {}
  export let onDelete = (item: any) => {}

  let editModalOpen = false

  function editObject() {
    editModalOpen = true
  }
</script>

<div class="mt-4 ml-4">
  <Button
    color="green"
    class="mb-2"
    on:click={() => {
      editObject()
      onCreate
    }}>Create</Button
  >
</div>
<div class="flex flex-wrap">
  {#each items as item}
    <div class="w-full sm:w-1/2 lg:w-1/3 p-2">
      <ObjectCard data={item} onDelete={() => onDelete(item)} {objectType} {onUpdate} />
    </div>
  {/each}
</div>

<CreateObjectModal bind:open={editModalOpen} {objectType} {onCreate} />
