import { motion } from "framer-motion";

const AllAreas = ({ setArea, areas, area }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 2,
        },
      }}
      viewport={{ once: false }}
    >
      <ul className="flex gap-x-5 gap-y-2 flex-wrap">
        {areas?.map((item, idx) => (
          <li key={idx}>
            <button
              className={
                area === item?.strArea
                  ? "bg-primary text-white px-3 py-1 rounded-md"
                  : "px-3 py-1 hover:bg-primary rounded-md duration-300 hover:text-white"
              }
              onClick={() => setArea(item?.strArea)}
            >
              {item?.strArea}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AllAreas;
