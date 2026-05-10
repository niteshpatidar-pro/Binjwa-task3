import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Mail, Lock, ArrowRight, Sparkles, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (formData.email === 'admin@binjwa.com' && formData.password === 'password123') {
        setIsLoading(false);
        navigate('/contacts');
      } else {
        setIsLoading(false);
        setError('Invalid email or password. Use admin@binjwa.com / password123');
      }
    }, 1500);
  };

  return (
    <div className="login-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="login-glass-card"
      >
        <div className="floating-logo">
          <div className="w-16 h-16 bg-gradient-to-br from-[#ea8d3f] to-[#ff6b00] rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
            <Sparkles className="text-white w-8 h-8" />
          </div>
        </div>

        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Enter your details to access your workspace</p>

        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3 text-red-600 text-sm"
            >
              <AlertCircle size={18} className="shrink-0" />
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label">Company Name</label>
            <div className="input-wrapper">
              <Building2 className="input-icon" size={20} />
              <input
                type="text"
                name="companyName"
                placeholder="Enter company name"
                className="login-input"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Email Address</label>
            <div className="input-wrapper">
              <Mail className="input-icon" size={20} />
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                className="login-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="login-input"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute right-4 text-[#ff6b00] hover:text-[#e66000] transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="login-button flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Signing in...
              </>
            ) : (
              <>
                Sign In <ArrowRight size={18} />
              </>
            )}
          </motion.button>
        </form>

        <div className="footer-text">
          Don't have an account? <a href="#" className="footer-link">Contact Support</a>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
