import React from 'react';
import './style.css'; 

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Haqqımızda</h1>
      <p className="about-text">
        Bizim səyahət platformamız, Azərbaycanın müxtəlif bölgələrinə rahat və unudulmaz səyahətlər təklif edir. 
        Məqsədimiz, müştərilərimizə sərfəli qiymətlərlə, təhlükəsiz və keyfiyyətli səyahət imkanları yaratmaqdır.
      </p>
      <p className="about-text">
        Komandamız təcrübəli bələdçilərdən, müştəri dəstəyi nümayəndələrindən və peşəkar planlaşdırma heyətindən ibarətdir. 
        İstər qısa istirahət, istərsə də uzunmüddətli tur planınız varsa, biz sizin üçün ən uyğun marşrutu tapmağa hazırıq.
      </p>
      <p className="about-text">
        Bizimlə səyahət edin və xatirələr toplayın!
      </p>
    </div>
  );
}

export default About;
