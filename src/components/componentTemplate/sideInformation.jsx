import React, { useState, useEffect } from "react";
import "./styles.css";

// Component tạo hiệu ứng đánh chữ với vòng lặp
const TypingEffectLoop = ({ texts, speed = 100, delay = 1000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);   // Chỉ số của ký tự đang được đánh
  const [textIndex, setTextIndex] = useState(0); // Chỉ số của câu văn đang được đánh

  useEffect(() => {
    if (index < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText(displayText + texts[textIndex][index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Khi đánh xong một câu, tạm dừng một chút rồi chuyển sang câu tiếp theo
      const timeout = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
        setTextIndex((prevTextIndex) => (prevTextIndex + 1) % texts.length); // Lặp vòng qua các đoạn văn bản
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [index, texts, textIndex, displayText, speed, delay]);

  // Tìm đoạn văn bản dài nhất để đặt chiều cao cố định
  const longestText = texts.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    // Đặt chiều cao cố định dựa trên đoạn văn bản dài nhất
    <div style={{ minHeight: "1.5em", whiteSpace: "nowrap" }}>
      <span>{displayText}</span>
    </div>
  );
};

export const SideInformation = () => {
  return (
    <div className="px-16 py-8 flex flex-col items-center w-[25vw]">
      <div className="border-black border w-32 h-32 rounded-3xl overflow-hidden">
        <img src="../public/Image.png" className="w-full h-full object-cover" />
      </div>
      <div className="text-xl text-center mt-4 font-medium">Truong Tan Dung</div>
      
      <div className="text-lg font-mono border-r-2 m-2 text-center">
        <TypingEffectLoop
          texts={[
            "Programmer",
            "Translator",
            "Gamer",
            "Traveller",
            "Coffee Addict",
            "Music Lover",
          ]}
          speed={50}
          delay={1000}
        />
      </div>
    </div>
  );
};

export default SideInformation;
