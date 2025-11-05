// import { motion } from "motion/react";
// import { Button } from "./ui/button";

// export function ContactPage() {
//   return (
//     <section
//       id="contact"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#000000] pt-20"
//     >
//       {/* Animated background grid */}
//       <div className="absolute inset-0 opacity-20">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `linear-gradient(#00F000 1px, transparent 1px), linear-gradient(90deg, #00F000 1px, transparent 1px)`,
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>

//       {/* Animated nodes */}
//       {[...Array(20)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 bg-[#00F000] rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             opacity: [0.2, 0.8, 0.2],
//             scale: [1, 1.5, 1],
//           }}
//           transition={{
//             duration: 3 + Math.random() * 2,
//             repeat: Infinity,
//             delay: Math.random() * 2,
//           }}
//         />
//       ))}

//       {/* Content */}
//       <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-white mb-6">
//             Get in <span className="text-[#00F000]">Touch</span>
//           </h1>
//           <p className="text-gray-300 text-lg mb-10">
//             Have a question or want to collaborate? Fill out the form below, and
//             our team will reach out soon.
//           </p>
//         </motion.div>

//         <motion.form
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="flex flex-col gap-4 max-w-md mx-auto"
//         >
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="bg-transparent border border-[#00F000] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00F000]"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="bg-transparent border border-[#00F000] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00F000]"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows={4}
//             className="bg-transparent border border-[#00F000] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00F000]"
//           ></textarea>

//           <Button
//             size="lg"
//             className="bg-[#00F000] text-black hover:bg-[#00F000]/90 hover:shadow-[0_0_20px_rgba(0,240,0,0.5)] transition-all duration-300"
//           >
//             Send Message
//           </Button>
//         </motion.form>
//       </div>
//     </section>
//   );
// }


// import { motion } from "motion/react";
// import { Phone, Mail, MapPin } from "lucide-react";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, when: "beforeChildren" },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// const contactDetails = [
//   {
//     icon: Phone,
//     title: "Phone Number",
//     value: "+1 (555) 123-4567",
//     href: "tel:+15551234567",
//   },
//   {
//     icon: Mail,
//     title: "Email Address",
//     value: "info@greenmenconsulting.com",
//     href: "mailto:info@nexaform.com",
//   },
//   {
//     icon: MapPin,
//     title: "Location",
//     value: "123 Tech Drive, Suite 400, Innovation City, CA 90210",
//     href: "https://maps.app.goo.gl/",
//   },
// ];

// export function ContactPage() {
//   const AccentColor = "#00F000";

//   return (
//     <section id="contact" className="py-10 lg:py-32 bg-gray-100 font-sans">
//       <div className="container mx-auto px-6 lg:px-12">
//         {/* Main Card */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//           className="bg-white p-6 md:p-12 lg:p-16 shadow-2xl rounded-2xl"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             {/* LEFT COLUMN - CONTACT DETAILS */}
//             <div className="lg:col-span-1 space-y-8 pr-0 lg:pr-8">
//               {contactDetails.map((item, index) => (
//                 <motion.div variants={itemVariants} key={index}>
//                   <a
//                     href={item.href}
//                     className="flex items-center group"
//                     target={item.href.startsWith("http") ? "_blank" : "_self"}
//                     rel="noopener noreferrer"
//                   >
//                     <div
//                       className="p-3 rounded-full bg-white border border-gray-200 mr-4 transition duration-300 group-hover:shadow-md"
//                       style={{
//                         borderColor: `${AccentColor}33`, // subtle border tint
//                         backgroundColor: `${AccentColor}0D`, // very light fill
//                       }}
//                     >
//                       <item.icon
//                         className="w-5 h-5"
//                         style={{ color: AccentColor }}
//                       />
//                     </div>

//                     <div>
//                       <p
//                         className="text-sm font-semibold text-gray-500 transition duration-300 group-hover:text-gray-900"
//                         style={{ color: AccentColor }}
//                       >
//                         {item.title}
//                       </p>
//                       <p className="text-base font-medium text-gray-800">
//                         {item.value}
//                       </p>
//                     </div>
//                   </a>
//                 </motion.div>
//               ))}
//             </div>

