import {rerenderEntireTree} from "../render"

const state = {
    profilePage: {
        posts: [
            {id:1, message:"hi", likesCount:9000},
            {id:2, message:"how are you????", likesCount:99},
            {id:3, message:"ok", likesCount:200},
        ],
        postCurrentMessage: "666",
    },


    dialogsPage: {
        dialogs: [
            {id:1, name: "Ivan"},
            {id:2, name: "Anna"},
            {id:3, name: "Rita"},
            {id:4, name: "Alyona"},
            {id:5, name: "Lydia"},
        ],
          messages: [
            {id:1, text: "Hi!"},
            {id:2, text: "How are you"},
            {id:3, text: "Ok"},
        ],
    }

}
window.state = state;

export let addPost = () => {
    // debugger;
    let newPost = {
        id: 5,
        message: state.profilePage.postCurrentMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    // state.profilePage.postCurrentMessage = '';
    updatePostMessageChange('');
    rerenderEntireTree(state);
}

export let updatePostMessageChange = (currentMessage) => {
    // debugger;
    state.profilePage.postCurrentMessage = currentMessage;
    rerenderEntireTree(state);
}


  export default state;