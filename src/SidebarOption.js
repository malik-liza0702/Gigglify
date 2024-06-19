import React from 'react'
import './SidebarOption.css'

function SidebarOption({title,Icon}) {
  return (
    <div className="sidebarOption">
        
        {/*checks condition if icon is present then display icon with  text otherwise <p> tag text*/}
        
        
        {Icon && <Icon className="sidebarOption_icon"/>}
        {Icon?<h4>{title}</h4>:<p>{title}</p>}
      
    </div>
  )
}

export default SidebarOption

