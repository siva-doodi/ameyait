// components/Icon.js
'use client';
import { FaCode, FaBrain, FaCloud } from 'react-icons/fa'; // You can add more icons here

export default function Icon({ type = 'code', className = '', size = 24, color = 'currentColor' }) {
  const icons = {
    code: FaCode,
    brain: FaBrain,
    cloud: FaCloud,
  };

  const SelectedIcon = icons[type] || FaCode;

  return <SelectedIcon size={size} color={color} className={className} />;
}
