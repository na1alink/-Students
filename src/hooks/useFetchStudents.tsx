import { useEffect, useState } from "react";

export interface StudentData {
  id: number;
  email: string;
  name: string;
  sex: "m" | "f";
  specialty: string;
  group: string;
  color: string;
  rating: number;
  birthday: string;
  avatar: string;
}

const useFetchStudents = () => {
  const [students, setStudents] = useState<StudentData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://front-assignment-api.2tapp.cc/api/persons")
      .then((response) => response.json())
      .then((data) => {
        const sortedStudents = data.students.sort(
          (a: StudentData, b: StudentData) => {
            return a.name.localeCompare(b.name);
          }
        );
        setStudents(sortedStudents);
        setIsLoaded(true);
      });
  }, []);

  return { students, setStudents, isLoaded };
};

export default useFetchStudents;
