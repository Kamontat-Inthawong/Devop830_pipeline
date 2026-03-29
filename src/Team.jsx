import { Link } from "react-router-dom";

function Team() {
  const members = [
    {
      id: 1,
      name: "Kamontat Inthawong"
    },
    {
      id: 2,
      name: "Nicha Gunhasin"
    }
  ];

  return (
    <div className="app">
      <div className="container">
        <h1>👥 Team Members</h1>

        {members.map((member) => (
          <div key={member.id} className="card">
            <h2>{member.name}</h2>
            <Link to={`/member/${member.id}`}>
              <button className="btn">View Profile</button>
            </Link>
          </div>
        ))}

        <Link to="/">
          <button className="btn">⬅ Back Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Team;