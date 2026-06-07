/* @ds-bundle: {"format":3,"namespace":"DesignSystemJJ_a7a2a8","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"0c367198fa1d","components/content/Testimonial.jsx":"5690580b75f3","components/core/Avatar.jsx":"c919d39e21eb","components/core/Badge.jsx":"07704fbfeefd","components/core/Button.jsx":"a293a4f9f9f1","components/core/Card.jsx":"19e00f3e544c","components/forms/Checkbox.jsx":"b5f3662cfd62","components/forms/Input.jsx":"e35d08e94259","components/forms/Select.jsx":"e8f390dda360","components/forms/Textarea.jsx":"482782836f8c","ui_kits/website/App.jsx":"763e9e86dbb7","ui_kits/website/Contact.jsx":"5b0e216a4aae","ui_kits/website/Footer.jsx":"deea109bce71","ui_kits/website/Home.jsx":"656254ffe37b","ui_kits/website/Nav.jsx":"1a56c8faa381","ui_kits/website/Work.jsx":"2e5f4de1557b","ui_kits/website/icons.jsx":"ffa7a6c2a8c4","ui_kits/website/parts.jsx":"acaf61cd2b78"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystemJJ_a7a2a8 = window.DesignSystemJJ_a7a2a8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
/**
 * J&J Studios — Accordion (FAQ)
 * Answers the quiet fears small-business owners have. One item open at a
 * time by default; pass allowMultiple to open several.
 */
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = []
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)',
      borderTop: '1px solid var(--border-default)'
    }
  }, items.map((item, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        padding: '20px 4px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontSize: '17px',
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, /*#__PURE__*/React.createElement("span", null, item.q), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: '26px',
        height: '26px',
        borderRadius: '50%',
        background: isOpen ? 'var(--green-600)' : 'var(--green-50)',
        color: isOpen ? '#fff' : 'var(--green-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background .15s ease, transform .2s ease',
        transform: isOpen ? 'rotate(45deg)' : 'none',
        fontSize: '20px',
        lineHeight: 1
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? '320px' : '0',
        overflow: 'hidden',
        transition: 'max-height .25s ease, opacity .2s ease',
        opacity: isOpen ? 1 : 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 4px 22px',
        color: 'var(--text-muted)',
        fontSize: '16px',
        lineHeight: 1.6,
        maxWidth: '62ch'
      }
    }, item.a)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * J&J Studios — Avatar
 * Person or business avatar. Falls back to initials on a pine tint when no
 * image is given. Used in testimonials and the "meet the team" sections.
 */
function Avatar({
  src,
  name = '',
  size = 'md',
  ...rest
}) {
  const sizes = {
    sm: 32,
    md: 44,
    lg: 64,
    xl: 88
  };
  const px = sizes[size] || sizes.md;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]?.toUpperCase()).join('');
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    "aria-label": name || undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: px,
      height: px,
      borderRadius: '50%',
      overflow: 'hidden',
      flex: 'none',
      background: 'var(--green-700)',
      color: 'var(--text-on-brand)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: px * 0.4,
      letterSpacing: '0.01em',
      boxShadow: 'inset 0 0 0 1px rgba(20,53,42,0.12)'
    }
  }), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '·');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
/**
 * J&J Studios — Testimonial
 * The single strongest trust signal. Serif quote + real name, business &
 * face. `featured` renders larger on a soft brand surface.
 */
function Testimonial({
  quote,
  name,
  business,
  photo,
  rating = 0,
  featured = false
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background: featured ? 'var(--surface-brand-soft)' : 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: featured ? 'var(--space-8)' : 'var(--space-6)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, rating > 0 && /*#__PURE__*/React.createElement("div", {
    "aria-label": `${rating} out of 5`,
    style: {
      display: 'flex',
      gap: '2px',
      color: 'var(--gold-600)'
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: "17",
    height: "17",
    viewBox: "0 0 20 20",
    fill: i < rating ? 'currentColor' : 'none',
    stroke: "currentColor",
    strokeWidth: "1.4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.2l-4.95 2.6.94-5.5-4-3.9 5.53-.8z",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: featured ? '24px' : '19px',
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    src: photo,
    size: featured ? 'lg' : 'md'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: '15px',
      color: 'var(--text-strong)'
    }
  }, name), business && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      color: 'var(--text-muted)'
    }
  }, business))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * J&J Studios — Badge / Tag
 * Small status or category label. Soft tinted background + readable text.
 */
