import { useState, useMemo } from "react";
import { StudentData } from "./useFetchStudents";

const useSortStudents = (students: StudentData[]) => {
  const [sortCriteria, setSortCriteria] = useState<string | null>(null);

  const handleSort = (criteria: string) => {
    setSortCriteria(criteria);
  };

  const sortedStudents = useMemo(() => {
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

  return { sortedStudents, handleSort };
};

export default useSortStudents;
