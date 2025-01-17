import { Route } from './Route'

export type CustomRoutes<R = Route> = {
  [key: string]: R
}
