// import { motion, AnimatePresence } from "motion/react";
// import { X } from "lucide-react";
// import { useEffect } from "react";

// interface ContactModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export function ContactModal({ isOpen, onClose }: ContactModalProps) {
//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);

//   // Close on Escape key
//   useEffect(() => {
//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === "Escape" && isOpen) {
//         onClose();
//       }
//     };
//     window.addEventListener("keydown", handleEscape);
//     return () => window.removeEventListener("keydown", handleEscape);
//   }, [isOpen, onClose]);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//           />

//           {/* Modal */}
//           <div className="fixed inset-0 z-50 grid place-items-center p-4 pointer-events-none">
//             <motion.div
//               // className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden pointer-events-auto relative"
//              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden pointer-events-auto relative mx-auto flex flex-col"
//               initial={{ opacity: 0, scale: 0.95, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 20 }}
//               transition={{ duration: 0.2 }}
//             >
//               {/* Header */}
//               <div className="relative bg-gradient-to-br from-[#4A5565] to-[#5A6575] px-8 py-6 border-b border-gray-200">
//                 <div className="absolute top-4 right-4">
//                   <button
//                     onClick={onClose}
//                     className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
//                     aria-label="Close modal"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                 </div>
//                 <h2 className="text-white text-2xl pr-12">Get in Touch</h2>
//                 <p className="text-white/80 text-sm mt-2">
//                   Fill out the form below and we'll get back to you within 24 hours.
//                 </p>
//               </div>

//               {/* Google Form Embed */}
//               <div className="overflow-y-auto" style={{ height: "calc(90vh - 140px)", maxHeight: "600px" }}>
//                 <iframe
//                   src="https://docs.google.com/forms/d/e/1FAIpQLSd0BYDuEunZK3KUOLY3NMHG-ctO9MycvKcjd75uPpUjNLengA/viewform?embedded=true"
//                   width="100%"
//                   height="100%"
//                   frameBorder="0"
//                   marginHeight={0}
//                   marginWidth={0}
//                   className="w-full"
//                   title="Contact Form"
//                 >
//                   Loading…
//                 </iframe>
//               </div>

//               {/* Footer with alternate contact info */}
//               <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
//                 <p className="text-sm text-gray-600">
//                   Prefer email?{" "}
//                   <a
//                     href="mailto:info@greenmenconsulting.ai"
//                     className="text-[#00F000] hover:text-[#00F000]/80 transition-colors font-medium"
//                   >
//                     info@greenmenconsulting.ai
//                   </a>
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }


import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("Email");
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState<string[]>([]);
  const [bestTime, setBestTime] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // ------- Submit Handler -------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();

    formData.append("entry.1444566559", fullName);
    formData.append("entry.1789569696", email);
    formData.append("entry.1316306555", phone);
    formData.append("entry.1200144285", contactMethod);
    formData.append("entry.922822426", inquiryType);
    formData.append("entry.1586949769", message);
    hearAboutUs.forEach(option => {
      formData.append("entry.728470346", option);
    });
    if (bestTime) {
      const [hour, minute] = bestTime.split(":");
      formData.append("entry.1713425937_hour", hour);
      formData.append("entry.1713425937_minute", minute);
    }

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSd0BYDuEunZK3KUOLY3NMHG-ctO9MycvKcjd75uPpUjNLengA/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      setSuccess(true);

      // Reset fields
      setFullName("");
      setEmail("");
      setPhone("");
      setContactMethod("Email");
      setInquiryType("");
      setMessage("");
      setHearAboutUs([]);
      setBestTime("");

    } catch (error) {
      console.error(error);
      alert("Error sending your message. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 grid place-items-center p-4">
            <motion.div
              className="
                bg-white rounded-2xl shadow-2xl w-full max-w-2xl
                max-h-[90vh] overflow-hidden pointer-events-auto
                relative mx-auto flex flex-col
              "
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-br from-[#4A5565] to-[#5A6575] px-8 py-6 border-b border-gray-200">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="text-white text-2xl pr-12">Get in Touch</h2>
                <p className="text-white/80 text-sm mt-2">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-8">
                {success ? (
                  <div className="text-center text-green-600 text-lg font-semibold">
                    🎉 Your message has been sent successfully!
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#00F000]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#00F000]"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#00F000]"
                      />
                    </div>

                    {/* Contact Method */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Preferred Method of Contact
                      </label>
                      <select
                        value={contactMethod}
                        onChange={(e) => setContactMethod(e.target.value)}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#00F000]"
                      >
                        <option>Email</option>
                        <option>Phone</option>
                        <option>Either</option>
                      </select>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium mb-1">Nature of Inquiry</label>
                      <select
                        required
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#00F000]"
                      >
                        <option value="">Select...</option>
                        <option>General Question</option>
                        <option>Technical Support</option>
                        <option>Billing Inquiry</option>
                        <option>Partnership Opportunity</option>
                        <option>Feedback</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Message / Details of Inquiry
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#00F000]"
                      ></textarea>
                    </div>

                    {/* How did you hear about us? */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        How did you hear about us?
                      </label>
                      <div className="space-y-2">
                        {["Search Engine (Google, Bing, etc.)", "Social Media (Facebook, X, Instagram, etc.)", "Referral/Word of Mouth", "Online Advertisement", "Other"].map(option => (
                          <label key={option} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              value={option}
                              checked={hearAboutUs.includes(option)}
                              onChange={(e) => {
                                const value = e.target.value;
                                setHearAboutUs(prev =>
                                  prev.includes(value)
                                    ? prev.filter(v => v !== value)
                                    : [...prev, value]
                                );
                              }}
                              className="h-4 w-4 text-[#00F000] border-gray-300 rounded focus:ring-2 focus:ring-[#00F000]"
                            />
                            <span className="text-sm">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Best time to contact */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Best Time for Us to Contact You (if phone is preferred)
                      </label>
                      <input
                        type="time"
                        value={bestTime}
                        onChange={(e) => setBestTime(e.target.value)}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#00F000]"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#00F000] text-black py-3 rounded-lg font-medium hover:bg-[#00F000]/80 transition"
                    >
                      {submitting ? "Submitting..." : "Submit"}
                    </button>
                  </form>
                )}
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Prefer email?{" "}
                  <a
                    href="mailto:info@greenmenconsulting.ai"
                    className="text-[#00F000] hover:text-[#00F000]/80 font-medium"
                  >
                    info@greenmenconsulting.ai
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
