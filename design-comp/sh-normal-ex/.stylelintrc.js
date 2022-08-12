module.exports = {
  extends: [
    'stylelint-config-standard-scss',
  ],
  rules: {
    "property-no-vendor-prefix": null,
    "at-rule-no-unknown": [true,
      {
        "ignoreAtRules": ["include", "mixin", "each", "use"]
      }
    ],
  }
}