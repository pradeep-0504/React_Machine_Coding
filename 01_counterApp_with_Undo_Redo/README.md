# React Counter with Undo & Redo

A simple React application demonstrating Undo/Redo functionality using state history.

## Features

- Increment Counter
- Decrement Counter
- Undo previous actions
- Redo undone actions
- Disables Undo/Redo when history is unavailable
- Clears Redo history after a new action
- Immutable state updates

## Concepts Used

- React Hooks (`useState`)
- State Management
- History Stack (Past, Present, Future)
- Array methods (`slice`, spread operator)
- Immutability
- Edge Case Handling

## Edge Cases Covered

- Undo when no history exists
- Redo when no future history exists
- Clearing redo history after a new action
- Multiple Undo/Redo operations

## Tech Stack

- React
- JavaScript
