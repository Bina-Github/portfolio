import React from 'react'

const Footer = () => {
  return (
    <div className="clip-footer absolute bottom-0 right-0 flex h-28 w-full justify-between bg-cGray">
      <div className="bottom-0 w-full flex-1 bg-cBlack"></div>
      <div className="bottom-0 flex w-full max-w-[2000px] items-center justify-end">
        <p className="relative float-right mr-4 mt-5 font-medium text-cDark">
          &copy; 2023 Sabine Kokot
        </p>
      </div>
      <div className="bottom-0 w-full flex-1"></div>
    </div>
  )
}

export default Footer
