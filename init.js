module.exports = {
  // Destination directory to write files to.
  //
  // This field is deep merged and added _last_ to the prompts so that archetype
  // authors can add `default` values or override the default message. You
  // could further override the `validate` function, but we suggest using the
  // existing default as it checks the directory does not already exist (which
  // is enforced later in code).
  destination: {
    default: function (data) {
      // Use the early `name` prompt as the default value for our dest directory
      return data.packageName;
    }
  },

  prompts: {
    packageName: {
      message: 'Please name your component suite.',
      validate: function (val) {
        // Validate functions return `true` if valid.
        // If invalid, return `false` or an error message.
        return /^([a-z0-9]+\-?)+$/.test(val.trim()) || 'Must be lower + dash-cased string';
      }
    },
    packageDescription: {
      message: 'Enter a description',
      default: 'Dash UI component suite'
    },
    packageGitHubOrg: {
      message: 'GitHub organization or user name',
      validate: function (val) {
        return /^([^\s])*$/.test(val) || 'Must be a valid GitHub organization/user name';
      }
    },
    licenseOrg: {
      message: 'License organization (e.g., you or your company)',
      default: function (data) {
        return data.packageGitHubOrg;
      }
    }
  },
  // Derived fields are asynchronous functions that are given the previous user
  // input data of the form: `function (data, cb)`. They callback with:
  // `(err, value)`.
  derived: {
    licenseDate: function (data, cb) {
      cb(null, (new Date()).getFullYear().toString());
    }
  }
};