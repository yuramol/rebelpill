import { component$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

const sideImg =
  'https://images.unsplash.com/photo-1583195648430-18b2681307e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80';

export default component$(() => {
  const stepsData = {
    title: 'Sed ac magna sit amet risus tristique interdum. hac.',
    items: [
      {
        title: 'Step 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
      },
      {
        title: 'Step 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      },
      {
        title: 'Step 3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      },
      {
        title: 'Ready!',
      },
    ],
    image: {
      src: sideImg,
      alt: 'Steps image',
    },
  };
  const { title, items, image } = stepsData;

  return (
    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="row-gap-10 grid gap-6 md:grid-cols-2">
        <div class="mb-4 md:mb-0 md:py-4 md:pr-16">
          {title && (
            <h2 class="font-heading mb-8 text-3xl font-bold lg:text-4xl">
              {title}
            </h2>
          )}
          {items &&
            items.length &&
            items.map(({ title, description }, index) => (
              <div key={`item-steps-${index}`} class="flex">
                <div class="mr-4 flex flex-col items-center">
                  <div></div>
                  {index !== items.length - 1 && (
                    <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
                  )}
                </div>
                <div class={`pt-1 ${index !== items.length - 1 ? 'pb-8' : ''}`}>
                  {title && (
                    <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
                      {title}
                    </p>
                  )}
                  {description && (
                    <p class="text-gray-600 dark:text-slate-400">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            ))}
        </div>
        <div class="relative">
          {image && (
            <Image
              src={image.src}
              width={600}
              height={768}
              alt={image.alt}
              class="inset-0 w-full rounded-md bg-gray-500 object-cover object-top shadow-lg dark:bg-slate-700 md:absolute md:h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
});
