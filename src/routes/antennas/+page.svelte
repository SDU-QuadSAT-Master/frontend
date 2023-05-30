<script lang="ts">
  import { DataGrid } from '$lib/components'
  import type { Antenna } from '$lib/types'
  import { api } from '$lib/api'
  import { onMount } from 'svelte'

  let antennaData: Antenna[]

  async function fetchAntennaData() {
    antennaData = await api.getAntennas()
    console.log(antennaData)
  }
  async function createAntenna(antenna: Antenna) {
    console.log('This is an antenna ' + JSON.stringify(antenna))
    await api.createAntenna(antenna)
  }

  async function updateAntenna(antenna: Antenna) {
    console.log('This is a antenna ' + JSON.stringify(antenna))
    await api.putAntenna(antenna)
  }

  async function deleteAntenna(antenna: Antenna) {
    console.log('This is antenna ' + antenna)
    await api.deleteAntenna(antenna.antennaId)
  }
  onMount(async () => {
    await fetchAntennaData()
  })
</script>

{#key antennaData}
  <DataGrid items={antennaData} onCreate={createAntenna} onDelete={deleteAntenna} onUpdate={updateAntenna} objectType="Antenna" />
{/key}
