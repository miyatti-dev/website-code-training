module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
  rules: {
    "property-no-vendor-prefix": null,
    "selector-id-pattern": null,
    "selector-class-pattern": null,
    "keyframes-name-pattern": null,
    "scss/at-mixin-pattern": null,
    "scss/dollar-variable-pattern": null,
    "scss/percent-placeholder-pattern": null,
    "scss/at-extend-no-missing-placeholder": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["include", "mixin", "each", "use"],
      },
    ],
  },
};
