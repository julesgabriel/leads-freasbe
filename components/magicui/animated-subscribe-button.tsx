"use client";

import {AnimatePresence, motion} from "framer-motion";
import React, {useState} from "react";

interface AnimatedSubscribeButtonProps {
    buttonColor: string;
    buttonTextColor?: string;
    subscribeStatus: boolean;
    initialText: React.ReactElement | string;
    changeText: React.ReactElement | string;
}

export const AnimatedSubscribeButton: React.FC<
    AnimatedSubscribeButtonProps
> = ({
         buttonColor,
         subscribeStatus,
         buttonTextColor,
         initialText,
     }) => {
    const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

    return (
        <AnimatePresence mode="wait">
            {(
                <motion.button
                    className="relative flex w-[200px] cursor-pointer items-center justify-center rounded-md border-none p-[10px]"
                    style={{backgroundColor: buttonColor, color: buttonTextColor}}
                    onClick={() => setIsSubscribed(true)}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <motion.span
                        key="reaction"
                        className="relative block font-semibold"
                        initial={{x: 0}}
                        exit={{x: 50, transition: {duration: 0.1}}}
                    >
                        {initialText}
                    </motion.span>
                </motion.button>
            )}
        </AnimatePresence>
    );
};
