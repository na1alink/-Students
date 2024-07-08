import React from "react";

interface SortModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSort: (criteria: string) => void;
}

const SortModal: React.FC<SortModalProps> = ({ isOpen, onClose, onSort }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Сортировка</h2>
        <button onClick={() => onSort("name-asc")}>Имя А-Я</button>
        <button onClick={() => onSort("name-desc")}>Имя Я-А</button>
        <button onClick={() => onSort("age-asc")}>Сначала моложе</button>
        <button onClick={() => onSort("age-desc")}>Сначала старше</button>
        <button onClick={() => onSort("rating-desc")}>Высокий рейтинг</button>
        <button onClick={() => onSort("rating-asc")}>Низкий рейтинг</button>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default SortModal;
