const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
    posts: [
        {id:1, message:"hi", likesCount:9000},
        {id:2, message:"how are you????", likesCount:99},
        {id:3, message:"ok", likesCount:200},
    ],
    postCurrentMessage: "666",
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.postCurrentMessage,
                likesCount: 0
            };

            state.posts.push(newPost);
            state.postCurrentMessage = "";
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.postCurrentMessage = action.currentText;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, currentText: text});

export default profileReducer;