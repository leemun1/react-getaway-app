import React from "react";
import SideBar from "./SideBar";
import Gallery from "./Gallery";
import Overview from "./Overview";
import Detail from "./Detail";
import CallToAction from "./CallToAction";

const Content = () => (
  <div className="content">
    <SideBar />
    <main className="hotel-view">
      <Gallery />
      <Overview />
      <Detail />
      <CallToAction />
    </main>
  </div>
);

export default Content;
