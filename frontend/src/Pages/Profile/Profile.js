import React from 'react';
import { userData } from '../../helpers';




export const Profile = () => {
  const {username} = userData ()
  return (
    <div>
    <h2>Welcome{username}</h2>
    </div>
  )
  }