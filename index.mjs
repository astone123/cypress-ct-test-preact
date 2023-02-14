import { getContainerEl, setupHooks } from "@cypress/mount-utils";
import { render } from 'preact';

function cleanup() {
  render(null, getContainerEl())
}

export function mount(component, options = {}) {
  const root = getContainerEl();
  render(component, root);

  return cy.wait(0, { log: false }).then(() => {
    if (options.log === undefined || options.log) {
      Cypress.log({
        name: "mount",
        message: "Mounted component",
      });
    }
  });
}

setupHooks(cleanup);
