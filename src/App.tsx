import { useState } from 'react'
import { useUsers } from './hooks/useUsers'

export default function App() {
  const { users, loading, error } = useUsers()
  const [search, setSearch] = useState('')

  const filtered = users // TODO: filter by name

  return (
    <div style={{ padding: 20 }}>
      <h1>Users</h1>

      {/* TODO: search input */}

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {/* TODO: list rendering */}
      </ul>
    </div>
  )
}
