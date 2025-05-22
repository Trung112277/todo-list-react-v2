interface StatusTitleProps {
    title: string;
}

export function StatusTitle({ title }: StatusTitleProps) {
    return <h1 className={`font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg dark:text-slate-200`}>{title}</h1>
}