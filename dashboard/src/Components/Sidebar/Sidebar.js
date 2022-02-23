import SidebarList from './SidebarList'
import SidebarItem from './SidebarItem'
import './Sidebar.css'

const Sidebar = props => {
  const dataItems = props.items;

  return(
    <div className="sidebar">
      <SidebarList items={dataItems} />
      {/* <SidebarItem title='Revenue'/>
      <SidebarItem title='Traffic'/>
      <SidebarItem title='Conversion'/>
      <SidebarItem title='AOV'/>
      <SidebarItem title='Returns'/> */}
    </div>
  )
}

export default Sidebar;