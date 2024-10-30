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
        <div className="fixed inset-0 flex flex-col justify-end lg:justify-center items-center z-50">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-40"></div>

          {/* Popup content */}
          <div className="relative bg-white p-6 rounded-lg shadow-2xl w-full max-w-md text-gray-800 z-50 mb-4">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-300 transition duration-200 text-gray-600"
              onClick={() => setVisible(false)}
              aria-label="Close"
            >
              ✕
            </button>


            <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">RATE US!</h2>
            <p className="text-center text-gray-700 mb-6">Please take a second to review our services!</p>

            {/* Star Rating */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <button
                    key={index}
                    type="button"
                    className={`text-4xl transition duration-300 ${
                      starValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(0)}
                    style={{
                      marginRight: index < 4 ? '2px' : '0',
                      padding: '0',
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
                className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 resize-none"
                placeholder="Leave a comment..."
                rows="4"
                value={comment}
                onChange={handleCommentChange}
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition duration-300 shadow-lg"
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
