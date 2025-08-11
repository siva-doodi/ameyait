// components/SectionCard.jsx
const TextCard=({ title, description, className = "" }) =>{
  return (
    <div className={`p-8 cursor-pointer rounded-2xl shadow-md hover:shadow-xl transition ${className}`}>
      <h3 className="text-2xl font-bold mb-4 text-[#b72960]">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
export default TextCard;
