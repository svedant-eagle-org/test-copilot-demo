const Settings = ({ data, setData, error }) => {
  const { theme } = data;
  const handleSettingsData = (e, item) => {
    if (e?.target?.checked) {
      setData({ ...data, theme: item });
    }
  };
  console.log("data", data);
  return (
    <>
      <div>
        <div>
          <input
            type="radio"
            id="dark"
            checked={theme === "dark"}
            onChange={(e) => handleSettingsData(e, "dark")}
          />
          <label for="dark">Dark</label>
        </div>
        <div>
          <input
            type="radio"
            id="light"
            checked={theme === "light"}
            onChange={(e) => handleSettingsData(e, "light")}
          />
          <label for="light">Light</label>
        </div>
      </div>
      {error?.theme && <span className="error">{error?.theme}</span>}
    </>
  );
};
export default Settings;
