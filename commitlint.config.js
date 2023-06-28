module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['task-'],
    },
  },
  rules: {
    'references-empty': [2, 'never'], // Validate for issue/ticket numbers
    'subject-case': [2, 'never', ['lower-case']],
    'scope-enum': [1, 'always', ['wip', 'code', 'deployment', 'tests']],
  },
};
