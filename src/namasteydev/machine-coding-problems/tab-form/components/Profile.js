import "../styles.css";
const Profile = ({ data, setData, error }) => {
  const { name, age, email_id, address, language, port } = data;
  const handleProfileData = (e, item) => {
    setData({ ...data, [item]: e?.target?.value });
  };
  return (
    <div class="profileSection">
      <div className="formInput">
        <label for="name">Name:</label>
        <input
          id="name"
          type="text"
          onChange={(e) => handleProfileData(e, "name")}
          value={name}
        />
      </div>
      {error?.name && <span className="error">Name is not Valid</span>}
      <div className="formInput">
        <label for="age">Age:</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => handleProfileData(e, "age")}
        />
      </div>
      {error?.age && <span className="error">Age is not Valid</span>}
      <div className="formInput">
        <label for="email">Email Id:</label>
        <input
          id="email"
          type="email"
          value={email_id}
          onChange={(e) => handleProfileData(e, "email_id")}
        />
      </div>
      {error?.email_id && <span className="error">Email is not Valid</span>}
      <div className="formInput">
        <label for="address">Address:</label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => handleProfileData(e, "address")}
        />
      </div>
      {error?.address && <span className="error">Address cannot be empty</span>}
      <div className="formInput">
        <label for="language">Language:</label>
        <select
          id="language"
          value={language}
          onChange={(e) => handleProfileData(e, "language")}
        >
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="French">French</option>
        </select>
      </div>
      {error?.language && (
        <span className="error">Language should be selected</span>
      )}
      <div className="formInput">
        <label for="port">Port:</label>
        <select
          id="port"
          value={port}
          onChange={(e) => handleProfileData(e, "port")}
        >
          <option value="">Select Port</option>
          <option value="Houston">Houston</option>
          <option value="Pune">Pune</option>
          <option value="Shanghai">Shanghai</option>
        </select>
      </div>
      {error?.port && (
        <span className="error">Port should be selected</span>
      )}
    </div>
  );
};
export default Profile;
