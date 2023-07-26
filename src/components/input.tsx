interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
  name: string;
  register: Function;
  title: string,
  hasError: boolean
}

export default function Input({ name, title, register, hasError, ...rest }: InputGroupProps) {
  return (
    <>
      <label className="text-left h-6 text-zinc-100" htmlFor={name}>{title}</label>
      <input
        {...rest}
        {...register(name)}
        className={`w-full h-16 bg-zinc-700 border-[1.5px] p-4 font-medium text-zinc-300 rounded-md outline-none ${(hasError ? 'border-red-600 focus:border-red-800' : 'border-zinc-700 focus:border-zinc-800')}`}
      />
    </>
  );
}

