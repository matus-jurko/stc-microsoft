import { Disclosure } from '@headlessui/react';
import { navigation } from '../../config';

import Button from '../Button';
import Container from '../Container';
import NavbarToggle from './NavbarToggle';
import NavbarLogo from './NavbarLogo';
import NavbarLink from './NavbarLink';

const Navbar = () => {
  return (
    <Disclosure className="bg-white border-b border-b-light-gray" as="nav">
      {({ open }) => (
        <>
          <Container className="flex items-center space-x-2 h-14 xl:space-x-3">
            <div className="relative flex-grow lg:flex-grow-0">
              <NavbarLogo />
              <div className="absolute inset-y-0 right-0 lg:hidden">
                <NavbarToggle open={open} />
              </div>
            </div>
            <div className="items-center justify-between flex-grow hidden lg:flex">
              <ul className="flex flex-shrink-0 space-x-2 xl:space-x-3">
                {navigation.map(({ name, href }) => (
                  <li key={name}>
                    <NavbarLink
                      className="text-sm text-black hover:underline hover:decoration-2 hover:decoration-extra-dark-gray hover:underline-offset-[5px]"
                      href={href}
                    >
                      {name}
                    </NavbarLink>
                  </li>
                ))}
              </ul>
              <Button
                title="Registrácia do programu ŠTC"
                href="/registracia"
                type="outline"
              >
                Registrácia
              </Button>
            </div>
          </Container>
          {open && (
            <div className="border-t bg-extra-light-gray border-t-light-gray lg:hidden">
              <Container as="ul">
                {navigation.map(({ name, href }) => (
                  <Disclosure.Button
                    className="py-2 border-t border-t-light-gray first:border-0"
                    key={name}
                    as="li"
                  >
                    <NavbarLink href={href} fullWidth>
                      {name}
                    </NavbarLink>
                  </Disclosure.Button>
                ))}
                <div className="pt-1 pb-4">
                  <Button
                    title="Registrácia do programu ŠTC"
                    href="/registracia"
                    type="outline"
                    fullWidth
                  >
                    Registrácia
                  </Button>
                </div>
              </Container>
            </div>
          )}
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