//             {/* RIGHT COLUMN - FORM */}
//             <div className="lg:col-span-2">
//               <motion.h2
//                 variants={itemVariants}
//                 className="text-3xl font-bold text-gray-900 mb-4"
//               >
//                 Send Message
//               </motion.h2>
//               <motion.p
//                 variants={itemVariants}
//                 className="text-sm text-gray-600 mb-8 max-w-lg"
//               >
//                 Get in touch with us using the form below. Our support team is
//                 ready to assist with your inquiries or feedback.
//               </motion.p>

//               <form className="space-y-4">
//                 {/* NAME + EMAIL */}
//                 <motion.div
//                   variants={itemVariants}
//                   className="grid grid-cols-1 md:grid-cols-2 gap-4"
//                 >
//                   <input
//                     type="text"
//                     placeholder="Your name"
//                     className="p-3 border border-gray-300 rounded-md outline-none transition focus:ring-2 focus:ring-[#00F000] focus:border-[#00F000]"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email address"
//                     className="p-3 border border-gray-300 rounded-md outline-none transition focus:ring-2 focus:ring-[#00F000] focus:border-[#00F000]"
//                   />
//                 </motion.div>

//                 {/* PHONE + SUBJECT */}
//                 <motion.div
//                   variants={itemVariants}
//                   className="grid grid-cols-1 md:grid-cols-2 gap-4"
//                 >
//                   <input
//                     type="tel"
//                     placeholder="Phone number"
//                     className="p-3 border border-gray-300 rounded-md outline-none transition focus:ring-2 focus:ring-[#00F000] focus:border-[#00F000]"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Subject"
//                     className="p-3 border border-gray-300 rounded-md outline-none transition focus:ring-2 focus:ring-[#00F000] focus:border-[#00F000]"
//                   />
//                 </motion.div>

//                 {/* MESSAGE */}
//                 <motion.div variants={itemVariants}>
//                   <textarea
//                     placeholder="Message"
//                     rows={4}
//                     className="w-full p-3 border border-gray-300 rounded-md outline-none transition resize-none focus:ring-2 focus:ring-[#00F000] focus:border-[#00F000]"
//                   ></textarea>
//                 </motion.div>

//                 {/* BUTTON */}
//                 <motion.button
//                   variants={itemVariants}
//                   type="submit"
//                   whileHover={{
//                     scale: 1.03,
//                     boxShadow: "0 0 15px rgba(0, 240, 0, 0.4)",
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   className="px-8 py-3 rounded-md text-white text-lg font-semibold transition duration-300 shadow-lg w-full md:w-auto"
//                   style={{ backgroundColor: AccentColor }}
//                 >
//                   Send Message
//                 </motion.button>
//               </form>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// import { Phone, Mail, MapPin } from "lucide-react";

// export function ContactPage() {
//   return (
//     <section className="flex flex-col md:flex-row justify-between items-start gap-10 p-8 md:p-16 bg-white text-gray-800">
//       {/* Left: Contact Form */}
//       <div className="flex-1">
//         <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>
//         <p className="text-gray-500 mb-8">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
//           luctus nec ullamcorper mattis, pulvinar dapibus leo.
//         </p>

//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <input
//             type="text"
//             placeholder="Subject"
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <textarea
//             rows="4"
//             placeholder="Type Here..."
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           ></textarea>

//           <button
//             type="submit"
//             className="bg-orange-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors w-full md:w-auto"
//           >
//             Send Now
//           </button>
//         </form>
//       </div>

//       {/* Right: Contact Info */}
//       <div className="flex flex-col gap-6 w-full md:w-1/3">
//         <div className="flex items-center gap-4 bg-gray-50 rounded-xl shadow-sm p-6">
//           <Phone className="text-orange-500 w-8 h-8" />
//           <div>
//             <p className="font-semibold">Phone Number</p>
//             <p className="text-gray-600">207-8767-452</p>
//           </div>
//         </div>

//         <div className="flex items-center gap-4 bg-gray-50 rounded-xl shadow-sm p-6">
//           <Mail className="text-orange-500 w-8 h-8" />
//           <div>
//             <p className="font-semibold">Email Address</p>
//             <p className="text-gray-600">support@yoursite.com</p>
//           </div>
//         </div>

