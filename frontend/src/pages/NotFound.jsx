import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.text}>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" style={styles.link}>Go Back Home</Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    height: "100vh",
  },
  heading: {
    fontSize: "6rem",
    color: "#ff4757",
    margin: "0",
  },
  text: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "20px",
  },
  link: {
    textDecoration: "none",
    backgroundColor: "#ff4757",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
  },
};
