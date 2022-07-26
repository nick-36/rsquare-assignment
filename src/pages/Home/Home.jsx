import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SidebarLeft from "../../components/SidebarLeft/SidebarLeft";
import "./Home.scss";
import Main from "../../components/Main/Main";
import SidebarRight from "../../components/SidebarRight/SidebarRight";
function Home(props) {
  return (
    <div>
      <Navbar />
      <section className="container">
        <SidebarLeft />
        <Main />
        <SidebarRight />
        {/* <Sidebar /> */}
      </section>
    </div>
  );
}

export default Home;
