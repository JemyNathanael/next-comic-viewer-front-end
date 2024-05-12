import { TriangleAlert } from "lucide-react";
import React from "react";

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (message) {
    return (
      <div className="bg-red-400 p-2 w-full flex items-center gap-4 rounded-md text-white mt-3">
        <TriangleAlert />
        <p>{message}</p>
      </div>
    );
  }
  return null;
};

export default FormError;
