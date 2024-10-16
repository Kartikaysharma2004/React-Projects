import React, { useState } from "react";

const quotes = [
  {
    quote:
      "In React, the component lifecycle mirrors life's own: from birth to updates to unmounting.",
  },
  {
    quote:
      "Just like React, stay declarative in life – express what you want, and let the world handle how.",
  },
  {
    quote:
      "Props are like the values we inherit in life; how we handle them is what makes us unique.",
  },
  {
    quote:
      "State management is key – whether in React or life, how you manage your state defines the experience.",
  },
  {
    quote:
      "In both React and life, hooks allow you to tap into potential and modify behaviors dynamically.",
  },
  {
    quote:
      "React teaches us to break things into components – both in code and life, modularity makes everything more manageable.",
  },
  {
    quote:
      "Like React, be efficient. Re-render only what needs to change, and don't sweat the small stuff.",
  },
  {
    quote:
      "Life is a component tree; sometimes, you need to lift the state up to see the big picture.",
  },
  {
    quote:
      "In React and in life, handling errors gracefully can make all the difference.",
  },
  {
    quote:
      "Remember: not everything has to be class-based. Hooks bring flexibility to both React and life!",
  },
];

function Quote() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const loadNextQuote = () => {
    setCurrentIndex((currentIndex + 1) % quotes.length);
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-blue-500">
      <div className="flex flex-col w-96 items-center bg-white shadow-lg p-8 rounded-lg">
        <div className="text-center text-lg font-medium py-8 px-6">
          <p>{quotes[currentIndex].quote}</p>
        </div>
        <button
          className="button bg-black text-white py-2 px-6 rounded mt-6 shadow-md hover:bg-gray-800"
          onClick={loadNextQuote}
        >
          Get Quote
        </button>
      </div>
    </main>
  );
}

export default Quote;