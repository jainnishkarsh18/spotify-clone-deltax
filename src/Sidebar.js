import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
   
function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRWOPdB_ZBJWFcA8htNL-MpC0vnLTgGcKoA&usqp=CAU" alt="logo" />
            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name}/>

            ))}
        </div>
    )
}

export default Sidebar
