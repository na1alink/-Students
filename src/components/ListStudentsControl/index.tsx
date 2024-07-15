import React from "react";

import "./styles.css";
import SortIcon from "../images/icon/SortIcon";
import SearchIcon from "../images/icon/SearchIcon";

interface StudentsControlProps {
  searchTerm: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSortButtonClick: () => void;
  sortButtonText: string;
}

const ListStudentsControl: React.FC<StudentsControlProps> = ({
  searchTerm,
  onSearch,
  onSortButtonClick,
  sortButtonText,
}) => {
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
      <button
        onClick={onSortButtonClick}
        className="studentsList__blockControl-sort"
      >
        <span> {sortButtonText}</span>
        <SortIcon />
      </button>
    </div>
  );
};

export default ListStudentsControl;
