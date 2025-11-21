import { useState } from 'react'
import { useUsers } from './hooks/useUsers'

export default function App() {
    const { users, loading, error } = useUsers()
    const [search, setSearch] = useState('')

    const filtered = users.filter(u =>
        u.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div style={{ padding: 20 }}>
            <h1>Users</h1>

            <input
                placeholder="Search by name..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <ul>
                {filtered.map(u => (
                    <li key={u.id}>
                        <strong>{u.name}</strong> – {u.email} ({u.company.name})
                    </li>
                ))}
            </ul>
        </div>
    )
}
