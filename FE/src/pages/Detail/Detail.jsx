import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import "./style.css"


function Detail() {
  const { id } = useParams()
  const [detail, setdetail] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/travels/' + id)
      .then(res => setdetail(res.data))
  }, [id])

  return (
    <>
      <title>Detail</title>
      <div className="detail-container">
        <div className="detail-info">
          <h2 className="detail-title">{detail.name}</h2>
          <p className="label">
            <div>
              <div>      Tur Tarixləri: (1 Aylıq Paket)
                Başlama tarixi: 10 Avqust 2025
                Bitmə tarixi: 10 Sentyabr 2025</div>
              🎒 Paket Növləri
              <div>
                💼 Ekonom Paket:
                2 ulduzlu oteldə yerləşmə (otaqda 2-3 nəfər)

                Gediş-gəliş (avtobusla)

                Səhər yeməyi daxildir

                Qrup rəhbəri və bələdçi xidməti

                Günlük ekskursiyalar (3 əsas məkan)
                Sığorta

                Qiymət: 849 ₼
              </div>
              <div>🧳 Standart Paket:
                3/4 ulduzlu oteldə yerləşmə (otaqda 2 nəfər)

                Gediş-gəliş (komfort avtobus və ya təyyarə)

                Gündə 2 dəfə yemək (səhər və nahar)

                Tam əhatəli ekskursiyalar (6 əsas məkan)

                Əlavə əyləncəli tədbirlər (aşağıda bax)

                Bələdçi və 24/7 dəstək

                Sığorta

                Qiymət: 1349 ₼</div>
              <div>
                🎉 Əyləncə və Ekskursiyalar (Hər iki paketdə fərqli şəkildə)
                Ekonom Paketdə:
                Şəhər turu (2 gün)

                Qala və Tarixi abidə ziyarətləri

                Axşam yürüşləri və sərbəst vaxt

                Standart Paketdə əlavə olaraq:
                Gəmi turu və açıq hava kinoseansı

                Dağlıq bölgəyə səyahət (1 günlük hiking)

                Mədəniyyət gecəsi (rəqs və musiqi)

                Su parkı və adrenalin atraksiyonları

                Lokal bazarda alış-veriş turu

                📝 Açıqlama (Description):
                📍 "1 aylıq Yay Macərası" tur paketi ilə yay tətilinizi unudulmaz edin! Seçiminizdən asılı olaraq Ekonom və ya Standart paketlə müxtəlif şəhərləri, tarixi məkanları, təbiət gözəlliklərini və əyləncə proqramlarını kəşf edin. Peşəkar bələdçilər, komfortlu yerləşmə və zəngin proqram sizi gözləyir. Yayın ən gözəl günlərini bizimlə keçirin!
              </div>


            </div>




          </p>
          <p><span className="label">Telefon:</span> <FaPhoneAlt /> {detail.contact?.phone}</p>
          {detail.contact?.instagram && (
            <p><span className="label">Instagram:</span> <FaInstagram /> {detail.contact.instagram}</p>
          )}
          <p><span className="label">Qiymət:</span> {detail?.price?.toFixed(2)} ₼</p>
        </div>
        <div className="detail-image">
          <img src={detail.image} alt={detail.name} />
        </div>
      </div>


    </>
  )
}

export default Detail