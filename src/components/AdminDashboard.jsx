import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, LayoutDashboard, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple hardcoded password for now
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-wrapper">
        <div className="admin-login-card glass">
          <div className="admin-icon-wrapper">
            <Lock size={40} className="admin-icon" />
          </div>
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin} className="admin-form">
            <input 
              type="password" 
              placeholder="Enter password..." 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-input"
            />
            {error && <p className="admin-error">{error}</p>}
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <button onClick={() => navigate('/')} className="btn btn-secondary back-btn">
            Back to Website
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-wrapper">
      <nav className="admin-nav glass">
        <div className="container nav-content">
          <div className="brand" style={{cursor: 'pointer'}} onClick={() => navigate('/')}>
            Fun<span>Techz</span> Admin
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="btn btn-secondary">
            Logout
          </button>
        </div>
      </nav>
      
      <main className="container admin-main">
        <h2 className="section-title">Dashboard</h2>
        
        <div className="admin-grid">
          <div className="admin-stat-card glass">
            <LayoutDashboard size={30} className="stat-icon" />
            <h3>Total Views</h3>
            <p className="stat-value">1,245</p>
          </div>
          <div className="admin-stat-card glass">
            <MessageSquare size={30} className="stat-icon" />
            <h3>Form Submissions</h3>
            <p className="stat-value">28</p>
          </div>
        </div>

        <div className="admin-content glass">
          <h3>Recent Messages</h3>
          <p style={{color: 'var(--text-body)', marginTop: '1rem'}}>
            (Data will be synced with Web3Forms API or Supabase in the future)
          </p>
          <div className="placeholder-msg">
            <p><strong>Ahmad</strong> (ahmad@gmail.com)</p>
            <p>Need a booking system for my clinic.</p>
          </div>
          <div className="placeholder-msg">
            <p><strong>Sarah</strong> (sarah@designer.com)</p>
            <p>Looking for a portfolio website.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
