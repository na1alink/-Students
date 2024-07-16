import React, { useEffect, useRef } from "react";
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
  onClose,
  currentSort,
  sortOptions,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

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
