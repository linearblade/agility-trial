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
        'rules/project-synopsis',
        'rules/trial-phase-structure',
        'rules/dog-behavior-model',
        'rules/field-dimensions',
      ],
    },
    {
      type: 'category',
      label: 'Obstacles',
      items: [
        'obstacles/official-obstacles',
      ],
    },
    {
      type: 'category',
      label: 'Meta',
      items: [
        'meta/ai-assistant',
        'meta/glossary',
      ],
    },
  ],
};
