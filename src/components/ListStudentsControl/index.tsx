import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import SortIcon from "../images/icon/SortIcon";
import SearchIcon from "../images/icon/SearchIcon";
import SortModal from "../SortModal";

interface StudentsControlProps {
  searchTerm: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSortButtonClick: (criteria: string, buttonText: string) => void;
  sortButtonText: string;
  currentSort: string;
}

const ListStudentsControl: React.FC<StudentsControlProps> = ({
  searchTerm,
  onSearch,
  onSortButtonClick,
  sortButtonText,
  currentSort,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const sortButtonRef = useRef<HTMLButtonElement>(null);

  const handleSortAndClose = (criteria: string, buttonText: string) => {
    onSortButtonClick(criteria, buttonText);
    setIsModalOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      sortButtonRef.current &&
      !sortButtonRef.current.contains(event.target as Node)
    ) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="studentsList__blockControl">
      <div className="studentsList__blockControl-search">
        <input
          type="text"
          placeholder="Поиск по имени"
          value={searchTerm}
          onChange={onSearch}
        />

        <SearchIcon className="studentsList__blockControl-search__svg" />
      </div>
      <div className="studentsList__blockControl-sort__wrapper">
        <button
          ref={sortButtonRef}
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="studentsList__blockControl-sort"
        >
          <span> {sortButtonText}</span>
          <SortIcon />
        </button>

        {isModalOpen && (
          <div
            ref={modalRef}
            className={isModalOpen ? "modal-wrap modal-open" : "modal-wrap"}
          >
            <SortModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              currentSort={currentSort}
              onSort={handleSortAndClose}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListStudentsControl;
