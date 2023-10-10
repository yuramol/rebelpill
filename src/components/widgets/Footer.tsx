import { component$ } from '@builder.io/qwik';
import { Wrapper } from '../common';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <footer class="border-t border-[#FFFFFF33] py-8 mt-[30px] md:mt-[60px]">
      <Wrapper>
        <div class="flex flex-col md:flex-row items-center md:justify-between gap-8">
          <p>COPYRIGHT © SOFTBEE AGENCY</p>
          <nav>
            <ul class="flex flex-row gap-5 whitespace-nowrap">
              <li>
                <Link href="/cookies">COOKIES</Link>
              </li>
              <li>
                <Link href="/privacy-policy">PRIVACY POLICY</Link>
              </li>
              <li>{`@${new Date().getFullYear()}`}</li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </footer>
  );
});
