import { ButtonForm } from '../buttonForm';
import { InputForm } from '../inputForm';
import { DateInput } from '../dateInput';
import { DescriptionTextarea } from '../descriptionTextarea';
import { SelectForm } from '../selectDirectoryFom';
import { RadioMarkForm } from '../radioMarkForm';
export function FormAddTask() {
  return (
    <div className="flex flex-col gap-4">
      <InputForm
        title="Title"
        placeholder="e.g, study for the test"
        type="text"
      />
      <DateInput title="Date" />
      <DescriptionTextarea title="Description (optional)" />
      <SelectForm title="Select a directory" />
      <RadioMarkForm />
      <ButtonForm>Add a task</ButtonForm>
    </div>
  );
}
