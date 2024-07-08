import React, { useEffect, useState } from "react";
import Student from "../Student";
import ListStudentsControl from "../ListStudentsControl";
import SortModal from "../SortModal";
import { ListStudentsHeader } from "../ListStudentsHeader";

import "./styles.css";

interface StudentData {
  id: number;
  email: string;
  name: string;
  sex: string;
  specialty: string;
  group: string;
  color: string;
  rating: number;
  birthday: string;
  avatar: string;
}

const ListStudentsLayout: React.FC = () => {
  const [students, setStudents] = useState<StudentData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortCriteria, setSortCriteria] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://front-assignment-api.2tapp.cc/api/persons")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data.students);
        setIsLoaded(true);
      });
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (criteria: string) => {
    setSortCriteria(criteria);
    setIsModalOpen(false);
  };

  const sortedStudents = React.useMemo(() => {
    const sorted = [...students];
    if (sortCriteria) {
      switch (sortCriteria) {
        case "name-asc":
          sorted.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-desc":
          sorted.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "age-asc":
          sorted.sort(
            (a, b) =>
              new Date(a.birthday).getTime() - new Date(b.birthday).getTime()
          );
          break;
        case "age-desc":
          sorted.sort(
            (a, b) =>
              new Date(b.birthday).getTime() - new Date(a.birthday).getTime()
          );
          break;
        case "rating-asc":
          sorted.sort((a, b) => a.rating - b.rating);
          break;
        case "rating-desc":
          sorted.sort((a, b) => b.rating - a.rating);
          break;
      }
    }
    return sorted;
  }, [students, sortCriteria]);

  const filteredStudents = sortedStudents.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="studentsList">
      <ListStudentsControl
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onSortButtonClick={() => setIsModalOpen(true)}
      />
      <SortModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSort={handleSort}
      />
      <ListStudentsHeader />
      {!isLoaded ? (
        <p>Загрузка...</p>
      ) : (
        <div className="studentsList__content">
          {filteredStudents.map((student) => (
            <Student key={student.id} {...student} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListStudentsLayout;
