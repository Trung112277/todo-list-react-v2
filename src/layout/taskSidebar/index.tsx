import { HeadingTitle } from "@/components/feature/title/headingTitle";
import { Header } from "../header";

export function TaskSidebar() {
  return <aside className="bg-slate-100 h-screen w-60 xl:w-2/12 fixed dark:bg-slate-800 z-20 left-0 block">
    <Header>
        <HeadingTitle />
    </Header>
  </aside>;
}
