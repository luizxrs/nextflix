export default function ErrorSpan(errorText:any, ...rest: any) {
  return (
    <>
      <span {...rest} className="text-left text-zinc-300 -translate-y-2">{errorText.errorText}</span>
    </>
  );
}

        