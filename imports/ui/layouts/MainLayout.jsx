import React from 'react';
import AccountsUI from '../component/accounts/AccountsUI.jsx'

export const MainLayout = ({content}) => (
  <div className="main-layout">
  <header>
      <h2>Revel</h2>
      <nav>
        <a href="/"> Resolutions </a>
        <a href="about">About</a>
        <a href="myReservations">My Reservations</a>
        <a href="resturants">Resturants</a>
        <AccountsUI />
        </nav>
      </header>
      <main>
        {content}
      </main>
  </div>
)
