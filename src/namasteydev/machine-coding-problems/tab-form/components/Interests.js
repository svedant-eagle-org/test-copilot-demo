const Interests = ({ data, setData, error }) => {
  const { interests } = data;
  const handleInterestData = (e, item) => {
    const value = e?.target?.checked;
    const prevInerest = interests;
    let newInterest = [...prevInerest];
    if (value) {
      newInterest.push(item);
    } else {
      newInterest = newInterest.filter((i) => i !== item);
    }
    setData({ ...data, interests: newInterest });
  };
  console.log("data", data);
  return (
    <div>
      <div class="profileSection">
        <div className="formInput">
          <label>Music:</label>
          <input
            type="checkbox"
            checked={interests.includes("Music")}
            onChange={(e) => handleInterestData(e, "Music")}
          />
        </div>
        <div className="formInput">
          <label>Driving:</label>
          <input
            type="checkbox"
            checked={interests.includes("Driving")}
            onChange={(e) => handleInterestData(e, "Driving")}
          />
        </div>
        <div className="formInput">
          <label>JavaScript:</label>
          <input
            type="checkbox"
            onChange={(e) => handleInterestData(e, "JavaScript")}
            checked={interests.includes("JavaScript")}
          />
        </div>
      </div>
      {error?.interests && <span className="error">{error?.interests}</span>}
    </div>
  );
};
export default Interests;