//         <div className="flex items-center gap-4 bg-gray-50 rounded-xl shadow-sm p-6">
//           <MapPin className="text-orange-500 w-8 h-8" />
//           <div>
//             <p className="font-semibold">Our Location</p>
//             <p className="text-gray-600">
//               2443 Oak Ridge Omaha, QA 45065
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { Phone, Mail, MapPin } from "lucide-react";

// export function ContactPage() {
//   return (
//     <section className="bg-white min-h-screen flex items-center py-24 px-6 md:px-20">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* LEFT: Get In Touch Form */}
//         <div>
//           <h2 className="text-3xl font-semibold mb-3 text-gray-900">
//             Get In Touch
//           </h2>
//           <p className="text-gray-500 mb-8">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//             tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//           </p>

//           <form className="space-y-6">
//             {/* Inputs */}
//             <div className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
//               />
//             </div>

//             {/* Message */}
//             <textarea
//               rows="4"
//               placeholder="Type Here..."
//               className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
//             ></textarea>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="bg-[#00F000] text-black font-medium px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
//             >
//               Send Now
//             </button>
//           </form>

//         </div>

//         {/* RIGHT: Contact Details */}
//         <div className="flex flex-col gap-6">
//           <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
//             <Phone className="text-orange-500 w-7 h-7" />
//             <div>
//               <p className="font-semibold text-gray-800">Phone Number</p>
//               <p className="text-gray-600">207-8767-452</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
//             <Mail className="text-orange-500 w-7 h-7" />
//             <div>
//               <p className="font-semibold text-gray-800">Email Address</p>
//               <p className="text-gray-600">support@yoursite.com</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
//             <MapPin className="text-orange-500 w-7 h-7" />
//             <div>
//               <p className="font-semibold text-gray-800">Our Location</p>
//               <p className="text-gray-600">
//                 2443 Oak Ridge Omaha, QA 45065
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { Phone, Mail, MapPin } from "lucide-react";

// const inputClasses =
//   "w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none";

// const contactInfo = [
//   {
//     icon: Phone,
//     title: "Phone Number",
//     value: "207-8767-452",
//   },
//   {
//     icon: Mail,
//     title: "Email Address",
//     value: "support@yoursite.com",
//   },
//   {
//     icon: MapPin,
//     title: "Our Location",
//     value: "2443 Oak Ridge Omaha, QA 45065",
//   },
// ];

// function InputField({ type = "text", placeholder }: { type?: string; placeholder: string }) {
//   return <input type={type} placeholder={placeholder} className={inputClasses} />;
// }

// function InfoCard({ Icon, title, value }: { Icon: any; title: string; value: string }) {
//   return (
//     <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
//       <Icon className="text-[#00F000] w-7 h-7" />
//       <div>
//         <p className="font-semibold text-gray-800">{title}</p>
//         <p className="text-gray-600">{value}</p>
//       </div>
//     </div>
//   );
// }

// export function ContactPage() {
//   return (
//     <section className="bg-white min-h-screen flex items-center py-24 px-6 md:px-20">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* LEFT: Get In Touch Form */}
//         <div>
//           <h2 className="text-3xl font-semibold mb-3 text-gray-900">Get In Touch</h2>
//           <p className="text-gray-500 mb-8">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
//             ullamcorper mattis, pulvinar dapibus leo.
//           </p>

//           <form className="space-y-6">
//             <div className="space-y-4">
//               <InputField placeholder="Full Name" />
//               <InputField type="email" placeholder="Email" />
//               <InputField placeholder="Subject" />
//             </div>

//             <textarea
//               rows={4}
//               placeholder="Type Here..."
//               className={inputClasses}
//             ></textarea>

//             <button
//               type="submit"
//               className="bg-[#00F000] text-black font-medium px-6 py-3 rounded-lg hover:bg-[#00F000] transition-colors"
//             >
//               Send Now
//             </button>
//           </form>
//         </div>

//         {/* RIGHT: Contact Details */}
//         <div className="flex flex-col gap-6">
//           {contactInfo.map(({ icon: Icon, title, value }) => (
//             <InfoCard key={title} Icon={Icon} title={title} value={value} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import { Phone, Mail, MapPin } from "lucide-react";

