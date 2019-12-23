import { Check } from '../lib/backend-client'

export const actions = {
  check: () => {
    const checkService = Check()
    return checkService
  }
}
