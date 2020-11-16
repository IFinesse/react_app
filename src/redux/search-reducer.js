const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_AMOUNT = "SET_TOTAL_AMOUNT";

let initialState = {
    users: [
        // {id:1, name: "Ivan", isFollowed: false, status: "hello", location: {country: "Ukraine", city: "Kharkiv"} },
        // {id:2, name: "Boris", isFollowed: false, status: "hi", location: {country: "Russia", city: "Moscow"} },
        // {id:3, name: "Lydia", isFollowed: false, status: "kkk", location: {country: "China", city: "HK"} },
    ],
    totalAmount: 0,
    currentPage: 1,
    pageSize: 100,
}

const searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: { /////////////

            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id == action.userID) {
                        return {
                            ...user,
                            isFollowed: true,
                        }
                    }
                    return user;
                })
            }
        }

        case UNFOLLOW: { /////////////

            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id == action.userID) {
                        return {
                            ...user,
                            isFollowed: false,
                        }
                    }
                    return user;
                })
            }
        }

        case SET_USERS: {

            return {
                ...state,
                users: [...action.users],
            }

        }

        case SET_CURRENT_PAGE: {

            return {
                ...state,
                currentPage: action.currentPage,
            }

        }

        case SET_TOTAL_AMOUNT: {

            return {
                ...state,
                totalAmount: action.totalAmount,
            }

        }

        default:
            return state;

    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalAmountAC = (totalAmount) => ({ type: SET_TOTAL_AMOUNT, totalAmount });



export default searchReducer;