'use server'
import { cookies } from "next/headers"
import { cache } from 'react'

const BASE_URL = process.env.BASE_URL

interface FetchOptions {
  endpoint: string
  id?: string | number
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  body?: Record<string, any>
  headers?: Record<string, string>
  cache?: RequestCache
  type?: "office" | "home"
  extraParams?: Record<string, string | number | boolean | undefined | null>
}

interface ApiResult<T = any> {
  success: boolean
  data: T | null
  error: string | null
  status?: number
}
export const apiAction = cache(async ({
   endpoint,
  id,
  method = 'GET',
  body,
  headers,
  type,
  extraParams
}: FetchOptions): Promise<ApiResult> => {
  if (!BASE_URL) {
    return { success: false, data: null, error: 'Server misconfiguration: BASE_URL missing' }
  }

  const cookieStore = await cookies()
  const stored_type = cookieStore.get("type")?.value || 'home'

  const path = id ? `${endpoint}/${id}` : endpoint
  const params = new URLSearchParams()

  const resolvedType = type ?? stored_type
  if (resolvedType) {
    params.set('type', resolvedType)
  }

  if (extraParams) {
    for (const [key, value] of Object.entries(extraParams)) {
      if (value !== undefined && value !== null) {
        params.set(key, String(value))
      }
    }
  }

  const queryString = params.toString()
  const url = `${BASE_URL}/${path}${queryString ? `?${queryString}` : ''}`

  let res: Response


  try {
    res = await fetch(url, {
      method,
       ...(method === 'GET' ? { next: { revalidate: 60 } } : { cache: 'no-store' }),
      headers: {
        ...headers,
      },
      body: body ? body instanceof FormData ? body : JSON.stringify(body) : undefined,
    })
  } catch (err: any) {
    const message =
      err?.name === 'AbortError'
        ? 'Request timed out'
        : err?.cause?.code === 'ECONNREFUSED'
        ? 'Could not connect to server'
        : err?.message || 'Network request failed'

    return { success: false, data: null, error: message }
  }

  let data: any = null
  try {
    const text = await res.text()
    data = text ? JSON.parse(text) : null
  } catch (err) {
    if (!res.ok) {
      return {
        success: false,
        data: null,
        error: `Request failed with status ${res.status}`,
        status: res.status,
      }
    }
    return { success: true, data: null, error: null, status: res.status }
  }

  if (!res.ok) {
    const message = data?.message || `Request failed with status ${res.status}`
    return { success: false, data, error: message, status: res.status }
  }

  return { success: true, data, error: null, status: res.status }
})