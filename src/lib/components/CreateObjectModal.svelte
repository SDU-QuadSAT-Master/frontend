<script lang="ts">
  // @ts-nocheck

  import { Modal, Button, Label, Input, Select } from 'flowbite-svelte'
  export let open = false
  export let objectType = ''
  export let onCreate = (item: any) => {}
  export let objectData = {}
  let selectedType = 0
  $: {
    objectData.type = selectedType
  }

  const getAvailableTypes = (objectType) => {
    if (objectType === 'Scan Plan') {
      return [
        { label: 'Single Point Scan', value: 0 },
        { label: 'Principal Scan', value: 1 },
        { label: 'Raster', value: 2 },
      ]
    } else if (objectType === 'Calibration Plan') {
      return [
        { label: 'Beam Finding', value: 0 },
        { label: 'Roll Alignment', value: 1 },
      ]
    }
    return []
  }

  const setTypeValue = () => {
    objectData.setType = selectedType
  }
</script>

<Modal title="Create {objectType}" bind:open autoclose={false} size="lg">
  <form>
    {#if objectType === 'Antenna'}
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <Label for="title" class="mb-2">Title</Label>
          <Input type="text" id="title" bind:value={objectData.title} required />
        </div>
        <div>
          <Label for="operator" class="mb-2">Operator</Label>
          <Input type="text" id="operator" bind:value={objectData.operator} required />
        </div>
        <div>
          <Label for="location" class="mb-2">Location</Label>
          <Input type="text" id="location" bind:value={objectData.location} required />
        </div>
      </div>
    {/if}
    {#if objectType === 'Drone'}
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <Label for="organization" class="mb-2">Organization</Label>
          <Input type="text" id="organization" bind:value={objectData.organization} required />
        </div>
      </div>
    {/if}
    {#if objectType === 'Mission'}
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <Label for="title" class="mb-2">Title</Label>
          <Input type="text" id="title" bind:value={objectData.title} required />
        </div>
        <div>
          <Label for="location" class="mb-2">Location</Label>
          <Input type="text" id="location" bind:value={objectData.location} required />
        </div>
        <div>
          <Label for="agent" class="mb-2">Agent</Label>
          <Input type="text" id="agent" bind:value={objectData.agent} required />
        </div>
        <div>
          <Label for="drone" class="mb-2">Drone</Label>
          <Input type="text" id="drone" bind:value={objectData.drone} required />
        </div>
        <div>
          <Label for="antenna" class="mb-2">Antenna</Label>
          <Input type="text" id="antenna" bind:value={objectData.antenna} required />
        </div>
      </div>
    {/if}
    {#if objectType === 'Scan Plan' || objectType === 'Calibration Plan'}
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <Label for="type" class="mb-2">Type</Label>
          <Select id="type" bind:value={selectedType} on:change={() => (objectData.type = selectedType)}>
            {#each getAvailableTypes(objectType) as type}
              <option value={type.value}>{type.label}</option>
            {/each}
          </Select>
        </div>
        <div>
          <Label for="name" class="mb-2">Name</Label>
          <Input type="text" id="name" on:change={() => setTypeValue} bind:value={objectData.name} required />
        </div>
        <div>
          <Label for="comment" class="mb-2">Comment</Label>
          <Input type="text" id="comment" bind:value={objectData.comment} />
        </div>
        {#if objectType === 'Scan Plan'}
          {#if selectedType === 0}
            <div>
              <Label for="duration" class="mb-2">Duration</Label>
              <Input type="number" id="duration" bind:value={objectData.duration} />
            </div>
            <div>
              <Label for="offsetAzimuth" class="mb-2">Offset Azimuth</Label>
              <Input type="number" id="offsetAzimuth" bind:value={objectData.offsetAzimuth} />
            </div>
            <div>
              <Label for="offsetElevation" class="mb-2">Offset Elevation</Label>
              <Input type="number" id="offsetElevation" bind:value={objectData.offsetElevation} />
            </div>
          {/if}
          {#if selectedType === 1}
            <div>
              <Label for="start" class="mb-2">Start</Label>
              <Input type="number" id="start" bind:value={objectData.start} />
            </div>
            <div>
              <Label for="step" class="mb-2">Step</Label>
              <Input type="number" id="step" bind:value={objectData.step} />
            </div>
            <div>
              <Label for="stop" class="mb-2">Stop</Label>
              <Input type="number" id="stop" bind:value={objectData.stop} />
            </div>
            <div>
              <Label for="speed" class="mb-2">Speed</Label>
              <Input type="number" id="speed" bind:value={objectData.speed} />
            </div>
            <div>
              <Label for="roll" class="mb-2">Roll</Label>
              <Input type="number" id="roll" bind:value={objectData.roll} />
            </div>
            <div>
              <Label for="plane" class="mb-2">Plane</Label>
              <Input type="number" id="plane" bind:value={objectData.plane} />
            </div>
            <div>
              <Label for="direction" class="mb-2">Direction</Label>
              <Input type="number" id="direction" bind:value={objectData.direction} />
            </div>
          {/if}
          {#if selectedType === 2}
            <div>
              <Label for="azimuthStart" class="mb-2">Azimuth Start</Label>
              <Input type="number" id="azimuthStart" bind:value={objectData.azimuthStart} />
            </div>
            <div>
              <Label for="azimuthStep" class="mb-2">Azimuth Step</Label>
              <Input type="number" id="azimuthStep" bind:value={objectData.azimuthStep} />
            </div>
            <div>
              <Label for="azimuthStop" class="mb-2">Azimuth Stop</Label>
              <Input type="number" id="azimuthStop" bind:value={objectData.azimuthStop} />
            </div>
            <div>
              <Label for="elevationStart" class="mb-2">Elevation Start</Label>
              <Input type="number" id="elevationStart" bind:value={objectData.elevationStart} />
            </div>
            <div>
              <Label for="elevationStep" class="mb-2">Elevation Step</Label>
              <Input type="number" id="elevationStep" bind:value={objectData.elevationStep} />
            </div>
            <div>
              <Label for="elevationStop" class="mb-2">Elevation Stop</Label>
              <Input type="number" id="elevationStop" bind:value={objectData.elevationStop} />
            </div>
            <div>
              <Label for="speed" class="mb-2">Speed</Label>
              <Input type="number" id="speed" bind:value={objectData.speed} />
            </div>
            <div>
              <Label for="plane" class="mb-2">Plane</Label>
              <Input type="number" id="plane" bind:value={objectData.plane} />
            </div>
            <div>
              <Label for="direction" class="mb-2">Direction</Label>
              <Input type="number" id="direction" bind:value={objectData.direction} />
            </div>
          {/if}
          {#if selectedType === 0 || selectedType === 1 || selectedType === 2}
            <div>
              <Label for="radius" class="mb-2">Radius</Label>
              <Input type="number" id="radius" bind:value={objectData.radius} />
            </div>
            <div>
              <Label for="polarization" class="mb-2">Polarization</Label>
              <Input type="number" id="polarization" bind:value={objectData.polarization} />
            </div>
          {/if}
        {/if}
        {#if objectType === 'Calibration Plan'}
          {#if objectData.type === 0}
            <div>
              <Label for="startAzimuth" class="mb-2">Start Azimuth</Label>
              <Input type="number" id="startAzimuth" bind:value={objectData.startAzimuth} />
            </div>
            <div>
              <Label for="stepAzimuth" class="mb-2">Step Azimuth</Label>
              <Input type="number" id="stepAzimuth" bind:value={objectData.stepAzimuth} />
            </div>
            <div>
              <Label for="stopAzimuth" class="mb-2">Stop Azimuth</Label>
              <Input type="number" id="stopAzimuth" bind:value={objectData.stopAzimuth} />
            </div>
            <div>
              <Label for="startElevation" class="mb-2">Start Elevation</Label>
              <Input type="number" id="startElevation" bind:value={objectData.startElevation} />
            </div>
            <div>
              <Label for="stepElevation" class="mb-2">Step Elevation</Label>
              <Input type="number" id="stepElevation" bind:value={objectData.stepElevation} />
            </div>
            <div>
              <Label for="stopElevation" class="mb-2">Stop Elevation</Label>
              <Input type="number" id="stopElevation" bind:value={objectData.stopElevation} />
            </div>
            <div>
              <Label for="buffer" class="mb-2">Buffer</Label>
              <Input type="number" id="buffer" bind:value={objectData.buffer} />
            </div>
            <div>
              <Label for="speed" class="mb-2">Speed</Label>
              <Input type="number" id="speed" bind:value={objectData.speed} />
            </div>
          {/if}
          {#if objectData.type === 1}
            <!-- Type 1 CalibrationPlan fields -->
            <div>
              <Label for="duration" class="mb-2">Duration</Label>
              <Input type="number" id="duration" bind:value={objectData.duration} />
            </div>
            <div>
              <Label for="offsetAzimuth" class="mb-2">Offset Azimuth</Label>
              <Input type="number" id="offsetAzimuth" bind:value={objectData.offsetAzimuth} />
            </div>
            <div>
              <Label for="offsetElevation" class="mb-2">Offset Elevation</Label>
              <Input type="number" id="offsetElevation" bind:value={objectData.offsetElevation} />
            </div>
            <div>
              <Label for="radius" class="mb-2">Radius</Label>
              <Input type="number" id="radius" bind:value={objectData.radius} />
            </div>
            <div>
              <Label for="zenith" class="mb-4">Zenith</Label>
              <Input type="checkbox" id="zenith" bind:checked={objectData.zenith} />
            </div>
          {/if}
        {/if}
      </div>
    {/if}

    <Button
      on:click={() => {
        open = false
        onCreate(objectData)
        objectData = {}
      }}>Create</Button
    >
  </form>
</Modal>
