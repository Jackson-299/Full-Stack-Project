// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const API_BASE = "";

// const CardForm = () => {



// const[isLogin, setIsLogin] = useState(false);
// const[form, setForm] = useState({
//     username: "",
//     password: "",
//     email: "",
//     age: "",
//     gender: "",
//     contact: "",
//     image: ""
// })

// const navigate = useNavigate();

// const handleChange = (e) => {
//     setForm({...form, [e.target.name]: e.target.value});

// };

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try{
//         if(isLogin){
//             const res = await axios.post(`${API_BASE}/login`,{
//                 username : form.username,
//                 password: form.password
//             });
//             localStorage.setItem("card", JSON.stringify(res.data.card))
//             navigate(`/profile/${res.data.card._id}`)
//         }else{
//              const formData = new FormData();
//              formData.append("username", form.username);
//              formData.append("password", form.password);
//              formData.append("email", form.email);
//              formData.append("age", form.age);
//              formData.append("gender", form.gender);
//              formData.append("contact", form.contact);
//              formData.append("image", form.image);

//             const res = await axios.post(`${API_BASE}/`, formData, {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                 }
//             });
//             console.log(formData)
//             console.log(res.data);
//             setIsLogin(true)
//             setForm({
//                 username: "",
//                 password: "",
//                 email: "",
//                 age: "",
//                 gender: "",
//                 contact: "",
//                 image: ""
//             })
            
//         }
//     }catch(error){
//         console.error(error);
//           alert("Login/Register failed. Please check your credentials or try again.");
//     }
// }

//   return (
//     <div>
//       <h2> {isLogin ? "Login" : "Register"}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//             type="text" name="username" value={form.username} placeholder="Username" required onChange={handleChange}
//         />
//         <input
//             type="password" name="password" value={form.password} placeholder="Password" required onChange={handleChange}
//         />

//         {!isLogin && <>

//         <input
//             type="email" name="email" value={form.email} placeholder="Email" required onChange={handleChange}
//         />
//         <input
//             type="number" name="age" value={form.age} placeholder="Age" required onChange={handleChange}
//         />
//         <input
//             type="text" name="gender" value={form.gender} placeholder="Gender" required onChange={handleChange}
//         />
//         <input
//             type="number" name="contact" value={form.contact} placeholder="Contact" required onChange={handleChange}
//         />
//         <input
//             type="file" name="image" accept="image/*" onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
//         />

//         </>}

//         <button type="submit">{isLogin ? "Login" : "Register"}</button>
//       </form>

//       <p onClick={()=> setIsLogin(!isLogin)} style={{cursor: "pointer", color: "blue"}}>
//       {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
//      </p>
//      <Link to="/contact">Contact us</Link>
//     </div>
//   )
// }

// export default CardForm


import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const API_BASE = "https://full-stack-backend-ptu4.onrender.com/api/students";

const StudentForm = () => {
  const [form, setForm] = useState({
    studentName: "",
    age: "",
    gender: "",
    rollNo: "", // ✅ Corrected key
    password: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setForm((prev) => ({ ...prev, image: file }));
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // LOGIN
        const res = await axios.post(`${API_BASE}/login`, {
          studentName: form.studentName,
          password: form.password,
        });

        localStorage.setItem("student", JSON.stringify(res.data));
        alert("Login successful");
        navigate(`/profile/${res.data._id}`);
      } else {
        // REGISTER
        const formData = new FormData();
        formData.append("studentName", form.studentName);
        formData.append("age", form.age);
        formData.append("gender", form.gender);
        formData.append("rollNo", form.rollNo); // ✅ Corrected key
        formData.append("password", form.password);
        if (form.image) formData.append("image", form.image);

        const res = await axios.post(`${API_BASE}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        alert("Registration successful");
        navigate(`/profile/${res.data._id}`);
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>{isLogin ? "Student Login" : "Student Registration"}</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="studentName"
          value={form.studentName}
          placeholder="Student Name"
          required
          onChange={handleChange}
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
        />

        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="Password"
          required
          onChange={handleChange}
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
        />

        {!isLogin && (
          <>
            <input
              type="number"
              name="age"
              value={form.age}
              placeholder="Age"
              required
              onChange={handleChange}
              style={{ width: "100%", marginBottom: 10, padding: 8 }}
            />
            <input
              type="text"
              name="gender"
              value={form.gender}
              placeholder="Gender"
              required
              onChange={handleChange}
              style={{ width: "100%", marginBottom: 10, padding: 8 }}
            />
            <input
              type="text"
              name="rollNo" // ✅ Corrected key
              value={form.rollNo}
              placeholder="Roll No"
              required
              onChange={handleChange}
              style={{ width: "100%", marginBottom: 10, padding: 8 }}
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
              style={{ marginBottom: 10 }}
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                style={{ width: 150, borderRadius: 8, marginBottom: 10 }}
              />
            )}
          </>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: 10,
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading
            ? isLogin
              ? "Logging in..."
              : "Registering..."
            : isLogin
              ? "Login"
              : "Register"}
        </button>
      </form>

      <p
        onClick={() => setIsLogin(!isLogin)}
        style={{
          cursor: "pointer",
          color: "blue",
          marginTop: 15,
          textAlign: "center",
        }}
      >
        {isLogin
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
      </p>

      <Link
        to="/contact"
        style={{ display: "block", textAlign: "center", marginTop: 10 }}
      >
        Contact us
      </Link>
    </div>
  );
};

export default StudentForm;




