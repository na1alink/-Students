import React from "react";
import "./styles.css";
import DeleteIcon from "../images/icon/DeleteIcon";

// import { ReactComponent as deleteButton } from "../../assets/deleteButton.svg";
interface DeleteButtonProps {
  id: number;
  deleteFunction: (id: number) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, deleteFunction }) => {
  return (
    <button className="delete-button" onClick={() => deleteFunction(id)}>
      <DeleteIcon />
    </button>
  );
};

export default DeleteButton;
