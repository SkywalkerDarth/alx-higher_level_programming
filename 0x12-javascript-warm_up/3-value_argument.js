#!/usr/bin/node

// Script that prints first argument passed

console.log(typeof process.argv[2] === 'undefined' ? 'No argument' : process.argv[2]);
