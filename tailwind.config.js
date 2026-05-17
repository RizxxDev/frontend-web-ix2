/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "surface-dim": "#dbdbcf",
        "on-primary": "#ffffff",
        "primary-fixed": "#d5e3ff",
        "primary-fixed-dim": "#b0c7f1",
        "on-secondary-fixed": "#271900",
        "on-tertiary-fixed-variant": "#92001c",
        "primary-container": "#1d3557",
        "inverse-primary": "#b0c7f1",
        "on-secondary-container": "#6b4b00",
        "surface-tint": "#485f84",
        "on-primary-fixed": "#001b3c",
        "on-primary-fixed-variant": "#30476a",
        "on-error": "#ffffff",
        "primary": "#031f41",
        "secondary-container": "#ffb702",
        "on-tertiary-container": "#ff6f71",
        "surface-container-low": "#f5f4e8",
        "outline": "#74777f",
        "on-surface": "#1b1c15",
        "surface-variant": "#e4e3d7",
        "secondary": "#7d5800",
        "background": "#fbfaee",
        "on-tertiary": "#ffffff",
        "inverse-surface": "#303129",
        "surface-container-highest": "#e4e3d7",
        "on-surface-variant": "#44474e",
        "surface-container": "#efeee3",
        "error-container": "#ffdad6",
        "outline-variant": "#c4c6cf",
        "error": "#ba1a1a",
        "surface-container-lowest": "#ffffff",
        "tertiary-fixed": "#ffdad8",
        "tertiary": "#480009",
        "secondary-fixed": "#ffdea9",
        "inverse-on-surface": "#f2f1e5",
        "on-primary-container": "#879ec6",
        "on-secondary-fixed-variant": "#5e4100",
        "tertiary-fixed-dim": "#ffb3b1",
        "surface-container-high": "#e9e9dd",
        "on-error-container": "#93000a",
        "surface-bright": "#fbfaee",
        "on-secondary": "#ffffff",
        "secondary-fixed-dim": "#ffba27",
        "on-background": "#1b1c15",
        "on-tertiary-fixed": "#410007",
        "tertiary-container": "#700013",
        "postit-yellow": "#ffea8c",
        "postit-pink": "#ffb3c6",
        "postit-blue": "#a2d2ff",
        "notebook-line": "#a2d2ff"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "base": "8px",
        "gutter": "24px",
        "lg": "48px",
        "sm": "12px",
        "xs": "4px",
        "md": "24px",
        "xl": "80px",
        "container-max": "1200px"
      },
      "maxWidth": {
        "container-max": "1200px"
      },
      "fontFamily": {
        "display-lg": ["Bricolage Grotesque"],
        "label-caps": ["Space Mono"],
        "display-lg-mobile": ["Bricolage Grotesque"],
        "caption": ["Work Sans"],
        "subheading-quote": ["Bricolage Grotesque"],
        "headline-md": ["Bricolage Grotesque"],
        "body-lg": ["Work Sans"],
        "body-md": ["Work Sans"]
      },
      "fontSize": {
        "display-lg": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "label-caps": ["12px", { "lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "700" }],
        "display-lg-mobile": ["36px", { "lineHeight": "1.1", "fontWeight": "800" }],
        "caption": ["14px", { "lineHeight": "1.4", "fontWeight": "500" }],
        "subheading-quote": ["24px", { "lineHeight": "1.4", "fontWeight": "400" }],
        "headline-md": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
