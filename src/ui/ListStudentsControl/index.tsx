import React from "react";
import "./styles.css";

interface StudentsControlProps {
  searchTerm: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSortButtonClick: () => void;
}

const ListStudentsControl: React.FC<StudentsControlProps> = ({
  searchTerm,
  onSearch,
  onSortButtonClick,
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
      </div>
      <button
        onClick={onSortButtonClick}
        className="studentsList__blockControl-sort"
      >
        Имя Я-А
      </button>
    </div>
  );
};

export default ListStudentsControl;
