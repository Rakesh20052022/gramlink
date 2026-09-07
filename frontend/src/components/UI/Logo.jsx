import React from "react";


const Logo = () => {
  return (
    <div style={styles.logoContainer}>
      <div style={styles.iconBox}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12L12 3l9 9" />
          <path d="M9 21V12h6v9" />
        </svg>
      </div>

      <h1 style={styles.text}>GramLink</h1>
    </div>
  );
};


const styles = {
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  
  iconBox: {
    width: "40px",
    height: "40px",
    backgroundColor: "#1f4d3a",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  
  text: {
    fontSize: "28px",
    fontWeight: "600",
    color: "#1f4d3a",
    fontFamily: "sans-serif",
  },
};

export default Logo;