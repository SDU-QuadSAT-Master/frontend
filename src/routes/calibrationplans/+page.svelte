<script lang="ts">
  import { DataGrid } from '$lib/components'
  import type { CalibrationPlan } from '$lib/types'
  import { api } from '$lib/api'
  import { onMount } from 'svelte'

  let calData: CalibrationPlan[]

  async function fetchCalibrationPlanData() {
    calData = await api.getCalibrationPlans()
    console.log(calData)
  }
  async function createCalibrationPlan(calData: CalibrationPlan) {
    console.log('This is a CalibrationPlan ' + JSON.stringify(calData))
    await api.createCalibrationPlans(calData)
  }

  async function updateCalibrationPlan(calData: CalibrationPlan) {
    console.log('This is a CalibrationPlan ' + JSON.stringify(calData))
    await api.putCalibrationPlans(calData)
  }

  async function deleteCalibrationPlan(calData: CalibrationPlan) {
    console.log('This is CalibrationPlan ' + calData)
    await api.deleteCalibrationPlans(calData.id)
  }

  onMount(async () => {
    await fetchCalibrationPlanData()
  })
</script>

{#key calData}
  <DataGrid items={calData} onCreate={createCalibrationPlan} onDelete={deleteCalibrationPlan} onUpdate={updateCalibrationPlan} objectType="Calibration Plan" />
{/key}
