import ky from 'ky'
import type { Mission, Antenna, Drone, ScanPlan, CalibrationPlan } from '$lib/types'

const apiClient = ky.create({
  timeout: 30000,
})

async function makeCall<T>(method: string, url: string, body: object | null, statusInsteadOfBody: boolean): Promise<T> {
  let res
  try {
    switch (method.toLowerCase()) {
      case 'get':
        res = await apiClient.get(url)
        break
      case 'post':
        res = body ? await apiClient.post(url, { json: body }) : await apiClient.post(url)
        break
      case 'patch':
        res = await apiClient.patch(url, { json: body })
        break
      case 'put':
        res = await apiClient.put(url, { json: body })
        break
      case 'delete':
        res = await apiClient.delete(url)
        break
      default:
        throw new Error(`Unsupported method: ${method}`)
    }

    if (statusInsteadOfBody) return res.ok as unknown as T

    const data = (await res.json()) as T
    return data
  } catch (e: any) {
    throw new Error(`API error: ${e.message}`)
  }
}

const asset_management = import.meta.env.VITE_ASSET_MANAGEMENT || 'http://localhost:3000'
const missions_management = import.meta.env.VITE_MISSIONS_MANAGEMENT || 'http://localhost:3000'
const waypoint_management = import.meta.env.VITE_WAYPOINTS_MANAGEMENT || 'http://localhost:3000'

export const api = {
  getHelloWorld: async () => {
    const url = `${asset_management}/hello`
    return await makeCall('get', url, null, false)
  },
  getAntennas: async (): Promise<Antenna[]> => {
    const url = `${asset_management}/antenna`
    console.log('This is url ' + url)
    return await makeCall<Antenna[]>('get', url, null, false)
  },
  getDrones: async (): Promise<Drone[]> => {
    const url = `${asset_management}/drone`
    console.log('This is url ' + url)
    return await makeCall<Drone[]>('get', url, null, false)
  },
  getMissions: async (): Promise<Mission[]> => {
    const url = `${missions_management}/mission`
    console.log('This is url ' + url)
    return await makeCall<Mission[]>('get', url, null, false)
  },
  getScanPlans: async (): Promise<ScanPlan[]> => {
    const url = `${waypoint_management}/scanplan`
    console.log('This is url ' + url)
    return await makeCall<ScanPlan[]>('get', url, null, false)
  },
  getCalibrationPlans: async (): Promise<CalibrationPlan[]> => {
    const url = `${waypoint_management}/calibrationplan`
    console.log('This is url ' + url)
    return await makeCall<CalibrationPlan[]>('get', url, null, false)
  },
  createAntenna: async (antenna: Antenna) => {
    const url = `${asset_management}/antenna`
    console.log('This is url ' + url)
    return await makeCall('post', url, antenna, false)
  },
  createDrone: async (drone: Drone) => {
    const url = `${asset_management}/drone`
    console.log('This is url ' + url)
    return await makeCall('post', url, drone, false)
  },
  createMission: async (mission: Mission) => {
    const url = `${missions_management}/mission`
    console.log('This is url ' + url)
    return await makeCall('post', url, mission, false)
  },
  createScanPlans: async (scanplan: ScanPlan) => {
    const url = `${waypoint_management}/scanplan`
    console.log('This is url ' + url)
    return await makeCall<ScanPlan>('post', url, scanplan, false)
  },
  createCalibrationPlans: async (calplan: CalibrationPlan) => {
    const url = `${waypoint_management}/calibrationplan`
    console.log('This is url ' + url)
    return await makeCall<CalibrationPlan>('post', url, calplan, false)
  },
  putAntenna: async (antenna: Antenna) => {
    const url = `${asset_management}/antenna/${antenna.antennaId}`
    console.log('This is url ' + url)
    return await makeCall('put', url, antenna, false)
  },
  putDrone: async (drone: Drone) => {
    const url = `${asset_management}/drone/${drone.droneId}`
    console.log('This is url ' + url)
    return await makeCall('put', url, drone, false)
  },
  putMission: async (mission: Mission) => {
    const url = `${missions_management}/mission/${mission.missionId}`
    console.log('This is url ' + url)
    return await makeCall('put', url, mission, false)
  },
  putScanPlans: async (scanplan: ScanPlan) => {
    const url = `${waypoint_management}/scanplan/${scanplan.id}`
    console.log('This is url ' + url)
    return await makeCall<ScanPlan>('put', url, scanplan, false)
  },
  putCalibrationPlans: async (calplan: CalibrationPlan) => {
    const url = `${waypoint_management}/calibrationplan/${calplan.id}`
    console.log('This is url ' + url)
    return await makeCall<CalibrationPlan>('put', url, calplan, false)
  },
  deleteAntenna: async (antennaId: number) => {
    const url = `${asset_management}/antenna/${antennaId}`
    console.log('This is url ' + url)
    return await makeCall('delete', url, null, false)
  },
  deleteDrone: async (droneId: number) => {
    const url = `${asset_management}/drone/${droneId}`
    console.log('This is url ' + url)
    return await makeCall('delete', url, null, false)
  },
  deleteMission: async (missionId: number) => {
    const url = `${missions_management}/mission/${missionId}`
    console.log('This is url ' + url)
    return await makeCall('delete', url, null, false)
  },
  deleteScanPlans: async (id: number) => {
    const url = `${waypoint_management}/scanplan/${id}`
    console.log('This is url ' + url)
    return await makeCall<ScanPlan>('delete', url, null, false)
  },
  deleteCalibrationPlans: async (id: number) => {
    const url = `${waypoint_management}/calibrationplan/${id}`
    console.log('This is url ' + url)
    return await makeCall<CalibrationPlan>('delete', url, null, false)
  },
}
