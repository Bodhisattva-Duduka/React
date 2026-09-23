import { useContext, useState } from "react";

import { UserContext } from "../../context/UserContext";

function AccountDetails() {
  const { userDetails, setUserDetails } = useContext(UserContext);

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: userDetails.name,
    password: "",
    confirmPassword: "",
    address: userDetails.address,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  }

  function handleSave(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!formData.name.trim()) {
      setError("Name cannot be empty.");
      return;
    }

    if (!formData.address.trim()) {
      setError("Address cannot be empty.");
      return;
    }

    if (formData.password && formData.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setUserDetails((prev) => ({
      ...prev,
      name: formData.name.trim(),
      address: formData.address.trim(),
      password: formData.password || prev.password,
    }));

    setFormData((prev) => ({
      ...prev,
      password: "",
      confirmPassword: "",
    }));

    setSuccess("Your details have been updated.");
    setIsEditing(false);
  }

  function handleCancel() {
    setFormData({
      name: userDetails.name,
      password: "",
      confirmPassword: "",
      address: userDetails.address,
    });

    setError("");
    setSuccess("");
    setIsEditing(false);
  }

  return (
    <section>
      {/* Profile */}
      <div className="flex items-end justify-between gap-4 border-b border-zinc-200 pb-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
            Profile
          </p>

          <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950">
            Account details
          </h2>
        </div>

        {!isEditing && (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
          >
            Edit details
          </button>
        )}
      </div>

      {/* Current Details */}
      <div className="mt-6 border-y border-zinc-200">
        <div className="grid gap-2 py-5 sm:grid-cols-[160px_1fr] sm:items-center">
          <span className="text-sm text-zinc-400">
            Name
          </span>

          <span className="text-sm font-medium text-zinc-950">
            {userDetails.name}
          </span>
        </div>

        <div className="grid gap-2 border-t border-zinc-200 py-5 sm:grid-cols-[160px_1fr] sm:items-center">
          <span className="text-sm text-zinc-400">
            Email
          </span>

          <span className="text-sm font-medium text-zinc-950">
            {userDetails.email}
          </span>
        </div>

        <div className="grid gap-2 border-t border-zinc-200 py-5 sm:grid-cols-[160px_1fr] sm:items-start">
          <span className="text-sm text-zinc-400">
            Address
          </span>

          <span className="max-w-xl text-sm font-medium leading-6 text-zinc-950">
            {userDetails.address}
          </span>
        </div>
      </div>

      {/* Edit Form */}
      {isEditing && (
        <div className="mt-10">
          <div className="border-b border-zinc-200 pb-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
              Settings
            </p>

            <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950">
              Edit your details
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Update your name, password, or shipping address.
            </p>
          </div>

          {error && (
            <div className="mt-5 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSave}
            className="mt-6 max-w-2xl space-y-6"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="account-name"
                className="mb-2 block text-sm font-medium text-zinc-900"
              >
                Name
              </label>

              <input
                id="account-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="h-11 w-full border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="account-email"
                className="mb-2 block text-sm font-medium text-zinc-900"
              >
                Email
              </label>

              <input
                id="account-email"
                type="email"
                value={userDetails.email}
                disabled
                className="h-11 w-full cursor-not-allowed border border-zinc-200 bg-zinc-50 px-3 text-sm text-zinc-400 outline-none"
              />

              <p className="mt-2 text-xs text-zinc-400">
                Email address cannot be changed.
              </p>
            </div>

            {/* New Password */}
            <div>
              <label
                htmlFor="account-password"
                className="mb-2 block text-sm font-medium text-zinc-900"
              >
                New Password
              </label>

              <input
                id="account-password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Leave blank to keep current password"
                minLength={6}
                className="h-11 w-full border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="account-confirm-password"
                className="mb-2 block text-sm font-medium text-zinc-900"
              >
                Confirm New Password
              </label>

              <input
                id="account-confirm-password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Enter the new password again"
                className="h-11 w-full border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950"
              />
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="account-address"
                className="mb-2 block text-sm font-medium text-zinc-900"
              >
                Address
              </label>

              <textarea
                id="account-address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={4}
                className="w-full resize-none border border-zinc-300 bg-white px-3 py-3 text-sm leading-6 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950"
              />
            </div>

            {success && (
              <div className="border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-600">
                {success}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                type="submit"
                className="h-11 bg-zinc-950 px-6 text-sm font-medium text-white transition hover:bg-zinc-800 active:scale-[0.99]"
              >
                Save Changes
              </button>

              <button
                type="button"
                onClick={handleCancel}
                className="h-11 border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-950 transition hover:border-zinc-950 hover:bg-zinc-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

export default AccountDetails;