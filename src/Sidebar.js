import React from 'react';

import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';




function Sidebar() {
    //we are getting only playlist in the sidebar component
    const [{playlists},dispatch]=useDataLayerValue();
  return (
    <div className='sidebar'>
        
      <img className='sidebar__logo'src="new2.png" />
      <SidebarOption Icon={HomeIcon} title='Home'/>
      <SidebarOption  Icon={SearchSharpIcon} title='Search'/>
      <SidebarOption Icon={LibraryMusicIcon}  title='Library'/>
    <br/>
       <strong className="sidebar__title">PLAYLIST</strong>
    <hr/>
    {playlists?.items?.map(playlist =>(
         
         <SidebarOption title={playlist.name}/>


    ))}
        
        
     
    </div>
  )
}

export default Sidebar
