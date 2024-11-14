import React from 'react'
import "./TeamStyle.css"
import PageHead from '../../components/pageHead/PageHead'
import Navbar from '../../components/navbar/Navbar'
import Member from './member/Member'

function Team() {
  return (
    <div className="team-container">
      <PageHead lastPath={""} pageName={"Hakkımızda"} />
      <div className="team-child-container">
      <Member data={{
          "name": "Ayşe Deliktaş Demirci",
          "title": "Proje Yürütücüsü",
          "image": "AyseDeliktasDemirci.jpg",
          "desc": "Doktor Öğretim Üyesi Ayşe DELİKTAŞ DEMİRCİ, Akdeniz Üniversitesi Hemşirelik Fakültesi Doğum ve Kadın Hastalıkları Hemşireliği Anabilim Dalı’nda öğretim üyesi olarak çalışmaktadır. Doğum ve Kadın Hastalıkları Hemşireliği alanında uzmanlığını yapmış olan Ayşe DELİKTAŞ DEMİRCİ’ nin gebelik, doğum deneyimi ve doğum sonrası döneme ilişkin birçok ulusal ve uluslararası alanda makale, kitap bölümü ve kongre bildirileri bulunmaktadır. Ayrıca, cinsellik, kadının varoluşuna ilişkin farkındalık gibi konular da ilgi alanları içerisinde yer almaktadır. Yayınlarına https://avesis.akdeniz.edu.tr/aysedeliktas/yayinlar adresten ulaşabilirsiniz."
        }} />
        <Member data={{
          "name": "Kamile Kabukçuoğlu",
          "title": "Proje Araştırma Ekip Üyesi",
          "image": "KamileKabukcuoglu.jpg",
          "desc": "Profesör Doktor Kamile KABUKCUOĞLU, Akdeniz Üniversitesi Hemşirelik Fakültesi Doğum ve Kadın Hastalıkları Hemşireliği Anabilim Dalı’nda öğretim üyesi olarak çalışmaktadır. Ayrıca, Akdeniz Üniversitesi Kadın Çalışmaları ve Toplumsal Cinsiyet Araştırma ve Uygulama Merkezi (KATCAM)’ da yüksek lisans ve doktora derslerinde görev almaktadır. Doğum ve Kadın Hastalıkları Hemşireliği alanında uzmanlığını yapmış olan Kamile KABUKCUOĞLU’nun kadına ve kadın salığına dair birçok konularda ulusal ve uluslararası alanda makale, kitap bölümü ve kongre bildirileri bulunmaktadır. Kadının gebelik, doğum ve sonrasındaki psikolojisinin yanı sıra jinekoloji, menopoz, jinekolojik kanserler gibi kadının yaşamının diğer dönemlerindeki hemşirelik bakımı ilgi alanları içerisinde yer almaktadır. Yayınlarına https://avesis.akdeniz.edu.tr/kkamile/yayinlar adresten ulaşabilirsiniz."
        }} />
        <Member data={{
          "name": "Filiz Aslantekin Özçoban",
          "title": "Proje Araştırma Ekip Üyesi",
          "image": "FilizAslantekinOzcoban.jpg",
          "desc": "Doçent Doktor Filiz ASLANTEKİN ÖZÇOBAN, Balıkesir Üniversitesi Sağlık Bilimleri Fakültesi Ebelik Bölümü’nde öğretim üyesi olarak çalışmaktadır. Ebelik alanında uzmanlığını yapmış olan Filiz ASLANTEKİN ÖZÇOBAN’ın gebelik, doğum ve sonrasında annenin sağlığını ele alan birçok konularda ulusal ve uluslararası alanda makale, kitap bölümü ve kongre bildirileri bulunmaktadır. Özellikle kadınların sağlıklarına ilişkin bilgilerini edinme, bunları değerlendirme ve karar verme becerisini ele alan “sağlık okuryazarlığı”na ilişkin birçok yayın, bildiri ve kitap bölümleri bulunmaktadır.  Yayınlarına https://www.balikesir.edu.tr/portal/personel/makaleler adresten ulaşabilirsiniz."
        }} />
        <Member data={{
          "name": "Çağrı Elmas",
          "title": "Proje Araştırma Ekip Üyesi",
          "image": "CagrıElmas.jpg",
          "desc": "Doktor Çağrı ELMAS, Akdeniz Üniversitesi Kadın Çalışmaları ve Toplumsal Cinsiyet Araştırma ve Uygulama Merkezi (KATCAM)’ da öğretim elemanı olarak çalışmaktadır. Kadın Çalışmaları ve Toplumsal Cinsiyet alanında uzmanlaşan Çağrı ELMAS’ın evlilik ilişkileri ve kadının annelik psikolojine ilişkin makale ve kongre bildirileri bulunmaktadır. Yayınlarına https://avesis.akdeniz.edu.tr/cagrielmas/yayinlar adresten ulaşabilirsiniz."
        }} />
        <Member data={{
          "name": "Parvin Ahmadova",
          "title": "Bursiyer",
          "image": "ParvinAhmadova.jpg",
          "desc": "Doktora öğrencisi Parvin AHMADOVA, Akdeniz Üniversitesi Kadın Çalışmaları ve Toplumsal Cinsiyet Araştırma ve Uygulama Merkezi (KATCAM)’ da eğitimini almaktadır. Uygulamada kadın ve anne adaylarına birçok konuda gelişimsel eğitimler veren Parvin AHMADOVA, ayrıca perinatal psikoloji, yani bebeğin ve annenin gebelik, doğum ve sonrası süreçteki psikolojisi, uzmanlık alanları arasında yer almaktadır. Kadının özüne ilişkin farkındalığı ve bu farkındalığın kadın üzerini etkileri ele alan makale ve kongre bildirileri bulunmaktadır. Uygulamadaki faaliyetlerine https://www.reproinst.org/  adresten ulaşabilirsiniz."
        }} />

      </div>
      <Navbar />
    </div>
  )
}

export default Team