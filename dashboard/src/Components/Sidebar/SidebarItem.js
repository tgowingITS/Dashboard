import './Sidebar.css'
function SidebarItem (props) {
    return (
      <div className="sidebar-item">
        <h2>{props.title}</h2>
      </div>
    )

}

export default SidebarItem;