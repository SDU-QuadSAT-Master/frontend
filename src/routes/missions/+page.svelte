<script lang="ts">
  import { DataGrid } from '$lib/components'
  import type { Mission } from '$lib/types'
  import { api } from '$lib/api'
  import { onMount } from 'svelte'

  let missionData: Mission[]

  async function fetchMissionData() {
    missionData = await api.getMissions()
    console.log(missionData)
  }
  async function createMission(mission: Mission) {
    console.log('This is a mission ' + JSON.stringify(mission))
    await api.createMission(mission)
  }

  async function updateMission(mission: Mission) {
    console.log('This is a mission ' + JSON.stringify(mission))
    await api.putMission(mission)
  }

  async function deleteMission(mission: Mission) {
    console.log('This is mission ' + mission)
    await api.deleteMission(mission.missionId)
  }
  onMount(async () => {
    await fetchMissionData()
  })
</script>

{#key missionData}
  <DataGrid items={missionData} onCreate={createMission} onDelete={deleteMission} onUpdate={updateMission} objectType="Mission" />
{/key}
