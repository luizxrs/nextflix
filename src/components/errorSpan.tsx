export default function ErrorSpan(errorText:any, ...rest: any) {
  return (
    <>
      <span {...rest} className="text-red-600 text-left -translate-y-2">{errorText.errorText}</span>
    </>
  );
}

        