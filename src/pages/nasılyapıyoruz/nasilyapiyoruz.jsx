import React from 'react'
import Ressim from './resim10.png'

const nasilyapiyoruz = () => {
  return (
    <div>

      <div className=' text-center text-slate-400'>
        <b className='text-3xl'>Ne Yapıyoruz?</b>
          <p className='flex text-left ml-[7%] mr-[7%] mt-14 mb-[5%]'>
          21. yüzyılın getirdiği yeni iletişim, öğrenim ve paylaşım ortamlarını etkin olarak kullanırsak biriktirdiği sorunların bir kısmına çözüm üretebiliriz; zira fırsatlar en az tehditler kadar güçlü ve çok sayıdadır. Yeni nesil öğrenim materyalleri ve dijital öğrenme ekosistemleri ile öğrencilere kendi öğrenimini gerçekleştirme becerileri kazandırarak onları öğrenenler topluluğuna dönüştürürsek kurumların ve makro sistemlerin yetişemedikleri noktalarda bireysel olarak teknoloji temelli ekonominin beceri beklentilerini onlara kazandırma imkanını yakalayabiliriz. Vakıf k12 olarak 21. yüzyılın dijital araçlarıyla açık kaynaklar üretmek ve öğrenme kültürünü yaygınlaştırmak için aşağıdaki çalışmaları yapıyoruz.
          </p>
        </div>
        
          <div className='flex items-center justify-center  ml-[7%] mr-[7%] mt-14 mb-[5%] bg-white'>
           <img src={Ressim} alt="" />
         </div>

        

    </div>
  )
}

export default nasilyapiyoruz