import React from "react";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";
import "../App.css";
import ChannelSearch from "./ChannelSearch";
import { ChannelList } from "stream-chat-react";
import TeamChannelList from "./TeamChannelList";
import TeamChannelPreview from "./TeamChannelPreview";

const Sidebar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={HospitalIcon} alt="Hospital" width={"30"} />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <img src={LogoutIcon} alt="Hospital" width={"30"} />
      </div>
    </div>
  </div>
);

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Company Page</p>
  </div>
);
const ChannelListContainer = () => {
  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => { }}
          List={(listProps) => <TeamChannelList type={"team"} {...listProps} />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type={"team"} />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => { }}
          List={(listProps) => (
            <TeamChannelList type={"messaging"} {...listProps} />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type={"messaging"} />
          )}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
