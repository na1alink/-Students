import DeleteButton from "../DeleteButton";
import "./styles.css";

interface StudentProps {
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
  deleteFunction: (id: number) => void;
}

const calculateAge = (birthday: string): number => {
  const birthDate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const Student: React.FC<StudentProps> = (props) => {
  const age = calculateAge(props.birthday);
  return (
    <div className="student">
      <div className="student__avatar">
        <img
          src={props.avatar}
          className="student__avatar-img"
          alt={props.name}
        />
      </div>
      <div className="student__avatar-name">{props.name}</div>
      <div className="student__avatar-specialty">{props.specialty}</div>
      <div className="student__avatar-group">{props.group}</div>
      <div className="student__avatar-age">{age} </div>
      <div className="student__avatar-rating">{props.rating}</div>
      <div
        className="student__avatar-color"
        style={{ backgroundColor: props.color }}
      ></div>
      <DeleteButton id={props.id} deleteFunction={props.deleteFunction} />
    </div>
  );
};

export default Student;
