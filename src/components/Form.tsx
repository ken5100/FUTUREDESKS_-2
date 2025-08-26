import { motion, type Variants } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    brand: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  // ✅ Correctly typed variants with custom + easing array
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-12 w-full max-w-5xl"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12"
        >
          Let&apos;s Connect
        </motion.h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:gap-8">
          {/* Full Name */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0}>
            <label className="block mb-2 text-gray-700 font-medium text-sm sm:text-base">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </motion.div>

          {/* Phone Number */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={1}>
            <label className="block mb-2 text-gray-700 font-medium text-sm sm:text-base">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </motion.div>

          {/* Store/Brand Name */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={2}>
            <label className="block mb-2 text-gray-700 font-medium text-sm sm:text-base">
              Store/Brand Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your store/brand name"
            />
          </motion.div>

          {/* Address */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={3}>
            <label className="block mb-2 text-gray-700 font-medium text-sm sm:text-base">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 h-28 sm:h-36 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Enter your address"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={4}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 text-white text-base sm:text-lg font-semibold py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-lg hover:bg-blue-700 transition"
            >
              Submit
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
