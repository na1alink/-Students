import React, { useEffect, useState } from "react";
import Student from "../Student";
import ListStudentsControl from "../ListStudentsControl";
import SortModal from "../SortModal";
import { ListStudentsHeader } from "../ListStudentsHeader";

import "./styles.css";
import useStudents from "../../hooks/useStudentsList";

const ListStudentsLayout: React.FC = () => {
  const {
    students,
    isLoaded,
    searchTerm,
    handleSearch,
    handleSort,
    handleDelete,
  } = useStudents();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortButtonText, setSortButtonText] = useState("Имя А-Я");
  const [currentSort, setCurrentSort] = useState("name-asc");

  const handleSortAndClose = (criteria: string, buttonText: string) => {
    handleSort(criteria);
    setSortButtonText(buttonText);
    setCurrentSort(criteria);
    setIsModalOpen(false);
  };

  return (
    <div className="studentsList">
      <ListStudentsControl
        searchTerm={searchTerm}
        onSearch={handleSearch}
        sortButtonText={sortButtonText}
        onSortButtonClick={() => setIsModalOpen(true)}
      />
      <SortModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentSort={currentSort}
        onSort={handleSortAndClose}
      />
      <ListStudentsHeader />
      {!isLoaded ? (
        <p>Загрузка...</p>
      ) : (
        <div className="studentsList__content">
          {students.length === 0 ? (
            <p>Нет совпадений</p>
          ) : (
            students.map((student) => (
              <Student
                key={student.id}
                {...student}
                deleteFunction={handleDelete}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ListStudentsLayout;
