import { useState, useRef, useEffect } from 'react';

export function Slider({ label, value, onChange, min, max, step = 1, marks = [] }) {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const percentage = ((value - min) / (max - min)) * 100;

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateValue(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateValue(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateValue = (e) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const newPercentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
      const newValue = Math.round((newPercentage / 100) * (max - min) + min);
      const steppedValue = Math.round(newValue / step) * step;
      onChange(Math.max(min, Math.min(max, steppedValue)));
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center justify-between w-full">
        <p className="font-interMedium text-[14px] leading-[14px] text-black">
          {label}
        </p>
        <div className="bg-[#e9f4ee] flex items-center justify-center px-[14px] py-[6px] rounded-[6px] min-w-[60px]">
          <p className="font-interMedium text-[14px] leading-[14px] text-black text-center">
            {value}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end w-full mt-1">
        <div className="bg-white flex flex-col items-start py-px w-full">
          <div
            ref={sliderRef}
            className="h-[28px] w-full relative cursor-pointer"
            onMouseDown={handleMouseDown}
          >
            <div className="absolute inset-0 flex items-center">
              {/* Background track */}
              <div className="w-full h-1 bg-[#D9D9D9] rounded-full" />
              {/* Active track */}
              <div
                className="absolute h-1 bg-[#05A8A3] rounded-full"
                style={{ width: `${percentage}%` }}
              />
              {/* Thumb */}
              <div
                className="absolute w-7 h-7 bg-[#05A8A3] rounded-full shadow-[0_0_24px_rgba(5,168,163,0.35)] -ml-3.5"
                style={{ left: `${percentage}%` }}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          {marks.map((mark, index) => (
            <div key={index} className="flex flex-col gap-[3px] items-start">
              <div className="flex h-2 items-center justify-center w-full">
                <div className="h-0 w-full rotate-90">
                  <svg className="block w-2 h-px" fill="none" viewBox="0 0 8 1">
                    <line stroke="#E6E6E6" strokeLinecap="round" x1="0.5" x2="7.5" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
              <p className="capitalize font-interMedium text-[#999] text-[10px] leading-[10px] tracking-[0.2px]">
                {mark}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
