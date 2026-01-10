import React from 'react';



function ReelCard({ reel }) {
	// Use a static image for preview (replace with dynamic if available)
	const previewImg =
		'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80';
	return (
		<div className="group relative w-[170px] aspect-[9/16] rounded-xl overflow-hidden bg-blue-600 shadow-sm hover:shadow transition cursor-pointer">
			{/* Preview Image */}
			<img
				src={previewImg}
				alt="Reel preview"
				className="absolute inset-0 w-full h-full object-cover object-center"
			/>
			{/* Platform label overlay */}
			<div className="absolute inset-0 flex items-center justify-center">
				<span className="text-blue-50 text-sm font-medium tracking-wide bg-black/40 px-2 py-1 rounded">
					{reel.platform}
				</span>
			</div>
			{/* Soft Overlay */}
			<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-3">
				<h3 className="text-sm font-semibold text-blue-50 line-clamp-1">
					{reel.placeName || reel.place || 'Unknown Place'}
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