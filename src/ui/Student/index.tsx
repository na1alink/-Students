import React from "react";
import { useDeviceSize } from "../../hooks/useDeviceSize";
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

const getAgeString = (age: number): string => {
  if (age === 1) {
    return `${age} year old`;
  } else {
    return `${age} years old`;
  }
};

const Student: React.FC<StudentProps> = (props) => {
  const { isMobile, isTablet, isDesktop } = useDeviceSize();
  const age = calculateAge(props.birthday);
  const ageString = getAgeString(age);

  return (
    <>
      {isDesktop && (
        <div className="student student--desktop">
          <div className="student__avatar">
            <img
              src={props.avatar}
              className="student__avatar-img"
              alt={props.name}
            />
          </div>

          <div className="student__name">{props.name}</div>
          <div className="student__specialty">{props.specialty}</div>
          <div className="student__group">{props.group}</div>
          <div className="student__age">{age}</div>
          <div className="student__rating">{props.rating}</div>
          <div
            className="student__color"
            style={{ backgroundColor: props.color }}
          ></div>
          <DeleteButton id={props.id} deleteFunction={props.deleteFunction} />
        </div>
      )}
      {(isTablet || isMobile) && (
        <div className="student student--tablet">
          <div className="student__header">
            <div className="student__avatar">
              <img
                src={props.avatar}
                className="student__avatar-img"
                alt={props.name}
              />
            </div>
            <div className="student__header-info">
              <div className="student__name">{props.name}</div>
              <div className="student__header-wrap">
                <div
                  className="student__color"
                  style={{ backgroundColor: props.color }}
                ></div>
                <div className="student__rating">{props.rating}</div>
              </div>
            </div>
            <DeleteButton id={props.id} deleteFunction={props.deleteFunction} />
          </div>

          <div className="student__details">
            <div className="student__age">{ageString}</div>
            <div className="student__specialty">{props.specialty}</div>
            <div className="student__group">{props.group}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Student;
