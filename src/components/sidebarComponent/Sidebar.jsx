import React, { useState } from 'react'
import { listItems } from '../../arritems'
import "../../assets/css/sidebar.css"
import { BsList, BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router";
import { SidebarContext } from '../../helpers/SidebarContext';



const Sidebar = () => {
  const [active, setActive] = useState(0);
  const [expandBar, setExpandBar] = useState(false)

  return (
    <div className={` ${expandBar ? "expanded_sidebar" : "sidebar-main-container"} `}>
      <div className={`hamburgur ${expandBar && "expanded_burger"}`}
        onClick={
          () => setExpandBar(!expandBar)
        }>
        {expandBar ? <BsChevronLeft /> : <BsList />}

      </div>
      {/* <SidebarContext.Provider value={}> */}
        <ul className={expandBar? `list_menu`:undefined}>
          {listItems.map((item, index) => (
            <li key={index}
              className="list_item"
              onClick={() => {
                setActive(index)
              }}>
              {active === index ?
                <div className={`active_menu ${expandBar && "fixwidth"}`}>
                  {expandBar && <span className='list__name'>{item.listName}</span>}
                  {item.icon} <BsChevronRight />
                </div>
                : item.icon}
            </li>
          ))}
        </ul>
      {/* </SidebarContext.Provider> */}
    </div>
  )
}

export default Sidebar

// export const UpdateSidebar = (menu, sub_menu) => {
//   const dispatch = useDispatch();

//   let breadcrumbs = [];
//   breadcrumbs.push({
//     label: menu,
//     href:
//       menu === "Dashboard" ? "/" : "/" + menu.toLowerCase().replace(/ /g, "-"),
//   });

//   dispatch(ActiveSidebarItem(menu));
//   if (sub_menu) {
//     dispatch(ActiveSidebarSubitem(sub_menu));
//     breadcrumbs.push({
//       label: sub_menu,
//       href:
//         "/" +
//         menu.toLowerCase().replace(/ /g, "-") +
//         "/" +
//         sub_menu.toLowerCase().replace(/ /g, "-"),
//     });
//   } else {
//     dispatch(ActiveSidebarSubitem(""));
//   }

//   dispatch(UpdateBreadcrumbs(breadcrumbs));
// };