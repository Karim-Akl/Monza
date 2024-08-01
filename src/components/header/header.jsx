'use client';
import React, { useState } from 'react';
import "./header.css";
import "../../../public/style.css";
import "../../app/globals.css";
import Link from 'next/link';
const Page = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <header>
      <div className='flex header-class-bg'>
        <div className='flex cont-phone'>
          <a
            href=""
            style={{
              flexDirection: "row-reverse",
              display: "flex",
              gap: "1rem",
            }}
          >
            <p>+201093378681</p>
            <span className="icon-phone"></span>
          </a>
          <a
            href=""
            style={{
              flexDirection: "row-reverse",
              display: "flex",
              gap: "1rem",
            }}
          >
            <p>+201093378681</p>
            <span className="icon-whatsapp"></span>
          </a>
        </div>

        <div className='bg-search' style={{ position: 'relative', minWidth: '700px', margin: '0 auto' }}>
          <input
            type="text"
            placeholder="Search..."
            style={{
              width: '100%',
              padding: '10px 40px 10px 10px',
              border: '1px solid #000',
              borderRadius: '5px',
              fontSize: '16px',
              borderRadius: '20px',
              height: "30px"
            }}
          />
          <p className='icon-search'
            style={{
              position: 'absolute',
              top: '50%',
              right: '-50px',
              transform: 'translateY(-50%)',
              color: '#999',
              padding: "10px",
              backgroundColor: "yellow",
              width: "60px",
              height: "30px"
            }}
          />
        </div>
      </div>
      <div className='flex nav-header'>
        <div className='scand-header flex'>
          <Link href=""><img src="/images/logo.png" alt="" width={200} height={70} /></Link>
          <ul className='flex ul-par' style={{ gap: "35px" }}>
            <li><Link href="">Home</Link></li>
            <li
              className='all-brand'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              All Brands
            </li>
            <li><Link href="">Special Offers</Link></li>
            <li><Link href="">Categories</Link></li>
            <li><Link href="">Locations</Link></li>
            <li><Link href="">About Us</Link></li>
            <li><Link href="">Blog</Link></li>
            <li><Link href="">Contact Us</Link></li>
          </ul>
        </div>
        <button className='icon-menu' />
      </div>

      <div
        className={`image-paner ${isActive ? 'active' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-background">
          <div className="flex flex-col items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=Nissan"
              alt="Nissan"
              className="h-12 w-12"
            />
            <span className="text-muted-foreground">25 Cars</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=Chevrolet"
              alt="Chevrolet"
              className="h-12 w-12"
            />
            <span className="text-muted-foreground">21 Cars</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=Ford"
              alt="Ford"
              className="h-12 w-12"
            />
            <span className="text-muted-foreground">14 Cars</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=Dodge"
              alt="Dodge"
              className="h-12 w-12"
            />
            <span className="text-muted-foreground">14 Cars</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=Mercedes"
              alt="Mercedes"
              className="h-12 w-12"
            />
            <span className="text-muted-foreground">43 Cars</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=Mini Cooper"
              alt="Mini Cooper"
              className="h-12 w-12"
            />
            <span className="text-muted-foreground">5 Cars</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=BMW"
              alt="BMW"
              className="h-12 w-12"
            />
            <span className="text-muted-foreground">16 Cars</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=Audi"
              alt="Audi"
              className="h-12 w-12"
            />
            <span className="text-muted-foreground">14 Cars</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=Infiniti"
              alt="Infiniti"
              className="h-12 w-12"
            />
            <span className="text-muted-foreground">1 Cars</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=Range Rover"
              alt="Range Rover"
              className="h-12 w-12"
            />
            <span className="text-muted-foreground">21 Cars</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=Lamborghini"
              alt="Lamborghini"
              className="h-12 w-12"
            />
            <span className="text-muted-foreground">19 Cars</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=Ferrari"
              alt="Ferrari"
              className="h-12 w-12"
            />
            <span className="text-muted-foreground">10 Cars</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=Rolls Royce"
              alt="Rolls Royce"
              className="h-12 w-12"
            />
            <span className="text-muted-foreground">14 Cars</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=Porsche"
              alt="Porsche"
              className="h-12 w-12"
            />
            <span className="text-muted-foreground">6 Cars</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=Bentley"
              alt="Bentley"
              className="h-12 w-12"
            />
            <span className="text-muted-foreground">6 Cars</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=Cadillac"
              alt="Cadillac"
              className="h-12 w-12"
            />
            <span className="text-muted-foreground">3 Cars</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Page;