// const inputClasses =
//   "w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none";

// const contactInfo = [
//   { icon: Phone, title: "Phone Number", value: "207-8767-452" },
//   { icon: Mail, title: "Email Address", value: "support@yoursite.com" },
//   { icon: MapPin, title: "Our Location", value: "2443 Oak Ridge Omaha, QA 45065" },
// ];

// function InputField({
//   type = "text",
//   placeholder,
// }: {
//   type?: string;
//   placeholder: string;
// }) {
//   return <input type={type} placeholder={placeholder} className={inputClasses} />;
// }

// function InfoCard({
//   Icon,
//   title,
//   value,
// }: {
//   Icon: any;
//   title: string;
//   value: string;
// }) {
//   return (
//     <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
//       <Icon className="text-orange-500 w-7 h-7" />
//       <div>
//         <p className="font-semibold text-gray-800">{title}</p>
//         <p className="text-gray-600">{value}</p>
//       </div>
//     </div>
//   );
// }

// export function ContactPage() {
//   return (
//     <section className="bg-white min-h-screen flex flex-col items-center py-24 px-6 md:px-20">
//       {/* SECTION HEADING */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
//         <p className="text-gray-500 max-w-2xl mx-auto">
//           We’d love to hear from you. Fill out the form below or reach out using the contact details.
//         </p>
//       </div>

//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* LEFT: Get In Touch Form */}
//         <div>

//           <form className="space-y-6">
//             <div className="space-y-4">
//               <InputField placeholder="Full Name" />
//               <InputField type="email" placeholder="Email" />
//               <InputField placeholder="Subject" />
//             </div>

//             <textarea
//               rows={4}
//               placeholder="Type Here..."
//               className={inputClasses}
//             ></textarea>

//             <button
//               type="submit"
//               className="bg-[#00F000] text-black font-medium px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
//             >
//               Send Now
//             </button>
//           </form>
//         </div>

//         {/* RIGHT: Contact Details */}
//         <div className="flex flex-col gap-6">
//           {contactInfo.map(({ icon: Icon, title, value }) => (
//             <InfoCard key={title} Icon={Icon} title={title} value={value} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import { Phone, Mail, MapPin } from "lucide-react";

// const inputClasses =
//   "w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none";

// const contactInfo = [
//   { icon: Phone, title: "Phone Number", value: "207-8767-452" },
//   { icon: Mail, title: "Email Address", value: "support@yoursite.com" },
//   { icon: MapPin, title: "Our Location", value: "2443 Oak Ridge Omaha, QA 45065" },
// ];

// function InputField({
//   type = "text",
//   placeholder,
// }: {
//   type?: string;
//   placeholder: string;
// }) {
//   return <input type={type} placeholder={placeholder} className={inputClasses} />;
// }

// function InfoCard({
//   Icon,
//   title,
//   value,
// }: {
//   Icon: any;
//   title: string;
//   value: string;
// }) {
//   return (
//     <div className="relative flex items-center justify-between bg-white rounded-2xl shadow-sm border border-gray-100 p-6 transition hover:shadow-md overflow-visible">
//       {/* Glowing left border */}
//       {/* <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#00FF00] rounded-l-2xl shadow-[0_0_15px_#00FF00] z-20" /> */}
//       {/* Shifted content */}
//       <div className="flex items-center gap-4 ml-5">
//         <Icon className="text-[#00F000] w-6 h-6" />
//         <div>
//           <p className="font-semibold text-gray-900">{title}</p>
//           <p className="text-gray-600">{value}</p>
//         </div>
//       </div>

//       {/* Right glowing dot */}
//       <div className="w-3 h-3 rounded-full bg-[#00F000] shadow-[0_0_8px_#00F000]" />
//     </div>
//   );
// }

// export function ContactPage() {
//   return (
//     <section id='contact' className="bg-white min-h-screen flex flex-col items-center py-24 px-6 md:px-20">
//       {/* SECTION HEADING */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>

//       </div>

//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12" style={{ gap: '40px' }}>
//         {/* LEFT: Get In Touch Form (VERTICAL LAYOUT) */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-3xl font-bold mb-5 text-gray-900">Get In Touch</h2>
//           <p className="text-gray-500 mb-8">
//             Please use the form below to send us a message. We look forward
//             to hearing from you and will get back to you shortly
//           </p>

