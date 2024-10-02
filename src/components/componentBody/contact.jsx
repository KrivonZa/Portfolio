import React, { useEffect, useState } from "react";

export const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full py-14 px-4">
      <div
        className={`duration-700 ${
          isLoaded ? "opacity-100 translate-0" : "opacity-0 translate-x-20"
        }`}
      >
        <div className="text-4xl font-semibold">Contact</div>
        <hr className="border-4 border-[#ffae13] my-4 ml-2 rounded-lg w-32" />
      </div>
      <div
        className={`duration-1000 px-6 py-4 ${
          isLoaded ? "opacity-100 translate-0" : "opacity-0 translate-x-20"
        }`}
      >
       Pending
      </div>
    </div>
  );
};

export default Contact;
