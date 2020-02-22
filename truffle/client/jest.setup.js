jest.setTimeout(15000);

// Optional: Reset clean room after every test instead of every file
beforeEach(() => {
  return new Promise(resolve => {
    runner.initialize(resolve);
  });
});