function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  dot = false,
  ...rest
}) {
  const palettes = {
    neutral: {
      bg: 'var(--ink-100)',
      fg: 'var(--ink-700)',
      dot: 'var(--ink-400)'
    },
    brand: {
      bg: 'var(--green-100)',
      fg: 'var(--green-800)',
      dot: 'var(--green-600)'
    },
    accent: {
      bg: 'var(--gold-100)',
      fg: 'var(--gold-800)',
      dot: 'var(--gold-600)'
    },
    success: {
      bg: 'var(--success-100)',
      fg: 'var(--success-600)',
      dot: 'var(--success-600)'
    },
    warning: {
      bg: 'var(--warning-100)',
      fg: '#7a5510',
      dot: 'var(--warning-600)'
    },
    danger: {
      bg: 'var(--danger-100)',
      fg: 'var(--danger-700)',
      dot: 'var(--danger-600)'
    }
  };
  const p = palettes[variant] || palettes.neutral;
  const sizes = {
    sm: {
      fontSize: '11px',
      padding: '2px 8px'
    },
    md: {
      fontSize: '12.5px',
      padding: '4px 11px'
    }
  };
  const sz = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: sz.fontSize,
      lineHeight: 1.3,
      letterSpacing: '0.01em',
      padding: sz.padding,
      borderRadius: 'var(--radius-pill)',
      background: p.bg,
      color: p.fg,
      whiteSpace: 'nowrap'
    }
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: p.dot,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * J&J Studios — Button
 * Variants map to the brand's trust hierarchy:
 *   accent    → gold CTA, the single "do this" action (book / get started)
 *   primary   → solid pine green, default workhorse action
 *   secondary → outlined, lower-emphasis action next to a primary
 *   ghost     → text-only, tertiary / inline action
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: '14px',
      padding: '8px 14px',
      radius: 'var(--radius-md)',
      gap: '7px'
    },
    md: {
      fontSize: '15px',
      padding: '11px 20px',
      radius: 'var(--radius-md)',
      gap: '8px'
    },
    lg: {
      fontSize: '17px',
      padding: '15px 28px',
      radius: 'var(--radius-lg)',
      gap: '10px'
    }
  };
  const variants = {
    accent: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    primary: {
      background: 'var(--green-800)',
      color: 'var(--text-on-brand)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-xs)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--green-800)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--green-700)',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const style = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1.1,
    padding: s.padding,
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background .15s ease, box-shadow .15s ease, transform .05s ease',
    ...v
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === 'accent') e.currentTarget.style.background = 'var(--accent-hover)';else if (variant === 'primary') e.currentTarget.style.background = 'var(--green-900)';else if (variant === 'secondary') e.currentTarget.style.background = 'var(--surface-sunken)';else e.currentTarget.style.background = 'var(--green-50)';
  };
  const onLeave = e => {
    if (disabled) return;
    e.currentTarget.style.background = v.background;
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
  };
  const onUp = e => {
    e.currentTarget.style.transform = 'none';
  };
  const Tag = as === 'a' ? 'a' : 'button';
  const tagProps = as === 'a' ? {
    href,
    role: 'button',
    'aria-disabled': disabled
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, rest, {
    style: style,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * J&J Studios — Card
 * The default surface container. White on cream page, hairline border +
 * soft warm shadow. `interactive` adds a lift on hover for clickable cards.
 */
function Card({
  children,
  padding = 'md',
  interactive = false,
  tone = 'white',
  as = 'div',
  ...rest
}) {
  const pads = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  const tones = {
    white: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)'
    },
    cream: {
      background: 'var(--surface-card-cream)',
      color: 'var(--text-body)'
    },
    brand: {
      background: 'var(--surface-brand)',
      color: 'var(--text-on-brand)'
    },
    soft: {
      background: 'var(--surface-brand-soft)',
      color: 'var(--text-body)'
    }
  };
  const t = tones[tone] || tones.white;
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: t.background,
      color: t.color,
      border: tone === 'brand' ? '1px solid transparent' : '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding] ?? pads.md,
      boxShadow: interactive && hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: interactive && hover ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow .2s ease, transform .2s ease',
      cursor: interactive ? 'pointer' : 'default'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * J&J Studios — Checkbox
 * Custom-styled checkbox + label, brand green when checked.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  id,
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      color: 'var(--text-body)',
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: 'none',
      marginTop: '1px'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: '20px',
      height: '20px',
      margin: 0,
      cursor: 'pointer'
    }
  })), /*#__PURE__*/React.createElement(CheckBox, {
    checked: checked ?? defaultChecked
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
function CheckBox({
  checked
}) {
  return /*#__PURE__*/React.createElement("span", {
    "data-checked": checked ? 'true' : undefined,
    style: {
      width: '20px',
      height: '20px',
      borderRadius: 'var(--radius-sm)',
      border: '1.5px solid var(--border-strong)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .12s ease, border-color .12s ease'
    },
    className: "jj-checkbox-box"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      opacity: 0
    },
    className: "jj-checkbox-tick"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2l2.3 2.3L9.5 3.5",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("style", null, `
        input:checked + .jj-checkbox-box { background: var(--green-600); border-color: var(--green-600); }
        input:checked + .jj-checkbox-box .jj-checkbox-tick { opacity: 1; }
        input:focus-visible + .jj-checkbox-box { box-shadow: var(--ring); }
      `));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * J&J Studios — Input (text field)
 * Label + optional hint/error, focus ring in brand green. Built for the
 * friendly, low-friction contact forms small-business sites depend on.
 */
function Input({
  label,
  hint,
  error,
  id,
  type = 'text',
  required = false,
  leadingIcon = null,
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: '14px',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger-600)',
      marginLeft: '3px'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      background: 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--danger-600)' : focus ? 'var(--border-brand)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 13px',
      boxShadow: focus ? 'var(--ring)' : 'none',
      transition: 'border-color .15s ease, box-shadow .15s ease'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      display: 'flex'
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      color: 'var(--text-strong)',
      padding: '11px 0',
      minWidth: 0
    }
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: error ? 'var(--danger-700)' : 'var(--text-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * J&J Studios — Select
 * Native select wrapped to match the form field styling, with a chevron.
 */
function Select({
  label,
  hint,
  error,
  id,
  options = [],
  placeholder,
  required = false,
  children,
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: '14px',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger-600)',
      marginLeft: '3px'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      appearance: 'none',
      width: '100%',
      background: 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--danger-600)' : focus ? 'var(--border-brand)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 40px 12px 13px',
      boxShadow: focus ? 'var(--ring)' : 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      color: 'var(--text-strong)',
      outline: 'none',
      cursor: 'pointer',
      transition: 'border-color .15s ease, box-shadow .15s ease'
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true,
    hidden: true
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  }), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '13px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: error ? 'var(--danger-700)' : 'var(--text-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * J&J Studios — Textarea
 * Multi-line field for messages / project details. Matches Input styling.
 */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  required = false,
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: '14px',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger-600)',
      marginLeft: '3px'
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      width: '100%',
      resize: 'vertical',
      background: 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--danger-600)' : focus ? 'var(--border-brand)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 13px',
      boxShadow: focus ? 'var(--ring)' : 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.55,
      color: 'var(--text-strong)',
      outline: 'none',
      transition: 'border-color .15s ease, box-shadow .15s ease'
    }
  })), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: error ? 'var(--danger-700)' : 'var(--text-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* J&J Studios website — app shell / router */
function App() {
  const [page, setPage] = React.useState('home');
  const navigate = id => {
    setPage(id);
    const scroller = document.getElementById('jj-scroll');
    if (scroller) scroller.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };
  const Nav = window.JJNav,
    Footer = window.JJFooter;
  const Home = window.JJHome,
    Work = window.JJWork,
    Contact = window.JJContact;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    current: page,
    onNavigate: navigate
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, page === 'home' && /*#__PURE__*/React.createElement(Home, {
    onNavigate: navigate
  }), page === 'work' && /*#__PURE__*/React.createElement(Work, {
    onNavigate: navigate
  }), page === 'contact' && /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: navigate
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* J&J Studios website — Contact page (lead form + reassurance) */
function Contact() {
  const {
    Button,
    Input,
    Textarea,
    Select,
    Checkbox,
    Card
  } = window.DesignSystemJJ_a7a2a8;
  const Icon = window.JJIcon;
  const [sent, setSent] = React.useState(false);
  const reassurances = [{
    icon: 'clock',
    title: 'We reply within a day',
    body: 'Usually much sooner. A real person, not an auto-responder.'
  }, {
    icon: 'messageCircle',
    title: 'No pressure, ever',
    body: 'A first chat is just a chat. We’ll tell you honestly if we’re not the right fit.'
  }, {
    icon: 'shieldCheck',
    title: 'Clear, fixed quotes',
    body: 'You’ll know the price up front. No surprise invoices later.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-2)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'clamp(48px, 6vw, 80px) var(--gutter-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)',
      gap: 'clamp(36px, 5vw, 72px)',
      alignItems: 'start'
    },
    className: "jj-contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "jj-eyebrow",
    style: {
      marginBottom: '14px'
    }
  }, "Let\u2019s talk"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'clamp(34px, 5vw, 50px)',
      lineHeight: 1.05,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Tell us about your business."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '18px',
      fontSize: '19px',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: '40ch'
    }
  }, "Fill this in and we\u2019ll be in touch for a friendly, no-obligation chat. Prefer the phone? Call us \u2014 we\u2019d love to hear from you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
      marginTop: '34px'
    }
  }, reassurances.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.title,
    style: {
      display: 'flex',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '44px',
      height: '44px',
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: 'var(--green-50)',
      color: 'var(--green-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: '16px',
      color: 'var(--text-strong)'
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '15px',
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, r.body))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '34px',
      paddingTop: '26px',
      borderTop: '1px solid var(--border-default)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '9px',
      fontSize: '15.5px',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18,
    style: {
      color: 'var(--green-600)'
    }
  }), " hello@jjstudios.co"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '9px',
      fontSize: '15.5px',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18,
    style: {
      color: 'var(--green-600)'
    }
  }), " (555) 248\u20111199"))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      boxShadow: 'var(--shadow-md)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      background: 'var(--green-50)',
      color: 'var(--green-600)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 34
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '26px',
      fontWeight: 500,
      color: 'var(--text-strong)',
      margin: '0 0 10px'
    }
  }, "Thanks \u2014 message received!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '16px',
      color: 'var(--text-muted)',
      maxWidth: '34ch',
      margin: '0 auto 24px'
    }
  }, "One of us (a Jakob) will get back to you within a day. Talk soon."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '20px',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Start your free quote"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    },
    className: "jj-form-row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "Jane Smith",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Business name",
    placeholder: "Jane\u2019s Bakery"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    },
    className: "jj-form-row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@business.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    type: "tel",
    placeholder: "Optional"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "What do you need?",
    placeholder: "Choose one",
    options: ['A brand-new website', 'A redesign of my current site', 'Just a refresh', 'Ongoing care', 'Not sure yet — let’s talk']
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Tell us a little about it",
    rows: 4,
    placeholder: "What does your business do, and what would you love the website to do for you?"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "It\u2019s fine to email me the occasional helpful tip. No spam, promise.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "accent",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    })
  }, "Send my message"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '13px',
      color: 'var(--text-faint)',
      textAlign: 'center'
    }
  }, "We\u2019ll only use your details to reply. Never shared, never sold."))))));
}
window.JJContact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* J&J Studios website — footer */
function Footer({
  onNavigate
}) {
  const Icon = window.JJIcon;
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };
  const link = {
    background: 'none',
    border: 'none',
    padding: 0,
    textAlign: 'left',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    fontSize: '15px',
    color: 'var(--text-on-brand-muted)'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-brand-deep)',
      color: 'var(--text-on-brand)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px var(--gutter-lg) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '48px',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '300px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-badge.svg",
    alt: "",
    style: {
      height: '40px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '22px',
      color: '#fff'
    }
  }, "J&J Studios")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15px',
      lineHeight: 1.6,
      color: 'var(--text-on-brand-muted)'
    }
  }, "Two people who build fast, friendly websites for small businesses. We keep it simple, and we don't disappear after launch.")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--green-300)',
      marginBottom: '4px'
    }
  }, "Studio"), /*#__PURE__*/React.createElement("button", {
    style: link,
    onClick: () => onNavigate('home')
  }, "Home"), /*#__PURE__*/React.createElement("button", {
    style: link,
    onClick: () => onNavigate('work')
  }, "Our work"), /*#__PURE__*/React.createElement("button", {
    style: link,
    onClick: () => onNavigate('contact')
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--green-300)',
      marginBottom: '4px'
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      fontSize: '15px',
      color: 'var(--text-on-brand-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 17
  }), " hello@jjstudios.co"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      fontSize: '15px',
      color: 'var(--text-on-brand-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 17
  }), " (555) 248\u20111199"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      fontSize: '15px',
      color: 'var(--text-on-brand-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 17
  }), " Replies within a day"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '48px',
      paddingTop: '24px',
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      justifyContent: 'space-between',
      fontSize: '13.5px',
      color: 'var(--text-on-brand-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 J&J Studios \u2014 Jakob & Jakob. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Made by hand, in our two-person studio."))));
}
window.JJFooter = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
/* J&J Studios website — Home page */
function Home({
  onNavigate
}) {
  const {
    Button,
    Card,
    Badge,
    Testimonial,
    Accordion
  } = window.DesignSystemJJ_a7a2a8;
  const {
    JJSection: Section,
    JJSectionHeading: SectionHeading,
    JJPhotoSlot: PhotoSlot,
    JJBrowserFrame: BrowserFrame,
    JJStars: Stars
  } = window;
  const Icon = window.JJIcon;
  const services = [{
    icon: 'penTool',
    title: 'A brand-new website',
    body: 'No site yet, or starting fresh. We design and build the whole thing — words, look, and all — so you launch with something you’re proud of.'
  }, {
    icon: 'layout',
    title: 'A redesign or refresh',
    body: 'Got a site that feels dated or just isn’t pulling its weight? We rework it into something modern, fast, and built to turn visitors into customers.'
  }, {
    icon: 'heart',
    title: 'Ongoing care',
    body: 'We don’t vanish after launch. Updates, small changes, and a real person to email when you need one — for a simple monthly rate.'
  }];
  const steps = [{
    n: '01',
    title: 'A friendly chat',
    body: 'We start with a relaxed call to understand your business and what you need. No tech-speak, no pressure.'
  }, {
    n: '02',
    title: 'We design & build',
    body: 'You see real designs early and often. We handle the technical parts and keep you in the loop the whole way.'
  }, {
    n: '03',
    title: 'Launch & look after',
    body: 'We get you live, walk you through it, and stick around for the updates and questions that come later.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'clamp(48px, 7vw, 88px) var(--gutter-lg)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 0.95fr)',
      gap: 'clamp(32px, 5vw, 72px)',
      alignItems: 'center'
    },
    className: "jj-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '9px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 14px 6px 8px',
      marginBottom: '26px',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    n: 5,
    size: 15
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13.5px',
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, "Trusted by 40+ local businesses")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'clamp(40px, 6vw, 64px)',
      lineHeight: 1.04,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "A website that quietly ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--green-700)'
    }
  }, "earns its keep.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '22px',
      fontSize: 'clamp(18px, 2vw, 21px)',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: '46ch'
    }
  }, "We\u2019re Jakob & Jakob \u2014 two people who build fast, friendly websites for small businesses. The kind that turn a curious visitor into a phone call. No jargon, no surprises."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      marginTop: '32px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    }),
    onClick: () => onNavigate('contact')
  }, "Book a free chat"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate('work')
  }, "See our work")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '18px',
      marginTop: '28px',
      fontSize: '14.5px',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17,
    style: {
      color: 'var(--green-600)'
    }
  }), " Free, no-pressure quote"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17,
    style: {
      color: 'var(--green-600)'
    }
  }), " Replies within a day"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(BrowserFrame, {
    url: "bloomandbranch.com"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: '17px',
      color: 'var(--green-800)'
    }
  }, "Bloom & Branch"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: '12px',
      fontSize: '11px',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Shop"), /*#__PURE__*/React.createElement("span", null, "About"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-700)',
      fontWeight: 600
    }
  }, "Visit us"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px 22px'
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Florist storefront",
    icon: "sparkles",
    ratio: "16 / 9",
    tone: "green"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14px',
      fontFamily: 'var(--font-serif)',
      fontSize: '20px',
      fontWeight: 500,
      color: 'var(--text-strong)',
      lineHeight: 1.2
    }
  }, "Fresh flowers, arranged with love."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px',
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--gold-500)',
      color: 'var(--green-900)',
      fontSize: '11px',
      fontWeight: 700,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)'
    }
  }, "Order online"), /*#__PURE__*/React.createElement("span", {
    style: {
      border: '1px solid var(--border-strong)',
      color: 'var(--text-muted)',
      fontSize: '11px',
      fontWeight: 600,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)'
    }
  }, "Our story"))))), /*#__PURE__*/React.createElement("div", {
    className: "jj-float-card",
    style: {
      position: 'absolute',
      bottom: '-26px',
      left: '-26px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border-default)',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '44px',
      height: '44px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--green-50)',
      color: 'var(--green-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trendingUp",
    size: 24
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif)',
      fontSize: '24px',
      fontWeight: 600,
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, "2\xD7 more calls"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '13px',
      color: 'var(--text-faint)',
      marginTop: '3px'
    }
  }, "in the first month live")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '26px var(--gutter-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(20px, 4vw, 56px)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--text-faint)',
      letterSpacing: '0.02em'
    }
  }, "Trusted by local businesses like"), ['Alvarez Dental', 'Becker Roofing', 'Bloom & Branch', 'Pine Street Cafe', 'Hardy Plumbing'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '18px',
      fontWeight: 600,
      color: 'var(--ink-400)'
    }
  }, n)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we do",
    title: "Three simple ways we help",
    lead: "Whatever stage you\u2019re at, there\u2019s a clear place to start \u2014 and a real person on the other end of it."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '22px'
    }
  }, services.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '52px',
      height: '52px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--green-50)',
      color: 'var(--green-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '21px',
      color: 'var(--text-strong)',
      margin: '0 0 10px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '16px',
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, s.body))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-brand)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)',
      gap: 'clamp(32px, 5vw, 64px)',
      alignItems: 'start'
    },
    className: "jj-process-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "jj-eyebrow",
    style: {
      color: 'var(--green-300)',
      marginBottom: '14px'
    }
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'clamp(28px, 4vw, 40px)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: 0
    }
  }, "Simple from hello to launch."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '16px',
      fontSize: '18px',
      lineHeight: 1.6,
      color: 'var(--text-on-brand-muted)'
    }
  }, "You don\u2019t need to know anything technical. That\u2019s our job. Here\u2019s the whole thing, start to finish.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, steps.map((st, i) => /*#__PURE__*/React.createElement("div", {
    key: st.n,
    style: {
      display: 'flex',
      gap: '20px',
      padding: '22px 0',
      borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '22px',
      fontWeight: 500,
      color: 'var(--gold-400)',
      flex: 'none',
      width: '40px'
    }
  }, st.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '19px',
      color: '#fff',
      margin: '0 0 6px'
    }
  }, st.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '16px',
      lineHeight: 1.6,
      color: 'var(--text-on-brand-muted)'
    }
  }, st.body))))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "In their words",
    title: "The part we\u2019re proudest of",
    lead: "We measure our work by whether your phone rings. Here\u2019s what a few owners had to say."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
      gap: '22px'
    },
    className: "jj-testi-grid"
  }, /*#__PURE__*/React.createElement(Testimonial, {
    featured: true,
    rating: 5,
    quote: "They made the whole thing painless. I told them what my shop was about over coffee, and a few weeks later I had a site that actually looks like us \u2014 and the phone hasn\u2019t stopped.",
    name: "Maria Alvarez",
    business: "Owner, Alvarez Family Dental"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '22px'
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    rating: 5,
    quote: "No jargon, no runaround. Felt like hiring a friend who happens to be brilliant at this.",
    name: "Tom Becker",
    business: "Becker & Sons Roofing"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    rating: 5,
    quote: "Bookings went up the first week. Honestly wish I\u2019d done it two years ago.",
    name: "Priya Shah",
    business: "Pine Street Cafe"
  })))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--paper-2)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)',
      gap: 'clamp(32px, 5vw, 64px)',
      alignItems: 'start'
    },
    className: "jj-faq-grid"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Good questions",
    title: "The things people ask us most",
    lead: "And if yours isn\u2019t here, just ask \u2014 we\u2019re friendly."
  }), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: [0],
    items: [{
      q: 'How much does a website cost?',
      a: 'Most small-business sites land between a few hundred and a few thousand, depending on size and features. We’ll give you a clear, fixed quote up front — no surprise invoices, ever.'
    }, {
      q: 'How long does it take?',
      a: 'Most sites go live in 2–4 weeks once we have your content. We’ll give you a realistic timeline at the start and keep you posted along the way.'
    }, {
      q: 'I’m not technical at all. Is that a problem?',
      a: 'Not even slightly — most of our clients aren’t. We handle the technical side and explain everything in plain language. You only make the fun decisions.'
    }, {
      q: 'Who owns the website when we’re done?',
      a: 'You do, completely. The site, the domain, the content — all yours to keep, move, or hand to someone else down the road.'
    }, {
      q: 'What happens after it launches?',
      a: 'We stick around. You can reach a real person for updates and small changes, and we offer simple monthly care plans if you’d like us to handle it for you.'
    }]
  }))), /*#__PURE__*/React.createElement(CTABand, {
    onNavigate: onNavigate
  }));
}
function CTABand({
  onNavigate
}) {
  const {
    Button
  } = window.DesignSystemJJ_a7a2a8;
  const Icon = window.JJIcon;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--gutter-lg) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      background: 'var(--surface-brand-deep)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'clamp(40px, 6vw, 72px)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'clamp(30px, 4.5vw, 46px)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: 0,
      maxWidth: '20ch',
      marginInline: 'auto'
    }
  }, "Let\u2019s build something you\u2019re proud to share."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '18px',
      fontSize: '19px',
      lineHeight: 1.6,
      color: 'var(--text-on-brand-muted)',
      maxWidth: '50ch',
      marginInline: 'auto'
    }
  }, "Book a free, no-pressure chat. We\u2019ll talk about your business, answer your questions, and tell you honestly if we\u2019re the right fit."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '30px',
      display: 'flex',
      gap: '12px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    }),
    onClick: () => onNavigate('contact')
  }, "Book a free chat")))));
}
window.JJHome = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* J&J Studios website — top navigation */
function Nav({
  current,
  onNavigate
}) {
  const {
    Button
  } = window.DesignSystemJJ_a7a2a8;
  const Icon = window.JJIcon;
  const [open, setOpen] = React.useState(false);
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'work',
    label: 'Our work'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  const go = id => {
    onNavigate(id);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'color-mix(in srgb, var(--paper) 88%, transparent)',
      backdropFilter: 'saturate(140%) blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px var(--gutter-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.svg",
    alt: "J&J Studios",
    style: {
      height: '38px',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    },
    className: "jj-desktop-nav"
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => go(l.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      fontWeight: current === l.id ? 600 : 500,
      color: current === l.id ? 'var(--green-800)' : 'var(--text-muted)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-md)'
    },
    onMouseEnter: e => {
      if (current !== l.id) e.currentTarget.style.color = 'var(--green-800)';
    },
    onMouseLeave: e => {
      if (current !== l.id) e.currentTarget.style.color = 'var(--text-muted)';
    }
  }, l.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '10px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 16
    }),
    onClick: () => go('contact')
  }, "Book a free chat"))), /*#__PURE__*/React.createElement("button", {
    className: "jj-mobile-toggle",
    onClick: () => setOpen(!open),
    style: {
      display: 'none',
      background: 'none',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      padding: '8px',
      cursor: 'pointer',
      color: 'var(--green-800)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'x' : 'menu',
    size: 22
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "jj-mobile-menu",
    style: {
      borderTop: '1px solid var(--border-subtle)',
      padding: '12px var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      background: 'var(--paper)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => go(l.id),
    style: {
      background: 'none',
      border: 'none',
      textAlign: 'left',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '17px',
      fontWeight: 500,
      color: 'var(--text-strong)',
      padding: '12px 8px',
      borderRadius: 'var(--radius-md)'
    }
  }, l.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    onClick: () => go('contact')
  }, "Book a free chat"))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 720px){
          .jj-desktop-nav{ display:none !important; }
          .jj-mobile-toggle{ display:flex !important; }
        }
      `));
}
window.JJNav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
/* J&J Studios website — Our Work page (case studies + before/after) */
function Work({
  onNavigate
}) {
  const {
    Button,
    Card,
    Badge
  } = window.DesignSystemJJ_a7a2a8;
  const {
    JJSection: Section,
    JJSectionHeading: SectionHeading,
    JJPhotoSlot: PhotoSlot
  } = window;
  const Icon = window.JJIcon;
  const cases = [{
    tag: 'Dental clinic',
    title: 'Alvarez Family Dental',
    blurb: 'A dated, hard-to-read site became a calm, modern one with online booking front and centre.',
    result: 'New-patient enquiries doubled in the first month.',
    icon: 'sparkles',
    tone: 'green'
  }, {
    tag: 'Cafe',
    title: 'Pine Street Cafe',
    blurb: 'A one-page menu and a clear “find us” turned casual searchers into walk-ins and weekend bookings.',
    result: 'Weekend bookings up 60%.',
    icon: 'heart',
    tone: 'gold'
  }, {
    tag: 'Roofing',
    title: 'Becker & Sons Roofing',
    blurb: 'A trustworthy, photo-led site with quote requests made it easy to choose them over the big franchises.',
    result: '30+ quote requests a month.',
    icon: 'shieldCheck',
    tone: 'green'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    pad: "clamp(48px, 6vw, 72px)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Our work",
    title: "Real sites, for real small businesses",
    lead: "We don\u2019t do flashy for the sake of it. We build sites that look like you and quietly bring in the work. Here are a few."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--gutter-lg)',
      marginBottom: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    tone: "cream"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px',
      marginBottom: '22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "brand"
  }, "Featured"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '22px',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "Alvarez Family Dental")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '15px',
      fontWeight: 600,
      color: 'var(--green-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trendingUp",
    size: 19
  }), " New-patient enquiries doubled")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      gap: '18px',
      alignItems: 'center'
    },
    className: "jj-ba-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: '10px'
    }
  }, "Before"), /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Old site",
    icon: "x",
    ratio: "16 / 10",
    tone: "cream"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'var(--green-600)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-sm)'
    },
    className: "jj-ba-arrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--green-700)',
      marginBottom: '10px'
    }
  }, "After"), /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "New site",
    icon: "check",
    ratio: "16 / 10",
    tone: "green"
  })))))), /*#__PURE__*/React.createElement(Section, {
    pad: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '22px'
    }
  }, cases.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    padding: "none",
    interactive: true
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: c.tag,
    icon: c.icon,
    ratio: "16 / 10",
    tone: c.tone,
    radius: "var(--radius-lg) var(--radius-lg) 0 0"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral",
    size: "sm"
  }, c.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '23px',
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '12px 0 8px'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: '15.5px',
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, c.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14.5px',
      fontWeight: 600,
      color: 'var(--green-700)',
      background: 'var(--green-50)',
      padding: '8px 13px',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trendingUp",
    size: 17
  }), " ", c.result)))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'clamp(26px, 4vw, 38px)',
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '0 0 16px'
    }
  }, "Could yours be next?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      color: 'var(--text-muted)',
      maxWidth: '44ch',
      margin: '0 auto 26px'
    }
  }, "Tell us about your business. We\u2019ll be honest about whether we can help and what it would take."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    }),
    onClick: () => onNavigate('contact')
  }, "Book a free chat"))));
}
window.JJWork = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* J&J Studios — icon set (curated Lucide outline icons, stroke 2, round).
   Inline so they inherit currentColor. Source: lucide.dev (ISC license). */
