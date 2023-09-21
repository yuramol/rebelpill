// input.qwik.tsx

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | false | undefined;
  helperText?: string;
  type?: 'outlined';
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function Input({
  label,
  type,
  error,
  helperText,
  value,
  onChange,
}: InputProps) {
  return (
    <>
      {type === 'outlined' ? (
        <div class={`relative h-[54px] w-full min-w-[200px]`}>
          <input
            class={`peer h-full w-full rounded-[7px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 ${
              error ? ' focus:border-red-500  border-red-500' : ''
            }`}
            placeholder=" "
          />
          {label ? (
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.5] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              {label}
            </label>
          ) : null}
          {error && helperText ? (
            <div class="text-secondary text-xs leading-3 absolute bottom-[-16px] left-0">
              {helperText}
            </div>
          ) : null}
        </div>
      ) : (
        <div
          class={`relative h-[54px] w-full min-w-[200px]${
            error ? ' focus:border-red-500' : ''
          }`}
        >
          <input
            class={`peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-primary focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50${
              error ? 'focus:border-red-500' : ''
            }`}
            placeholder=" "
            // value={value}
          />
          {label ? (
            <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[5.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              {label}
            </label>
          ) : null}
          {error && helperText ? (
            <div class="text-secondary text-xs leading-3 absolute bottom-[-16px] left-0">
              {helperText}
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
