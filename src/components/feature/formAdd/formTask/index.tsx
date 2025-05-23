import { ButtonForm } from '../buttonForm';
import { InputForm } from '../inputForm';
import { DateInput } from '../dateInput';
import { DescriptionTextarea } from '../descriptionTextarea';
import { SelectForm } from '../selectDirectoryFom';
import { RadioMarkForm } from '../radioMarkForm';
interface FormTaskProps {
  name: string;
}
export function FormTask({ name }: FormTaskProps) {
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
      <ButtonForm>{name}</ButtonForm>
    </div>
  );
}
