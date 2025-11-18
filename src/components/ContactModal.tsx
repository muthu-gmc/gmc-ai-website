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
//                     href="mailto:info@greenmenconsulting.com"
//                     className="text-[#00F000] hover:text-[#00F000]/80 transition-colors font-medium"
//                   >
//                     info@greenmenconsulting.com
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
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
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

          {/* Modal container */}
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
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="text-white text-2xl pr-12">Get in Touch</h2>
                <p className="text-white/80 text-sm mt-2">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Scrollable Form Area */}
              <div className="flex-1 overflow-y-auto">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSd0BYDuEunZK3KUOLY3NMHG-ctO9MycvKcjd75uPpUjNLengA/viewform?embedded=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full h-full"
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Prefer email?{" "}
                  <a
                    href="mailto:info@greenmenconsulting.com"
                    className="text-[#00F000] hover:text-[#00F000]/80 transition-colors font-medium"
                  >
                    info@greenmenconsulting.com
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
