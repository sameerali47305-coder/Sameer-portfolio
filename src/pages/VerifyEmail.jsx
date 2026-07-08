import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";
import "./Auth.css";

export default function VerifyEmail() {
  const { token } = useParams();

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await api.get(`/auth/verify/${token}`);

        setSuccess(true);
        setMessage(res.data.message);
      } catch (err) {
        setSuccess(false);
        setMessage(
          err.response?.data?.message || "Verification failed."
        );
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Email Verification</h2>

        {loading ? (
          <p>Verifying your email...</p>
        ) : success ? (
          <>
            <p className="success">{message}</p>

            <Link to="/login">
              <button>Go to Login</button>
            </Link>
          </>
        ) : (
          <>
            <p className="error">{message}</p>

            <Link to="/signup">
              <button>Back to Signup</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}