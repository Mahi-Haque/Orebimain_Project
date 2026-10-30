const Badge = ({ badgeName, className }) => {
  return (
    <div
      className={`py-2.5 px-7.5 bg-[#262626] text-white font-bold font-dm ${className}`}
    >
      {badgeName}
    </div>
  );
};

export default Badge;
