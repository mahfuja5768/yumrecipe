import sectionStyle from "../../assets/lineStyle.png";
import { motion } from "framer-motion";

export default function SectionTitle({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: false }}
      className="flex flex-col justify-center items-center gap-2"
    >
      <h2 className="text-4xl uppercase font-semibold text-primary text-center">
        {title}
      </h2>
      <img
        className="h-[140px] md:h-[150px] -mt-16"
        src={sectionStyle}
        alt=""
      />
    </motion.div>
  );
}
