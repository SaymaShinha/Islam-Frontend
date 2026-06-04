import { useState } from "react";
import { useNavigate } from "react-router";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import app from "../firebase/firebase.config";

export default function RegistrationForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const API = import.meta.env.VITE_API_URL;

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        const user = result.user;

        const res = fetch(`${API}/api/auth/registerByGoogleAcc`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            uid: user.uid,
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

  const submitRegistration = async (e) => {
    const form = e.target;
    const data = new FormData(form);
    const objData = Object.fromEntries(data);

    console.log(Object.fromEntries(data));

    if (objData.password === objData.confirmPassword) {
      try {
        const res = await fetch(`${API}/api/auth/registerByGoogleAcc`, {
          method: "POST",
          body: data,
        });

        const resData = await res.json();

        if (res.ok) {
          setShowModal(true);
          console.log("Success:", resData);
          setTimeout(() => {
            setShowModal(false);
          }, 2000);
          navigate("/");
        } else {
          console.log("Error:", resData.message);
        }
      } catch (error) {
        throw error;
      }
    } else {
      console.log("Password entered are not same");
    }
  };

  return (
    <>
      {showModal && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-success">Welcome 🎉</h3>

            <p className="py-4">You successfully signed up</p>

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

      <div
        data-theme="islamic"
        className="min-h-screen flex items-center justify-center bg-base-200 p-6"
      >
        <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Account
          </h2>

          <div className="space-y-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitRegistration(e);
              }}
              className="flex flex-col gap-4 w-full"
            >
              {/* Name */}
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full"
                required
              />

              {/* Email */}
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full"
                required
              />

              {/* Native Language */}
              <select
                name="nativeLanguage"
                defaultValue="English"
                className="select select-secondary w-full"
              >
                <option disabled>Native Language</option>
                <option>Bangla</option>
                <option>Turkish</option>
                <option>English</option>
              </select>

              {/* Address */}
              <fieldset className="bg-base-200 border rounded-box w-full p-4">
                <legend className="font-semibold">
                  Address & Contact details
                </legend>

                <input
                  name="phone"
                  type="text"
                  className="input w-full mt-2"
                  placeholder="Phone"
                />

                <input
                  name="city"
                  type="text"
                  className="input w-full mt-2"
                  placeholder="City"
                />

                <input
                  name="area"
                  type="text"
                  className="input w-full mt-2"
                  placeholder="Area/Road"
                />
              </fieldset>

              {/* Password */}
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered w-full pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {/* Confirm Password */}
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full"
                required
              />

              {/* Terms */}
              <label className="flex items-center gap-2">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn"
                  onClick={() =>
                    document
                      .getElementById("terms_conditions_modal")
                      .showModal()
                  }
                >
                  Terms & Conditions
                </button>
                <dialog id="terms_conditions_modal" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Terms & Conditions</h3>
                    <p className="mb-4">
                      By accessing and using this website, you agree to comply
                      with the following terms and conditions.
                    </p>

                    <p className="mb-4">
                      All content provided on this website, including Asmaul
                      Husna, Quranic verses, translations, and Islamic
                      information, is for educational and informational purposes
                      only.
                    </p>

                    <p className="mb-4">
                      Users must not misuse, copy, or redistribute the content
                      for harmful, misleading, or commercial purposes without
                      permission.
                    </p>

                    <p className="mb-4">
                      We do not guarantee that all content is error-free or
                      complete. Users are encouraged to verify information with
                      qualified Islamic scholars.
                    </p>

                    <p className="mb-4">
                      We are not responsible for any loss, misunderstanding, or
                      damage resulting from the use of this website.
                    </p>

                    <p>
                      We reserve the right to update or modify these terms at
                      any time without prior notice.
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>

                <input
                  name="terms"
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  required
                />
                <span>I agree to the Terms & Conditions</span>
              </label>

              {/* Submit */}
              <button type="submit" className="btn btn-primary w-full">
                Sign Up
              </button>
            </form>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Social */}
            <button
              className="btn btn-outline w-full"
              onClick={(e) => handleGoogleLogin(e)}
            >
              Continue with Google
            </button>

            {/* Login link */}
            <p className="text-center text-sm mt-2">
              Already have an account?{" "}
              <span
                className="text-primary cursor-pointer"
                onClick={() => navigate("/auth/login")}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
