import React from "react";
import "./styles.css";

interface SortModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSort: (criteria: string, buttonText: string) => void;
  currentSort: string;
  sortOptions: { criteria: string; text: string }[];
}

const SortModal: React.FC<SortModalProps> = ({
  isOpen,
  onSort,
  currentSort,
  sortOptions,
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
