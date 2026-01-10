import React from 'react';


function ReelCard({ reel }) {
return (
<div className="group relative w-[170px] aspect-[9/16] rounded-xl overflow-hidden bg-blue-600 shadow-sm hover:shadow transition cursor-pointer">


{/* Preview */}
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-blue-50 text-sm font-medium tracking-wide">
{reel.platform}
</span>
</div>


{/* Soft Overlay */}
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-3">
<h3 className="text-sm font-semibold text-blue-50 line-clamp-1">
{reel.place}
</h3>
<p className="text-xs text-blue-100 mt-1 line-clamp-2">
{reel.caption}
</p>
<span className="mt-1 text-[10px] uppercase text-blue-200">
{reel.status}
</span>
</div>
</div>
);
}


export default ReelCard;