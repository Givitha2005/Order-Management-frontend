import React from "react";
import Charts from "../../Components/Charts/Charts";
import Featured from "../../Components/Featured/Featured";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import TableList from "../../Components/Table/Table";
import Widget from "../../Components/Widget/Widget";
import "./Home.css";

const index = () => {
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Charts />
          </div>
          <div className="listContainer">
          <div className="listTitle">Recent Orders</div>
          <TableList />
        </div>
        </div>
      </div>
    </>
  );
};

export default index;
