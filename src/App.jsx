import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Header from './components/ui/Header'

function App() {
    const { isLoaded, isSignedIn } = useUser();

    if (!isSignedIn && isLoaded) {
        return <Navigate to={'/auth/sign-in'} />
    }

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default App;