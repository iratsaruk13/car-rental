import React from 'react'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { Header, Link } from './SharedLayout.styled'

const SharedLayout = () => {
  return (
    <div>
        <Header>
        <nav>
  <Link to="/">Home</Link>
  <Link to="/catalog">Catalog</Link>
  <Link to="/favorites">Favorites</Link>
</nav>
        </Header>
        <Suspense fallback={<Loader />}>
            <main>
                <Outlet />
            </main>
        </Suspense>
        </div>
  )
}

export default SharedLayout