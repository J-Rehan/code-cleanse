import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="footer text-white p-8 pb-32 md:pb-8">
      <div className="max-w-[1024px] mx-auto md:flex justify-between ">
        <Link href="/">
          <svg
            width="195"
            height="32"
            viewBox="0 0 195 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_377_4008" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.1467 4.26777C33.1306 3.29146 33.1306 1.70854 32.1467 0.732234C31.1629 -0.244078 29.5677 -0.244078 28.5839 0.732233L14.8446 14.3662L8.3317 7.90324C7.34784 6.92693 5.75269 6.92693 4.76884 7.90324C3.78498 8.87955 3.78498 10.4625 4.76884 11.4388L12.9201 19.5276C13.5846 20.1869 14.5279 20.401 15.3733 20.1697C15.9096 20.1031 16.4284 19.8655 16.8401 19.457L32.1467 4.26777Z"
              />
            </mask>
            <path
              d="M32.1467 0.732234L32.8511 0.0224104L32.8511 0.0224097L32.1467 0.732234ZM32.1467 4.26777L31.4423 3.55795V3.55795L32.1467 4.26777ZM28.5839 0.732233L27.8795 0.0224095V0.02241L28.5839 0.732233ZM14.8446 14.3662L14.1402 15.076L14.8446 15.775L15.5489 15.076L14.8446 14.3662ZM8.3317 7.90324L7.62732 8.61306L8.3317 7.90324ZM4.76884 7.90324L4.06446 7.19341L4.06446 7.19341L4.76884 7.90324ZM4.76884 11.4388L4.06446 12.1486H4.06446L4.76884 11.4388ZM12.9201 19.5276L12.2158 20.2374H12.2158L12.9201 19.5276ZM15.3733 20.1697L15.2501 19.1774L15.1788 19.1862L15.1095 19.2052L15.3733 20.1697ZM16.8401 19.457L17.5445 20.1668L16.8401 19.457ZM31.4423 1.44206C32.032 2.02723 32.032 2.97277 31.4423 3.55795L32.8511 4.97759C34.2291 3.61014 34.2291 1.38986 32.8511 0.0224104L31.4423 1.44206ZM29.2882 1.44206C29.8822 0.852648 30.8484 0.852648 31.4423 1.44206L32.8511 0.0224097C31.4774 -1.3408 29.2532 -1.3408 27.8795 0.0224095L29.2882 1.44206ZM15.5489 15.076L29.2882 1.44206L27.8795 0.02241L14.1402 13.6563L15.5489 15.076ZM7.62732 8.61306L14.1402 15.076L15.5489 13.6563L9.03608 7.19341L7.62732 8.61306ZM5.47322 8.61306C6.06718 8.02365 7.03335 8.02365 7.62732 8.61306L9.03608 7.19341C7.66233 5.8302 5.43821 5.8302 4.06446 7.19341L5.47322 8.61306ZM5.47322 10.7289C4.88352 10.1438 4.88352 9.19823 5.47322 8.61306L4.06446 7.19341C2.68644 8.56086 2.68644 10.7811 4.06446 12.1486L5.47322 10.7289ZM13.6245 18.8177L5.47322 10.7289L4.06446 12.1486L12.2158 20.2374L13.6245 18.8177ZM15.1095 19.2052C14.5936 19.3463 14.0238 19.214 13.6245 18.8177L12.2158 20.2374C13.1454 21.1598 14.4621 21.4557 15.6372 21.1343L15.1095 19.2052ZM16.1358 18.7471C15.8872 18.9938 15.5754 19.137 15.2501 19.1774L15.4966 21.1621C16.2438 21.0693 16.9696 20.7373 17.5445 20.1668L16.1358 18.7471ZM31.4423 3.55795L16.1358 18.7471L17.5445 20.1668L32.8511 4.97759L31.4423 3.55795Z"
              fill="white"
              mask="url(#path-1-inside-1_377_4008)"
            />
            <mask id="path-3-inside-2_377_4008" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.95137 9.43965L6.42601 6.25537C2.55785 8.75204 0 13.0795 0 17.9998C0 25.7318 6.31646 31.9998 14.1082 31.9998C21.9 31.9998 28.2164 25.7318 28.2164 17.9998C28.2164 13.4165 25.9969 9.34759 22.5664 6.79372L19.2293 9.97185C21.9054 11.6564 23.6816 14.6223 23.6816 17.9998C23.6816 23.2465 19.3955 27.4998 14.1082 27.4998C8.82095 27.4998 4.53478 23.2465 4.53478 17.9998C4.53478 14.2312 6.7461 10.9752 9.95137 9.43965Z"
              />
            </mask>
            <path
              d="M9.95137 9.43965L10.3834 10.3415L11.7284 9.69719L10.6217 8.69756L9.95137 9.43965ZM6.42601 6.25537L7.0963 5.51328L6.5276 4.99959L5.88371 5.41518L6.42601 6.25537ZM22.5664 6.79372L23.1635 5.99159L22.4872 5.48814L21.8767 6.06959L22.5664 6.79372ZM19.2293 9.97185L18.5397 9.24771L17.6093 10.1337L18.6966 10.8181L19.2293 9.97185ZM10.6217 8.69756L7.0963 5.51328L5.75571 6.99747L9.28108 10.1817L10.6217 8.69756ZM5.88371 5.41518C1.74425 8.08696 -1 12.7235 -1 17.9998H1C1 13.4355 3.37144 9.41712 6.9683 7.09556L5.88371 5.41518ZM-1 17.9998C-1 26.2913 5.77145 32.9998 14.1082 32.9998V30.9998C6.86147 30.9998 1 25.1723 1 17.9998H-1ZM14.1082 32.9998C22.445 32.9998 29.2164 26.2913 29.2164 17.9998H27.2164C27.2164 25.1723 21.3549 30.9998 14.1082 30.9998V32.9998ZM29.2164 17.9998C29.2164 13.0853 26.8351 8.72489 23.1635 5.99159L21.9692 7.59586C25.1588 9.97029 27.2164 13.7477 27.2164 17.9998H29.2164ZM21.8767 6.06959L18.5397 9.24771L19.919 10.696L23.256 7.51786L21.8767 6.06959ZM24.6816 17.9998C24.6816 14.2621 22.7147 10.9842 19.762 9.12556L18.6966 10.8181C21.0961 12.3286 22.6816 14.9824 22.6816 17.9998H24.6816ZM14.1082 28.4998C19.9405 28.4998 24.6816 23.806 24.6816 17.9998H22.6816C22.6816 22.687 18.8505 26.4998 14.1082 26.4998V28.4998ZM3.53478 17.9998C3.53478 23.806 8.27594 28.4998 14.1082 28.4998V26.4998C9.36596 26.4998 5.53478 22.687 5.53478 17.9998H3.53478ZM9.51933 8.5378C5.98305 10.2319 3.53478 13.8288 3.53478 17.9998H5.53478C5.53478 14.6336 7.50915 11.7184 10.3834 10.3415L9.51933 8.5378Z"
              fill="white"
              mask="url(#path-3-inside-2_377_4008)"
            />
            <path
              d="M21.1238 11.1326C20.5095 10.4031 20.5768 9.32448 21.2771 8.67641C22.0327 7.97722 23.225 8.05022 23.889 8.83633L25.2691 10.4701L22.7069 13.0125L21.1238 11.1326Z"
              stroke="white"
            />
            <path
              d="M4.8955 8.0433C5.68335 7.2615 6.9607 7.2615 7.74854 8.0433L7.79898 8.09335C8.48822 8.77731 8.48822 9.88622 7.79898 10.5702L6.19393 12.1629L4.8955 10.8745C4.10766 10.0927 4.10766 8.8251 4.8955 8.0433Z"
              stroke="white"
            />
            <path
              d="M14.7958 15.1033C14.842 15.0385 14.9167 15 14.9964 15C15.0736 15 15.1464 15.0362 15.193 15.0979L16.5688 16.9182C17.526 18.1847 16.6225 20 15.035 20C13.4715 20 12.5618 18.233 13.4701 16.9604L14.7958 15.1033Z"
              stroke="white"
            />
            <path
              d="M45.912 26.0431C48.9133 26.0431 51.2772 24.7252 52.3131 22.4585L49.0993 20.719C48.329 22.0896 47.1869 22.6694 45.8854 22.6694C43.7871 22.6694 42.1404 21.2198 42.1404 18.7422C42.1404 16.2647 43.7871 14.815 45.8854 14.815C47.1869 14.815 48.329 15.4212 49.0993 16.7655L52.3131 15.0523C51.2772 12.7328 48.9133 11.4414 45.912 11.4414C41.2639 11.4414 37.9438 14.4724 37.9438 18.7422C37.9438 23.012 41.2639 26.0431 45.912 26.0431Z"
              fill="white"
            />
            <path
              d="M60.5199 26.0431C65.0618 26.0431 68.3553 23.012 68.3553 18.7422C68.3553 14.4724 65.0618 11.4414 60.5199 11.4414C55.978 11.4414 52.658 14.4724 52.658 18.7422C52.658 23.012 55.978 26.0431 60.5199 26.0431ZM60.5199 22.6694C58.4482 22.6694 56.8545 21.1934 56.8545 18.7422C56.8545 16.291 58.4482 14.815 60.5199 14.815C62.5916 14.815 64.1587 16.291 64.1587 18.7422C64.1587 21.1934 62.5916 22.6694 60.5199 22.6694Z"
              fill="white"
            />
            <path
              d="M80.7398 6.27539V13.1546C79.704 11.9948 78.2166 11.4414 76.4636 11.4414C72.4263 11.4414 69.3187 14.2879 69.3187 18.7422C69.3187 23.1965 72.4263 26.0431 76.4636 26.0431C78.3759 26.0431 79.8899 25.4369 80.9257 24.1981V25.8322H84.8833V6.27539H80.7398ZM77.1807 22.6694C75.109 22.6694 73.5153 21.1934 73.5153 18.7422C73.5153 16.291 75.109 14.815 77.1807 14.815C79.2259 14.815 80.8195 16.291 80.8195 18.7422C80.8195 21.1934 79.2259 22.6694 77.1807 22.6694Z"
              fill="white"
            />
            <path
              d="M101.919 18.7949C101.919 14.2352 98.6784 11.4414 94.4818 11.4414C90.1259 11.4414 86.8589 14.4988 86.8589 18.7422C86.8589 22.9593 90.0728 26.0431 95.0131 26.0431C97.5894 26.0431 99.5815 25.2524 100.91 23.75L98.705 21.3779C97.7222 22.3004 96.6333 22.7485 95.1193 22.7485C92.9413 22.7485 91.4274 21.6678 91.029 19.9019H101.839C101.866 19.5593 101.919 19.1112 101.919 18.7949ZM94.5084 14.5515C96.3676 14.5515 97.7222 15.7112 98.0144 17.5034H90.9758C91.268 15.6848 92.6226 14.5515 94.5084 14.5515Z"
              fill="white"
            />
            <path
              d="M110.282 25.9377C112.486 25.9377 114.399 25.0679 115.541 23.4074L114.558 22.6958C113.549 24.0927 112.008 24.7516 110.282 24.7516C107.015 24.7516 104.624 22.4322 104.624 18.9531C104.624 15.474 107.015 13.1546 110.282 13.1546C112.008 13.1546 113.549 13.8135 114.558 15.2104L115.541 14.4988C114.399 12.8119 112.486 11.9685 110.282 11.9685C106.218 11.9685 103.27 14.8414 103.27 18.9531C103.27 23.0384 106.218 25.9377 110.282 25.9377Z"
              fill="white"
            />
            <path
              d="M118.486 25.8322H119.814V6.27539H118.486V25.8322Z"
              fill="white"
            />
            <path
              d="M136.355 18.9004C136.355 14.815 133.539 11.9685 129.741 11.9685C125.943 11.9685 123.101 14.8678 123.101 18.9531C123.101 23.0384 126.049 25.9377 130.246 25.9377C132.344 25.9377 134.256 25.1733 135.478 23.6973L134.708 22.8275C133.646 24.119 132.025 24.7516 130.272 24.7516C126.952 24.7516 124.535 22.5376 124.402 19.2694H136.328C136.328 19.1376 136.355 19.0058 136.355 18.9004ZM129.741 13.1282C132.689 13.1282 134.867 15.2631 135.053 18.2414H124.429C124.641 15.2367 126.793 13.1282 129.741 13.1282Z"
              fill="white"
            />
            <path
              d="M143.952 11.9685C141.8 11.9685 139.782 12.7065 138.401 13.9189L139.065 14.8678C140.207 13.8398 141.933 13.1282 143.846 13.1282C146.555 13.1282 147.963 14.4988 147.963 17.0554V18.1624H143.208C139.357 18.1624 138.029 19.9283 138.029 22.0105C138.029 24.3562 139.915 25.9377 143.022 25.9377C145.439 25.9377 147.139 24.9625 148.016 23.381V25.8322H149.291V17.1081C149.291 13.708 147.378 11.9685 143.952 11.9685ZM143.208 24.857C140.765 24.857 139.357 23.75 139.357 21.9578C139.357 20.3764 140.366 19.1903 143.235 19.1903H147.963V21.7733C147.166 23.75 145.545 24.857 143.208 24.857Z"
              fill="white"
            />
            <path
              d="M160.738 11.9685C158.109 11.9685 156.17 13.1282 155.24 15.0523V12.0739H153.965V25.8322H155.293V18.505C155.293 15.2367 157.285 13.1546 160.552 13.1546C163.368 13.1546 165.041 14.7887 165.041 17.8988V25.8322H166.369V17.7934C166.369 13.9453 164.112 11.9685 160.738 11.9685Z"
              fill="white"
            />
            <path
              d="M174.546 25.9377C178.079 25.9377 180.017 24.409 180.017 22.1686C180.017 16.9236 170.827 19.8492 170.827 15.7112C170.827 14.2352 172.023 13.1282 174.732 13.1282C176.219 13.1282 177.733 13.5235 178.902 14.367L179.513 13.3127C178.424 12.4956 176.511 11.9685 174.758 11.9685C171.252 11.9685 169.499 13.6553 169.499 15.7375C169.499 21.1407 178.689 18.1887 178.689 22.195C178.689 23.75 177.521 24.778 174.599 24.778C172.554 24.778 170.668 24.0136 169.606 23.1175L168.995 24.1718C170.084 25.1733 172.262 25.9377 174.546 25.9377Z"
              fill="white"
            />
            <path
              d="M194.667 18.9004C194.667 14.815 191.851 11.9685 188.053 11.9685C184.255 11.9685 181.413 14.8678 181.413 18.9531C181.413 23.0384 184.361 25.9377 188.558 25.9377C190.656 25.9377 192.568 25.1733 193.79 23.6973L193.02 22.8275C191.958 24.119 190.337 24.7516 188.584 24.7516C185.264 24.7516 182.847 22.5376 182.714 19.2694H194.64C194.64 19.1376 194.667 19.0058 194.667 18.9004ZM188.053 13.1282C191.001 13.1282 193.179 15.2631 193.365 18.2414H182.741C182.953 15.2367 185.105 13.1282 188.053 13.1282Z"
              fill="white"
            />
          </svg>
        </Link>

        <div className="mt-6 flex justify-between md:mt-0 space-x-6">
          <Link
            href="https://www.instagram.com/code_cleanse"
            className="w-6 h-6"
            target="_blank"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
                stroke="white"
                strokeMiterlimit="10"
              />
              <path
                d="M16.125 3.375H7.875C5.38972 3.375 3.375 5.38972 3.375 7.875V16.125C3.375 18.6103 5.38972 20.625 7.875 20.625H16.125C18.6103 20.625 20.625 18.6103 20.625 16.125V7.875C20.625 5.38972 18.6103 3.375 16.125 3.375Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.875 8.25C17.4963 8.25 18 7.74632 18 7.125C18 6.50368 17.4963 6 16.875 6C16.2537 6 15.75 6.50368 15.75 7.125C15.75 7.74632 16.2537 8.25 16.875 8.25Z"
                fill="white"
              />
            </svg>
          </Link>

          <Link
            href="https://www.linkedin.com/company/code-cleanse"
            className="w-6 h-6"
            target="_blank"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.875 3.375H4.125C3.71079 3.375 3.375 3.71079 3.375 4.125V19.875C3.375 20.2892 3.71079 20.625 4.125 20.625H19.875C20.2892 20.625 20.625 20.2892 20.625 19.875V4.125C20.625 3.71079 20.2892 3.375 19.875 3.375Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.25 10.5V16.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 10.5V16.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.25 13.125C11.25 12.4288 11.5266 11.7611 12.0188 11.2688C12.5111 10.7766 13.1788 10.5 13.875 10.5C14.5712 10.5 15.2389 10.7766 15.7312 11.2688C16.2234 11.7611 16.5 12.4288 16.5 13.125V16.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 8.625C8.87132 8.625 9.375 8.12132 9.375 7.5C9.375 6.87868 8.87132 6.375 8.25 6.375C7.62868 6.375 7.125 6.87868 7.125 7.5C7.125 8.12132 7.62868 8.625 8.25 8.625Z"
                fill="white"
              />
            </svg>
          </Link>

          <Link
            href="https://twitter.com/Code_cleanse"
            className="w-6 h-6"
            target="_blank"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8.24985C12 6.18735 13.7344 4.47173 15.7969 4.49985C16.5192 4.50819 17.2237 4.72496 17.8258 5.12411C18.4278 5.52326 18.9018 6.08779 19.1906 6.74985H22.5L19.4719 9.77798C19.2765 12.8198 17.93 15.673 15.7061 17.7575C13.4823 19.842 10.5481 21.0014 7.50002 20.9999C4.50002 20.9999 3.75002 19.8749 3.75002 19.8749C3.75002 19.8749 6.75002 18.7499 8.25002 16.4999C8.25002 16.4999 2.25002 13.4999 3.75002 5.24985C3.75002 5.24985 7.50002 8.99985 12 9.74985V8.24985Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            href="https://www.facebook.com/codecleanse"
            className="w-6 h-6"
            target="_blank"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.75 8.25002H14.25C13.9542 8.24878 13.6611 8.30613 13.3875 8.41876C13.114 8.5314 12.8654 8.69708 12.6563 8.90626C12.4471 9.11544 12.2814 9.36397 12.1688 9.63752C12.0561 9.91106 11.9988 10.2042 12 10.5V21"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 13.5H15"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <div className="flex flex-col space-y-3">
            <Link href="/about" className="text-base">
              About
            </Link>

            <Link href="/contact" className="text-base">
              Contact
            </Link>

            <Link href="/blog" className="text-base">
              Blog
            </Link>

            <Link href="/services" className="text-base">
              Services
            </Link>
          </div>

          <div className="flex flex-col space-y-3">
            <Link href="/terms-of-service" className="text-base">
              Terms of Service
            </Link>

            <Link href="/privacy-policy" className="text-base">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
