<script lang="ts">
  import { DataGrid } from '$lib/components'
  import type { ScanPlan } from '$lib/types'
  import { api } from '$lib/api'
  import { onMount } from 'svelte'

  let scanData: ScanPlan[]

  async function fetchScanPlanData() {
    scanData = await api.getScanPlans()
    console.log(scanData)
  }
  async function createScanPlan(scanData: ScanPlan) {
    console.log('This is a ScanPlan ' + JSON.stringify(scanData))
    await api.createScanPlans(scanData)
  }

  async function updateScanPlan(scanData: ScanPlan) {
    console.log('This is a ScanPlan ' + JSON.stringify(scanData))
    await api.putScanPlans(scanData)
  }

  async function deleteScanPlan(scanData: ScanPlan) {
    console.log('This is ScanPlan ' + scanData)
    await api.deleteScanPlans(scanData.id)
  }

  onMount(async () => {
    await fetchScanPlanData()
  })
</script>

{#key scanData}
  <DataGrid items={scanData} onCreate={createScanPlan} onDelete={deleteScanPlan} onUpdate={updateScanPlan} objectType="Scan Plan" />
{/key}
