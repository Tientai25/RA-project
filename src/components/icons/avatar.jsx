// src/components/icons/Avatar.jsx
export default function Avatar({ size = 32 }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      border: '2px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="User"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}