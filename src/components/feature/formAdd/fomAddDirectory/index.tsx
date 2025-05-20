import { ButtonForm } from '../buttonForm';
import { InputForm } from '../inputForm';

export function FormAddDirectory() {
  return (
    <div className='flex flex-col gap-4'>
      <InputForm
        title="Title"
        placeholder="Enter a directory name"
        type="text"
      />
      <ButtonForm className="w-fit">Create Directory</ButtonForm>
    </div>
  );
}
