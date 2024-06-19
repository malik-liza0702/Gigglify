//step-1: click on login button

//step-2
/* as i clicked on  this authorization link it will take me to authoriation page of spotify*/ 
/*sends request to  spotify login page*/ 
export const authEndPoint="https://accounts.spotify.com/authorize";

//step-3
/*redirect to  your own local host website or home page*/ 
const redirectUri="http://localhost:3000/";

//client id  of my spotify clone
const clientId="ded580cde5284cd0a909743eb50c4141";


//only able to perform only those functions which are defined with in scopes and not otheer functionalities
//allows to access cred permisiions
const scopes=[

    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-top-read'
];

//goes to url and access thr location form hash
export const getTokenFromUrl=()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item )=>{

         //#accessToken=mysupersecretkey&name=liza
        let parts=item.split('=')//go to the url and split at the equal sign

        //just goto the urland access tokenn and accessthe initials
        initial[parts[0]]=decodeURIComponent(parts[1])

        return initial;
    },{});


}

//used   string interpolation
//(%20)----go through all the scopes items and add  the space
//used arrays.join()method as scopes.join()
//once response is done give me ack a token
export const accessUrl=`${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

