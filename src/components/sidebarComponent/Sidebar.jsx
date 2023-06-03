import React, { useEffect, useState } from 'react'
import { listItems } from '../../arritems'
import "../../assets/css/sidebar.css"
import { BsList, BsChevronRight, BsChevronLeft } from "react-icons/bs";
import {  useNavigate } from "react-router";




const Sidebar = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState("");
  const [expandBar, setExpandBar] = useState(false)

  useEffect(() => {
    const location = window.location.href
    const pageLink = location.split("/").pop()
    setActive(pageLink)
  }, [])

  return (
    <div className={` ${expandBar ? "expanded_sidebar" : "sidebar-main-container"} `}>
      <div className={`hamburgur ${expandBar && "expanded_burger"}`}
        onClick={
          () => setExpandBar(!expandBar)
        }>
        {expandBar ? <BsChevronLeft /> : <BsList />}

      </div>
      {/* <SidebarContext.Provider value={}> */}
      <ul className={expandBar ? `list_menu` : undefined}>
        {listItems.map((item, index) => (
          <li key={index}
            className="list_item"
            onClick={() => {
              navigate("/" + item.link)
            }}>

            {/* {expandBar &&
              listItems.splice(active,1).forEach((val, i) =>
                <span className='list__name' key={i}>{val.listName}</span>
              )
            } */}

            <div className={`${active === item.link ? "active_menu" : "menu-item"} ${expandBar && "fixwidth"}`}>
              {expandBar && <span className='list__name'>{item.listName}</span>}
              {item.icon}
              {active === item.link && <BsChevronRight />}

            </div>

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