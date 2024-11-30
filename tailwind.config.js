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
            "max-sm-381": { max: "381px" },
            "max-sm-430": { max: "430px" },
            "max-sm-546": { max: "546px" },
            "max-sm-573": { max: "573px" },
            "max-md-712": { max: "712px" },
            "max-md-800": { max: "800px" },
            "max-md-885": { max: "885px" },
            "max-md-992": { max: "992px" },
            "max-lg-1120": { max: "1118px" },
        },
        backgroundImage: {
            "HeroTile": "linear-gradient(to_top,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_14%,rgba(255,255,255,1)_74%,rgba(255,255,255,0)_91%)"
        },
        boxShadow: {
            "ButtonShadow": "0 8px 16px 0 rgba(0,0,0, 0.3)"
        },
        scrollbar: {
            custom: {
                track: 'bg-[#CCCCCC] shadow-inner',
                thumb: 'bg-white bg-gradient-to-r from-black via-transparent to-black',
            },
        },
    }
}