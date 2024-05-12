import { SquareCheck, TriangleAlert } from "lucide-react";
import React from "react";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (message) {
    return (
      <div className="bg-green-400 p-2 w-full flex items-center gap-4 rounded-md text-white mt-3">
        <SquareCheck />
        <p>{message}</p>
      </div>
    );
  }
  return null;
};

export default FormSuccess;
