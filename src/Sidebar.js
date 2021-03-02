import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import { selectUser } from "./features/userSlice";
import { useSelector} from "react-redux";

function Sidebar() {
  const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="" />
        <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2000</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">1500</p>
        </div>
      </div>
      <div className="sidebar__bottom">
          <p>Recent</p>  
          {recentItem("reactjs")} 
          {recentItem("reactjs")}
          {recentItem("reactjs")}
          {recentItem("reactjs")}       
      </div>
    </div>
  );
}

export default Sidebar;
