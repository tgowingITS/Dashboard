import SidebarItem from "./SidebarItem"; 

const SidebarList = props => {

   if (props.items.length === 0) {
     return <h2 className = "sidebar-list__fallback">Data not loaded </h2>;
   }
   else {

   return <ul className = "sidebar-list">
     {props.items.map((data) => ( 
       <SidebarItem 
         key={data.id}
         title={data.title} 
       />
     ))}

   </ul>

  // return (
  //   <div> HERE ARE YOUR DATA ITEMS</div>
  // )
   };
  };

export default SidebarList;