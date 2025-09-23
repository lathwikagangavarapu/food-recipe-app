import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Signup = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      setIsError(true);
      return;
    }
    const result = await signup(username, password);
    setMessage(result.message);
    setIsError(!result.success);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <div className="auth-form-inner">
          <h1>Cook Recipe</h1>
          <h2>Sign Up</h2>
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
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {message && <p className={isError ? "error" : "success"}>{message}</p>}
            <button type="submit" className="auth-btn">Sign Up</button>
          </form>
          <p>Already have an account? <button onClick={onSwitchToLogin} className="link-btn">Login</button></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;