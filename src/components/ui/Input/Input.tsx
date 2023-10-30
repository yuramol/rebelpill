import { component$ } from '@builder.io/qwik';

import { cn } from '~/utils/utils';
import type { InputProps } from './helpers';

import './style.css';
import { Icon } from '../Icon';

export const Input = component$(
  ({
    extraClass = '',
    wrapperClass = '',
    type,
    label,
    variant,
    error,
    helperText,
    icon,
    handleIcon,
    selectOptions,
    ...props
  }: InputProps) => {
    return (
      <>
        {variant === 'outlined' ? (
          <div class={`relative h-[54px] w-full min-w-[160px] ${wrapperClass}`}>
            <input
              type={type}
              class={cn(
                `peer h-full w-full rounded-[7px] border disabled:cursor-not-allowed bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:outline-0 disabled:bg-blue-gray-50`,
                label ? 'focus:border-t-transparent' : '',
                error ? 'focus:border-secondary border-secondary' : '',
                extraClass
              )}
              placeholder=" "
              {...props}
            />
            {label ? (
              <label
                class={cn(
                  `before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-[1.5] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500`,
                  error
                    ? 'peer-focus:after:border-secondary peer-focus:before:border-secondary'
                    : ''
                )}
              >
                {label}
              </label>
            ) : null}
            {icon ? (
              <div
                class="absolute cursor-pointer right-3 top-5"
                // eslint-disable-next-line qwik/valid-lexical-scope
                onClick$={handleIcon}
              >
                <Icon icon={icon} />
              </div>
            ) : null}
            {error && helperText ? (
              <div class="absolute bottom-[-24px] left-0 text-secondary text-xs leading-3 whitespace-nowrap">
                {helperText}
              </div>
            ) : null}
          </div>
        ) : variant === 'textarea' ? (
          <div class="relative w-full min-w-[200px]">
            <textarea
              class={cn(
                `resize-none peer h-[120px] w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-primary focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`,
                error ? 'focus:border-secondary border-secondary' : '',
                extraClass
              )}
              placeholder=" "
              {...props}
            />
            {label ? (
              <label
                class={cn(
                  `after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-[120px] w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[2] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-[1.5]  peer-focus:after:scale-x-100 peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500`,
                  error ? 'peer-focus:after:border-secondary ' : ''
                )}
              >
                {label}
              </label>
            ) : null}
            {icon ? (
              <div
                class="absolute cursor-pointer right-0 top-6"
                // eslint-disable-next-line qwik/valid-lexical-scope
                onClick$={handleIcon}
              >
                <Icon icon={icon} />
              </div>
            ) : null}
            {error && helperText ? (
              <div class="text-secondary text-xs leading-3 absolute bottom-[-24px] left-0 whitespace-nowrap">
                {helperText}
              </div>
            ) : null}
          </div>
        ) : variant === 'select' ? (
          <div class="relative h-[54px] w-full min-w-[200px]">
            <select
              required
              class={cn(
                `custom-select cursor-pointer appearance-none peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-primary focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`,
                error ? 'focus:border-secondary border-secondary' : '',
                extraClass
              )}
              placeholder=" "
              {...props}
            >
              <option disabled selected hidden value=""></option>
              {selectOptions?.map(({ value, title }) => (
                <option key={value} value={value}>
                  {title}
                </option>
              ))}
            </select>
            {label ? (
              <label
                class={cn(
                  `select-label after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-[54px] w-full select-none font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary after:transition-transform after:duration-300 peer-focus:after:scale-x-100 peer-focus:after:border-primary`,
                  error ? 'peer-focus:after:border-secondary ' : ''
                )}
              >
                {label}
              </label>
            ) : null}
            {icon ? (
              <div
                class="absolute cursor-pointer right-0 top-6 pointer-events-none"
                // eslint-disable-next-line qwik/valid-lexical-scope
                onClick$={handleIcon}
              >
                <Icon icon={icon} />
              </div>
            ) : null}
            {error && helperText ? (
              <div class="text-secondary text-xs leading-3 absolute bottom-[-24px] left-0 whitespace-nowrap">
                {helperText}
              </div>
            ) : null}
          </div>
        ) : (
          <div class="relative h-[54px] w-full min-w-[200px]">
            <input
              type={type}
              class={cn(
                `peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-primary focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`,
                error ? 'focus:border-secondary border-secondary' : '',
                extraClass
              )}
              placeholder={props.placeholder ?? ' '}
              {...props}
            />
            {label ? (
              <label
                class={cn(
                  `after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[5.5] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-[1.5]  peer-focus:after:scale-x-100 peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500`,
                  error ? 'peer-focus:after:border-secondary ' : ''
                )}
              >
                {label}
              </label>
            ) : null}
            {icon ? (
              <div
                class="absolute cursor-pointer right-0 top-6"
                // eslint-disable-next-line qwik/valid-lexical-scope
                onClick$={handleIcon}
              >
                <Icon icon={icon} />
              </div>
            ) : null}
            {error && helperText ? (
              <div class="text-secondary text-xs leading-3 absolute bottom-[-24px] left-0 whitespace-nowrap">
                {helperText}
              </div>
            ) : null}
          </div>
        )}
      </>
    );
  }
);
