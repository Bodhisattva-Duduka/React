import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import logo from '../assets/logo.png'

function Login() {
  const { userDetails, setUserDetails } = useContext(UserContext);
  const { userStatus, setUserStatus } = useContext(UserContext);

  const navigate = useNavigate();

  // Signup should appear first
  const [showLogin, setShowLogin] = useState(false);

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [signupFormData, setSignupFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const [error, setError] = useState("");

  function handleSignupSubmit(e) {
    e.preventDefault();

    setError("");

    if (
      !signupFormData.name.trim() ||
      !signupFormData.email.trim() ||
      !signupFormData.password.trim() ||
      !signupFormData.confirmPassword.trim() ||
      !signupFormData.address.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (signupFormData.password !== signupFormData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setUserDetails({
      name: signupFormData.name,
      email: signupFormData.email,
      password: signupFormData.password,
      address: signupFormData.address,
    });

    setLoginFormData({
      email: "",
      password: "",
    });

    setShowLogin(true);
  }

  function handleLoginSubmit(e) {
    e.preventDefault();

    setError("");

    if (!loginFormData.email.trim() || !loginFormData.password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    if (!userDetails.email) {
      setError("No account found. Please sign up first.");
      setShowLogin(false);
      return;
    }

    if (
      loginFormData.email !== userDetails.email ||
      loginFormData.password !== userDetails.password
    ) {
      setError("Invalid email or password.");
      return;
    }

    setUserStatus(true);

    navigate("/");
  }

  function switchToLogin() {
    setError("");
    setShowLogin(true);
  }

  function switchToSignup() {
    setError("");
    setShowLogin(false);
  }

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <div className="grid min-h-screen lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left branding section */}
        <div className="hidden border-r border-zinc-200 bg-zinc-50 lg:flex lg:flex-col lg:justify-between lg:p-10">
          <Link
            to="/"
            className="inline-flex w-fit"
            aria-label="Cove Home"
          >
            <img
              src={logo}
              alt="Cove"
              className="h-30 w-auto object-contain"
            />
          </Link>

          <div className="max-w-md">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
              Welcome to Cove
            </p>

            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.04em] text-zinc-950">
              Find something worth keeping.
            </h1>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Create an account to keep your details ready for
              checkout and manage your shopping experience.
            </p>
          </div>

          <p className="text-xs text-zinc-400">
            © 2026 Cove
          </p>
        </div>

        {/* Right form section */}
        <div className="flex items-center justify-center px-5 py-10 sm:px-8">
          <div className="w-full max-w-md">
            {/* Mobile branding */}
            <Link
              to="/"
              className="mb-10 flex items-center justify-center gap-2 lg:hidden"
            >
              <div className="flex h-8 w-8 items-center justify-center bg-zinc-950 text-sm font-semibold text-white">
                C
              </div>

              <span className="text-lg font-semibold tracking-tight">
                cove
              </span>
            </Link>

            {/* Switch */}
            <div className="border-b border-zinc-200">
              <div className="flex">
                <button
                  type="button"
                  onClick={switchToSignup}
                  className={`relative px-1 pb-4 text-sm font-medium transition-colors ${!showLogin
                      ? "text-zinc-950"
                      : "text-zinc-400 hover:text-zinc-700"
                    }`}
                >
                  Sign up

                  {!showLogin && (
                    <span className="absolute bottom-0 left-0 h-px w-full bg-zinc-950" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={switchToLogin}
                  className={`relative ml-7 px-1 pb-4 text-sm font-medium transition-colors ${showLogin
                      ? "text-zinc-950"
                      : "text-zinc-400 hover:text-zinc-700"
                    }`}
                >
                  Login

                  {showLogin && (
                    <span className="absolute bottom-0 left-0 h-px w-full bg-zinc-950" />
                  )}
                </button>
              </div>
            </div>

            {/* Heading */}
            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                Account
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
                {showLogin ? "Welcome back" : "Create your account"}
              </h2>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {showLogin
                  ? "Enter the details you used when creating your account."
                  : "Create your Cove account to continue."}
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="mt-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* LOGIN */}
            {showLogin && (
              <form
                onSubmit={handleLoginSubmit}
                className="mt-8 space-y-5"
              >
                <div>
                  <label
                    htmlFor="login-email"
                    className="mb-2 block text-sm font-medium text-zinc-900"
                  >
                    Email
                  </label>

                  <input
                    id="login-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={loginFormData.email}
                    onChange={(e) =>
                      setLoginFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="h-11 w-full border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="login-password"
                    className="mb-2 block text-sm font-medium text-zinc-900"
                  >
                    Password
                  </label>

                  <input
                    id="login-password"
                    type="password"
                    name="password"
                    required
                    autoComplete="current-password"
                    value={loginFormData.password}
                    onChange={(e) =>
                      setLoginFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    className="h-11 w-full border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="flex h-11 w-full items-center justify-center bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800 active:scale-[0.99]"
                >
                  Login
                </button>
              </form>
            )}

            {/* SIGNUP */}
            {!showLogin && (
              <form
                onSubmit={handleSignupSubmit}
                className="mt-8 space-y-5"
              >
                <div>
                  <label
                    htmlFor="signup-name"
                    className="mb-2 block text-sm font-medium text-zinc-900"
                  >
                    Name
                  </label>

                  <input
                    id="signup-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={signupFormData.name}
                    onChange={(e) =>
                      setSignupFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="h-11 w-full border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="signup-email"
                    className="mb-2 block text-sm font-medium text-zinc-900"
                  >
                    Email
                  </label>

                  <input
                    id="signup-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={signupFormData.email}
                    onChange={(e) =>
                      setSignupFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="h-11 w-full border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="signup-password"
                    className="mb-2 block text-sm font-medium text-zinc-900"
                  >
                    Password
                  </label>

                  <input
                    id="signup-password"
                    type="password"
                    name="password"
                    required
                    minLength={6}
                    autoComplete="new-password"
                    value={signupFormData.password}
                    onChange={(e) =>
                      setSignupFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    className="h-11 w-full border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950"
                    placeholder="At least 6 characters"
                  />
                </div>

                <div>
                  <label
                    htmlFor="signup-confirm-password"
                    className="mb-2 block text-sm font-medium text-zinc-900"
                  >
                    Confirm Password
                  </label>

                  <input
                    id="signup-confirm-password"
                    type="password"
                    name="confirmPassword"
                    required
                    minLength={6}
                    autoComplete="new-password"
                    value={signupFormData.confirmPassword}
                    onChange={(e) =>
                      setSignupFormData((prev) => ({
                        ...prev,
                        confirmPassword: e.target.value,
                      }))
                    }
                    className="h-11 w-full border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950"
                    placeholder="Enter the password again"
                  />
                </div>

                <div>
                  <label
                    htmlFor="signup-address"
                    className="mb-2 block text-sm font-medium text-zinc-900"
                  >
                    Address
                  </label>

                  <input
                    id="signup-address"
                    type="text"
                    name="address"
                    required
                    autoComplete="street-address"
                    value={signupFormData.address}
                    onChange={(e) =>
                      setSignupFormData((prev) => ({
                        ...prev,
                        address: e.target.value,
                      }))
                    }
                    className="h-11 w-full border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950"
                    placeholder="Your address"
                  />
                </div>

                <button
                  type="submit"
                  className="flex h-11 w-full items-center justify-center bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800 active:scale-[0.99]"
                >
                  Sign up
                </button>
              </form>
            )}

            {/* Footer */}
            <p className="mt-8 text-center text-xs leading-5 text-zinc-400">
              By continuing, you agree to the terms of using Cove.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;