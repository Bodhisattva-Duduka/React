import { useContext } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { UserContext } from "../../context/UserContext";
import Navbar from "../Navbar";

function Account() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUserStatus } = useContext(UserContext);

  const isEditPage = location.pathname === "/account/edit";
  const isOrdersPage = location.pathname === "/account/orders";

  function handleSignOut() {
    setUserStatus(false);
    navigate("/login", { replace: true });
  }

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <Navbar/>
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
        {/* Header */}
        <div className="border-b border-zinc-200 pb-7">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
            Account
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-zinc-950">
            Your account
          </h1>

          <p className="mt-2 max-w-lg text-sm leading-6 text-zinc-500">
            Manage your profile details and keep track of your orders.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-between border-b border-zinc-200">
          <div className="flex gap-6">
            <Link
              to="/account/edit"
              className={`relative py-4 text-sm font-medium transition-colors ${
                isEditPage
                  ? "text-zinc-950"
                  : "text-zinc-400 hover:text-zinc-700"
              }`}
            >
              Profile

              {isEditPage && (
                <span className="absolute bottom-0 left-0 h-px w-full bg-zinc-950" />
              )}
            </Link>

            <Link
              to="/account/orders"
              className={`relative py-4 text-sm font-medium transition-colors ${
                isOrdersPage
                  ? "text-zinc-950"
                  : "text-zinc-400 hover:text-zinc-700"
              }`}
            >
              Your Orders

              {isOrdersPage && (
                <span className="absolute bottom-0 left-0 h-px w-full bg-zinc-950" />
              )}
            </Link>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className="flex items-center gap-1.5 py-4 text-sm font-medium text-zinc-500 transition-colors hover:text-red-600 cursor-pointer"
          >
            <LogOut size={16} />
            <span>Sign out</span>
          </button>
        </nav>

        {/* Nested route */}
        <div className="pt-8">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default Account;