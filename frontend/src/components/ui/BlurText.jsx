import { motion } from "framer-motion";

export default function BlurText({
  text,
  delay = 0.5,
  className = "",
  animateBy = "words",
}) {
  const MotionSpan = motion.span;
  const segments = animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <span className={className}>
      {segments.map((segment, index) => {
        const isLast = index === segments.length - 1;
        const content = animateBy === "words" && !isLast ? `${segment} ` : segment;

        return (
          <MotionSpan
            key={`${segment}-${index}`}
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: delay + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block will-change-[filter,opacity]"
          >
            {content}
          </MotionSpan>
        );
      })}
    </span>
  );
}
