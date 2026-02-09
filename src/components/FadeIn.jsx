import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                type: "spring",
                stiffness: 70,
                damping: 20,
                delay: delay,
                mass: 1
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
