import React from 'react';

function ReelCard({ reel }) {
  return (
    <div className="
      group
      relative
      w-[160px]
      aspect-[9/16]
      rounded-xl
      overflow-hidden
      bg-gradient-to-br from-indigo-500 to-indigo-700
      cursor-pointer
      shadow-md
      hover:shadow-xl
      transition
    ">

      {/* ===== REEL PREVIEW ===== */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-sm font-semibold opacity-90 truncate px-2">
          {reel.platform}
        </span>
      </div>

      {/* ===== HOVER OVERLAY ===== */}
      <div className="
        absolute inset-0
        bg-black/60
        backdrop-blur-sm
        opacity-0
        group-hover:opacity-100
        transition
        flex
        flex-col
        justify-end
        p-3
      ">

        <h3 className="text-sm font-semibold text-white leading-tight line-clamp-2">
          {reel.place}
        </h3>

        <p className="text-xs text-slate-200 mt-1 line-clamp-3">
          {reel.caption}
        </p>

        <span className="mt-2 text-[10px] uppercase tracking-wide text-indigo-300">
          {reel.status}
        </span>
      </div>
    </div>
  );
}

export default ReelCard;
