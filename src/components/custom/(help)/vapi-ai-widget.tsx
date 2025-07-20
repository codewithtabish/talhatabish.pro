// 'use client';

// import { useEffect } from "react";

// export default function VapiWidget() {
//   useEffect(() => {
//     if (typeof window !== "undefined" && !window.vapiWidgetLoaded) {
//       const script = document.createElement("script");
//       script.src = "https://cdn.jsdelivr.net/npm/@vapi-ai/widget@latest/dist/index.global.js";
//       script.async = true;
//       script.onload = () => {
//         window.vapiWidgetLoaded = true;
//         // @ts-ignore
//         if (window.VapiWidget) {
//           // @ts-ignore
//           window.VapiWidget.init({
//             apiKey: process.env.NEXT_PUBLIC_VAPI_API_KEY || "",
//             assistantId: process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || "",
//             showButton: false,
//             onReady: () => {
//               window.vapiWidgetReady = true;
//               console.log("Vapi widget is ready!");
//             }
//           });
//           console.log("VapiWidget.init called");
//         } else {
//           console.log("VapiWidget not found on window");
//         }
//       };
//       script.onerror = () => {
//         console.error("Failed to load Vapi widget script");
//       };
//       document.body.appendChild(script);
//     }
//   }, []);

//   return null;
// }
