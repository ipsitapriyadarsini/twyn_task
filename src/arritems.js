import { RiHome5Line, RiGlobalLine } from "react-icons/ri";
import { BiCube } from "react-icons/bi";
import { CgSandClock } from "react-icons/cg";
import { MdOutlineCenterFocusStrong } from "react-icons/md";
import { BsLightningCharge, BsGraphUp, BsInfoCircle } from "react-icons/bs";


export const listItems = [{
    id: 1,
    icon: <RiHome5Line />,
    listName: "Dashboard",
    link: "dashboard"
}, {
    id: 2,
    icon: <BsLightningCharge />,
    listName: "Energy Monitoring System",
    link: "energy-monitoring"
}, {
    id: 3,
    icon: <BsGraphUp />,
    listName: "Condition Based Monitoring",
    link: "condition-monitoring"
}, {
    id: 4,
    icon: <MdOutlineCenterFocusStrong />,
    listName: "Quality Control",
    link: "quality"
}, {
    id: 5,
    icon: <BsInfoCircle />,
    listName: "Predictive Maintenance",
    link: "maintainance"
}, {
    id: 6,
    icon: <BiCube />,
    listName: "Inventory Status",
    link: "inventory"
},
{
    id: 7,
    icon: <RiGlobalLine />,
    listName: "Traceability",
    link: "traceability"
}, {
    id: 8,
    icon: <CgSandClock />,
    listName: "Defect Induction",
    link: "defect-induction"
},]