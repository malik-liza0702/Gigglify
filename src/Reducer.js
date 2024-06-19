//initial state of object
export const  initialState={user:null, playlist:[], playing:false, item:null,token:null};




//action represents the act i.eplaying a song or looking foe songs or previous and next
const Reducer=(state,action)=>{

    //pro tip---action on the top helps to debug faster
    console.log(action);
    //differnt types of actions
    

       //Action->type,{playload}



    //using  switch case acrosss various cases checks multiple action types
    switch(action.type){
        case 'SET USER':
            return{
                ...state,//built-in react object use  to contain data or info about the component
                user:action.user,

            }
        case 'SET_TOKEN':
            return  {
                ...state,
                token:action.token,
            }  ;

            case "SET_PLAYLISTS":
                return{
                    ...state,
                    playlists:action.playlists,
                }

            case "SET_DISCOVER_WEEKLY":
                return{
                    ...state,
                    discover_weekly:action.discover_weekly,

                }  
            case "SET_ITEM":
                return{
                ...state,
                item:action.item,
            }   
            case "SET_TOP_ARTISTS":
                return{
                    ...state,
                    top_artists:action.top_artists,

            } 
            case "SET_SPOTIFY":
                return{
                    ...state,
                    spotify:action.spotify,

            }

        default:
            return state;
    
    }


}
export default Reducer
