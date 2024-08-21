import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessrProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessrProps) => {
  if (!message) return null;
  return (
    <>
      <div className="bg-green-200 rounded-xl flex items-center gap-x-2 text-sm text-green-500 p-2">
        <CheckCircledIcon className="h-4 w-4" />
        <p>{message}</p>
      </div>
    </>
  );
};

export default FormSuccess;
