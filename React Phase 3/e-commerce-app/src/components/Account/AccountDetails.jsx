import React, { use, useContext } from 'react'
import { UserContext } from '../../context/UserContext'

function AccountDetails() {

    const { userDetails ,setUserDetails } = useContext(UserContext);

  return (
    <div>
        <div>
            <div>
                Profile:
                {userDetails.name}
                {userDetails.email}
                {userDetails.address}
            </div>
        </div>
    </div>
  )
}

export default AccountDetails