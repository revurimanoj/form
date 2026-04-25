import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: name,
      email: email
    };

    try {
      const response = await fetch("http://localhost:8080/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      const data = await response.text();
      alert(data);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>

      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <br/><br/>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br/><br/>

        <button type="submit">Submit</button>

      </form>

    </div>
  );
}

export default App;