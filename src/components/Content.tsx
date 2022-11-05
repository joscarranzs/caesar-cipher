import { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import Encryption from "../logic/encryption";

const Content = () => {
    type TSEncryptedPhrase = string;
    const [EncryptedPhrase, setEncryptedPhrase] = useState<TSEncryptedPhrase>('');

    const Submit = (e: ChangeEvent) => {
        e.preventDefault();
        let target = e.target as HTMLInputElement;
        let phrase = Encryption(target.value.toLowerCase(), 16);

        setEncryptedPhrase(phrase);
    }

    return (
        <motion.div className="content"
            initial={{}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div className="content-title"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1>Caesar Cipher by Jose</h1>
            </motion.div>

            <motion.div className="content-input"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <input type="text" placeholder="Enter a word" spellCheck="false"
                    onChange={(e) => { Submit(e) }}
                />
            </motion.div>

            <motion.div className="content-output"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <p>{EncryptedPhrase}</p>

                {EncryptedPhrase.length === 0 && (
                    <p>Nothing is encrypted</p>
                )}
            </motion.div>
        </motion.div>
    )
}

export default Content;