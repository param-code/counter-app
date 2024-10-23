import { useState } from "react";
import { motion } from "framer-motion";

const LoginImage = () => {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;

    setTransform({
      rotateX: yPos * 20,
      rotateY: -xPos * 20,
    });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "inline-block",
        perspective: "100px",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <motion.img
        src="https://cdn3.iconfinder.com/data/icons/scenes-22/1000/accounts___man_workspace_desk_laptop_login_user-1024.png"
        alt="Login"
        style={{
          width: "95%",
          maxWidth: "1000px",
          marginLeft: "10px",
          height: "78vh",
          objectFit: "contain",
        }}
        initial={{ scale: 1, rotateX: 0, rotateY: 0 }}
        animate={{
          rotateX: transform.rotateX,
          rotateY: transform.rotateY,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.05 }}
      />
    </motion.div>
  );
};

export default LoginImage;
