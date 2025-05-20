import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { NavLinkDirectory } from './navLinkDirectory';
import { AddNewDirectory } from './addNewDirectory';
import { directories } from '@/constants/directories';

export default function Directories() {
  return (
    <Accordion type="single" collapsible defaultValue="directories">
      <AccordionItem value="directories" className="border-none">
        <AccordionTrigger className="px-4 py-2 w-full transition hover:text-rose-600 dark:hover:text-slate-200 hover:no-underline text-md flex items-center [&>svg]:order-first [&>svg]:mr-1">
          Directories
        </AccordionTrigger>
        <AccordionContent>
          <NavLinkDirectory directories={directories} />
          <div className="flex justify-center mt-3">
            <AddNewDirectory />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
