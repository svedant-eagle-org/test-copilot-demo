import "../styles.css";
const Profile = ({ data, setData, error, onClear }) => {
  const { name, age, email_id, address, language, port, job_title, company, about_me, experience_level, employment_type, career_goals } = data;
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
      <h3>Profession/Bio</h3>
      <div className="formInput">
        <label for="job_title">Job Title:</label>
        <input
          id="job_title"
          type="text"
          value={job_title}
          onChange={(e) => handleProfileData(e, "job_title")}
        />
      </div>
      {error?.job_title && (
        <span className="error">Job Title cannot be empty</span>
      )}
      <div className="formInput">
        <label for="company">Company:</label>
        <input
          id="company"
          type="text"
          value={company}
          onChange={(e) => handleProfileData(e, "company")}
        />
      </div>
      {error?.company && (
        <span className="error">Company cannot be empty</span>
      )}
      <div className="formInput">
        <label for="about_me">About Me:</label>
        <textarea
          id="about_me"
          rows="6"
          cols="50"
          value={about_me}
          onChange={(e) => handleProfileData(e, "about_me")}
        />
      </div>
      {error?.about_me && (
        <span className="error">About Me cannot be empty</span>
      )}
      <h3>Employment Summary</h3>
      <div className="formInput">
        <label for="experience_level">Experience level:</label>
        <select
          id="experience_level"
          value={experience_level}
          onChange={(e) => handleProfileData(e, "experience_level")}
        >
          <option value="">Select Experience level</option>
          <option value="Fresher">Fresher</option>
          <option value="Mid">Mid</option>
          <option value="Senior">Senior</option>
        </select>
      </div>
      {error?.experience_level && (
        <span className="error">Experience level should be selected</span>
      )}
      <div className="formInput">
        <label for="employment_type">Employment type:</label>
        <select
          id="employment_type"
          value={employment_type}
          onChange={(e) => handleProfileData(e, "employment_type")}
        >
          <option value="">Select Employment type</option>
          <option value="Full-time">Full-time</option>
          <option value="Contract">Contract</option>
          <option value="Intern">Intern</option>
        </select>
      </div>
      {error?.employment_type && (
        <span className="error">Employment type should be selected</span>
      )}
      <div className="formInput">
        <label for="career_goals">Career goals:</label>
        <textarea
          id="career_goals"
          rows="8"
          cols="50"
          value={career_goals}
          onChange={(e) => handleProfileData(e, "career_goals")}
        />
      </div>
      {error?.career_goals && (
        <span className="error">Career goals cannot be empty</span>
      )}
      <div className="clearButtonContainer">
        <button onClick={onClear}>Clear</button>
      </div>
    </div>
  );
};
export default Profile;

