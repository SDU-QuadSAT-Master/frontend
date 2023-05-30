export type FlightEntry = {
  flightEntryId: number
  date: Date
  location: string
  pilot: string
  hours: number
  droneId: number
}

export type Drone = {
  droneId: number
  organization: string | null
  created: Date | null
  flightsEntrys?: FlightEntry[]
}

export type Antenna = {
  antennaId: number
  title?: string | null
  operator?: string | null
  location?: string | null
  created?: Date
}

export type AntennaConfig = {
  antennaConfigID: number
  altitude: number
  azimuth: number
  elevation: number
  frequency: number
  latitude: number
  longitude: number
  polarization?: string
  radome?: string
}

export type Mission = {
  missionId: number
  title: string | null
  createdAt: Date | null
  updatedAt: Date | null
  location: string | null
  agent: string | null
  drone: string | null
  antenna: string | null
  antennaConfig: AntennaConfig
  scanPlans: ScanPlan[]
}

export type ScanPlan = {
  id: number
  type: number
  missionID: number
  name?: string
  comment?: string
  duration?: number
  offsetAzimuth?: number
  offsetElevation?: number
  radius?: number
  polarization?: number
  start?: number
  step?: number
  stop?: number
  speed?: number
  roll?: number
  plane?: number
  direction?: number
  azimuthStart?: number
  azimuthStep?: number
  azimuthStop?: number
  elevationStart?: number
  elevationStep?: number
  elevationStop?: number
}

export type CalibrationPlan = {
  id: number
  type: number
  missionID: number
  name?: string
  comment?: string
  startAzimuth?: number
  stepAzimuth?: number
  stopAzimuth?: number
  startElevation?: number
  stepElevation?: number
  stopElevation?: number
  buffer?: number
  radius?: number
  speed?: number
  duration?: number
  offsetAzimuth?: number
  offsetElevation?: number
  zenith?: boolean
}
