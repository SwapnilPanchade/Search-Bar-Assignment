import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaArrowRight, FaTimes } from "react-icons/fa";

import "./Searchbar.css";

export const Searchbar = () => {
  const [input, setInput] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setInput((prev) => prev);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="input-wrapper" ref={searchRef}>
      {input.length > 0 ? (
        <FaArrowRight id="search-icon" />
      ) : (
        <FaSearch id="search-icon" />
      )}
      <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input.length > 0 && (
        <div className="clear-wrapper">
          <span className="clear-text" onClick={() => setInput("")}>
            Clear
          </span>
          <FaTimes id="clear-icon" onClick={() => setInput("")} />
        </div>
      )}
    </div>
  );
};
