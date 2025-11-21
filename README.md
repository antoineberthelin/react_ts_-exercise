# React Harder Exercise (TypeScript)

## Goal
Build a small React application using TypeScript. This exercise tests:
- API fetching
- Component architecture
- Custom hooks
- Typescript interfaces & typing logic
- Error & loading handling

## Requirements
1. Fetch users from:
   https://jsonplaceholder.typicode.com/users

2. Display the list of users with:
   - name
   - email
   - company name

3. Create a custom hook:
   `useUsers()` that:
   - fetches users
   - returns { users, loading, error }

4. Add a search input that filters the user list by name.

5. Add TypeScript types everywhere:
   - User type
   - Hook return type
   - Component props type

## Bonus (optional)
- Display user details in a separate component
- Add sorting controls
- Add debounce to the search input

## Files to complete
- src/hooks/useUsers.ts
- src/App.tsx

The `solution` branch contains a complete working example.