//           <form className="flex flex-col gap-5" style={{ gap: '10px' }}>
//             <div className="flex gap-4">
//               <InputField placeholder="First Name" />
//               <InputField placeholder="Last Name" />
//             </div>

//             <InputField type="email" placeholder="Email" />
//             <InputField placeholder="Subject" />

//             <textarea
//               rows={3}
//               placeholder="Type Here..."
//               className={inputClasses}
//             ></textarea>

//             <button
//               type="submit"
//               className="bg-[#00F000] text-black font-medium px-6 py-3 rounded-lg hover:bg-[#00F000] transition-colors mt-2"
//             >
//               Send Now
//             </button>
//           </form>
//         </div>

//         {/* RIGHT: Contact Details */}
//         <div className="flex flex-col gap-6">
//           {contactInfo.map(({ icon: Icon, title, value }) => (
//             <InfoCard key={title} Icon={Icon} title={title} value={value} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { Phone, Mail, MapPin, Bold } from "lucide-react";

const inputClasses =
  "w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none";

const contactInfo = [
  { icon: Phone, title: "Phone Number", value: "207-8767-452" },
  { icon: Mail, title: "Email Address", value: "support@yoursite.com" },
  { icon: MapPin, title: "Our Location", value: "2443 Oak Ridge Omaha, QA 45065" },
];

function InputField({
  type = "text",
  placeholder,
}: {
  type?: string;
  placeholder: string;
}) {
  return <input type={type} placeholder={placeholder} className={inputClasses} />;
}

function InfoCard({
  Icon,
  title,
  value,
}: {
  Icon: any;
  title: string;
  value: string;
}) {
  return (
    <div className="relative flex items-center justify-between bg-white rounded-2xl shadow-sm border border-gray-100 p-6 transition hover:shadow-md overflow-visible">
      {/* Glowing left border */}
      {/* <div className="absolute left-0 top-1 bottom-0 w-[4px] bg-[#00F000] rounded-l-2xl shadow-[0_0_15px_#00F000] z-20" /> */}

      {/* Content */}
      <div className="flex items-center gap-4 ml-5">
        <Icon className="text-[#00F000] w-6 h-6" />
        <div>
          <p className="font-semibold text-gray-900">{title}</p>
          <p className="text-gray-600">{value}</p>
        </div>
      </div>

      {/* Right glowing dot */}
      <div className="w-3 h-3 rounded-full bg-[#00F000] shadow-[0_0_8px_#00F000]" />
    </div>
  );
}

export function ContactPage() {
  return (
    <section
      id="contact"
      className="bg-white min-h-screen flex flex-col items-center py-24 px-6 md:px-20"
    >
      {/* SECTION HEADING */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-[#00F000]" style={{ fontWeight: "bold" }}>Contact Us</h1>
      </div>

      <div
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12"
        style={{ gap: "40px" }}
      >
        {/* LEFT: Get In Touch Form */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-5 text-gray-900" style={{ fontWeight: "bold" }}>Get In Touch</h1>
          <p className="text-gray-500 mb-8">
            Please use the form below to send us a message. We look forward
            to hearing from you and will get back to you shortly.
          </p>

          <div className="flex justify-left w-full gap-5" >
            <form className="flex flex-col gap-5 w-full max-w-md" style={{ gap: "10px" }}>
              <div className="flex gap-4">
                <InputField placeholder="First Name" />
                <InputField placeholder="Last Name" />
              </div>

              <InputField type="email" placeholder="Email" />
              <InputField placeholder="Subject" />

              <textarea
                rows={3}
                placeholder="Type Here..."
                className={inputClasses}
              ></textarea>

              <button
                type="submit"
                className="bg-[#00F000] text-black font-medium px-6 py-3 rounded-lg hover:bg-[#00F000]/90 transition-colors mt-2"
              >
                Send Now
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT: Contact Details */}
        <div className="flex flex-col gap-6">
          {contactInfo.map(({ icon: Icon, title, value }) => (
            <InfoCard key={title} Icon={Icon} title={title} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}
