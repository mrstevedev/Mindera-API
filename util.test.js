const functions = require('./util');

test('calls axios and returns humans', async () => {
    // expect.assertions(1);
    const data = await functions.fetchAPI();
    expect(data).toBeTruthy();
});

