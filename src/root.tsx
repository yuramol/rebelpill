import { component$, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';

import { RouterHead } from '~/components/common/RouterHead';
import { DarkThemeLauncher } from '~/components/common/DarkThemeLauncher';

import { initFlowbite } from 'flowbite';

import '@fontsource-variable/inter';
import globalStyles from '~/assets/styles/global.css?inline';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  // initialise the event listeners for the data attributes on render
  useVisibleTask$(() => {
    initFlowbite();
  });

  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true as any}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <RouterHead />
        <DarkThemeLauncher />
        <ServiceWorkerRegister />
      </head>
      <body class="text-gray-900 dark:text-slate-300 tracking-tight bg-white dark:bg-gray-900 antialiased">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
