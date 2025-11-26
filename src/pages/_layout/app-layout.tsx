import { Header } from '@/components/header'
import { Outlet } from 'react-router'

export function AppLayout() {
  return (
    <div className="antialiased">
      <Header />

      <main className="mt-20">
        <Outlet />
      </main>
    </div>
  )
}