const JJ_ICON_PATHS = {
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  mapPin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  shieldCheck: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  menu: '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  messageCircle: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  layout: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
  smartphone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
  trendingUp: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  penTool: '<path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"/><path d="m2.3 2.3 7.286 7.286"/><circle cx="11" cy="11" r="2"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>'
};
function Icon({
  name,
  size = 22,
  strokeWidth = 1.9,
  fill = 'none',
  style,
  ...rest
}) {
  const paths = JJ_ICON_PATHS[name] || '';
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: 'none',
      display: 'block',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: paths
    }
  }, rest));
}
window.JJIcon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
/* J&J Studios website — shared layout parts */

/* Section wrapper with consistent vertical rhythm */
function Section({
  children,
  bg = 'transparent',
  pad = 'var(--section-y)',
  id
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      paddingTop: pad,
      paddingBottom: pad
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter-lg)'
    }
  }, children));
}

/* Eyebrow + serif heading + optional lead, centered or left */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  maxWidth = '34ch'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      marginInline: align === 'center' ? 'auto' : 0,
      maxWidth: align === 'center' ? '44ch' : 'none',
      marginBottom: 'var(--space-12)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "jj-eyebrow",
    style: {
      marginBottom: '14px'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'clamp(28px, 4vw, 40px)',
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '16px',
      fontSize: '19px',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth,
      marginInline: align === 'center' ? 'auto' : 0
    }
  }, lead));
}

