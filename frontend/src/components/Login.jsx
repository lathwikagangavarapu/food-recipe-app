import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Login = ({ onSwitchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(username, password);
    setMessage(result.message);
    setIsError(!result.success);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <div className="auth-form-inner">
          <h1>Cook Recipe</h1>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {message && <p className={isError ? "error" : "success"}>{message}</p>}
            <button type="submit" className="auth-btn">Login</button>
          </form>
          <p>Don't have an account? <button onClick={onSwitchToSignup} className="link-btn">Sign Up</button></p>
        </div>
      </div>
    </div>
  );
};

export default Login;