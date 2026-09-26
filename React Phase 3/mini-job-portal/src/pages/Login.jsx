import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleClick(){
    navigate('/');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-xs sm:w-80 p-6 bg-white rounded-lg shadow">
        <h2 className="mb-2 text-2xl">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 px-3 py-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleClick}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;