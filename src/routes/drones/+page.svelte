<script lang="ts">
  import { DataGrid } from '$lib/components'
  import type { Drone } from '$lib/types'
  import { api } from '$lib/api'
  import { onMount } from 'svelte'

  let droneData: Drone[]

  async function fetchDroneData() {
    droneData = await api.getDrones()
    console.log(droneData)
  }
  async function createDrone(drone: Drone) {
    console.log('This is a drone ' + JSON.stringify(drone))
    await api.createDrone(drone)
  }

  async function updateDrone(drone: Drone) {
    console.log('This is a drone ' + JSON.stringify(drone))
    await api.putDrone(drone)
  }

  async function deleteDrone(drone: Drone) {
    console.log('This is drone ' + drone)
    await api.deleteDrone(drone.droneId)
  }

  onMount(async () => {
    await fetchDroneData()
  })
</script>

{#key droneData}
  <DataGrid items={droneData} onCreate={createDrone} onDelete={deleteDrone} onUpdate={updateDrone} objectType="Drone" />
{/key}
