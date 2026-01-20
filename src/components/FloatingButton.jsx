import React from 'react'

function FloatingButton() {
  return (
    <button className="fixed bottom-8 right-8 size-16 bg-electric-blue border-2 border-white flex items-center justify-center text-white shadow-[0_0_40px_rgba(46,49,255,0.4)] hover:scale-110 transition-transform active:scale-95 z-50">
      <span className="material-symbols-outlined text-3xl">code_blocks</span>
    </button>
  )
}

export default FloatingButton
