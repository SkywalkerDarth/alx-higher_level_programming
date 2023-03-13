#!/usr/bin/node

// Script that prints a message based on var passed to it

const count = process.argv.length;
console.log(count === 2 ? 'No argument' : count === 3 ? 'Argument found' : 'Arguments found');
