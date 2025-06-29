import { CONTACT } from "../constants";
import { motion } from "motion/react";
const Contact = () => {
    return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.6}}
        className="my-10 text-center text-4xl">Hit Me Up!</motion.h2>
    
    <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1}}
        className="my-4">
            {CONTACT.address}
        </motion.p>
        <motion.p 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 1}}
        className="my-4">
            {CONTACT.phoneNo}
        </motion.p>

        <motion.a 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, y: 100}}
        transition={{duration: 0.7}}
        href="mailto:satanical.weaponry@proton.me" className="border-b">{CONTACT.email}</motion.a>
        </div>
    </div>
    )
}

export default Contact
