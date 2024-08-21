import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <>
      <div className="bg-red-200 rounded-xl flex items-center gap-x-2 text-sm text-red-500 p-2">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <p>{message}</p>
      </div>
    </>
  );
};

export default FormError;
