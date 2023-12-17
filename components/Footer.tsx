import React from 'react'

const Footer = () => {
  return (
    <div className="clip-footer bg-cGray absolute bottom-0 right-0 flex h-28 w-full justify-between">
      <div className="bg-cBlack w-full flex-1" />
      <div className="flex w-full max-w-[2000px] items-center justify-end">
        <p className="text-cDark mr-4 mt-5 font-medium">&copy; 2023 Sabine Kokot</p>
      </div>
      <div className="w-full flex-1" />
    </div>
  )
}

export default Footer
