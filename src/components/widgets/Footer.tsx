import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const links = [
    {
      title: 'Product',
      items: [
        { title: 'Features', href: '#' },
        { title: 'Security', href: '#' },
        { title: 'Team', href: '#' },
        { title: 'Enterprise', href: '#' },
        { title: 'Customer stories', href: '#' },
        { title: 'Pricing', href: '#' },
        { title: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      items: [
        { title: 'Developer API', href: '#' },
        { title: 'Partners', href: '#' },
        { title: 'Atom', href: '#' },
        { title: 'Electron', href: '#' },
        { title: 'Qwind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      items: [
        { title: 'Docs', href: '#' },
        { title: 'Community Forum', href: '#' },
        { title: 'Professional Services', href: '#' },
        { title: 'Skills', href: '#' },
        { title: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      items: [
        { title: 'About', href: '#' },
        { title: 'Blog', href: '#' },
        { title: 'Careers', href: '#' },
        { title: 'Press', href: '#' },
        { title: 'Inclusion', href: '#' },
        { title: 'Social Impact', href: '#' },
        { title: 'Shop', href: '#' },
      ],
    },
  ];

  return (
    <footer class="border-t border-gray-200 dark:border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
          <div class="col-span-12 lg:col-span-4 pr-8">
            <div class="mb-2">
              <Link class="inline-block font-bold text-xl" href={'/'}>
                Qwind
              </Link>
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              sagittis, quam nec venenatis lobortis, mi risus tempus nulla
            </div>
          </div>
          {links.map(({ title, items }, index) => (
            <div key={index} class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="text-gray-800 dark:text-gray-300 font-medium mb-2">
                {title}
              </div>
              {items && Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm">
                  {items.map(({ title, href }, index2) => (
                    <li key={index2} class="mb-2">
                      <Link
                        class="text-gray-600 hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div class="md:flex md:items-center md:justify-between py-6 md:py-8">
          <div class="text-sm text-gray-700 mr-4 dark:text-slate-400">
            <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
            Made by{' '}
            <a
              class="text-secondary-700 hover:underline dark:text-gray-200"
              href="https://onwidget.com/"
            >
              {' '}
              onWidget
            </a>{' '}
            · All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
});
