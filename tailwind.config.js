/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        colors: {
            "color-green": "var(--color-green)",
            "color-white-80": "var(--color-white-80)",
            "color-white-50": "var(--color-white-50)",
            "color-black-80": "var(--color-black-80)",
            "color-black-50": "var(--color-black-50)",
        },
        fontFamily: {
            "Poppins": "var(--font-Poppins)",
            "Inter": "var(--font-Inter)",
            "SpaceGrotesk": "var(--font-SpaceGrotesk)",
        },
        screens: {
            "max-sm-320": { max: "320px" },
            "max-sm-430": { max: "430px" },
            "max-sm-546": { max: "546px" },
            "max-lg-1120": { max: "1120px" },
        }
    }
}