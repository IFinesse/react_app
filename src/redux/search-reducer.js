const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"

let initialState = {
    users: [
        // {id:1, name: "Ivan", isFollowed: false, status: "hello", location: {country: "Ukraine", city: "Kharkiv"} },
        // {id:2, name: "Boris", isFollowed: false, status: "hi", location: {country: "Russia", city: "Moscow"} },
        // {id:3, name: "Lydia", isFollowed: false, status: "kkk", location: {country: "China", city: "HK"} },
    ]
}

const searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: { /////////////
            
            return {
                ...state,
                users: state.users.map(user => {
                   if(user.id==action.userID) {
                       return {
                           ...user,
                           isFollowed: true,
                       }
                   }
                   return user;
                }   )
            }   
        }
        case UNFOLLOW: { /////////////

            return {
                ...state,
                users: state.users.map(user => {
                   if(user.id==action.userID) {
                       return {
                           ...user,
                           isFollowed: false,
                       }
                   }
                   return user;
                }   )
            }   
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users],
            }
        }
        default:
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});



export default searchReducer;