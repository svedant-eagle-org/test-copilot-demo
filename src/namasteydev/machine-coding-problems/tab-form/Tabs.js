import { useState } from "react";
import Interests from "./components/Interests";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import "./styles.css";
const Tabs = () => {
  const getClearData = () => ({
    name: "",
    age: "",
    email_id: "",
    address: "",
    language: "",
    port: "",
    job_title: "",
    company: "",
    about_me: "",
    interests: [],
    theme: "",
  });
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [data, setData] = useState(getClearData);
  const [error, setError] = useState({});
  const handleClear = () => {
    setData(getClearData());
    setError({});
  };
  const tabs = [
    {
      title: "Profile",
      component: Profile,
      validation: () => {
        const err = {};
        if (!data?.name || data?.name?.length <= 2) {
          err.name = "Name is not Valid";
        }
        if (!data?.age || data?.age <= 0) {
          err.age = "Age is not Valid";
        }
        if (!data?.email_id || data?.email_id?.length <= 2) {
          err.email_id = "Email Id not Valid";
        }
        if (!data?.address || data?.address?.trim()?.length === 0) {
          err.address = "Address cannot be empty";
        }
        if (!data?.language) {
          err.language = "Language should be selected";
        }
        if (!data?.port) {
          err.port = "Port should be selected";
        }
        if (!data?.job_title || data?.job_title?.trim()?.length === 0) {
          err.job_title = "Job Title cannot be empty";
        }
        if (!data?.company || data?.company?.trim()?.length === 0) {
          err.company = "Company cannot be empty";
        }
        if (!data?.about_me || data?.about_me?.trim()?.length === 0) {
          err.about_me = "About Me cannot be empty";
        }
        setError(err);
        return err.name || err.age || err.email_id || err.address || err.language || err.port || err.job_title || err.company || err.about_me
          ? false
          : true;
      },
    },
    {
      title: "Interest",
      component: Interests,
      validation: () => {
        const err = {};
        if (!data?.interests || data?.interests?.length === 0) {
          err.interests = "Select any interests";
        }
        setError(err);
        return err.interests ? false : true;
      },
    },
    {
      title: "Settings",
      component: Settings,
      validation: () => {
        const err = {};
        if (!data?.theme) {
          err.theme = "Select any theme";
        }
        setError(err);
        return err.theme ? false : true;
      },
    },
  ];
  const ActiveComponent = tabs[activeTabIndex].component;
  const validation = tabs[activeTabIndex].validation;
  return (
    <div className="main-container">
      <div class="main-tabbar">
        {tabs?.length === 0 && <div>No tabs available</div>}
        {tabs.map((tab, index) => {
          return (
            <div
              className="tab"
              onClick={(e) => (validation() ? setActiveTabIndex(index) : {})}
            >
              {tab?.title}
            </div>
          );
        })}
      </div>
      <div className="activeContainer">
        <ActiveComponent
          data={data}
          setData={setData}
          error={error}
          setError={setError}
          onClear={handleClear}
        />
      </div>
      <div>
        <div className="footerButton">
          {(activeTabIndex === 1 || activeTabIndex === 2) && (
            <button onClick={(e) => setActiveTabIndex(activeTabIndex - 1)}>
              Prev
            </button>
          )}
          {(activeTabIndex === 0 || activeTabIndex === 1) && (
            <button
              onClick={(e) =>
                validation() ? setActiveTabIndex(activeTabIndex + 1) : ""
              }
            >
              Next
            </button>
          )}
          {activeTabIndex === 2 && <button>Submit</button>}
        </div>
      </div>
    </div>
  );
};
export default Tabs;
