import React, { useEffect, useState } from "react";

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

const useStudents = () => {
  const [students, setStudents] = useState<StudentData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
  };

  const handleDelete = (id: number) => {
    setStudents(students.filter((student) => student.id !== id));
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

  return {
    students: filteredStudents,
    isLoaded,
    searchTerm,
    handleSearch,
    handleSort,
    handleDelete,
  };
};

export default useStudents;
