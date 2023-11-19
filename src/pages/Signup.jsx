import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // prevent page refresh
    e.preventDefault();
    console.log(email, password, rememberLogin);
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/ec673412-470b-4ad5-b473-e4233cbf01a4/NG-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="///"
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />
        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-nsans-bold">Sign up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
                name="sign-up-form"
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded outline-none"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded outline-none"
                  type="password"
                  placeholder="Choose a password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-nsans-bold">
                  Sign up
                </button>
                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={rememberLogin}
                      onChange={() => setRememberLogin(!rememberLogin)}
                    />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="my-4">
                  <span className="mr-2 text-gray-600">
                    ALready subscribed?
                  </span>
                  <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
