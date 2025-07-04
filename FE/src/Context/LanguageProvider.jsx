import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('az');

  const toggleLang = () => {
    setLang(prev => (prev === 'az' ? 'en' : 'az'));
  };

  const texts = {
    az: {
      logo:"Səyahət Dünyası",
      home: "Ana səhifə",
      tours: "Turlar",
      about: "Haqqımızda",
      contact: "Əlaqə",
      wishlist: "Sevimlilər",
      login: "Giriş",
      registration: "Qeydiyyat",
      langBtn: "EN",
      heroTitle: "Yeni Dünyaları Kəşf Et",
      heroDesc: "Sənin üçün ən unudulmaz səyahətləri hazırladıq. Gəl, birlikdə yola çıxaq!",
      heroBtn: "Turlara bax",
      detail: "Ətraflı",
      price: "Manat"
    },
    en: {
      logo: "The world of travel",
      home: "Home",
      tours: "Tours",
      about: "About",
      contact: "Contact",
      wishlist: "Wishlist",
      login: "Login",
      registration: "Registration",
      langBtn: "AZ",
      heroTitle: "Discover New Worlds",
      heroDesc: "We prepared the most unforgettable trips for you. Let's go!",
      heroBtn: "View Tours",
      detail: "Detail",
      price: "AZN"
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: texts[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};
