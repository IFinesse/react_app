import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://scitechdaily.com/images/New-Hubble-Image-Shows-Part-of-the-Large-Magellanic-Cloud.jpg'></img>
            </div>
            <div className={s.description}>
                ava+desc
             </div>
        </div>
    )
}

export default ProfileInfo;