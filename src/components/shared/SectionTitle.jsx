import sectionStyle from "../../assets/lineStyle.png";
export default function SectionTitle({ title }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h2 className="text-4xl uppercase font-semibold text-primary">{title}</h2>
      <img className="h-[150px] -mt-16" src={sectionStyle} alt="" />
    </div>
  );
}
