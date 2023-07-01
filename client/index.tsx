import { createRoot } from 'react-dom/client'

import LightsOff from './components/LightsOff'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <LightsOff />
  )
})
