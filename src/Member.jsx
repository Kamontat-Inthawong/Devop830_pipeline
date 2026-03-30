import { useParams, Link } from "react-router-dom";

function Member() {
  const { id } = useParams();

  const members = {
    1: {
      name: "Kamontat Inthawong",
      studentId: "6630202007",
      phone: "0958486471",
      email: "kamontat.i@ku.th",
      image: "/bet.jpg"
    },
    2: {
      name: "Nicha Gunhasin",
      studentId: "6630202228",
      phone: "064-974-9412",
      email: "nicha.g@ku.th",
      image: "/nicha.jpg"
    }
  };

  const member = members[id];

  return (
    <div className="app">
      <div className="container">
        <h1>👤 Member Profile</h1>

        <div className="card">
          <img src={member.image} className="profile-img" />

          <p><strong>Name:</strong> {member.name}</p>
          <p><strong>Student ID:</strong> {member.studentId}</p>
          <p><strong>Phone:</strong> {member.phone}</p>
          <p><strong>Email:</strong> {member.email}</p>
        </div>

        <Link to="/team">
          <button className="btn">⬅ Back to Team</button>
        </Link>
      </div>
    </div>
  );
}

export default Member;