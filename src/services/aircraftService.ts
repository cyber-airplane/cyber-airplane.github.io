export interface Aircraft {
  name: string
  country: string
  type: string
  pic?: string
  desc?: string
  maker?: string
  cruise?: number
  max_speed?: number
  max_ceiling?: number
  voyage?: number
  combat_radius?: number
  g_limit?: number
  voyage_note?: string
}

export type AircraftDetail = Aircraft

const API_BASE = 'https://ipqpjqyryfgqphtfhbqv.supabase.co/rest/v1/plane_info'
const API_KEY = 'sb_publishable_1LGqfMhDza5oQX3NJfEsBw_JwDBIvJA'

export async function fetchAircraftByName(name: string): Promise<AircraftDetail | null> {
  try {
    const url = `${API_BASE}?name=eq.${encodeURIComponent(name)}&select=*`
    const response = await fetch(url, {
      headers: {
        'apikey': API_KEY,
        'Authorization': `Bearer ${API_KEY}`
      }
    })

    if (!response.ok) {
      console.error(`API error: ${response.status}`)
      return null
    }

    const data = await response.json()

    if (Array.isArray(data) && data.length > 0) {
      return data[0] as AircraftDetail
    }

    return null
  } catch (error) {
    console.error('Failed to fetch aircraft:', error)
    return null
  }
}

export async function fetchAllAircraft(): Promise<Aircraft[]> {
  try {
    const url = `${API_BASE}?select=*`
    const response = await fetch(url, {
      headers: {
        'apikey': API_KEY,
        'Authorization': `Bearer ${API_KEY}`
      }
    })

    if (!response.ok) {
      console.error(`API error: ${response.status}`)
      return []
    }

    const data = await response.json()

    if (Array.isArray(data)) {
      return data as Aircraft[]
    }

    return []
  } catch (error) {
    console.error('Failed to fetch aircraft list:', error)
    return []
  }
}
