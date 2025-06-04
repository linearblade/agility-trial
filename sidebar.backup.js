// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'overview',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Rules',
      items: [
        'rules/synopsis',
        'rules/game-phases',
        'rules/dog-behavior',
        'rules/course-dimensions',
      ],
    },
    {
      type: 'category',
      label: 'Obstacles',
      items: [
        'obstacles/obstacles',
      ],
    },
    {
      type: 'category',
      label: 'Legacy',
      items: [],
    },
    {
      type: 'category',
      label: 'Titles',
      items: [],
    },
    {
      type: 'doc',
      id: 'tree',
      label: 'Tree (Debug/Map)',
    },
  ],
};
