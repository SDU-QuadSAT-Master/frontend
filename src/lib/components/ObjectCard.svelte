<script lang="ts">
  import { Button } from 'flowbite-svelte'
  import { PropertyItem, EditObjectModal } from '$lib/components'
  export let data: any
  export let onDelete = () => {}
  export let onUpdate = (item: any) => {}
  export let objectType: string = ''

  let selectedType = 0
  let editModalOpen = false

  function editObject() {
    selectedType = data.type
    editModalOpen = true
  }

  function getDisplayName(objectType: string, type: number) {
    if (objectType === 'Calibration Plan') {
      return type === 0 ? 'Beam Finding' : 'Roll Alignment'
    } else if (objectType === 'Scan Plan') {
      switch (type) {
        case 0:
          return 'Single Point Scan'
        case 1:
          return 'Principal Scan'
        case 2:
          return 'Raster Scan'
        default:
          return ''
      }
    }
    return ''
  }
</script>

<div class="bg-white shadow-md rounded p-6 my-4 border-2 border-blue-400">
  {#if objectType == 'Calibration Plan' || objectType == 'Scan Plan'}
    <b>{getDisplayName(objectType, data.type)}</b>
  {/if}
  {#each Object.entries(data) as [key, value]}
    <PropertyItem {key} {value} />
  {/each}
  <div class="mt-4">
    <Button color="yellow" class="mb-2" on:click={editObject}>Edit</Button>
    <Button color="red" on:click={onDelete}>Delete</Button>
  </div>
</div>

<EditObjectModal bind:open={editModalOpen} {objectType} objectData={data} {onUpdate} {selectedType} />
