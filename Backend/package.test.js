import packageJson from './package.json' assert { type: 'json' };
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Since we are using ES Modules ("type": "module"), __dirname is not available.
const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe('package.json validation', () => {
  test('should have a valid name and version', () => {
    expect(packageJson.name).toBe('backend');
    expect(typeof packageJson.name).toBe('string');
    // A simple regex to check for semantic versioning format.
    expect(packageJson.version).toMatch(/^\d+\.\d+\.\d+$/);
  });

  test('should have a main entry point that exists', () => {
    expect(packageJson.main).toBe('index.js');

    // Construct an absolute path to the main file
    const mainFilePath = path.resolve(path.join(__dirname, '..'), packageJson.main);

    // Check if the file actually exists.
    // Note: This test will fail if `index.js` is not in the root.
    // Creating an empty index.js file will make it pass.
    expect(fs.existsSync(mainFilePath)).toBe(true);
  });

  test('should have the correct project type', () => {
    expect(packageJson.type).toBe('module');
  });

  test('should contain the necessary scripts', () => {
    expect(packageJson.scripts).toBeDefined();
    expect(packageJson.scripts.start).toBe('node index.js');
    expect(packageJson.scripts.dev).toBe('nodemon index.js');
  });

  test('should have required development dependencies', () => {
    expect(packageJson.devDependencies).toBeDefined();
    expect(packageJson.devDependencies.nodemon).toBeDefined();
  });

  test('should not have unexpected properties', () => {
    // Example: ensure no dependencies were accidentally added to devDependencies
    const dependencies = packageJson.dependencies || {};
    expect(dependencies.nodemon).toBeUndefined();
  });
});