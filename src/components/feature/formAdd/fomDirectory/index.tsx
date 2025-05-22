import { ButtonForm } from '../buttonForm';
import { InputForm } from '../inputForm';

interface FormDirectoryProps {
  buttonText: string;
}

export function FormDirectory({ buttonText }: FormDirectoryProps) {
  return (
    <div className='flex flex-col gap-4'>
      <InputForm
        title="Title"
        placeholder="Enter a directory name"
        type="text"
      />
      <ButtonForm className="w-fit">{buttonText}</ButtonForm>
    </div>
  );
}
