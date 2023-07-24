import { title } from "process";

interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
  name: string;
  register: Function;
  title: string
}

export default function Input({ name, title, register, ...rest }: InputGroupProps) {
  return (
    <>
      <label className="text-left h-3 text-zinc-100" htmlFor={name}>{title}</label>
      <input
        {...rest}
        {...register(name)}
        className="w-full h-16 bg-zinc-700 p-4 font-medium text-zinc-300 rounded-md"
      />
    </>
  );
}
