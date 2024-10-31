import React, { useState } from "react";
import "./Feedback.css";
import { feedbackValidation } from "@/validations/validation";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [errors, setErrors] = useState({});

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await feedbackValidation.validate(
        { name, email, feedback },
        { abortEarly: false }
      );
      setErrors({});
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    if (name && email && rating && feedback) {
      try {
        const response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            rating,
            message: feedback,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          setMessage("Your feedback has been successfully submitted.");
          setMessageType("success");
          setIsSubmitted(true);
          resetForm();
        } else {
          setMessage(result.message || "An error occurred. Please try again.");
          setMessageType("error");
        }
      } catch (error) {
        setMessage("Failed to submit feedback. Please try again later.");
        setMessageType("error");
      }
    } else {
      setMessage("Please fill out all fields.");
      setMessageType("error");
    }
  };

  const resetForm = () => {
    setTimeout(() => {
      setName("");
      setEmail("");
      setRating(0);
      setFeedback("");
      setHoverRating(0);
      setIsSubmitted(false);
      setMessage("");
      setMessageType("");
    }, 10000); // Reset form and message after 10 seconds
  };

  const closePopup = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="feedback-form-container">
      <form noValidate  onSubmit={handleSubmit}>
        <h1 className="heading">Feedback Form</h1>

        {/* Name Input */}
        <input
          className="name"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <div className="text-red-600 mt-1">{errors.name}</div>}
        {/* Email Input */}
        <input
          className="email"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <div className="text-red-600 mt-1">{errors.email}</div>}
        {/* Feedback Textarea */}
        <textarea
          className="exp"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Describe your experience.."
          required
        />
        {errors.feedback && (
          <div className="text-red-600 mt-1">{errors.feedback}</div>
        )}
        {/* Star Rating */}
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={
                star <= (hoverRating || rating) ? "star-filled" : "star"
              }
              onClick={() => handleRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
            >
              ★
            </span>
          ))}
        </div>

        {/* Submit Button */}
        <button type="submit" className="post-button">
          Submit
        </button>
      </form>

      {/* Success or Error Message */}
      {message && (
        <div
          className="message"
          style={{
            color: messageType === "success" ? "green" : "red",
            marginTop: "10px",
          }}
        >
          {message}
        </div>
      )}

      {/* Success Pop-up */}
      {isSubmitted && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Thank You!</h3>
            <p>{message}</p>
            <button onClick={closePopup} className="close-popup-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
