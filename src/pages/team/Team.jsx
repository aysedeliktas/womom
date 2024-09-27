import React from 'react'
import "./TeamStyle.css"
import PageHead from '../../components/pageHead/PageHead'
import Navbar from '../../components/navbar/Navbar'
import Member from './member/Member'

function Team() {
  return (
    <div className="team-container">
        <PageHead lastPath={""} pageName={"Hakkımızda"}/>
        <div className="team-child-container">
            <Member data={{
              "name":"Meral Çelik",
              "title":"Proje Yöneticisi",
              "image":"yunusaslan.jpg",
              "desc":"Dr. Meral Çelik, İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi'nden mezun olduktan sonra kadın doğum uzmanlığı ihtisası yapmıştır. 10 yılı aşkın deneyimiyle gebelik takibi ve kadın sağlığı konularında uzmandır. Güler yüzü ve empatik yaklaşımıyla hastalarıyla güvenilir bir ilişki kurar."}}/>
            <Member data={{ 
              "name":"Elif Demir",
              "title":"Uzman Doktor",
              "image":"elifdemir.jpg",
              "desc":"Hacettepe Üniversitesi Tıp Fakültesi'nden mezun olup, kadın doğum uzmanlığı eğitimini tamamlamıştır. 8 yıllık deneyimiyle gebelik, doğum ve kadın sağlığı üzerine çalışmaktadır. Hastalarına sıcak bir yaklaşım sergileyen Dr. Demir, sürekli olarak kendini geliştirmeye önem vermektedir."}}/>
            <Member data={{
              "name":"Yunus Aslan",
              "title":"Uzman Doktor",
              "image":"yunusaslan.jpg",
              "desc":"Dr. Yunus Aslan, Gazi Üniversitesi Tıp Fakültesi'nden mezun olduktan sonra kadın doğum uzmanlığı ihtisası yapmıştır. 7 yıllık deneyimiyle gebelik takibi ve jinekolojik sağlık konularında uzmandır. "}}/>


        </div>
        <Navbar/>
    </div>
  )
}

export default Team