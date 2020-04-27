module.exports = {
  rules: {
    "accessible-emoji": require("./rules/accessible-emoji"),
    "alt-text": require("./rules/alt-text"),
    "anchor-has-content": require("./rules/anchor-has-content"),
    "aria-props": require("./rules/aria-props"),
    "aria-role": require("./rules/aria-role"),
    "aria-unsupported-elements": require("./rules/aria-unsupported-elements"),
    "click-events-have-key-events": require("./rules/click-events-have-key-events"),
    "form-control-has-label": require("./rules/form-control-has-label"),
    "heading-has-content": require("./rules/heading-has-content"),
    "iframe-has-title": require("./rules/iframe-has-title"),
    "interactive-supports-focus": require("./rules/interactive-supports-focus"),
    "label-has-for": require("./rules/label-has-for"),
    "media-has-caption": require("./rules/media-has-caption"),
    "mouse-events-have-key-events": require("./rules/mouse-events-have-key-events"),
    "no-access-key": require("./rules/no-access-key"),
    "no-autofocus": require("./rules/no-autofocus"),
    "no-distracting-elements": require("./rules/no-distracting-elements"),
    "no-onchange": require("./rules/no-onchange"),
    "no-redundant-roles": require("./rules/no-redundant-roles"),
    "role-has-required-aria-props": require("./rules/role-has-required-aria-props"),
    "tabindex-no-positive": require("./rules/tabindex-no-positive")
  },
  configs: {
    recommended: {
      parser: require.resolve("vue-eslint-parser"),
      plugins: ["vuejs-a11y"],
      rules: {
        "vuejs-a11y/accessible-emoji": "error",
        "vuejs-a11y/alt-text": "error",
        "vuejs-a11y/anchor-has-content": "error",
        "vuejs-a11y/aria-props": "error",
        "vuejs-a11y/aria-role": [
          "error",
          {
            ignoreNonDOM: true
          }
        ],
        "vuejs-a11y/aria-unsupported-elements": "error",
        "vuejs-a11y/click-events-have-key-events": "error",
        "vuejs-a11y/form-control-has-label": "error",
        "vuejs-a11y/heading-has-content": "error",
        "vuejs-a11y/iframe-has-title": "error",
        "vuejs-a11y/interactive-supports-focus": [
          "error",
          {
            tabbable: [
              "button",
              "checkbox",
              "link",
              "searchbox",
              "spinbutton",
              "switch",
              "textbox"
            ]
          }
        ],
        "vuejs-a11y/label-has-for": "error",
        "vuejs-a11y/media-has-caption": "error",
        "vuejs-a11y/mouse-events-have-key-events": "error",
        "vuejs-a11y/no-access-key": "error",
        "vuejs-a11y/no-autofocus": [
          "error",
          {
            ignoreNonDOM: true
          }
        ],
        "vuejs-a11y/no-distracting-elements": "error",
        "vuejs-a11y/no-onchange": "error",
        "vuejs-a11y/no-redundant-roles": "error",
        "vuejs-a11y/role-has-required-aria-props": "error",
        "vuejs-a11y/tabindex-no-positive": "error"
      }
    }
  }
};
