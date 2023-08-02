import type { RouteObject } from 'react-router-dom'
export type TRoute = RouteObject & {
  auth?: boolean
  meta?: {
    title?: string
  }
  children?: TRoute[]
}