/* Tasteful image placeholder — warm tint + icon + caption */
function PhotoSlot({
  label = 'Photo',
  icon = 'sparkles',
  ratio = '4 / 3',
  tone = 'green',
  radius = 'var(--radius-lg)',
  style
}) {
  const Icon = window.JJIcon;
  const tones = {
    green: {
      bg: 'linear-gradient(140deg, var(--green-100), var(--green-200))',
      fg: 'var(--green-700)'
    },
    gold: {
      bg: 'linear-gradient(140deg, var(--gold-100), var(--gold-200))',
      fg: 'var(--gold-800)'
    },
    cream: {
      bg: 'var(--surface-sunken)',
      fg: 'var(--text-faint)'
    }
  };
  const t = tones[tone] || tones.green;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      width: '100%',
      background: t.bg,
      borderRadius: radius,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      color: t.fg,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 30,
    strokeWidth: 1.6
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, label));
}

/* Mock browser frame for showing a client site */
function BrowserFrame({
  children,
  url = 'yourbusiness.com',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border-default)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 16px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: '11px',
      height: '11px',
      borderRadius: '50%',
      background: '#E0A6A6'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      width: '11px',
      height: '11px',
      borderRadius: '50%',
      background: '#EAD09A'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      width: '11px',
      height: '11px',
      borderRadius: '50%',
      background: '#A9D3B6'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '8px',
      flex: 1,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 14px',
      fontSize: '12.5px',
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-sans)',
      textAlign: 'center'
    }
  }, url)), /*#__PURE__*/React.createElement("div", null, children));
}

/* Star rating row */
function Stars({
  n = 5,
  size = 18
}) {
  const Icon = window.JJIcon;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: '2px',
      color: 'var(--gold-600)'
    }
  }, Array.from({
    length: n
  }).map((_, i) => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: size,
    fill: "currentColor",
    strokeWidth: 0
  })));
}
Object.assign(window, {
  JJSection: Section,
  JJSectionHeading: SectionHeading,
  JJPhotoSlot: PhotoSlot,
  JJBrowserFrame: BrowserFrame,
  JJStars: Stars
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
