import useMobileDeviceDetection from 'hooks/useMobileDetection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBrand = () => {
  const isMobile = useMobileDeviceDetection()
  return (
    <>
      <div
        className={`select-none ${
          isMobile ? 'cursor-default' : 'cursor-pointer'
        }`}
      >
        <Link href={'/'} passHref>
          <div className="w-fit h-fit">
            {/* {<Image src={'/images/brand.svg'} width='135px' height={30} alt='company brand' loading='lazy' />} */}
            <div
            style={{
              fontSize: "1.6rem",
              color: "white",
              fontWeight: "bold",
              display: "flex"
            }}
            >Clin<span style={{color: "lightgreen"}}>Tech</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default NavBrand
