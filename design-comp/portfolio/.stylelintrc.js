module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order'
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