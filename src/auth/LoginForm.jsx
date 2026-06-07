import { useNavigate } from "react-router";
import Loading from "../Components/Loading.jsx";
import { useState } from "react";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");

  const logIn = async (e) => {
    setLoading(true);

    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const API = import.meta.env.VITE_API_URL;
      console.log(API);
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        body: formData,
      });

      const resData = await res.json();

      if (res.ok) {
        console.log(resData.data._id);
        const id = resData.data._id;
        localStorage.setItem("userId", id);
        setUserName(resData.data.name);
        localStorage.setItem("token", resData.token);
        localStorage.setItem("role", resData.role);
        setLoading(false);
        setShowModal(true);

        resData.role == "admin" ? navigate(`/admin`) : navigate(`/`);
      } else {
        console.log("Error:", resData.message);
        setLoading(false);
        e.target.reset();
      }
    } catch (error) {
      throw error;
      setLoading(false);
    }
  };


  
    const handleGoogleLogin = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result.user);
          const user = result.user;
  
          const res = fetch(`${API}/api/auth/login`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email: user.email,
            }),
          });
  
          console.log(res);
  
          if (res.ok) {
            navigate("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

  return (
    <>
      {loading && <Loading></Loading>}

      {showModal && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-success">
              Welcome 🎉 {userName}
            </h3>

            <div className="modal-action">
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}

      <div data-theme="islamic" className="relative min-h-screen">
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-green-500/10"></div>

        {/* Login Form */}
        <div className="relative flex items-center justify-center min-h-screen">
          <form
            className="backdrop-blur-md bg-green-500/50 shadow-xl rounded-box w-80 p-6 flex flex-col gap-4"
            onSubmit={(e) => logIn(e)}
          >
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
              required
            />

            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Login
            </button>
          </form>

        </div>
      </div>
    </>
  );
}
