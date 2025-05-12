'use client';

import BannerSlider from './BannerSlider'
import RegistrationForm from './RegistrationForm'

export default function TopSection() {
  return (
    <div className="relative mb-8 md:mb-16">
      {/* Nội dung chính */}
      <div className="relative z-10">
        {/* Banner */}
        <BannerSlider />
        
        {/* Login/Register Buttons */}
        <div className="container mx-auto px-4 py-4 flex justify-center space-x-8">
          <a href="https://gk88.date/" className="block">
            <img 
              src="/images/TRANG CHU.png" 
              alt="Trang chủ" 
              className="h-10 md:h-14 lg:h-16" 
              style={{
                animation: 'pulse-scale 2.5s infinite alternate',
              }}
            />
          </a>
          <a href="https://t.me/GK88HOTRO24H_BOT" className="block">
            <img 
              src="/images/CSKH.png" 
              alt="CSKH" 
              className="h-10 md:h-14 lg:h-16" 
              style={{
                animation: 'pulse-scale 2.5s infinite alternate',
              }}
            />
          </a>
        </div>

        {/* Form wrapper với padding và shadow */}
        <div className="px-4 pb-8 md:pb-16">
          <div className="max-w-[1024px] mx-auto shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-lg">
            <RegistrationForm />
          </div>
        </div>
      </div>
      
      {/* Phần nền và bo góc với hình nền responsive */}
      <div 
        className="absolute inset-0 shadow-lg bg-center bg-no-repeat md:bg-[url('/images/gifqaqqq.gif')] bg-[url('/images/dt.gif')]" 
        style={{ 
          borderRadius: '0 0 var(--curve-radius) var(--curve-radius)',
          '--curve-radius': 'min(100px, 25vw)',
          backgroundSize: '100% 110%',
          backgroundPosition: 'center top',
        } as React.CSSProperties}
      ></div>

      <style jsx>{`
        @media (max-width: 768px) {
          div {
            --curve-radius: min(80px, 20vw);
          }
        }
      `}</style>
    </div>
  )
} 
