
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// const API_BASE = "https://full-stack-backend-ptu4.onrender.com/api/students";

// const StudentForm = () => {
//   const [form, setForm] = useState({
//     studentName: "",
//     age: "",
//     gender: "",
//     rollNo: "", // ✅ Corrected key
//     password: "",
//     image: null,
//   });

//   const [preview, setPreview] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [isLogin, setIsLogin] = useState(false);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setForm((prev) => ({ ...prev, image: file }));
//     setPreview(file ? URL.createObjectURL(file) : null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       if (isLogin) {
//         // LOGIN
//         const res = await axios.post(`${API_BASE}/login`, {
//           studentName: form.studentName,
//           password: form.password,
//         });

//         localStorage.setItem("student", JSON.stringify(res.data));
//         alert("Login successful");
//         navigate(`/profile/${res.data._id}`);
//       } else {
//         // REGISTER
//         const formData = new FormData();
//         formData.append("studentName", form.studentName);
//         formData.append("age", form.age);
//         formData.append("gender", form.gender);
//         formData.append("rollNo", form.rollNo); // ✅ Corrected key
//         formData.append("password", form.password);
//         if (form.image) formData.append("image", form.image);

//         const res = await axios.post(`${API_BASE}`, formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });

//         alert("Registration successful");
//         navigate(`/profile/${res.data._id}`);
//       }
//     } catch (error) {
//       alert(
//         error.response?.data?.message ||
//         "An error occurred. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
//       <h2>{isLogin ? "Student Login" : "Student Registration"}</h2>

//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <input
//           type="text"
//           name="studentName"
//           value={form.studentName}
//           placeholder="Student Name"
//           required
//           onChange={handleChange}
//           style={{ width: "100%", marginBottom: 10, padding: 8 }}
//         />

//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           placeholder="Password"
//           required
//           onChange={handleChange}
//           style={{ width: "100%", marginBottom: 10, padding: 8 }}
//         />

//         {!isLogin && (
//           <>
//             <input
//               type="number"
//               name="age"
//               value={form.age}
//               placeholder="Age"
//               required
//               onChange={handleChange}
//               style={{ width: "100%", marginBottom: 10, padding: 8 }}
//             />
//             <input
//               type="text"
//               name="gender"
//               value={form.gender}
//               placeholder="Gender"
//               required
//               onChange={handleChange}
//               style={{ width: "100%", marginBottom: 10, padding: 8 }}
//             />
//             <input
//               type="text"
//               name="rollNo" // ✅ Corrected key
//               value={form.rollNo}
//               placeholder="Roll No"
//               required
//               onChange={handleChange}
//               style={{ width: "100%", marginBottom: 10, padding: 8 }}
//             />
//             <input
//               type="file"
//               name="image"
//               accept="image/*"
//               onChange={handleImageChange}
//               required
//               style={{ marginBottom: 10 }}
//             />
//             {preview && (
//               <img
//                 src={preview}
//                 alt="Preview"
//                 style={{ width: 150, borderRadius: 8, marginBottom: 10 }}
//               />
//             )}
//           </>
//         )}

//         <button
//           type="submit"
//           disabled={loading}
//           style={{
//             width: "100%",
//             padding: 10,
//             backgroundColor: "#4caf50",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           {loading
//             ? isLogin
//               ? "Logging in..."
//               : "Registering..."
//             : isLogin
//               ? "Login"
//               : "Register"}
//         </button>
//       </form>

//       <p
//         onClick={() => setIsLogin(!isLogin)}
//         style={{
//           cursor: "pointer",
//           color: "blue",
//           marginTop: 15,
//           textAlign: "center",
//         }}
//       >
//         {isLogin
//           ? "Don't have an account? Register"
//           : "Already have an account? Login"}
//       </p>

//       <Link
//         to="/contact"
//         style={{ display: "block", textAlign: "center", marginTop: 10 }}
//       >
//         Contact us
//       </Link>
//     </div>
//   );
// };

// export default StudentForm;



// // import { useState } from "react";
// // import axios from "axios";
// // import { useNavigate, Link } from "react-router-dom";

// // const API_BASE = "https://full-stack-backend-ptu4.onrender.com/api/students";

// // const StudentForm = () => {
// //   const [form, setForm] = useState({
// //     studentName: "",
// //     age: "",
// //     gender: "",
// //     rollNo: "",
// //     password: "",
// //     image: null,
// //   });

// //   const [preview, setPreview] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [isLogin, setIsLogin] = useState(false);

// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setForm((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     setForm((prev) => ({ ...prev, image: file }));
// //     setPreview(file ? URL.createObjectURL(file) : null);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       if (isLogin) {
// //         // LOGIN
// //         const res = await axios.post(`${API_BASE}/login`, {
// //           studentName: form.studentName,
// //           password: form.password,
// //         });

// //         localStorage.setItem("student", JSON.stringify(res.data));
// //         alert("Login successful");
// //         navigate(`/profile/${res.data._id}`);
// //       } else {
// //         // REGISTER
// //         const formData = new FormData();
// //         formData.append("studentName", form.studentName);
// //         formData.append("age", form.age);
// //         formData.append("gender", form.gender);
// //         formData.append("rollNo", form.rollNo);
// //         formData.append("password", form.password);
// //         if (form.image) formData.append("image", form.image);

// //         const res = await axios.post(`${API_BASE}`, formData, {
// //           headers: { "Content-Type": "multipart/form-data" },
// //         });

