import React from "react";

interface DiaryItemProps {
  title: string;
  content: string;
}

const DiaryItem: React.FC<DiaryItemProps> = ({ title, content }) => {
  return (
    <li className="p-4 border border-gray-300 rounded-lg">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </li>
  );
};

export default DiaryItem;
