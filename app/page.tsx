"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { gradient } from "@/components/Gradient";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-[#F2F3F5] font-inter overflow-hidden">
        <main className="flex flex-col justify-center h-[90%] static md:fixed w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[300px] px-4 md:px-20 md:py-0">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1], 
            }}
            className="relative md:ml-[4px] md:mb-[62px] font-extrabold text-[14vw] md:text-[125px] font-inter text-[#1E2B3A] leading-[0.9] tracking-[4px] z-[100] p-600"
          >
          <span className="mb-[41px]">
              faça a diferença
            </span>
            <br/>
            <span className="mb-[41px]"> 
              ajudando uma &nbsp;
            </span>
            <span className="text-[#BA181B] mt-6">
              ONG,
            </span>
            <br/>
            <span className="mb-[41px] mt-45"> 
              Seja esperança
            </span>
            <span className="font-inter text-[#407BBF]"></span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="flex flex-row justify-center z-20 mx-0 mb-0 mt-8 md:mt-0 md:mb-[35px] max-w-2xl md:space-x-8"
          >
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                O que é?
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
                Full access to our platform, including all questions and
                solutions.
              </p>
            </div>
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                Por que esse site foi feito?
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
                Join a community of like-minded individuals, and learn from each
                other.
              </p>
            </div>
          </motion.div>

          <div className="flex gap-[16px] mt-12  md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <Link
                href="/ong"
                className="group rounded-full pl-[42px] min-w-[380px] pr-12 py-7 text-[32px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75 tracking-[3px]"
                style={{
                  boxShadow:
                    "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                }}
              >
                <span className="w-12 h-12 rounded-full bg-[#407BBF] flex items-center justify-center">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#000000" stroke="none">
                  <path d="M1299 4494 c-42 -7 -120 -29 -174 -48 -515 -184 -833 -720 -751
                  -1266 24 -159 85 -323 166 -450 l29 -45 -36 -90 c-68 -169 -57 -305 38 -485
                  87 -162 260 -410 363 -518 l31 -33 1 -122 c2 -233 63 -379 222 -529 158 -148
                  392 -244 696 -284 137 -18 488 -15 610 6 53 9 86 9 145 0 113 -18 450 -25 568
                  -11 309 36 559 135 720 285 163 152 225 298 227 533 l1 122 31 33 c157 165
                  388 527 430 672 27 96 16 218 -29 331 l-36 90 23 36 c44 66 103 193 130 279
                  87 276 68 573 -55 846 -110 247 -353 480 -604 581 -142 57 -226 74 -386 80
                  -172 7 -273 -6 -409 -49 -210 -67 -343 -152 -543 -347 l-147 -144 -148 144
                  c-81 79 -178 165 -217 190 -148 98 -315 167 -473 194 -105 18 -320 18 -423 -1z
                  m-194 -1766 c69 -36 123 -98 243 -285 137 -212 149 -227 196 -227 65 0 75 20
                  96 195 17 143 20 155 45 176 33 29 67 29 101 0 59 -51 84 -361 43 -547 -38
                  -177 -41 -160 36 -239 78 -81 207 -176 331 -242 64 -35 82 -48 68 -53 -124
                  -37 -540 -42 -725 -8 -127 23 -275 67 -372 111 -51 23 -74 43 -128 107 -225
                  267 -376 521 -386 647 -12 147 78 315 202 374 68 33 176 29 250 -9z m3160 8
                  c122 -57 213 -223 203 -372 -5 -78 -61 -195 -176 -369 -402 -603 -1009 -1038
                  -1639 -1171 -576 -122 -1127 -33 -1379 223 -90 91 -136 192 -150 334 -7 68 -6
                  72 12 65 235 -95 456 -136 735 -136 188 0 307 12 479 46 258 53 520 158 710
                  285 106 71 247 200 256 234 3 13 -7 76 -21 141 -33 142 -36 280 -11 424 21
                  118 31 144 62 159 37 16 60 14 89 -12 24 -20 28 -34 44 -169 20 -157 32 -191
                  76 -202 51 -13 75 12 201 204 161 245 206 294 299 328 55 19 155 14 210 -12z
                  m-285 -1446 c-64 -286 -381 -478 -855 -515 l-80 -6 111 48 c268 118 542 298
                  769 506 68 62 75 58 55 -33z"/>
                  </g>
                  </svg>
                </span>
                VEJA AS ONG
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
            </motion.div>
          </div>
        </main>
    {/*
        <div
          className="fixed top-0 right-0 w-[80%] md:w-1/2 h-screen bg-[#1F2B3A]/20"
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
        ></div> 
      <motion.canvas
          initial={{
            filter: "blur(20px)",
          }}
          animate={{
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.075, 0.82, 0.965, 1],
          }}
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
          id="gradient-canvas"
          data-transition-in
          className="z-50 fixed top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-[#c3e4ff]"
        ></motion.canvas>
     */}
        <footer className="h-[60px] bg-[#1D2B3A] fixed bottom-0 z-20 w-full flex flex-row items-center justify-evenly">
          <svg
            className="w-[80px] text-white opacity-80 hidden lg:block"
            viewBox="0 0 559 168"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_19_538)">
              <path
                d="M83.9961 0.276978C37.7471 0.276978 0.253052 37.77 0.253052 84.019C0.253052 130.27 37.7471 167.76 83.9961 167.76C130.25 167.76 167.74 130.27 167.74 84.019C167.74 37.773 130.25 0.280978 83.9951 0.280978L83.9961 0.276978ZM122.4 121.057C120.9 123.517 117.68 124.297 115.22 122.787C95.5581 110.777 70.8061 108.057 41.6561 114.717C38.8471 115.357 36.0471 113.597 35.4071 110.787C34.7641 107.977 36.5171 105.177 39.3331 104.537C71.2331 97.249 98.5961 100.387 120.67 113.877C123.13 115.387 123.91 118.597 122.4 121.057ZM132.65 98.255C130.76 101.327 126.74 102.297 123.67 100.407C101.16 86.571 66.8471 82.564 40.2221 90.646C36.7691 91.689 33.1221 89.743 32.0741 86.296C31.0341 82.843 32.9811 79.203 36.4281 78.153C66.8411 68.925 104.65 73.395 130.5 89.28C133.57 91.17 134.54 95.189 132.65 98.255ZM133.53 74.511C106.54 58.48 62.0101 57.006 36.2411 64.827C32.1031 66.082 27.7271 63.746 26.4731 59.608C25.2191 55.468 27.5531 51.095 31.6941 49.837C61.2751 40.857 110.45 42.592 141.524 61.039C145.254 63.248 146.474 68.055 144.264 71.772C142.064 75.494 137.244 76.721 133.534 74.511H133.53ZM228.09 77.583C213.63 74.135 211.06 71.715 211.06 66.63C211.06 61.826 215.58 58.593 222.31 58.593C228.83 58.593 235.29 61.048 242.07 66.102C242.27 66.255 242.53 66.316 242.78 66.276C243.04 66.238 243.26 66.099 243.41 65.89L250.47 55.938C250.76 55.528 250.68 54.963 250.29 54.65C242.22 48.177 233.14 45.03 222.52 45.03C206.91 45.03 196 54.399 196 67.804C196 82.179 205.41 87.269 221.67 91.198C235.5 94.385 237.84 97.055 237.84 101.827C237.84 107.117 233.12 110.407 225.52 110.407C217.08 110.407 210.19 107.557 202.49 100.897C202.3 100.727 202.04 100.657 201.8 100.667C201.54 100.687 201.31 100.807 201.15 100.997L193.23 110.417C192.9 110.817 192.94 111.397 193.32 111.737C202.28 119.737 213.3 123.957 225.2 123.957C242.02 123.957 252.89 114.767 252.89 100.537C252.92 88.53 245.73 81.88 228.12 77.596L228.09 77.583ZM290.95 63.323C283.66 63.323 277.68 66.195 272.74 72.08V65.456C272.74 64.933 272.32 64.507 271.8 64.507H258.85C258.33 64.507 257.91 64.933 257.91 65.456V139.057C257.91 139.577 258.33 140.007 258.85 140.007H271.8C272.32 140.007 272.74 139.577 272.74 139.057V115.827C277.68 121.357 283.66 124.067 290.95 124.067C304.5 124.067 318.22 113.637 318.22 93.698C318.24 73.755 304.52 63.322 290.96 63.322L290.95 63.323ZM303.16 93.698C303.16 103.847 296.91 110.937 287.95 110.937C279.1 110.937 272.42 103.527 272.42 93.698C272.42 83.868 279.1 76.46 287.95 76.46C296.76 76.459 303.16 83.708 303.16 93.698ZM353.37 63.323C335.92 63.323 322.25 76.759 322.25 93.915C322.25 110.887 335.83 124.177 353.16 124.177C370.67 124.177 384.38 110.787 384.38 93.698C384.38 76.667 370.76 63.325 353.37 63.325V63.323ZM353.37 111.037C344.09 111.037 337.09 103.577 337.09 93.693C337.09 83.764 343.85 76.559 353.16 76.559C362.5 76.559 369.54 84.016 369.54 93.91C369.54 103.837 362.74 111.037 353.37 111.037ZM421.64 64.507H407.39V49.941C407.39 49.419 406.97 48.993 406.45 48.993H393.5C392.98 48.993 392.55 49.419 392.55 49.941V64.507H386.33C385.81 64.507 385.39 64.933 385.39 65.456V76.583C385.39 77.105 385.81 77.532 386.33 77.532H392.55V106.327C392.55 117.957 398.34 123.857 409.77 123.857C414.41 123.857 418.26 122.897 421.89 120.837C422.19 120.677 422.37 120.357 422.37 120.017V109.417C422.37 109.097 422.2 108.787 421.92 108.617C421.64 108.437 421.29 108.427 421 108.577C418.51 109.827 416.1 110.407 413.4 110.407C409.25 110.407 407.39 108.517 407.39 104.297V77.537H421.64C422.16 77.537 422.58 77.111 422.58 76.588V65.462C422.6 64.939 422.18 64.513 421.65 64.513L421.64 64.507ZM471.28 64.564V62.775C471.28 57.512 473.3 55.165 477.82 55.165C480.52 55.165 482.69 55.701 485.12 56.511C485.42 56.605 485.73 56.558 485.97 56.379C486.22 56.2 486.36 55.913 486.36 55.609V44.699C486.36 44.282 486.1 43.913 485.69 43.79C483.13 43.027 479.85 42.244 474.93 42.244C462.98 42.244 456.65 48.978 456.65 61.711V64.451H450.43C449.91 64.451 449.48 64.877 449.48 65.399V76.583C449.48 77.105 449.91 77.532 450.43 77.532H456.65V121.937C456.65 122.467 457.08 122.887 457.6 122.887H470.54C471.07 122.887 471.49 122.467 471.49 121.937V77.535H483.58L502.1 121.937C500 126.597 497.93 127.527 495.11 127.527C492.83 127.527 490.42 126.847 487.97 125.497C487.74 125.377 487.46 125.357 487.22 125.427C486.97 125.517 486.76 125.697 486.66 125.937L482.27 135.567C482.06 136.027 482.24 136.557 482.68 136.797C487.26 139.277 491.39 140.337 496.5 140.337C506.06 140.337 511.35 135.877 516 123.897L538.46 65.86C538.58 65.568 538.54 65.238 538.36 64.979C538.19 64.722 537.9 64.567 537.59 64.567H524.11C523.7 64.567 523.34 64.824 523.21 65.203L509.4 104.637L494.28 65.177C494.14 64.81 493.79 64.567 493.4 64.567H471.28V64.564ZM442.5 64.507H429.55C429.03 64.507 428.6 64.933 428.6 65.456V121.937C428.6 122.467 429.03 122.887 429.55 122.887H442.5C443.02 122.887 443.45 122.467 443.45 121.937V65.46C443.45 64.937 443.03 64.511 442.5 64.511V64.507ZM436.1 38.788C430.97 38.788 426.81 42.94 426.81 48.069C426.81 53.201 430.97 57.358 436.1 57.358C441.23 57.358 445.38 53.201 445.38 48.069C445.38 42.941 441.22 38.788 436.1 38.788ZM549.52 82.668C544.4 82.668 540.41 78.553 540.41 73.556C540.41 68.559 544.45 64.397 549.57 64.397C554.69 64.397 558.68 68.511 558.68 73.504C558.68 78.501 554.64 82.668 549.52 82.668ZM549.57 65.303C544.9 65.303 541.37 69.013 541.37 73.556C541.37 78.097 544.88 81.757 549.52 81.757C554.19 81.757 557.72 78.05 557.72 73.504C557.72 68.963 554.21 65.303 549.57 65.303ZM551.59 74.441L554.17 78.049H551.99L549.67 74.739H547.68V78.049H545.86V68.485H550.12C552.35 68.485 553.81 69.622 553.81 71.536C553.82 73.104 552.91 74.062 551.6 74.441H551.59ZM550.05 70.126H547.68V73.151H550.05C551.23 73.151 551.94 72.572 551.94 71.637C551.94 70.653 551.23 70.126 550.05 70.126Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_19_538">
                <rect width="559" height="168" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="w-[50px] text-white opacity-80 hidden lg:block"
            viewBox="0 0 927 322"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_19_540)">
              <path
                d="M53.328 229.809C57.245 240.204 62.668 249.092 69.598 256.473C76.528 263.855 84.738 269.504 94.228 273.421C103.719 277.338 114.038 279.296 125.186 279.296C136.033 279.296 146.201 277.262 155.692 273.194C165.183 269.126 173.468 263.402 180.548 256.021C187.628 248.639 193.127 239.827 197.044 229.583C200.961 219.339 202.919 207.891 202.919 195.236V0H250.372V316.354H203.371V286.978C192.826 298.125 180.397 306.712 166.086 312.739C151.774 318.764 136.334 321.777 119.763 321.777C102.89 321.777 87.148 318.839 72.535 312.964C57.923 307.089 45.268 298.729 34.573 287.882C23.878 277.035 15.441 264.006 9.265 248.79C3.088 233.575 0 216.628 0 197.947V0H47.453V195.236C47.453 207.891 49.411 219.414 53.328 229.809Z"
                fill="white"
              />
              <path
                d="M332.168 0V115.243C342.713 104.698 354.916 96.338 368.775 90.161C382.634 83.984 397.699 80.896 413.968 80.896C430.841 80.896 446.657 84.059 461.421 90.386C476.184 96.713 488.988 105.3 499.835 116.147C510.682 126.994 519.269 139.798 525.596 154.561C531.923 169.325 535.086 184.992 535.086 201.563C535.086 218.133 531.923 233.725 525.596 248.337C519.269 262.95 510.682 275.68 499.835 286.525C488.988 297.372 476.184 305.959 461.421 312.286C446.657 318.613 430.84 321.776 413.968 321.776C397.698 321.776 382.559 318.688 368.549 312.511C354.539 306.335 342.261 297.974 331.716 287.429V316.353H286.523V0H332.168ZM337.365 232.746C341.432 242.388 347.082 250.824 354.313 258.055C361.544 265.286 369.98 271.011 379.621 275.229C389.263 279.447 399.657 281.556 410.805 281.556C421.652 281.556 431.895 279.447 441.536 275.229C451.177 271.011 459.537 265.287 466.619 258.055C473.699 250.825 479.348 242.388 483.566 232.746C487.784 223.105 489.893 212.711 489.893 201.563C489.893 190.415 487.784 179.945 483.566 170.153C479.348 160.361 473.699 151.85 466.619 144.619C459.538 137.389 451.178 131.739 441.536 127.672C431.894 123.605 421.651 121.57 410.805 121.57C399.959 121.57 389.715 123.604 380.074 127.672C370.433 131.74 361.997 137.389 354.765 144.619C347.535 151.85 341.81 160.361 337.592 170.153C333.374 179.945 331.265 190.415 331.265 201.563C331.264 212.711 333.298 223.105 337.365 232.746Z"
                fill="white"
              />
              <path
                d="M560.842 155.014C566.867 140.552 575.154 127.823 585.698 116.826C596.242 105.829 608.747 97.167 623.209 90.84C637.671 84.513 653.338 81.35 670.21 81.35C686.781 81.35 702.147 84.363 716.308 90.388C730.468 96.414 742.67 104.775 752.914 115.471C763.158 126.166 771.143 138.821 776.866 153.433C782.591 168.046 785.453 183.939 785.453 201.113V216.027H597.901C599.408 225.367 602.421 234.029 606.94 242.012C611.46 249.996 617.108 256.926 623.887 262.801C630.666 268.677 638.349 273.272 646.936 276.585C655.523 279.899 664.636 281.557 674.278 281.557C701.696 281.557 723.841 270.258 740.713 247.661L773.704 272.065C762.255 287.431 748.095 299.483 731.223 308.22C714.35 316.957 695.369 321.326 674.279 321.326C657.105 321.326 641.062 318.312 626.148 312.287C611.234 306.262 598.279 297.825 587.282 286.978C576.285 276.131 567.623 263.402 561.296 248.79C554.969 234.178 551.805 218.284 551.805 201.111C551.803 184.842 554.817 169.476 560.842 155.014ZM624.339 137.162C611.534 147.858 603.023 162.094 598.805 179.87H739.357C735.44 162.094 727.079 147.858 714.274 137.162C701.469 126.467 686.48 121.119 669.307 121.119C652.133 121.119 637.144 126.467 624.339 137.162Z"
                fill="white"
              />
              <path
                d="M870.866 142.359C861.225 152.904 856.404 167.215 856.404 185.293V316.355H810.758V85.868H855.951V114.34C861.676 105 869.133 97.618 878.322 92.195C887.511 86.771 898.433 84.059 911.088 84.059H926.905V126.541H907.924C892.86 126.542 880.507 131.814 870.866 142.359Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_19_540">
                <rect width="926.906" height="321.777" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </footer>
      </div>
    </AnimatePresence>
  );
}
