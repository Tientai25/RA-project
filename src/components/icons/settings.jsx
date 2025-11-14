// src/icons/SettingsWithDot.jsx
export default function Settings({ size = 20, color = "#2F2B3D", dotColor = "gray" }) {
  return (
    <div style={{
      position: 'relative',
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* BÁNH RĂNG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute' }}
      >
        <path
          d="M8.258 2.152C8.695 0.383 11.305 0.383 11.742 2.152C11.873 2.695 12.258 3.141 12.758 3.362C13.258 3.583 13.837 3.536 14.305 3.236C15.598 2.402 17.098 3.902 16.264 5.195C16.036 5.663 15.989 6.242 16.21 6.742C16.431 7.242 16.877 7.627 17.42 7.758C19.189 8.195 19.189 10.805 17.42 11.242C16.877 11.373 16.431 11.758 16.21 12.258C15.989 12.758 16.036 13.337 16.336 13.805C17.17 15.098 15.67 16.598 14.377 15.764C13.909 15.536 13.33 15.489 12.83 15.71C12.33 15.931 11.944 16.316 11.813 16.858C11.376 18.627 8.766 18.627 8.329 16.858C8.198 16.315 7.813 15.869 7.313 15.648C6.813 15.427 6.234 15.474 5.766 15.774C4.473 16.608 2.973 15.108 3.807 13.815C4.035 13.347 4.082 12.768 3.861 12.268C3.64 11.768 3.194 11.383 2.651 11.252C0.882 10.815 0.882 8.205 2.651 7.768C3.194 7.637 3.64 7.252 3.861 6.752C4.082 6.252 4.035 5.673 3.735 5.205C2.902 3.912 4.402 2.412 5.695 3.246C6.163 3.474 6.742 3.521 7.242 3.3C7.742 3.079 8.127 2.694 8.258 2.152Z"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* CHẤM TRÒN NHỎ */}
      <svg
        width={7}
        height={7}
        viewBox="0 0 6 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', zIndex: 1 }}
      >
        <circle
          cx="3.5"
          cy="3.5"
          r="2.75"
          stroke={dotColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
}