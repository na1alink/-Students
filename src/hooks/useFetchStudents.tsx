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
        setStudents(data.students);
        setIsLoaded(true);
      });
  }, []);

  return { students, setStudents, isLoaded };
};

export default useFetchStudents;
