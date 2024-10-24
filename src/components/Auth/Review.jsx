import React, { useState, useEffect } from 'react';

const Review = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [visible, setVisible] = useState(false);

  // Show the component after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  // Function to handle comment change
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Function to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`We value your feedback. Thank you for rating us!`);

    // Clear the comment and rating after submission
    setComment('');
    setRating(0);

    // Hide the review component after submission
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-40"></div>

          {/* Popup content */}
          <div className="relative bg-blue-100 p-6 rounded-lg shadow-lg w-full max-w-md text-blue-900 z-50">
            <h2 className="text-2xl font-bold mb-2 text-center">RATE US!</h2> {/* Dark blue text */}
            <p className="text-center text-black mb-4">Please take a second to review our services!</p>
            {/* Star Rating */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <button
                    key={index}
                    type="button"
                    className={`text-5xl transition duration-300 ${
                      starValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-400'
                    }`}
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(0)}
                    style={{
                        marginRight: index < 4 ? '2px' : '0', // Add small margin to create adjacency
                        padding: '0', // Reduce padding
                      }}
                  >
                    ★
                  </button>
                );
              })}
            </div>

            {/* Comment Box */}
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-full p-2 rounded-lg bg-white text-black focus:outline-none mb-4"
                placeholder="Leave a comment..."
                rows="4"
                value={comment}
                onChange={handleCommentChange}
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-900 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition duration-300"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Review;
