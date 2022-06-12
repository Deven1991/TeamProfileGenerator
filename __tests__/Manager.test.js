const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Jane Doe', '1234', 'jdoe@yahoo.com', 'ABC1');
    
    expect(manager.name).toBe('Jane Doe');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('jdoe@yahoo.com');
    expect(manager.office).toBe('ABC1');
});

test("gets employee's role", () => {
    const manager = new Manager('John Smith', '1234', 'jdoe@yahoo.com', 'ABC1');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});