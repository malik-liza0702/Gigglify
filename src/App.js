import React, { useEffect, useState } from "react";
import './App.css';
import Login1 from "./Login1";
import {  getTokenFromUrl } from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js";


import  Player1 from './Player1';

import { useDataLayerValue } from "./DataLayer";

//creating super object
const spotify= new SpotifyWebApi(); //calling constructor

function App() {

  //useState used for short term memory storage
  const [{ user,token },dispatch]=useDataLayerValue();
   
  //runs the code based onn a given condition
  useEffect(()=>{
    const hash=getTokenFromUrl();//redirect it back from spotify
     window.location.hash=" ";

    const _token=hash.access_token;

    if(_token){
      dispatch({
        type:'SET_TOKEN',
        token:_token,
      })
      spotify.setAccessToken(_token);
     //using spotifys api i.e connectong spotify to react
      spotify.getMe().then(user=>{
        //dispatch actio rightly transfers the user  control to the data layer
         dispatch({
              type:'SET_USER',
              user:user
        });
      });

      spotify.getUserPlaylists().then((playlists)=>
           {
             dispatch({
              type:"SET_PLAYLISTS",
              playlists:playlists,
             })

           });

    
        spotify.getPlaylist('37i9dQZEVXcVlANGk5Llr1').then((response)=>{
             dispatch({
              type:"SET_DISCOVER_WEEKLY",
              discover_weekly:response,

             });
      });

         spotify.getMyTopArtists().then((response)=>{
             dispatch({
              type:"SET_TOP_ARTISTS",
              top_artists:response,
             })
         });

         dispatch({
          type:"SET_SPOTIFY",
          spotify:spotify,
         });


    
   
}
  },[token,dispatch]);
  return (
    <div className="app">
      {token ?
      <Player1 />:
      <Login1/>
      }
     </div> 
      );
    }

export default App;
