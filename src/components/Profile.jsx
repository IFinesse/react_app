import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://scitechdaily.com/images/New-Hubble-Image-Shows-Part-of-the-Large-Magellanic-Cloud.jpg'></img>
            </div>
            <div>
                ava+desc
        </div>
            <div>
                my posts
            <div>
                    New post
            </div>
                <div>
                    <div className={s.item}>
                        post1
              </div>
                    <div className={s.item}>
                        post2
              </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;