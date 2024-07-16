import React, { useState } from "react";
import Student from "../Student";
import ListStudentsControl from "../ListStudentsControl";

import { ListStudentsHeader } from "../ListStudentsHeader";

import "./styles.css";
import useStudents from "../../hooks/useStudents";
import { useDeviceSize } from "../../hooks/useDeviceSize";

const ListStudentsLayout: React.FC = () => {
  const {
    students,
    isLoaded,
    searchTerm,
    handleSearch,
    handleSort,
    handleDelete,
  } = useStudents();

  const [sortButtonText, setSortButtonText] = useState("Имя А-Я");
  const [currentSort, setCurrentSort] = useState("name-asc");
  const { isDesktop } = useDeviceSize();

  const handleSortAndClose = (criteria: string, buttonText: string) => {
    handleSort(criteria);
    setSortButtonText(buttonText);
    setCurrentSort(criteria);
  };

  return (
    <div className="studentsList">
      <ListStudentsControl
        searchTerm={searchTerm}
        onSearch={handleSearch}
        sortButtonText={sortButtonText}
        onSortButtonClick={handleSortAndClose}
        currentSort={currentSort}
      />

      {isDesktop && <ListStudentsHeader />}

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
