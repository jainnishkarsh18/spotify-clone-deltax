export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // set token: null after finishing the project
    // token: "BQAIdbD0Ht77QC3HVzrUh3YmECKVx4InM8LgwIw_K8JZGINWTc57ts6Us7e7xbhDZNHubD6S871YytQEMSrImetctQH5SChhD4mWm4d1s2NLxQTQAFzbSmG6wInJ1gWVnWmX5vXc9qJ4yFnfj2P8dEO6_Orm9CfIoBZEFSWOModyZO1MMWAy"
 };

const reducer = (state, action) => {
    console.log(action)

    switch (action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;