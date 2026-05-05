import "../styles.css";
const Profile = ({ data, setData, error }) => {
  const { name, age, email_id } = data;
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
    </div>
  );
};
export default Profile;
