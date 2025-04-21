const config = {
  plugins: ["@tailwindcss/postcss"],
  theme:{
    extend:{
      colors:{
        lightHover:'#fcf4ff',
        darkHover:'#2a004a',
        darktheme:'#11001F'
      },
      fontFamily:{
        Outfit:["Outfit","sans-serif"],
        Ovo:["Ovo","serif"]
      },
      boxShadow:{
        'black':'4px 4px 0 #000',
        'white':'4px 4px 0 #fff',
      }
    }
  },
  
};

export default config;
