import { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({
        email: email.trim(),
        password: password, 
        loginTime: new Date().toISOString(),
        isLoggedIn: true
      }));

      if (onLogin) onLogin();
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9f9fb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      position: 'relative'
    }}>

      {/* === CONTAINER CĂN CHỈNH === */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>

        {/* === KHỐI 1: TÍM TRÁI TRÊN === */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          left: '-35px',
          width: '130px',
          height: '130px',
          backgroundColor: '#e8e7ff',
          borderRadius: '10px',
          zIndex: 1
        }}></div>

        {/* === KHỐI 2: TRONG SUỐT ĐÈ LÊN KHỐI 1 (lệch 12px xuống-phải) === */}
        <div style={{
          position: 'absolute',
          top: '-122px',
          left: '20px',
          width: '100px',
          height: '100px',
          backgroundColor: 'transparent',
          border: '2px solid #c7c6ff',
          borderRadius: '24px',
          opacity: 0.5,
          zIndex: 2
        }}></div>

        {/* === KHỐI 3: TÍM PHẢI DƯỚI === */}
        <div style={{
          position: 'absolute',
          bottom: '-115px',
          right: '-25px',
          width: '100px',
          height: '100px',
          backgroundColor: '#e8e7ff',
          borderRadius: '10px',
          zIndex: 1
        }}></div>

        {/* === KHỐI 4: TRONG SUỐT + DASHED BORDER BAO QUANH KHỐI 3 === */}
        <div style={{
          position: 'absolute',
          bottom: '-130px',
          right: '-40px',
          width: '130px',
          height: '130px',
          border: '2px dashed #c7c6ff',
          borderRadius: '24px',
          backgroundColor: 'transparent',
          zIndex: 2,
          opacity: 0.7
        }}></div>

        {/* === FORM === */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '40px 32px',
          borderRadius: '16px',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          zIndex: 10,
          border: '1px solid #f0f0f0'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '28px',
            textAlign: 'center',
            color: '#1f2937'
          }}>
            Registration Authority
          </h2>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                marginBottom: '6px',
                fontSize: '14px',
                color: '#6b7280',
                fontWeight: '500'
              }}>
                Email or Username
              </label>
              <input
                type="text"
                placeholder="Enter your email or username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '14px',
                  backgroundColor: '#fafafa'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '6px',
                fontSize: '14px',
                color: '#6b7280',
                fontWeight: '500'
              }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 40px 12px 14px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '14px',
                    backgroundColor: '#fafafa'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#9ca3af',
                    fontSize: '16px',
                    cursor: 'pointer'
                  }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
                        <path d="M14.0833 5.41667C12.3053 8.528 10.0833 10.0833 7.41667 10.0833C4.75 10.0833 2.528 8.528 0.75 5.41667C2.528 2.30533 4.75 0.75 7.41667 0.75C10.0833 0.75 12.3053 2.30533 14.0833 5.41667" stroke="#2F2B3D" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
              fontSize: '13px',
              color: '#6b7280'
            }}>
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <input type="checkbox" style={{ marginRight: '6px' }} defaultChecked />
                Nhớ mật khẩu
              </label>
              <a href="#" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '500' }}>
                Quên mật khẩu
              </a>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}