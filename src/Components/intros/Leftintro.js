import React from 'react';
import "./Leftintro.css";

export default function Leftintro() {
  return (
    <>
      <div className="container">
        {/* <img
          src="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
          alt=""
          class="intro-image"
        /> */}
        <div className="intro-image">
          <svg
            width={90}
            height={90}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx={45} cy={45} r={45} fill="#F8F8F8" />
            <path
              d="M51.29 45A6.299 6.299 0 0 1 45 51.291a6.299 6.299 0 0 1-6.291-6.29 6.299 6.299 0 0 1 6.29-6.292A6.299 6.299 0 0 1 51.292 45ZM45 41.168A3.84 3.84 0 0 0 41.168 45 3.84 3.84 0 0 0 45 48.832 3.84 3.84 0 0 0 48.832 45 3.84 3.84 0 0 0 45 41.168Z"
              fill="#C09507"
            />
            <path
              d="M35.89 46.23c-.676 0-1.229-.553-1.229-1.23 0-.676.553-1.23 1.23-1.23.676 0 1.23.554 1.23 1.23 0 .676-.554 1.23-1.23 1.23ZM30.636 45c0-.676.553-1.23 1.23-1.23.675 0 1.229.554 1.229 1.23 0 .676-.554 1.23-1.23 1.23-.676 0-1.23-.553-1.23-1.23Z"
              fill="#D8AF28"
            />
            <path
              d="M29.068 45c0 2.5-2.039 4.54-4.539 4.54-2.5 0-4.528-2.04-4.528-4.54s2.039-4.538 4.539-4.538c2.5 0 4.528 2.038 4.528 4.538Zm-4.528-2.08c-1.148 0-2.08.933-2.08 2.08 0 1.148.932 2.08 2.08 2.08 1.147 0 2.08-.932 2.08-2.08 0-1.147-.943-2.08-2.08-2.08Z"
              fill="#585D60"
            />
            <path
              d="M58.136 43.77a1.23 1.23 0 1 1 0 2.46 1.23 1.23 0 0 1 0-2.46ZM54.108 43.77c.677 0 1.23.554 1.23 1.23 0 .676-.553 1.23-1.23 1.23-.676 0-1.23-.553-1.23-1.23 0-.676.554-1.23 1.23-1.23Z"
              fill="#D8AF28"
            />
            <path
              d="M65.462 49.54a4.547 4.547 0 0 1-4.54-4.54c0-2.5 2.04-4.538 4.54-4.538S70 42.5 70 45c0 2.5-2.038 4.54-4.538 4.54Zm0-6.62c-1.148 0-2.08.933-2.08 2.08 0 1.148.932 2.08 2.08 2.08 1.147 0 2.08-.932 2.08-2.08 0-1.147-.933-2.08-2.08-2.08Z"
              fill="#585D60"
            />
            <path
              d="M45 37.121c-.676 0-1.23-.553-1.23-1.23 0-.675.554-1.229 1.23-1.229.676 0 1.23.554 1.23 1.23 0 .676-.554 1.23-1.23 1.23ZM45 33.095c-.676 0-1.23-.553-1.23-1.23 0-.676.554-1.23 1.23-1.23.676 0 1.23.554 1.23 1.23 0 .677-.554 1.23-1.23 1.23Z"
              fill="#D8AF28"
            />
            <path
              d="M45 29.068a4.548 4.548 0 0 1-4.538-4.539c0-2.5 2.039-4.528 4.539-4.528 2.5 0 4.538 2.039 4.538 4.539 0 2.5-2.038 4.528-4.538 4.528Zm0-6.608c-1.147 0-2.08.932-2.08 2.08 0 1.147.933 2.08 2.08 2.08 1.148 0 2.08-.933 2.08-2.08 0-1.148-.932-2.08-2.08-2.08Z"
              fill="#585D60"
            />
            <path
              d="M45 52.88c.676 0 1.23.552 1.23 1.229 0 .676-.554 1.23-1.23 1.23-.676 0-1.23-.554-1.23-1.23 0-.677.554-1.23 1.23-1.23ZM45 56.906a1.23 1.23 0 1 1 0 2.459 1.23 1.23 0 0 1 0-2.46Z"
              fill="#D8AF28"
            />
            <path
              d="M45 60.932c2.5 0 4.54 2.04 4.54 4.54C49.54 67.97 47.5 70 45 70a4.547 4.547 0 0 1-4.538-4.54c0-2.5 2.039-4.528 4.539-4.528Zm0 6.609c1.148 0 2.08-.933 2.08-2.08 0-1.148-.932-2.08-2.08-2.08-1.147 0-2.08.932-2.08 2.08 0 1.147.933 2.08 2.08 2.08Z"
              fill="#585D60"
            />
            <path
              d="M37.695 39.427a1.23 1.23 0 1 1 1.742-1.742 1.23 1.23 0 1 1-1.742 1.742ZM35.718 34.488a1.23 1.23 0 1 1 0 2.459 1.23 1.23 0 0 1 0-2.459Z"
              fill="#D8AF28"
            />
            <path
              d="M27.326 33.74a4.533 4.533 0 0 1 0-6.413 4.533 4.533 0 0 1 6.414 0 4.533 4.533 0 0 1 0 6.413c-1.772 1.763-4.651 1.763-6.414 0Zm4.672-4.682a2.072 2.072 0 1 0 0 2.93c.81-.799.81-2.12 0-2.93Z"
              fill="#585D60"
            />
            <path
              d="M54.282 53.053a1.23 1.23 0 1 1 0 2.46 1.23 1.23 0 0 1 0-2.46ZM51.444 50.215a1.23 1.23 0 1 1 0 2.46 1.23 1.23 0 0 1 0-2.46Z"
              fill="#D8AF28"
            />
            <path
              d="M62.674 56.26a4.533 4.533 0 0 1 0 6.414 4.533 4.533 0 0 1-6.414 0 4.533 4.533 0 0 1 0-6.414 4.542 4.542 0 0 1 6.414 0Zm-4.672 4.683a2.072 2.072 0 1 0 0-2.93c-.81.798-.81 2.12 0 2.93Z"
              fill="#585D60"
            />
            <path
              d="M54.282 34.488a1.23 1.23 0 1 1 0 2.46 1.23 1.23 0 0 1 0-2.46ZM50.575 39.427a1.23 1.23 0 1 1 1.742-1.742 1.23 1.23 0 1 1-1.742 1.742Z"
              fill="#D8AF28"
            />
            <path
              d="M56.26 33.74a4.533 4.533 0 0 1 0-6.413 4.533 4.533 0 0 1 6.414 0 4.533 4.533 0 0 1 0 6.413c-1.762 1.763-4.642 1.763-6.414 0Zm4.682-4.682a2.072 2.072 0 1 0 0 2.93c.81-.799.81-2.12 0-2.93Z"
              fill="#585D60"
            />
            <path
              d="M38.555 50.215a1.23 1.23 0 1 1 0 2.46 1.23 1.23 0 0 1 0-2.46ZM35.718 53.053a1.23 1.23 0 1 1 0 2.46 1.23 1.23 0 0 1 0-2.46Z"
              fill="#D8AF28"
            />
            <path
              d="M33.74 56.26a4.533 4.533 0 0 1 0 6.414 4.533 4.533 0 0 1-6.414 0 4.533 4.533 0 0 1 0-6.414c1.763-1.762 4.642-1.762 6.414 0Zm-4.682 4.683a2.072 2.072 0 1 0 0-2.93c-.81.798-.81 2.12 0 2.93Z"
              fill="#585D60"
            />
          </svg>
        </div>
        <h1 className="leftheader">Orchestrate network of data</h1>
        <h2 className="leftcontent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
          tellugravida, elementum magna ut, viverra purus.
        </h2>
        <img
          src="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
          alt=""
          class="intro-image2"
        />
        <div className="intro-image2">
          <svg
            width={90}
            height={90}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx={45} cy={45} r={45} fill="#F8F8F8" />
            <path
              d="m26.299 28.96-5.37 16.2 6.4 2.272 5.368-16.2-6.399-2.272Z"
              fill="#C09507"
            />
            <path
              d="m37.346 30.332-.622.317a3.147 3.147 0 0 1-2.49.148l-1.041-.38a.762.762 0 0 0-.184-.096l-6.408-2.27a.92.92 0 0 0-1.173.591l-5.378 16.21a.996.996 0 0 0 .041.728.94.94 0 0 0 .53.486l6.399 2.27c.102.032.204.053.296.053a.935.935 0 0 0 .877-.644l5.071-15.27.347.127a4.99 4.99 0 0 0 3.929-.232l.622-.317a3.142 3.142 0 0 1 2.47-.158l11.765 4.192c-.123.507-.368 1.109-.817 1.436-.5.359-1.245.359-2.224.01l-5.245-1.858a.895.895 0 0 0-.735.063 1 1 0 0 0-.459.602c-.01.032-.734 2.84-3.05 4.13-1.46.812-3.276.844-5.409.094a.92.92 0 0 0-1.173.591c-.163.497.092 1.046.571 1.215 1.225.433 2.378.655 3.45.655 1.244 0 2.387-.286 3.428-.866 2.071-1.151 3.142-3.168 3.632-4.372l4.378 1.552c1.56.56 2.867.475 3.877-.253 1.622-1.162 1.704-3.517 1.714-3.622a.957.957 0 0 0-.622-.93l-12.49-4.456a5.006 5.006 0 0 0-3.877.254ZM26.754 46.214l-4.653-1.648 4.766-14.393 4.652 1.648-4.765 14.393Z"
              fill="#585D60"
            />
            <path
              d="m55.713 32.145 7.273 15.383 6.076-3.076-7.273-15.383-6.076 3.076Z"
              fill="#C09507"
            />
            <path
              d="m61.855 47.301-2.194 2.09a28.01 28.01 0 0 1-6.663 4.71l-11.642 5.893c-.51.264-1.133.042-1.388-.497a1.086 1.086 0 0 1 .48-1.436l.142-.074 6.367-3.22a.97.97 0 0 0 .43-1.278c-.225-.475-.776-.676-1.236-.444l-6.367 3.221-3.204 1.626c-.51.264-1.133.042-1.388-.496a1.072 1.072 0 0 1-.05-.813c.091-.275.275-.486.52-.613l2.418-1.224 6.918-3.506a.97.97 0 0 0 .429-1.278c-.225-.475-.776-.676-1.235-.443l-6.928 3.516-.266.137-3.305 1.68a.973.973 0 0 1-.786.052 1.04 1.04 0 0 1-.592-.539 1.086 1.086 0 0 1 .48-1.436l1.142-.58 2.337-1.183.653-.327 5.367-2.725a.97.97 0 0 0 .429-1.278c-.225-.475-.776-.675-1.235-.443l-5.816 2.946-2.54 1.288a1.027 1.027 0 0 1-1.388-.496 1.072 1.072 0 0 1-.052-.813c.092-.275.276-.486.52-.612l4.44-2.25a.97.97 0 0 0 .428-1.277c-.224-.476-.775-.676-1.234-.444l-4.44 2.25a2.911 2.911 0 0 0-1.458 1.71 3.097 3.097 0 0 0 .132 2.28c.215.444.52.814.888 1.088a3.082 3.082 0 0 0-.306 3.137 2.877 2.877 0 0 0 1.653 1.51c.306.105.612.158.918.158-.01.475.082.95.296 1.383a2.88 2.88 0 0 0 2.592 1.669c.429 0 .857-.095 1.265-.306l.653-.328c.03.36.123.708.276 1.045A2.88 2.88 0 0 0 40.907 62c.428 0 .857-.095 1.265-.306L53.815 55.8a29.85 29.85 0 0 0 7.101-5.015l2.602-2.482 5.96-3.02a.97.97 0 0 0 .428-1.277L62.62 28.642a.935.935 0 0 0-.53-.485.904.904 0 0 0-.704.042l-6.082 3.073a.97.97 0 0 0-.428 1.277l6.98 14.752Zm-.49-16.959 6.46 13.675-4.419 2.239-6.459-13.675 4.418-2.239Z"
              fill="#585D60"
            />
          </svg>
        </div>
        <h1 className="leftheader2">Invite data providers and consumers</h1>
        <h2 className="leftcontent2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
          tellugravida, elementum magna ut, viverra purus.
        </h2>
        {/* <img
          src="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
          alt=""
          class="intro-image3"
        /> */}
        <div className="intro-image3">
          <svg
            width={90}
            height={90}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx={45} cy={45} r={45} fill="#F8F8F8" />
            <rect x={56} y={53} width={16} height={12} rx={3} fill="#C09507" />
            <rect x={19} y={18} width={16} height={12} rx={3} fill="#C09507" />
            <path
              d="M54.52 53.137v-5.055c0-2.959-2.235-4.52-3.353-4.931-4.214-1.776-5.508-6.165-5.627-8.137V21.205c0-2.564-1.916-3.205-2.874-3.205H21.354c-2.777 0-3.392 2.384-3.352 3.575v13.932c0 3.057 2.235 3.986 3.352 4.068h9.22c.399-.04 1.197.247 1.197 1.726v5.055"
              stroke="#585D60"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="m49.73 49.438 4.67 3.946 4.43-3.453M27.58 46.48h8.142M53.92 72h8.142M57.872 65.22v6.657M31.89 34.274l5.149-4.192 4.43 4.192"
              stroke="#585D60"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M36.919 30.452v5.671c.08.987.71 2.172 3.472 4.069 1.437.986 3.712 3.353 3.712 6.41v15.412c0 .945.646 2.86 3.233 2.959h21.91c.918.04 2.754-.493 2.754-2.96v-15.41c-.12-.904-.838-2.713-2.754-2.713H58.111"
              stroke="#585D60"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h1 className="leftheader3">
          Enable secured peer to peer data exchange
        </h1>
        <h2 className="leftcontent3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
          tellugravida, elementum magna ut, viverra purus.
        </h2>
        {/* <img
          src="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
          alt=""
          class="intro-image4"
        /> */}
        <div className="intro-image4">
          <svg
            width={90}
            height={90}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx={45} cy={45} r={45} fill="#F8F8F8" />
            <path
              d="M60.712 53.203H29.285c-.789 0-1.503.306-2.02.801a2.668 2.668 0 0 0-.837 1.934c0 1.51 1.278 2.734 2.857 2.734h1.428l2.508 17.613c.2 1.347 1.405 2.348 2.828 2.348h17.9c1.423 0 2.629-1.001 2.829-2.348l2.507-17.613h1.428c.789 0 1.503-.306 2.02-.801a2.668 2.668 0 0 0 .838-1.934c0-1.51-1.279-2.734-2.858-2.734Z"
              fill="#C09507"
            />
            <path
              d="M45 38.71c7.89 0 14.285-6.12 14.285-13.67 0-7.552-6.396-13.673-14.285-13.673-7.89 0-14.286 6.121-14.286 13.672 0 7.55 6.396 13.672 14.286 13.672ZM50.715 45c-3.155 0-5.714 2.449-5.714 5.469 0-3.02-2.558-5.469-5.714-5.469H36.43v2.734c0 3.02 2.558 5.47 5.714 5.47h5.714c3.156 0 5.715-2.45 5.715-5.47V45h-2.858Z"
              fill="#fff"
            />
            <path
              d="M39.283 65.508c.789 0 1.429-.613 1.429-1.367 0-.755-.64-1.368-1.429-1.368-.788 0-1.428.613-1.428 1.368 0 .754.64 1.367 1.428 1.367Z"
              fill="#585D60"
            />
            <path
              d="M46.427 33.242V31.64c1.663-.565 2.857-2.084 2.857-3.867 0-2.261-1.922-4.101-4.286-4.101-.787 0-1.428-.614-1.428-1.367 0-.754.64-1.367 1.428-1.367.506 0 1.04.247 1.546.714.567.525 1.471.51 2.02-.032a1.326 1.326 0 0 0-.034-1.933c-.725-.671-1.45-1.051-2.103-1.259v-1.592c0-.755-.64-1.367-1.429-1.367s-1.428.612-1.428 1.367v1.602c-1.663.565-2.858 2.084-2.858 3.867 0 2.261 1.923 4.101 4.286 4.101.788 0 1.429.614 1.429 1.367 0 .754-.641 1.368-1.429 1.368-.61 0-1.269-.368-1.855-1.034a1.473 1.473 0 0 0-2.013-.167 1.327 1.327 0 0 0-.174 1.926c.764.87 1.662 1.475 2.614 1.78v1.596c0 .755.64 1.367 1.428 1.367.79 0 1.429-.612 1.429-1.367Z"
              fill="#C09507"
            />
            <path
              d="M60.714 51.836h-7.146A6.611 6.611 0 0 0 55 47.734V45c0-.755-.64-1.367-1.429-1.367h-2.857c-1.606 0-3.09.51-4.285 1.37v-4.988c7.997-.693 14.285-7.144 14.285-14.976C60.714 16.746 53.664 10 45 10c-8.665 0-15.714 6.747-15.714 15.04 0 7.83 6.288 14.282 14.285 14.975v4.989a7.316 7.316 0 0 0-4.285-1.371h-2.857c-.79 0-1.429.612-1.429 1.367v2.734c0 1.538.534 2.959 1.432 4.102h-7.146c-1.145 0-2.22.427-3.03 1.202a3.988 3.988 0 0 0-1.256 2.9c0 2.261 1.923 4.101 4.286 4.101h.181l2.34 16.439C32.105 78.486 33.93 80 36.05 80h17.9c2.12 0 3.945-1.514 4.244-3.53l2.339-16.43h.181c1.145 0 2.22-.428 3.03-1.203a3.988 3.988 0 0 0 1.256-2.9c0-2.261-1.923-4.101-4.286-4.101Zm-10-5.469h1.429v1.367c0 2.262-1.923 4.102-4.286 4.102H46.43v-1.367c0-2.262 1.922-4.102 4.285-4.102ZM32.143 25.04c0-6.785 5.768-12.305 12.857-12.305 7.09 0 12.857 5.52 12.857 12.305S52.09 37.344 45 37.344c-7.09 0-12.857-5.52-12.857-12.305Zm5.714 22.695v-1.367h1.429c2.363 0 4.285 1.84 4.285 4.102v1.367h-1.428c-2.363 0-4.286-1.84-4.286-4.102Zm17.507 28.359c-.099.668-.707 1.173-1.414 1.173h-17.9c-.707 0-1.315-.505-1.413-1.165L32.35 60.039h25.298l-2.285 16.054Zm6.36-19.19c-.27.26-.628.402-1.01.402H29.286c-.788 0-1.429-.614-1.429-1.367 0-.365.149-.709.419-.967s.628-.4 1.01-.4H60.714c.788 0 1.429.613 1.429 1.367 0 .364-.149.708-.419.966Z"
              fill="#585D60"
            />
            <path
              d="M45.002 65.508h8.571c.79 0 1.429-.612 1.429-1.367s-.64-1.368-1.429-1.368h-8.571c-.79 0-1.429.613-1.429 1.368 0 .755.64 1.367 1.429 1.367Z"
              fill="#585D60"
            />
          </svg>
        </div>
        <h1 className="leftheader4">Derive value from data</h1>
        <h2 className="leftcontent4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
          tellugravida, elementum magna ut, viverra purus.
        </h2>
      </div>
    </>
  );
}
