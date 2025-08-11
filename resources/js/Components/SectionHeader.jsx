function SectionHeader({ title, linkText = "ច្រើនទៀត", href = "#" }) {
  return (
    <div className="flex justify-between mt-[30px] md:mt[80px]  lg:mt-[80px] mb-3 px-10">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <a href={href} className="text-blue-600">{linkText}</a>
    </div>
  );
}

export default SectionHeader;