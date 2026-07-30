import { useState } from "react";

const hobbies = [
  {
    value: "music",
    name: "Music",
  },
  {
    value: "movie",
    name: "Movies",
  },
  {
    value: "plastic-model",
    name: "Plastic Model",
  },
];

const genders = [
  {
    value: "male",
    name: "Male",
  },
  {
    value: "female",
    name: "Female",
  },
  {
    value: "others",
    name: "Others",
  },
];

const jobs = {
  Accounting: ["Accountant", "Senior Accountant", "Payroll Officer"],
  IT: ["Developer", "System Analyst", "Programmer"],
  HR: ["HR Officer", "Recruiter", "HR Manager"],
};

function UserRegistration() {
  const [user, setUser] = useState({
    username: "",
    firstname: "",
    lastname: "",
    gender: "",
    hobbies: [],
    department: "Accounting",
    job: "Accountant",
  });

  const [result, setResult] = useState(null);

  // Handle text input
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Handle gender
  const handleGender = (e) => {
    setUser({
      ...user,
      gender: e.target.value,
    });
  };

  // Handle hobbies
  const handleHobby = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      setUser({
        ...user,
        hobbies: [...user.hobbies, value],
      });
    } else {
      setUser({
        ...user,
        hobbies: user.hobbies.filter((h) => h !== value),
      });
    }
  };

  // Handle department
  const handleDepartment = (e) => {
    const dept = e.target.value;

    setUser({
      ...user,
      department: dept,
      job: jobs[dept][0],
    });
  };

  // Handle job
  const handleJob = (e) => {
    setUser({
      ...user,
      job: e.target.value,
    });
  };

  // Submit
  const handleSubmit = () => {
    setResult(user);
  };

  // Reset
  const handleReset = () => {
    setUser({
      username: "",
      firstname: "",
      lastname: "",
      gender: "",
      hobbies: [],
      department: "Accounting",
      job: "Accountant",
    });

    setResult(null);
  };

  return (
    <div
      style={{
        width: "900px",
        margin: "40px auto",
        border: "1px solid black",
        backgroundColor: "white",
        padding: "15px",
        color: "black",
      }}
    >
      <h2>User Registration</h2>
      <hr />

      {/* Username */}
      <div>
        <label>Username </label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
      </div>

      <br />

      {/* Firstname */}
      <div>
        <label>Firstname </label>
        <input
          type="text"
          name="firstname"
          value={user.firstname}
          onChange={handleChange}
        />
      </div>

      <br />

      {/* Lastname */}
      <div>
        <label>Lastname </label>
        <input
          type="text"
          name="lastname"
          value={user.lastname}
          onChange={handleChange}
        />
      </div>

      <br />

      {/* Gender */}
      <div>
        <label>Gender </label>

        {genders.map((g) => (
          <label key={g.value} style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              name="gender"
              value={g.value}
              checked={user.gender === g.value}
              onChange={handleGender}
            />
            {g.name}
          </label>
        ))}
      </div>

      <br />

      {/* Hobbies */}
      <div>
        <label>Hobbies </label>

        {hobbies.map((h) => (
          <label key={h.value} style={{ marginLeft: "10px" }}>
            <input
              type="checkbox"
              value={h.value}
              checked={user.hobbies.includes(h.value)}
              onChange={handleHobby}
            />
            {h.name}
          </label>
        ))}
      </div>

      <br />

      {/* Department */}
      <div>
        <label>Department </label>

        <select value={user.department} onChange={handleDepartment}>
          <option value="Accounting">Accounting</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
        </select>
      </div>

      <br />

      {/* Job */}
      <div>
        <label>Job Position </label>

        <select value={user.job} onChange={handleJob}>
          {jobs[user.department].map((job) => (
            <option key={job} value={job}>
              {job}
            </option>
          ))}
        </select>
      </div>

      <hr />

      <button onClick={handleReset}>Reset</button>

      <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
        Submit
      </button>

      <hr />

      {result && (
        <div>
          <p>
            <strong>Username:</strong> {result.username}
          </p>

          <p>
            <strong>Firstname:</strong> {result.firstname}
          </p>

          <p>
            <strong>Lastname:</strong> {result.lastname}
          </p>

          <p>
            <strong>Gender:</strong> {result.gender}
          </p>

          <p>
            <strong>Hobbies:</strong> {result.hobbies.join(", ")}
          </p>

          <p>
            <strong>Department:</strong> {result.department}
          </p>

          <p>
            <strong>Job:</strong> {result.job}
          </p>
        </div>
      )}
    </div>
  );
}

export default UserRegistration;
