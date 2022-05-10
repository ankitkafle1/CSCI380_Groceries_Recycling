import { useState } from "react";

function AddCustomer({Cswitch, setSwitch}) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [userstory, setUserStory]= useState("")

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4500/users", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          userstory: userstory

        }),
      });
      if (res.status === 200) {
        //
        if(Cswitch ==='on'){
          setSwitch('off')
        }else{
          setSwitch('on')
        }
        setFirstName("");
        setLastName("");
        setUserStory("")
      } else {
       console.log("some error occured")
      }
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstname}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={lastname}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          value={userstory}
          placeholder="User Story"
          onChange={(e) => setUserStory(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddCustomer;