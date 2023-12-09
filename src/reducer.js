export const initialState = {
    user: "", // user can be space - unidentified user, or an email address - identified user
    password: "",
    search: "", // represents the search term to query the sql database with
    results: [], // represents the results from the sql query if there are any
    page: "100",// page can be 100 - Top 100, Search - Search Results using search const, 
    // User - which is the accounts page, or Anime - which shows a specific anime's info
    top100: [], // the top 100 animes are loaded in when the user logs in/continues to site
    reviews: [], // the current user's reviews are loaded in when the user logs in
    // rating, description,
    anime: null // this will be changed to the anime that was last pressed
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case "SET_PAGE":
            console.log(action.page)
            return {
                ...state,
                page: action.page
            };
        case "SET_RESULTS":
            return {
                ...state,
                results: action.results
            };
        case "SET_REVIEWS":
            return {
                ...state,
                reviews: action.reviews
            };
        case "SET_SEARCH":
            return {
                ...state,
                search: action.search
            };
        case "SET_TOP100":
            return {
                ...state, 
                top100: action.top100
            };
        case "SET_ANIME":
            return {
                ...state,
                anime: action.anime
            }
        default:
            return state
    }
}

export default reducer;