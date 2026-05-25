"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Feed } from "./components/Feed";
import { Stories } from "./components/Stories";
import { Sidebar } from "./components/Sidebar";
import { CreatePost } from "./components/CreatePost";
import { TrendingSidebar } from "./components/TrendingSidebar";
import { MobileMenu } from "@/components/MobileMenu";
import { Sparkles, RefreshCw } from "lucide-react";

export default function UserDashboard() {
  const { data: session, status } = useSession();
  const [feedKey, setFeedKey] = useState(0);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-950">
        {/* Premium Loading Screen */}
        <div className="relative antialiased">
          {/* Animated gradient orbs - Enhanced blur and color */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 bg-purple-500/20 rounded-full blur-[90px] animate-pulse" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-pink-500/20 rounded-full blur-[70px] animate-pulse transition-all" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Spinner - Refined */}
          <div className="relative flex justify-center items-center">
            <div className="w-20 h-20 border-2 border-purple-100 dark:border-purple-900 border-t-purple-600 dark:border-t-purple-400 rounded-full animate-spin shadow-lg" />
          </div>

          {/* Loading text - Cleaned and capitalized */}
          <div className="mt-8 text-center">
            <p className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-pulse tracking-tight">
              Initializing Your Workspace
            </p>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-pink-600 dark:bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!session) {
    redirect("/login");
  }

  const handlePostCreated = (newPost: any) => {
    // Triggers Feed component updates via callback
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-white/70 dark:bg-[#0a0a0c] text-gray-950 dark:text-gray-100 selection:bg-purple-600/10 antialiased">
      
      {/* Premium Ambient Background Glows - Refined Position and Intensity */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] bg-purple-400/10 dark:bg-purple-700/5 rounded-full blur-[150px] animate-blob" />
        <div className="absolute bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-pink-300/10 dark:bg-pink-600/5 rounded-full blur-[130px] animate-blob animation-delay-2000" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-300/10 dark:bg-blue-600/5 rounded-full blur-[120px] animate-blob animation-delay-4000" />
      </div>

      {/* Subtle floating particles - Cleaned up */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-20 z-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-300 dark:bg-purple-600 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${20 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      {/* Mobile Menu */}
      <MobileMenu />

      {/* Main App Layout Shell */}
      <div className="relative pt-[60px] lg:pt-0 z-10">
        
        {/* ==================== LEFT SIDEBAR - PREMIUM FINISH ==================== */}
        <aside className="hidden lg:block fixed left-0 top-0 w-[280px] xl:w-[320px] h-screen pt-8 pb-8 pl-8 z-20 border-r border-gray-100 dark:border-gray-800/40 bg-white/20 dark:bg-transparent backdrop-blur-lg">
          <div className="h-full overflow-y-auto pr-6 custom-scrollbar">
            <div className="animate-slideInLeft">
              <Sidebar user={session.user} />
            </div>
          </div>
        </aside>

        {/* ==================== RIGHT SIDEBAR - PREMIUM FINISH ==================== */}
        <aside className="hidden lg:block fixed right-0 top-0 w-[280px] xl:w-[320px] h-screen pt-8 pb-8 pr-8 z-20 border-l border-gray-100 dark:border-gray-800/40 bg-white/20 dark:bg-transparent backdrop-blur-lg">
          <div className="h-full overflow-y-auto pl-6 custom-scrollbar">
            <div className="animate-slideInRight">
              <TrendingSidebar />
            </div>
          </div>
        </aside>

        {/* ==================== MAIN CONTENT AREA ==================== */}
        <main className="lg:ml-[280px] xl:ml-[320px] lg:mr-[280px] xl:mr-[320px]">
          
          {/* Welcome Banner - COMPRESSED, PADDING STRIPPED & BRIGHTENED (PREMIUM UI) */}
          <div className="hidden lg:block fixed top-0 left-[280px] xl:left-[320px] right-[280px] xl:right-[320px] z-30 transition-all duration-300 border-b border-gray-100 dark:border-gray-800/40 bg-white/70 dark:bg-[#0a0a0c]/80 backdrop-blur-2xl">
            {/* Minimal vertical padding for wrapper */}
            <div className="max-w-[800px] mx-auto py-1 px-4">
              <div className="animate-slideInDown">
                {/* 
                   Premium Crystalline Card: 
                   1. Removed outer padding/margins on parent to look 'flush'.
                   2. interpretation of 'h-0' is "minimal vertical space", achieved by tight internal padding (p-1.5).
                   3. Changed background color from dark gradient to a hyper-bright, translucent glow.
                */}
                <div className="relative overflow-hidden bg-gradient-to-r from-purple-100/70 via-pink-50/70 to-white/70 dark:from-purple-900/40 dark:via-gray-900/60 dark:to-gray-950/40 rounded-xl p-1.5 border border-purple-200/50 dark:border-purple-800/30 shadow-inner">
                  {/* Premium Shimmer Refined */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer opacity-80" />
                  {/* Background Orb Refined */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-2xl" />
                  
                  {/* Flex container with reduced gap */}
                  <div className="relative flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Icon Refined */}
                      <div className="p-2 bg-white dark:bg-gray-800 border border-purple-200 dark:border-purple-800 backdrop-blur-xl rounded-lg shadow-sm">
                        <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        {/* Title Refined: font-extrabold, tight spacing, text color */}
                        <h1 className="text-lg font-extrabold tracking-tighter text-gray-950 dark:text-gray-50">
                          Welcome back, {session.user.name || session.user.username} 👋
                        </h1>
                        {/* Subtitle color adjusted for high contrast */}
                        <p className="text-gray-600 dark:text-gray-400 text-xs font-medium -mt-0.5">
                          Discover what's trending in your community today.
                        </p>
                      </div>
                    </div>
                    
                    {/* Premium Refresh Button */}
                    <button
                      onClick={() => setFeedKey(prev => prev + 1)}
                      className="group flex items-center gap-1.5 px-4 py-1.5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-purple-200/60 dark:border-purple-800 backdrop-blur-xl rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95 text-gray-800 dark:text-gray-200"
                    >
                      <RefreshCw className="h-4 w-4 text-purple-600 dark:text-purple-400 group-hover:rotate-180 transition-transform duration-700" />
                      <span className="font-semibold text-xs tracking-tight">Refresh Feed</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Main Content - Adjusted pt-2 lg:pt-[114px] to pt-2 lg:pt-14 (since banner has negligible height) */}
          <div className="max-w-[800px] mx-auto px-6 pb-12 pt-2 lg:pt-14 relative">
            
            {/* Stories Section */}
            <div className="mb-6 lg:mb-8 animate-slideInUp" style={{ animationDelay: '0.1s' }}>
              <Stories />
            </div>

            {/* Create Post Section */}
            <div className="mb-6 lg:mb-8 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
              <CreatePost user={session.user} onPostCreated={handlePostCreated} />
            </div>

            {/* Dynamic Feed */}
            <div className="animate-slideInUp" style={{ animationDelay: '0.3s' }}>
              <Feed key={feedKey} userId={session.user.id} />
            </div>
          </div>
        </main>
      </div>

      {/* Floating Scroll to Top Action Button - Refined */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 lg:bottom-10 lg:right-[calc(280px+3rem)] xl:right-[calc(320px+3rem)] p-3.5 bg-white dark:bg-gray-900/80 border border-purple-200 dark:border-purple-800 backdrop-blur-lg text-purple-600 dark:text-purple-400 rounded-full shadow-xl hover:shadow-2xl hover:border-purple-300 hover:scale-110 active:scale-95 transition-all duration-300 z-50 group antialiased"
        aria-label="Scroll to top"
      >
        <svg
          className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}

// "use client";
// import { useState } from "react";
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
// import { Feed } from "./components/Feed";
// import { Stories } from "./components/Stories";
// import { Sidebar } from "./components/Sidebar";
// import { CreatePost } from "./components/CreatePost";
// import { TrendingSidebar } from "./components/TrendingSidebar";
// import { MobileMenu } from "@/components/MobileMenu";
// import { Sparkles, RefreshCw } from "lucide-react";

// export default function UserDashboard() {
//   const { data: session, status } = useSession();
//   const [feedKey, setFeedKey] = useState(0);

//   if (status === "loading") {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
//         {/* Premium Loading Screen */}
//         <div className="relative">
//           {/* Animated gradient orbs */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-32 h-32 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
//           </div>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-24 h-24 bg-pink-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
//           </div>

//           {/* Spinner */}
//           <div className="relative">
//             <div className="w-20 h-20 border-4 border-purple-200 dark:border-purple-900 border-t-purple-600 dark:border-t-purple-400 rounded-full animate-spin" />
//           </div>
          
//           {/* Loading text */}
//           <div className="mt-6 text-center">
//             <p className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-pulse">
//               Loading your feed...
//             </p>
//             <div className="flex items-center justify-center gap-1 mt-2">
//               <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full animate-bounce" />
//               <div className="w-2 h-2 bg-pink-600 dark:bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
//               <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!session) {
//     redirect("/login");
//   }

//   const handlePostCreated = (newPost: any) => {
//     // This will trigger the Feed component to update via the callback
//     // The Feed component already has handleNewPost function
//   };

//   return (
//     <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30 dark:from-gray-950 dark:via-purple-950/20 dark:to-gray-900">
//       {/* Animated Background Gradients */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-blob" />
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
//       </div>

//       {/* Floating particles */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-20 z-0">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-purple-400 dark:bg-purple-600 rounded-full animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${10 + Math.random() * 20}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Mobile Menu */}
//       <MobileMenu />

//       {/* Main Container */}
//       <div className="relative pt-[60px] lg:pt-0 z-10">
        
//         {/* ==================== LEFT SIDEBAR - FIXED ==================== */}
//         <aside className="hidden lg:block fixed left-0 top-0 w-[280px] xl:w-[320px] h-screen pt-0 pb-8 pl-6 z-20">
//           <div className="h-full overflow-y-auto pr-4 custom-scrollbar">
//             <div className="animate-slideInLeft">
//               <Sidebar user={session.user} />
//             </div>
//           </div>
//         </aside>

//         {/* ==================== RIGHT SIDEBAR - FIXED ==================== */}
//         <aside className="hidden lg:block fixed right-0 top-0 w-[280px] xl:w-[320px] h-screen pt-0 pb-8 pr-6 z-20">
//           <div className="h-full overflow-y-auto pl-4 custom-scrollbar">
//             <div className="animate-slideInRight">
//               <TrendingSidebar />
//             </div>
//           </div>
//         </aside>

//         {/* ==================== MAIN CONTENT - FLEXIBLE/SCROLLABLE ==================== */}
//         <main className="lg:ml-[280px] xl:ml-[320px] lg:mr-[280px] xl:mr-[320px]">
          
//           {/* Welcome Banner - Desktop Only (Fixed to top) */}
//           <div className="hidden lg:block fixed top-0 left-[280px] xl:left-[320px] right-[280px] xl:right-[320px] z-30 pt-8 pb-4 bg-gradient-to-br from-gray-50/90 via-purple-50/90 to-pink-50/90 dark:from-gray-950/90 dark:via-purple-950/90 dark:to-gray-900/90 backdrop-blur-md">
//             <div className="max-w-[800px] mx-auto px-3 sm:px-4">
//               <div className="animate-slideInDown">
//                 <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-700 dark:via-pink-700 dark:to-purple-700 rounded-2xl p-6 shadow-2xl">
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
//                   <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
//                   <div className="relative flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg">
//                         <Sparkles className="h-8 w-8 text-white" />
//                       </div>
//                       <div>
//                         <h1 className="text-2xl font-bold text-white mb-1">
//                           Welcome back, {session.user.name || session.user.username}! 👋
//                         </h1>
//                         <p className="text-purple-100 text-sm">
//                           Discover what's trending and connect with your community
//                         </p>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => setFeedKey(prev => prev + 1)}
//                       className="group flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
//                     >
//                       <RefreshCw className="h-4 w-4 text-white group-hover:rotate-180 transition-transform duration-500" />
//                       <span className="text-white font-medium text-sm">Refresh Feed</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Scrolling Main Content (with top padding on desktop to clear the fixed banner) */}
//           <div className="max-w-[800px] mx-auto px-3 sm:px-4 pb-4 lg:pb-8 pt-4 lg:pt-[160px] relative">
            
//             {/* Stories */}
//             <div className="mb-4 lg:mb-6 animate-slideInUp" style={{ animationDelay: '0.1s' }}>
//               <Stories />
//             </div>

//             {/* Create Post */}
//             <div className="mb-4 lg:mb-6 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
//               <CreatePost user={session.user} onPostCreated={handlePostCreated} />
//             </div>

//             {/* Feed */}
//             <div className="animate-slideInUp" style={{ animationDelay: '0.3s' }}>
//               <Feed key={feedKey} userId={session.user.id} />
//             </div>

//           </div>
//         </main>
//       </div>

//       {/* Scroll to top button */}
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className="fixed bottom-6 right-6 lg:bottom-8 lg:right-[calc(280px+2rem)] xl:right-[calc(320px+2rem)] p-3 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-110 active:scale-95 transition-all duration-300 z-50 group"
//         aria-label="Scroll to top"
//       >
//         <svg
//           className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//         </svg>
//       </button>
//     </div>
//   );
// }
