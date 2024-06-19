import React from 'react';
import './Body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material';
import SongRow from './SongRow';



function Body() {
    const[{ discover_weekly },dispatch]=useDataLayerValue();
    console.log('discover-weekly',discover_weekly);

    const playPlaylist=(id)=>{
      spotify.play({
        context_uri:`spotify:playlist:2L6BxySqxJ3xJsdGRoZGLD`,
      })
      .then((res)=>{
        spotify.getMyCurrentPlayingTrack().then((r)=>{
          dispatch({
            type:"SET_ITEM",
            item:r.item,
          });
          dispatch({
            type:"SET_PLAYING",
            playing:true,
          });
        });
      });

    };

    const playSong=(id)=>{
      spotify.play({
        uris:[`spotify:track:${id}`],

      })
      .then((res)=>{
        spotify.getMyCurrentPLayingTrack().then((r)=>{
          dispatch({
            type:"SET_ITEM",
            item:r.item,

          });
          dispatch({
            type:"SET_PLAYING",
            playing:true,
          });
        });
      });
    };

  return (
    <div className="body">
      
      <Header/>
      <div className="body__info">
        <img className='back_image'src={discover_weekly?.images[0].url} alt='' />
        <div className='body__infoText'>
          <strong>PLAYLISTS</strong>
          <h2>DISCOVER WEEKLY</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className="body__icons">
          <PlayCircleFilled   className='body__play'/>
          <Favorite />
          <MoreHoriz/>
        </div>
        {discover_weekly?.tracks.items?.map((item)=>
        <SongRow playSong={playSong} track={item.track}/>
        )}
        
      </div>
    </div>
  )
}

export default Body