// //         alert("Registration successful");
// //         navigate(`/profile/${res.data._id}`);
// //       }
// //     } catch (error) {
// //       alert(
// //         error.response?.data?.message ||
// //           "An error occurred. Please try again."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         maxWidth: 400,
// //         margin: "50px auto",
// //         padding: 30,
// //         backgroundColor: "#ffffff",
// //         borderRadius: 12,
// //         boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
// //         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// //       }}
// //     >
// //       <h2 style={{ textAlign: "center", marginBottom: 20, color: "#333" }}>
// //         {isLogin ? "Student Login" : "Student Registration"}
// //       </h2>

// //       <form onSubmit={handleSubmit} encType="multipart/form-data">
// //         <input
// //           type="text"
// //           name="studentName"
// //           value={form.studentName}
// //           placeholder="Student Name"
// //           required
// //           onChange={handleChange}
// //           style={{
// //             width: "100%",
// //             marginBottom: 15,
// //             padding: 10,
// //             borderRadius: 6,
// //             border: "1px solid #ccc",
// //             fontSize: 14,
// //           }}
// //         />

// //         <input
// //           type="password"
// //           name="password"
// //           value={form.password}
// //           placeholder="Password"
// //           required
// //           onChange={handleChange}
// //           style={{
// //             width: "100%",
// //             marginBottom: 15,
// //             padding: 10,
// //             borderRadius: 6,
// //             border: "1px solid #ccc",
// //             fontSize: 14,
// //           }}
// //         />

// //         {!isLogin && (
// //           <>
// //             <input
// //               type="number"
// //               name="age"
// //               value={form.age}
// //               placeholder="Age"
// //               required
// //               onChange={handleChange}
// //               style={{
// //                 width: "100%",
// //                 marginBottom: 15,
// //                 padding: 10,
// //                 borderRadius: 6,
// //                 border: "1px solid #ccc",
// //                 fontSize: 14,
// //               }}
// //             />
// //             <input
// //               type="text"
// //               name="gender"
// //               value={form.gender}
// //               placeholder="Gender"
// //               required
// //               onChange={handleChange}
// //               style={{
// //                 width: "100%",
// //                 marginBottom: 15,
// //                 padding: 10,
// //                 borderRadius: 6,
// //                 border: "1px solid #ccc",
// //                 fontSize: 14,
// //               }}
// //             />
// //             <input
// //               type="text"
// //               name="rollNo"
// //               value={form.rollNo}
// //               placeholder="Roll No"
// //               required
// //               onChange={handleChange}
// //               style={{
// //                 width: "100%",
// //                 marginBottom: 15,
// //                 padding: 10,
// //                 borderRadius: 6,
// //                 border: "1px solid #ccc",
// //                 fontSize: 14,
// //               }}
// //             />
// //             <input
// //               type="file"
// //               name="image"
// //               accept="image/*"
// //               onChange={handleImageChange}
// //               required
// //               style={{
// //                 marginBottom: 15,
// //                 padding: 5,
// //                 fontSize: 14,
// //               }}
// //             />
// //             {preview && (
// //               <img
// //                 src={preview}
// //                 alt="Preview"
// //                 style={{
// //                   width: 150,
// //                   height: "auto",
// //                   borderRadius: 8,
// //                   marginBottom: 15,
// //                   display: "block",
// //                   objectFit: "cover",
// //                   boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
// //                 }}
// //               />
// //             )}
// //           </>
// //         )}

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           style={{
// //             width: "100%",
// //             padding: 12,
// //             backgroundColor: loading ? "#888" : "#4caf50",
// //             color: "white",
// //             border: "none",
// //             borderRadius: 6,
// //             fontSize: 16,
// //             cursor: loading ? "not-allowed" : "pointer",
// //             transition: "background-color 0.3s",
// //           }}
// //         >
// //           {loading
// //             ? isLogin
// //               ? "Logging in..."
// //               : "Registering..."
// //             : isLogin
// //             ? "Login"
// //             : "Register"}
// //         </button>
// //       </form>

// //       <p
// //         onClick={() => setIsLogin(!isLogin)}
// //         style={{
// //           cursor: "pointer",
// //           color: "#007bff",
// //           marginTop: 20,
// //           textAlign: "center",
// //           fontSize: 14,
// //           textDecoration: "underline",
// //         }}
// //       >
// //         {isLogin
// //           ? "Don't have an account? Register"
// //           : "Already have an account? Login"}
// //       </p>

// //       <Link
// //         to="/contact"
// //         style={{
// //           display: "block",
// //           textAlign: "center",
// //           marginTop: 15,
// //           color: "#555",
// //           fontSize: 14,
// //           textDecoration: "none",
// //         }}
// //       >
// //         Contact us
// //       </Link>
// //     </div>
// //   );
// // };

// // export default StudentForm;



import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const API_BASE = "https://full-stack-backend-ptu4.onrender.com/api/students";

const StudentForm = () => {
  const [form, setForm] = useState({
    studentName: "",
    age: "",
    gender: "",
    rollNo: "",
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
        formData.append("rollNo", form.rollNo);
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
    <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        {isLogin ? "Student Login" : "Student Registration"}
      </h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="studentName"
          value={form.studentName}
          placeholder="Student Name"
          required
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="Password"
          required
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="gender"
              value={form.gender}
              placeholder="Gender"
              required
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="rollNo"
              value={form.rollNo}
              placeholder="Roll No"
              required
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="mb-4"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-36 h-auto rounded-md mb-4 object-cover shadow-md"
              />
            )}
          </>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-md text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
          } transition duration-300`}
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
        className="text-center mt-4 text-blue-600 cursor-pointer hover:underline"
      >
        {isLogin
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
      </p>

      <Link
        to="/contact"
        className="block text-center mt-4 text-gray-600 hover:underline"
      >
        Contact us
      </Link>
    </div>
  );
};

export default StudentForm;
