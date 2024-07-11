import React from "react";
import "./styles.css";

interface SortModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSort: (criteria: string) => void;
}

const SortModal: React.FC<SortModalProps> = ({ isOpen, onClose, onSort }) => {
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as Element).classList.contains("modal")) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={handleClickOutside}>
      <div className="modal-content">
        <button onClick={() => onSort("name-asc")} className="modal-btn">
          Имя А-Я
        </button>
        <button onClick={() => onSort("name-desc")} className="modal-btn">
          Имя Я-А
        </button>
        <button onClick={() => onSort("age-desc")} className="modal-btn">
          Сначала моложе
        </button>
        <button onClick={() => onSort("age-asc")} className="modal-btn">
          Сначала старше
        </button>
        <button onClick={() => onSort("rating-desc")} className="modal-btn">
          Высокий рейтинг
        </button>
        <button onClick={() => onSort("rating-asc")} className="modal-btn">
          Низкий рейтинг
        </button>
      </div>
    </div>
  );
};

export default SortModal;
