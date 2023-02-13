const preactDep = {
    type: "preact",
    name: "Preact",
    package: "preact",
    installer: "preact",
    description: "Fast 3kb React-compatible Virtual DOM library.",
    minVersion: "^10.12.0",
  };
  
  const preactVitePreset = {
    type: "preact-vite-preset",
    name: "Preact Vite Preset",
    package: "@preact/preset-vite",
    installer: "@preact/preset-vite",
    description: "Preset for using Preact with the vite bundler",
    minVersion: "^2.5.0",
  };
  
  module.exports = {
    type: "cypress-ct-test-preact",
  
    category: "library",
  
    name: "Preact",
  
    supportedBundlers: ["vite"],
  
    detectors: [preactDep],
  
    dependencies: (bundler) => {
      const d = [preactDep];
  
      if (bundler === "vite") {
        d.push(preactVitePreset);
      }

  
      return d;
    },
  
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="-256 -256 512 512" version="1.1" xml:space="preserve"><path d="M0,-256 221.7025033688164,-128 221.7025033688164,128 0,256 -221.7025033688164,128 -221.7025033688164,-128z" fill="#673ab8"/><ellipse cx="0" cy="0" stroke-width="16px" rx="75px" ry="196px" fill="none" stroke="white" transform="rotate(52.5)"/><ellipse cx="0" cy="0" stroke-width="16px" rx="75px" ry="196px" fill="none" stroke="white" transform="rotate(-52.5)"/><circle cx="0" cy="0" r="34" fill="white"/></svg>
    `,
  };