import React from "react";
import "./styles.css";

interface SortModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSort: (criteria: string, buttonText: string) => void;
  currentSort: string;
}

const sortOptions = [
  { criteria: "name-asc", text: "Имя А-Я" },
  { criteria: "name-desc", text: "Имя Я-А" },
  { criteria: "age-desc", text: "Сначала моложе" },
  { criteria: "age-asc", text: "Сначала старше" },
  { criteria: "rating-desc", text: "Высокий рейтинг" },
  { criteria: "rating-asc", text: "Низкий рейтинг" },
  { criteria: "color-asc", text: "Цвет А-Я" },
  { criteria: "color-desc", text: "Цвет Я-А" },
];

const SortModal: React.FC<SortModalProps> = ({
  isOpen,
  onSort,
  currentSort,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      {sortOptions.map((option) => (
        <button
          key={option.criteria}
          onClick={() => onSort(option.criteria, option.text)}
          className={`modal-btn ${
            currentSort === option.criteria ? "selected" : ""
          }`}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default SortModal;
