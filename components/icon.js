Vue.component('icon',{ 
	template: `
		<span class="icon" :class="[size, color]"> 
			<svg v-if="name == 'account'" viewBox="0 0 24 24"><path d="M20 2c1.103 0 2 .898 2 2v16c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2V4c0-1.102.897-2 2-2h16zm-4 18h4.001L20 4h-4v3h-2V4h-4v8H8V4H4v16h4v-3h2v3h4v-8h2v8zM6 13h6v3H6v-3zm6-5h6v3h-6V8z" /></svg>
		   	<svg v-else-if="name == 'bookmarked'" viewBox="0 0 24 24"><path d="M17.5012 2H9C6.794 2 5 3.795 5 6v17l5.5-6 5.5 6V10h4c.552 0 1-.447 1-1V6c0-2.205-1.2918-4-3.4988-4zM19 8h-3V6c0-1.104.3982-2 1.5012-2C18.6032 4 19 4.896 19 6v2z" /></svg>
		    <svg v-else-if="name == 'bookmark'" viewBox="0 0 24 24"><path d="M17.5012 2H9C6.794 2 5 3.795 5 6v17l5.5-6 5.5 6V10h4c.552 0 1-.447 1-1V6c0-2.205-1.2918-4-3.4988-4zM14 6v12l-3.5-4L7 18V6c0-1.104.897-2 2-2h5.536c-.34.589-.536 1.272-.536 2zm5 2h-3V6c0-1.104.3982-2 1.5012-2C18.6032 4 19 4.896 19 6v2z" /></svg>                                                                 
		    <svg v-else-if="name == 'briefcase'" viewBox="0 0 24 24"><path d="M20 7h-3V5c0-1.102-.897-2-2-2H9c-1.103 0-2 .898-2 2v2H4c-1.654 0-3 1.346-3 3v4h1v5c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-5h1v-4c0-1.654-1.346-3-3-3zM9 5h6v2H9V5zm11 14c0 .553-.449 1-1 1H5c-.551 0-1-.447-1-1v-5h4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2h4v5zm-10-5v-2h4l-.003 2H10zm11-2h-5c0-1.102-.897-2-2-2h-4c-1.103 0-2 .898-2 2H3v-2c0-.552.449-1 1-1h16c.551 0 1 .448 1 1v2z" /></svg>
			<svg v-else-if="name == 'browse'" viewBox="0 0 24 24"><path d="M4 8h16c1.1046 0 2 .8954 2 2v10c0 1.1046-.8954 2-2 2H4c-1.1046 0-2-.8954-2-2V10c0-1.1046.8954-2 2-2zm0 2v10h16V10H4zm6 2l5 3-5 3v-6zM6 5h12c1.1046 0 2 .8954 2 2H4c0-1.1046.8954-2 2-2zm2-3h8c1.1046 0 2 .8954 2 2H6c0-1.1046.8954-2 2-2z" /></svg>
			<svg v-else-if="name == 'calendar'" viewBox="0 0 24 24"><path d="M8 7H4v3h16V7h-4v1.5c0 .276-.224.5-.5.5h-1c-.276 0-.5-.224-.5-.5V7h-4v1.5c0 .276-.224.5-.5.5h-1c-.276 0-.5-.224-.5-.5V7zm2-2h4V3.5c0-.276.224-.5.5-.5h1c.276 0 .5.224.5.5V5h5c.5523 0 1 .4477 1 1v14c0 .5523-.4477 1-1 1H3c-.5523 0-1-.4477-1-1V6c0-.5523.4477-1 1-1h5V3.5c0-.276.224-.5.5-.5h1c.276 0 .5.224.5.5V5zm10 7H4v7h16v-7z" /></svg>
			<svg v-else-if="name == 'caret-down'" viewBox="0 0 24 24"><path d="M12 15.41l-5-5L8.41 9 12 12.58 15.59 9 17 10.41" /></svg>
			<svg v-else-if="name == 'caret-left'" viewBox="0 0 24 24"><path d="M8 12l5-5 1.41 1.41L10.83 12l3.58 3.59L13 17" /></svg>
			<svg v-else-if="name == 'caret-right'" viewBox="0 0 24 24"><path d="M16 12l-5-5-1.41 1.41L13.17 12l-3.58 3.59L11 17" /></svg>
			<svg v-else-if="name == 'caret-up'" viewBox="0 0 24 24"><path d="M12 9l-5 5 1.41 1.41L12 11.83l3.59 3.58L17 14" /></svg>
			<svg v-else-if="name == 'close-captioned'" viewBox="0 0 24 24"><path d="M2 3h20c.5523 0 1 .4477 1 1v16c0 .5523-.4477 1-1 1H2c-.5523 0-1-.4477-1-1V4c0-.5523.4477-1 1-1zm6.524 13.132c1.485 0 2.365-.528 3.157-1.375l-1.078-1.089c-.605.55-1.144.902-2.024.902-1.32 0-2.233-1.1-2.233-2.42 0-1.342.935-2.42 2.233-2.42.77 0 1.375.33 1.969.869l1.078-1.243c-.715-.704-1.584-1.188-3.036-1.188-2.365 0-4.015 1.793-4.015 3.982 0 2.233 1.683 3.982 3.949 3.982zm7.898 0c1.485 0 2.365-.528 3.157-1.375l-1.078-1.089c-.605.55-1.144.902-2.024.902-1.32 0-2.233-1.1-2.233-2.42 0-1.342.935-2.42 2.233-2.42.77 0 1.375.33 1.969.869l1.078-1.243c-.715-.704-1.584-1.188-3.036-1.188-2.365 0-4.015 1.793-4.015 3.982 0 2.233 1.683 3.982 3.949 3.982z" /></svg>
			<svg v-else-if="name == 'channel'" viewBox="0 0 24 24"><path d="M13 13.855V23h-2v-9.145c-1.4457-.4302-2.5-1.7695-2.5-3.355C8.5 8.567 10.067 7 12 7s3.5 1.567 3.5 3.5c0 1.5855-1.0543 2.9248-2.5 3.355zM5.0412 1.3437L6.2514 2.936C3.9716 4.6715 2.5 7.414 2.5 10.5s1.4716 5.8286 3.7514 7.564l-1.2102 1.5924C2.2814 17.5557.5 14.236.5 10.5c0-3.736 1.7814-7.0557 4.5412-9.1564zm13.9176 0C21.7186 3.4443 23.5 6.764 23.5 10.5c0 3.736-1.7814 7.0557-4.5412 9.1564l-1.2102-1.5925C20.0284 16.3284 21.5 13.586 21.5 10.5s-1.4716-5.8286-3.7514-7.564l1.2102-1.5924zM7.4616 4.5287l1.2104 1.592C7.352 7.1255 6.5 8.7133 6.5 10.5c0 1.7867.852 3.3745 2.172 4.379l-1.2104 1.5925C5.6618 15.1015 4.5 12.9365 4.5 10.5c0-2.4365 1.1618-4.6016 2.9616-5.9715zm9.0768 0C18.3382 5.8982 19.5 8.0634 19.5 10.5s-1.1618 4.6016-2.9616 5.9715L15.328 14.879c1.32-1.0045 2.172-2.5923 2.172-4.379 0-1.7867-.852-3.3745-2.172-4.379l1.2104-1.5925zM12 12c.8284 0 1.5-.6716 1.5-1.5S12.8284 9 12 9s-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5z" /></svg>
			<svg v-else-if="name == 'chat'" viewBox="0 0 24 24"><path d="M6 6h12v2H6V6zm0 3h12v2H6V9zm0 3h8v2H6v-2zM4 4.0005v12h4v2l2.667-2H20v-12H4zm2 18v-4H4c-1.103 0-2-.897-2-2v-12c0-1.103.897-2 2-2h16c1.103 0 2 .897 2 2v12c0 1.103-.897 2-2 2h-8.667l-5.333 4z" /></svg>
			<svg v-else-if="name == 'check'" viewBox="0 0 24 24"><path d="M9.59 14.58l-3.17-3.17L5 12.82l4.59 4.59 10-10L18.18 6" /></svg>
			<svg v-else-if="name == 'close'" viewBox="0 0 24 24"><path d="M18 7.41L16.59 6 12 10.59 7.41 6 6 7.41 10.59 12 6 16.59 7.41 18 12 13.41 16.59 18 18 16.59 13.41 12" /></svg>
			<svg v-else-if="name == 'code'" viewBox="0 0 24 24"><path d="M12 22.0003c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18c-4.4114 0-8 3.5893-8 8 0 4.4105 3.5886 7.999 8 7.999 4.4107 0 8-3.5885 8-7.999 0-4.4107-3.5893-8-8-8zm.83 5.2068l1.4142-1.414L18.4512 12l-4.207 4.207-1.4142-1.414L15.623 12 12.83 9.207zm-1.6587 0L8.3783 12l2.793 2.793-1.4142 1.414L5.55 12l4.207-4.207 1.4143 1.414z" /></svg>
			<svg v-else-if="name == 'course'" viewBox="0 0 24 24"><defs><linearGradient id="playIconGradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="0%" stop-color="#F05A28" stop-opacity="1"></stop><stop offset="100%" stop-color="#E80A89" stop-opacity="1"></stop></linearGradient></defs><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm-2-4V8l6 4-6 4z" /></svg>
			<svg v-else-if="name == 'dashboard'" viewBox="0 0 24 24"><title>Download</title><path d="M16.5,2 L21.5,2 C21.7761424,2 22,2.22385763 22,2.5 L22,11.5 C22,11.7761424 21.7761424,12 21.5,12 L16.5,12 C16.2238576,12 16,11.7761424 16,11.5 L16,2.5 C16,2.22385763 16.2238576,2 16.5,2 Z M2.5,14 L8.5,14 C8.77614237,14 9,14.2238576 9,14.5 L9,21.5 C9,21.7761424 8.77614237,22 8.5,22 L2.5,22 C2.22385763,22 2,21.7761424 2,21.5 L2,14.5 C2,14.2238576 2.22385763,14 2.5,14 Z M11.5,14 L21.5,14 C21.7761424,14 22,14.2238576 22,14.5 L22,21.5 C22,21.7761424 21.7761424,22 21.5,22 L11.5,22 C11.2238576,22 11,21.7761424 11,21.5 L11,14.5 C11,14.2238576 11.2238576,14 11.5,14 Z M2.5,2 L13.5,2 C13.7761424,2 14,2.22385763 14,2.5 L14,11.5 C14,11.7761424 13.7761424,12 13.5,12 L2.5,12 C2.22385763,12 2,11.7761424 2,11.5 L2,2.5 C2,2.22385763 2.22385763,2 2.5,2 Z M4,10 L12,10 L12,4 L4,4 L4,10 Z M18,10 L20,10 L20,4 L18,4 L18,10 Z M4,20 L7,20 L7,16 L4,16 L4,20 Z M13,20 L20,20 L20,16 L13,16 L13,20 Z"/></svg>
			<svg v-else-if="name == 'download'" title="download" viewBox="0 0 24 24"><path d="M16.707 9.707L12 14.415 7.293 9.707l1.414-1.414L11 10.586V2h2v8.586l2.293-2.293 1.414 1.414zM15.586 14H22v8H2v-8h6.414l2 2h3.172l2-2zM20 20v-4h-3.586l-2 2H9.586l-2-2H4v4h16z" /></svg>
			<svg v-else-if="name == 'ds'" viewBox="0 0 486 56"><g fill="#FFF" fillRule="evenodd"><path d="M106.16 45.72c-8.64 0-15.9-6.72-15.9-16.68v-.12c0-9.3 6.54-16.74 15.3-16.74 9.24 0 14.88 7.5 14.88 16.92 0 .6 0 .84-.12 1.44H94.4c.66 7.38 5.94 11.64 11.88 11.64 4.62 0 7.86-2.04 10.5-4.8l2.58 2.34c-3.24 3.54-7.14 6-13.2 6zM94.4 27.3h21.84c-.48-6.12-3.96-11.58-10.8-11.58-5.94 0-10.44 4.92-11.04 11.58zm44.88 18.3c6.3 0 11.28-3.54 11.28-9.48V36c0-5.7-5.4-7.62-10.44-9.12-4.44-1.26-8.58-2.52-8.58-5.82v-.12c0-2.94 2.64-5.1 6.72-5.1 3.18 0 6.66 1.26 9.66 3.18l1.92-3.12c-3.24-2.22-7.62-3.6-11.46-3.6-6.3 0-10.74 3.72-10.74 9.12v.12c0 5.76 5.64 7.44 10.74 8.94 4.32 1.2 8.22 2.46 8.22 5.94v.12c0 3.36-3.06 5.52-7.14 5.52-3.9 0-7.74-1.44-11.28-4.14l-2.16 3c3.54 2.88 8.64 4.68 13.26 4.68zm20.34-40.26h4.74V.48h-4.74v4.86zm.36 39.66H164V12.96h-4.02V45zm29.22-6.12c6.3 0 12.42-4.62 12.42-11.46v-.12c0-6.9-6.12-11.4-12.42-11.4-6.36 0-11.7 4.38-11.7 11.4v.12c0 6.78 5.46 11.46 11.7 11.46zm.18 16.2c-5.28 0-10.26-1.56-14.64-4.62l2.04-3.18c3.78 2.76 7.98 4.26 12.66 4.26 7.14 0 12-4.02 12-11.88v-4.14c-2.76 3.84-6.78 7.08-12.9 7.08-7.74 0-15.24-5.88-15.24-15.12v-.12c0-9.3 7.56-15.18 15.24-15.18 6.18 0 10.26 3.24 12.9 6.84v-6.06h4.02v26.7c0 4.86-1.5 8.58-4.08 11.16-2.82 2.82-7.02 4.26-12 4.26zM216.32 45h4.02V26.58c0-6.3 4.44-10.68 10.26-10.68 6 0 9.48 3.96 9.48 10.26V45h4.02V25.2c0-7.62-4.62-13.02-12.54-13.02-5.64 0-9.12 2.88-11.22 6.48v-5.7h-4.02V45zm72.06.6c8.58 0 14.76-4.86 14.76-12.12v-.12c0-6.6-4.38-10.14-14.28-12.24-9.96-2.1-12.24-4.62-12.24-8.94v-.12c0-4.2 3.9-7.62 9.9-7.62 4.62 0 8.7 1.44 12.78 4.86l2.52-3.24C297.38 2.46 293 .72 286.64.72c-8.22 0-14.22 4.98-14.22 11.7v.12c0 6.96 4.44 10.32 14.7 12.48 9.54 1.98 11.82 4.44 11.82 8.7v.12c0 4.68-4.2 8.04-10.32 8.04-6.24 0-10.62-2.1-15.3-6.36l-2.64 3.12c5.22 4.68 10.8 6.96 17.7 6.96zm36.72-5.04l-12.42-27.6h-4.5l14.94 31.92c-2.16 4.98-4.14 6.66-7.2 6.66-2.16 0-3.6-.42-5.22-1.2l-1.38 3.3c2.16 1.02 4.08 1.56 6.66 1.56 4.68 0 7.86-2.4 10.62-9.12l13.68-33.12h-4.38l-10.8 27.6zm32.1 5.04c6.3 0 11.28-3.54 11.28-9.48V36c0-5.7-5.4-7.62-10.44-9.12-4.44-1.26-8.58-2.52-8.58-5.82v-.12c0-2.94 2.64-5.1 6.72-5.1 3.18 0 6.66 1.26 9.66 3.18l1.92-3.12c-3.24-2.22-7.62-3.6-11.46-3.6-6.3 0-10.74 3.72-10.74 9.12v.12c0 5.76 5.64 7.44 10.74 8.94 4.32 1.2 8.22 2.46 8.22 5.94v.12c0 3.36-3.06 5.52-7.14 5.52-3.9 0-7.74-1.44-11.28-4.14l-2.16 3c3.54 2.88 8.64 4.68 13.26 4.68zm30.36-.06c2.22 0 3.84-.42 5.52-1.2v-3.6c-1.74.78-3.06 1.14-4.68 1.14-3.42 0-5.82-1.56-5.82-5.76V16.56h10.68v-3.6h-10.68V3h-4.02v9.96H374v3.6h4.56V36.6c0 6.36 3.96 8.94 9 8.94zm26.94.18c-8.64 0-15.9-6.72-15.9-16.68v-.12c0-9.3 6.54-16.74 15.3-16.74 9.24 0 14.88 7.5 14.88 16.92 0 .6 0 .84-.12 1.44h-25.92c.66 7.38 5.94 11.64 11.88 11.64 4.62 0 7.86-2.04 10.5-4.8l2.58 2.34c-3.24 3.54-7.14 6-13.2 6zM402.74 27.3h21.84c-.48-6.12-3.96-11.58-10.8-11.58-5.94 0-10.44 4.92-11.04 11.58zM437.12 45h4.02V26.58c0-6.12 4.14-10.68 9.48-10.68 5.4 0 8.76 3.78 8.76 10.08V45h4.02V26.46c0-6.72 4.32-10.56 9.42-10.56 5.52 0 8.82 3.72 8.82 10.26V45h4.02V25.32c0-7.98-4.62-13.14-12.12-13.14-5.76 0-9.18 3.12-11.4 6.66-1.74-3.66-5.16-6.66-10.5-6.66-5.58 0-8.46 3.06-10.5 6.3v-5.52h-4.02V45zM23 46C10.297 46 0 35.7017 0 23.001 0 10.2983 10.2978 0 23 0c12.703 0 23.001 10.2983 23 23.001C46 35.7017 35.703 46 23 46zm-5.9297-29.6445l-4.672-2.6992v18.6874l4.672-2.6993v5.3947L37.7343 23l-20.664-12.039v5.3945zm0 2.2828v8.7233L14.375 28.919V17.081l2.6953 1.5573zm1.9766 1.142L24.6192 23l-5.5724 3.2196v-6.4393zm0 8.722L28.5702 23l-9.5234-5.5025V14.4L33.808 23l-14.761 8.6v-3.0976z" /><path d="M47 41.0387V41.5L44.6 45h14.94c13.68 0 23.16-9.54 23.16-21.96 0-12.3-9.48-21.72-23.16-21.72H44.6L47 5v.0387l12.54.1213c11.52 0 18.84 8.04 18.84 18v.12c0 10.02-7.32 17.88-18.84 17.88L47 41.0387z" /></g></svg>
			<svg v-else-if="name == 'envelope'" viewBox="0 0 24 24"><path d="M5.41421356,6 L12,12.5857864 L18.5857864,6 L5.41421356,6 Z M20,7.41421356 L12.3535534,15.0606602 C12.1582912,15.2559223 11.8417088,15.2559223 11.6464466,15.0606602 L4,7.41421356 L4,18 L20,18 L20,7.41421356 Z M3,4 L21,4 C21.5522847,4 22,4.44771525 22,5 L22,19 C22,19.5522847 21.5522847,20 21,20 L3,20 C2.44771525,20 2,19.5522847 2,19 L2,5 C2,4.44771525 2.44771525,4 3,4 Z"/></svg>
			<svg v-else-if="name == 'gear'" viewBox="0 0 24 24"><path d="M13 6.083V4h-2v2.083c-1.45.2432-2.7237 1.0066-3.6226 2.0917L5.5734 7.133l-1 1.7322 1.8022 1.0405C6.1326 10.5577 6 11.2634 6 12c0 .736.1325 1.441.375 2.0924L4.5722 15.133l1 1.7322 1.8038-1.0414c.899 1.086 2.1733 1.85 3.624 2.0932V20h2v-2.083c1.451-.2434 2.7255-1.0077 3.6246-2.094l1.805 1.0422 1-1.732-1.8042-1.0418C17.8676 13.4402 18 12.7356 18 12c0-.7363-.1326-1.4416-.3753-2.0933l1.804-1.0415-1-1.732-1.8054 1.0423C15.7243 7.09 14.4503 6.3263 13 6.083zm-8.9235 7.028C4.026 12.748 4 12.377 4 12s.026-.748.0765-1.111L1.8407 9.598l3-5.196 2.2368 1.2913c.582-.455 1.2285-.831 1.9235-1.1122V2h6v2.582c.6946.2812 1.3408.6572 1.9224 1.112l2.238-1.292 3 5.196-2.2378 1.292c.0504.3628.0764.7333.0764 1.11 0 .3767-.026.7472-.0764 1.11l2.2377 1.292-3 5.196-2.238-1.292c-.5815.4548-1.2277.8308-1.9223 1.112V22h-6v-2.581c-.695-.2814-1.3416-.6574-1.9235-1.1123L4.8407 19.598l-3-5.196 2.2358-1.291zM12 16c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm0-2c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2z" /></svg>
			<svg v-else-if="name == 'hand'" viewBox="0 0 24 24"><path d="M10.0085 9.4066C10.638 10.457 11 11.6862 11 13c0 1.7768-.662 3.399-1.7528 4.6333l-1.362-1.4858C8.5822 15.288 9 14.1928 9 13c0-1.125-.3715-2.163-.9985-2.9985L7.293 9.293 15.79.79l1.42 1.42-7.2015 7.1966zM21.29 6.29l1.42 1.42-6.503 6.497-1.414-1.414L21.29 6.29zm-1.5-4l1.42 1.42-7.003 6.997-1.414-1.414L19.79 2.29zm1.3026 9.8032l1.4148 1.4136-6.997 7.0036c-3.3194 3.3195-8.7014 3.3195-12.0208 0C.17 17.191.17 11.809 3.4896 8.4896c2.693-2.693 2.951-3.6046 2.0403-7.247l1.94-.485c1.082 4.328.6205 5.9594-2.5663 9.1462-2.5384 2.5384-2.5384 6.654 0 9.1924 2.5384 2.5384 6.654 2.5384 9.192.0003l6.9968-7.0033z" /></svg>
			<svg v-else-if="name == 'home'" viewBox="0 0 24 24"><path d="M21 13.8558v8.1447h-7V17c0-1.1046-.8954-2-2-2s-2 .8954-2 2v5.0005H3v-8.1447l-1.2774 1.3354-1.4452-1.3824L12 1.5533l11.7226 12.2555-1.4452 1.3824L21 13.8558zM12.9234 5.412L12 4.5l-.9234.912L5 11.765v8.2355h3V17c0-2.209 1.791-4 4-4s4 1.791 4 4v3.0005h3V11.765l-6.0766-6.353z" /></svg>
			<svg v-else-if="name == 'info'" viewBox="0 0 24 24"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" /></svg>
			<svg v-else-if="name == 'link'" viewBox="0 0 24 24"><path d="M16 6h-3v1.9h3c2.26 0 4.1 1.83 4.1 4.1 0 1.0874-.432 2.1302-1.201 2.899-.7688.769-1.8116 1.201-2.899 1.201h-3V18h3c3.3137 0 6-2.6863 6-6 0-3.32-2.69-6-6-6zM3.9 12c0-2.27 1.84-4.1 4.1-4.1h3V6H8c-3.3137 0-6 2.6863-6 6s2.6863 6 6 6h3v-1.9H8c-2.26 0-4.1-1.84-4.1-4.1zM8 13h8v-2H8v2z" /></svg>
			<svg v-else-if="name == 'list'" viewBox="0 0 24 24"><path d="M7 2c.553 0 1 .448 1 1v4c0 .553-.447 1-1 1H3c-.552 0-1-.447-1-1V3c0-.552.448-1 1-1h4zM6 6V4H4v2h2zm1 3c.553 0 1 .448 1 1v4c0 .553-.447 1-1 1H3c-.552 0-1-.447-1-1v-4c0-.552.448-1 1-1h4zm-1 4v-2H4v2h2zm1 3c.553 0 1 .448 1 1v4c0 .553-.447 1-1 1H3c-.552 0-1-.447-1-1v-4c0-.552.448-1 1-1h4zm-1 4v-2H4v2h2zm4-16h12v2H10V4zm0 7h12v2H10v-2zm0 7h12v2H10v-2z" /></svg>
			<svg v-else-if="name == 'lock'" viewBox="0 0 24 24"><path d="M13.5 15.5005c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5m3.5-7.5v2c1.103 0 2 .896 2 2v7c0 1.103-.897 2-2 2H7c-1.103 0-2-.897-2-2v-7c0-1.104.897-2 2-2v-2c0-2.757 2.243-5 5-5s5 2.243 5 5zm-10 11h10.001l-.001-7H7v7zm2-11v2h6v-2c0-1.654-1.346-3-3-3s-3 1.346-3 3z" /></svg>
			<svg v-else-if="name == 'logo'" viewBox="0 0 24 24"><path d="M15.0722,1.6849 C9.6602,-0.2851 3.6552,2.5159 1.6852,7.9279 C-0.2848,13.3399 2.5152,19.3449 7.9272,21.3149 C13.3392,23.2849 19.3452,20.4839 21.3152,15.0729 C23.2852,9.6609 20.4842,3.6549 15.0722,1.6849 M11.5002,22.9999 C5.1592,22.9999 0.0002,17.8409 0.0002,11.4999 C0.0002,5.1589 5.1592,-0.0001 11.5002,-0.0001 C17.8412,-0.0001 23.0002,5.1589 23.0002,11.4999 C23.0002,17.8409 17.8412,22.9999 11.5002,22.9999"></path><path d="M8,5 L8,18 L19,11.5 L8,5 Z M9,7 L17,11.5 L9,16 L9,7 Z"></path><path d="M6,6.5 L6,16.5 L14,11.5 L6,6.5 Z M7,9 L12,11.5 L7,14 L7,9 Z"></path></svg> 	
			<svg v-else-if="name == 'logout'" viewBox="0 0 24 24"><path d="M14 9h-2.001L12 5H4v14h7.997l.001-4H14v4c0 1.103-.897 2-2 2H4c-1.104 0-2-.897-2-2V5c0-1.104.896-2 2-2h8c1.103 0 2 .896 2 2v4zm2.293-.293l1.414-1.414L22.414 12l-4.707 4.707-1.414-1.414L18.586 13H10v-2h8.586l-2.293-2.293z" /></svg>
			<svg v-else-if="name == 'menu'" viewBox="0 0 24 24"><path d="M22 11v2H2v-2h20zM2 17h19.9795v2H2v-2zM2 5h19.9773v2H2V5z" /></svg>
			<svg v-else-if="name == 'mic'" viewBox="0 0 24 24"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" /></svg>
			<svg v-else-if="name == 'more'" viewBox="0 0 24 24"><path d="M6 14.5c-1.1046 0-2-.8954-2-2s.8954-2 2-2 2 .8954 2 2-.8954 2-2 2zm12 0c-1.1046 0-2-.8954-2-2s.8954-2 2-2 2 .8954 2 2-.8954 2-2 2zm-6 0c-1.1046 0-2-.8954-2-2s.8954-2 2-2 2 .8954 2 2-.8954 2-2 2z" /></svg>
			<svg v-else-if="name == 'note'" viewBox="0 0 24 24"><path d="M19 2c1.104 0 2 .896 2 2v16c0 1.103-.896 2-2 2H7c-1.104 0-2-.897-2-2v-2H3v-2h2v-3H3v-2h2V8H3V6h2V4c0-1.104.896-2 2-2h12zM7 20h12.002L19 4H7v2h1v2H7v3h1v2H7v3h1v2H7v2zm3-13h7v6h-7V7zm2 2v2h3V9h-3z" /></svg>
			<svg v-else-if="name == 'org'" viewBox="0 0 24 24"><path d="M21 16.159v-2.184c0-1.654-1.346-3-3-3h-5v-3h6c.552 0 1-.447 1-1v-4c0-.552-.448-1-1-1H5c-.552 0-1 .448-1 1v4c0 .553.448 1 1 1h6v3H6c-1.654 0-3 1.346-3 3v2.184c-1.161.414-2 1.514-2 2.816 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.302-.838-2.401-2-2.816v-2.184c0-.551.449-1 1-1h5v3.184c-1.161.414-2 1.514-2 2.816 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.302-.838-2.401-2-2.816v-3.184h5c.552 0 1 .449 1 1v2.184c-1.161.414-2 1.514-2 2.816 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.302-.838-2.402-2-2.816zM6 3.975h12v2H6v-2zm-2 16c-.551 0-1-.448-1-1 0-.551.449-1 1-1 .552 0 1 .449 1 1 0 .551-.448 1-1 1zm8 0c-.551 0-1-.448-1-1 0-.551.449-1 1-1 .552 0 1 .449 1 1 0 .551-.448 1-1 1zm8 0c-.552 0-1-.448-1-1 0-.551.448-1 1-1s1 .449 1 1c0 .551-.448 1-1 1z" /></svg>
			<svg v-else-if="name == 'path'" viewBox="0 0 24 24"><path d="M4.4113 10l3.5858 3.5858V22H6l-.003-7.5858L3 11.4172V14H1V8h6v2H4.4113zM21 11.4142l-3 3V22h-2v-8.4142L19.5858 10H17V8h6v6h-2v-2.5858zm-8-5.5884V22h-2V5.831L9.1742 7.657 7.76 6.2425 12.0026 2l4.2427 4.2426L14.831 7.657 13 5.8257z" /></svg>
			<svg v-else-if="name == 'pencil'" viewBox="0 0 24 24"><path d="M5.2762 15.862L5 19l3.1392-.275 8.0858-8.0858-2.863-2.863-8.0858 8.0858zm12.363-6.637l.7668-.7667c.384-.3842.5922-.887.5922-1.4318 0-.5455-.208-1.048-.5932-1.4328-.3838-.3838-.885-.5912-1.4308-.5912-.5446 0-1.047.208-1.4318.5932l-.7662.7663 2.863 2.863zm-.665-6.2225c1.076 0 2.086.418 2.845 1.177.761.76 1.179 1.772 1.179 2.847 0 1.074-.418 2.086-1.178 2.846l-10.409 10.409c-.128.128-.289.22-.464.263l-4.705.427c-.34.085-.702-.015-.949-.264-.248-.247-.348-.608-.264-.949l.427-4.704c.044-.176.135-.336.263-.464l10.409-10.409c.76-.761 1.772-1.179 2.846-1.179z" /></svg>
			<svg v-else-if="name == 'play-circle'" viewBox="0 0 24 24"><defs><linearGradient id="playIconGradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="0%" stop-color="#F05A28" stop-opacity="1"></stop><stop offset="100%" stop-color="#E80A89" stop-opacity="1"></stop></linearGradient></defs><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm-2-4V8l6 4-6 4z" /></svg>
			<svg v-else-if="name == 'play'" viewBox="0 0 24 24"><path d="M6 21l14-9L6 3" /></svg>
			<svg v-else-if="name == 'plus'" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6" /></svg>
			<svg v-else-if="name == 'question'" viewBox="0 0 24 24"><path d="M11 15h2v2h-2v-2zm-2-4.5908c.009-.4873 0-1.7598.7173-2.396.7174-.6362.6272-.5302 1.0288-.697.4018-.167.8508-.2506 1.347-.2506.641 0 1.1756.088 1.604.264.429.176.774.3948 1.0358.6565.2617.262.449.544.5618.8463.1128.3023.1692.5843.1692.846 0 .4332-.0564.7897-.1692 1.0694-.1128.2798-.2527.519-.4197.7175-.167.1986-.352.3678-.555.5077-.203.14-.395.2797-.5754.4196-.1805.1398-.3407.3-.4805.4805-.14.1805-.264.2266-.264 1.127h-2c0-.9004.274-1.258.396-1.5196.1218-.2617.264-.485.4264-.67.1624-.185.334-.3452.5144-.4806.1805-.1353.3474-.2707.501-.406.1533-.1354.2774-.2843.372-.4468.095-.1625.1377-.3656.1287-.6092 0-.4152-.1015-.722-.3046-.9205-.203-.1986-.485-.298-.846-.298-.2438 0-.4536.0475-.6296.1423-.176.0947-.3203.221-.433.379-.113.158-.1964.343-.2506.555-.054.212-.0812.44-.0812.6836H9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
			<svg v-else-if="name == 'report'" viewBox="0 0 24 24"><path d="M22 11c0-.551-.448-1-1-1h-4c-.552 0-1 .449-1 1v9h-1v-4c0-.551-.448-1-1-1h-4c-.552 0-1 .449-1 1v4H8v-7c0-.551-.448-1-1-1H3c-.552 0-1 .449-1 1v7H0v2h24v-2h-2v-9zM4 20v-6h2v6H4zm7 0v-3h2v3h-2zm7 0v-8h2v8h-2zM5 9c-1.104 0-2-.896-2-2s.896-2 2-2c1.102 0 1.994.891 1.999 1.992l4.002 2.286C11.296 9.106 11.635 9 12 9c.178 0 .347.031.511.074l4.563-4.562C17.031 4.349 17 4.179 17 4c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2c-.178 0-.348-.029-.512-.073l-4.562 4.562c.043.165.074.333.074.511 0 1.104-.896 2-2 2-1.102 0-1.994-.89-1.999-1.99L5.999 8.724C5.704 8.896 5.365 9 5 9z" /></svg>
			<svg v-else-if="name == 'scope'" viewBox="0 0 24 24"><path d="M12.839 11.4557c.4603-.124.957.0964 1.1655.5434l3.8035 8.157c.2334.5004.017 1.0954-.4837 1.329-.5005.2332-1.0955.0167-1.329-.484L13 14.5774V21c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6.4228L8.0045 21.001c-.2334.5006-.8284.717-1.329.4837-.5004-.2334-.717-.8284-.4836-1.329l3.8033-8.1566c.2085-.447.7052-.6673 1.1656-.5432.1782-.2743.4874-.4556.839-.4556s.6606.1814.839.4557zM11 10h8V6h-8v4zm-1-6h10c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1H10c-.5523 0-1-.4477-1-1V5c0-.5523.4477-1 1-1zM8 9h1V7H8v2zM7 5h3c.5523 0 1 .4477 1 1v4c0 .5523-.4477 1-1 1H7c-.5523 0-1-.4477-1-1V6c0-.5523.4477-1 1-1zM5 6h1c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1H5c-.5523 0-1-.4477-1-1V7c0-.5523.4477-1 1-1z" /></svg>
			<svg v-else-if="name == 'search'" viewBox="0 0 24 24"><path d="M21.707 20.294L16.314 14.9C17.403 13.504 18 11.799 18 10c0-2.137-.833-4.144-2.344-5.656C14.145 2.832 12.137 2 10 2c-2.137 0-4.146.832-5.656 2.344C2.832 5.856 2 7.863 2 10c0 2.137.832 4.146 2.344 5.656C5.854 17.168 7.863 18 10 18c1.799 0 3.504-.596 4.9-1.685l5.393 5.393 1.414-1.414zM10 16c-1.603 0-3.109-.624-4.242-1.757C4.624 13.11 4 11.603 4 10c0-1.602.624-3.109 1.758-4.242C6.891 4.624 8.397 4 10 4c1.602 0 3.109.624 4.242 1.758C15.376 6.891 16 8.398 16 10c0 1.603-.624 3.11-1.758 4.243C13.109 15.376 11.602 16 10 16z" /></svg>
			<svg v-else-if="name == 'share'" viewBox="0 0 24 24"><path d="M17 16.08c-.76 0-1.44.3-1.96.77L7.91 12.7c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3c0 .24.04.47.09.7L7.04 9.81C6.5 9.31 5.79 9 5 9c-1.657 0-3 1.343-3 3s1.343 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.15c-.05.21-.08.43-.08.66 0 1.61 1.31 2.91 2.92 2.91 1.61 0 2.92-1.3 2.92-2.91 0-1.6127-1.3073-2.92-2.92-2.92z" /></svg>
			<svg v-else-if="name == 'tag'" viewBox="0 0 24 24"><path id="tag.icon-a" d="M9.60154067,5 L5,5 L5.00433599,9.60343253 L14,18.5 L18.5,14 L9.60154067,5 Z M20.6957984,14.8223465 L14.8215676,20.6958849 C14.416026,21.1013787 13.7585615,21.1013707 13.3530298,20.695867 L3.30972212,10.6532516 C3.11519698,10.4587398 3.00579802,10.1949916 3.00553893,9.91990114 L3.00000047,4.0394396 C2.99945994,3.46553139 3.46455308,3 4.03846155,3 L9.91753847,3 C10.1930548,3 10.4572783,3.10948763 10.652044,3.30436077 L20.696044,13.3538992 C21.1014146,13.7594933 21.1013046,14.416888 20.6957984,14.8223465 Z M7.61538462,9.11538461 C8.44381175,9.11538461 9.11538462,8.44381174 9.11538462,7.61538461 C9.11538462,6.78695749 8.44381175,6.11538461 7.61538462,6.11538461 C6.7869575,6.11538461 6.11538462,6.78695749 6.11538462,7.61538461 C6.11538462,8.44381174 6.7869575,9.11538461 7.61538462,9.11538461 Z"/></svg>
			<svg v-else-if="name == 'test'" viewBox="0 0 24 24"><path d="M17.505 3.6454l-1.3827 1.382c-1.2065-.7133-2.614-1.1226-4.1174-1.1226-4.4733 0-8.0994 3.6243-8.0994 8.0952 0 4.471 3.626 8.0952 8.0992 8.0952 4.473 0 8.099-3.6243 8.099-8.0952 0-.994-.1792-1.9464-.5072-2.8263L21.05 7.721c.6153 1.2973.9596 2.748.9596 4.279 0 5.5228-4.4794 10-10.005 10C6.4794 22 2 17.5228 2 12S6.4793 2 12.005 2c2.0316 0 3.922.6053 5.5 1.6454zm-2.7887 2.7873l-1.466 1.4652c-.394-.1196-.8122-.1838-1.2454-.1838-2.3683 0-4.288 1.9188-4.288 4.2857 0 2.367 1.9197 4.2856 4.288 4.2856 2.1967 0 4.0077-1.6514 4.258-3.78l1.8-1.799c.0886.417.1353.8498.1353 1.2933 0 3.419-2.773 6.1904-6.1935 6.1904-3.4207 0-6.1936-2.7716-6.1936-6.1905 0-3.419 2.773-6.1906 6.1935-6.1906.9723 0 1.8924.224 2.7113.6232zm-2.919 5.4218l8.8547-8.8503 1.3475 1.3468-9.9946 9.9483-3.056-3.0544 1.3474-1.347 1.5008 1.9564z" /></svg>
			<svg v-else-if="name == 'thumbs-up'" viewBox="0 0 24 24"><path d="M19.165 19h-6.973L8 17.323V12h1c.399 0 .761-.238.918-.606L12.659 5H14v4c0 .552.447 1 1 1h5.801l-1.636 9zM6 19H4v-8h2v8zM22.767 8.359C22.577 8.132 22.296 8 22 8h-6V4c0-.552-.448-1-1-1h-3c-.4 0-.762.238-.919.606L8.34 10H8c0-.552-.448-1-1-1H3c-.553 0-1 .448-1 1v10c0 .552.447 1 1 1h4c.552 0 1-.448 1-1v-.522l3.628 1.451c.118.047.244.071.372.071h8c.483 0 .897-.346.983-.821l2-11c.054-.292-.026-.592-.216-.82z" fillRule="evenodd" /></svg>
			<svg v-else-if="name == 'trash'" viewBox="0 0 24 24"><path d="M9.0003 2.0003h5.999v2h-5.999v-2zM3 7V5h18v2H3zm2 0h14l-.5 15h-13L5 7zm2 0l.5 13h9L17 7H7zm2 2h2v9H9V9zm4 0h2v9h-2V9z" /></svg>
			<svg v-else-if="name == 'upload'" viewBox="0 0 24 24"><path d="M16.707 6.708l-1.414 1.414L13 5.829v8.586h-2V5.829L8.707 8.122 7.293 6.708 12 2l4.707 4.708zM15.586 14H22v8H2v-8h6.414l2 2h3.172l2-2zM20 20v-4h-3.586l-2 2H9.586l-2-2H4v4h16z" /></svg>
			<svg v-else-if="name == 'user'" viewBox="0 0 24 24"><path d="M12 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .896-2 2 0 1.103.897 2 2 2s2-.897 2-2c0-1.104-.897-2-2-2zm8 14H4v-1c0-3.533 3.29-6 8-6s8 2.467 8 6v1zM6.159 18h11.683c-.598-1.808-2.833-3-5.841-3s-5.244 1.192-5.842 3z" /></svg>
			<svg v-else-if="name == 'warning'" viewBox="0 0 24 24"><path d="M13 19h-2v-2h2v2zm0-4h-2v-4h2v4zm6.531 5L12 6.9917 4.469 20h15.062zM1 22L12 3l11 19H1z" /></svg>
			<svg v-else-if="name == 'window'" viewBox="0 0 24 24"><path d="M22 7.975h-2v2h2v2h-2v2h1.999l-.002 6H8v-2H6v2c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2v-10c0-1.102-.897-2-2-2zm-4 6v-10c0-1.102-.897-2-2-2H2c-1.104 0-2 .898-2 2v10c0 1.104.896 2 2 2h14c1.103 0 2-.897 2-2zm-2-8h-6v-2h6v2zm-10 0v-2h2v2H6zm-2-2v2H2v-2h2zm-2 10v-6h13.999l-.002 6H2z" /></svg>
            <svg v-else-if="name == 'download-thin'" viewBox="0 0 37 37"><path d="M18.5,36.7c-10,0-18.2-8.2-18.2-18.2S8.5,0.3,18.5,0.3s18.2,8.2,18.2,18.2S28.5,36.7,18.5,36.7z M18.5,1.3 C9,1.3,1.3,9,1.3,18.5C1.3,28,9,35.7,18.5,35.7c9.5,0,17.2-7.7,17.2-17.2C35.7,9,28,1.3,18.5,1.3z"/><path d="M18.5,28c-0.3,0-0.5-0.2-0.5-0.5V9.5C18,9.3,18.2,9,18.5,9S19,9.3,19,9.5v17.9C19,27.7,18.8,28,18.5,28z"/><path d="M18.5,28c-0.1,0-0.3,0-0.4-0.1L9.3,19c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l8.5,8.5l8.5-8.5 c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-8.8,8.8C18.8,27.9,18.6,28,18.5,28z"/></svg>
            <svg v-else-if="name == 'checkmark-thin'" viewBox="0 0 37 37"><path d="M14.6,24.4c-0.1,0-0.3,0-0.4-0.1l-3.9-3.9c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l3.5,3.5l11.2-10.5 c0.2-0.2,0.5-0.2,0.7,0c0.2,0.2,0.2,0.5,0,0.7L15,24.3C14.9,24.4,14.8,24.4,14.6,24.4z"/><path d="M18.5,36.7c-10.1,0-18.2-8.2-18.2-18.2C0.3,8.4,8.4,0.3,18.5,0.3c10.1,0,18.2,8.2,18.2,18.2 C36.7,28.6,28.6,36.7,18.5,36.7z M18.5,1.3C9,1.3,1.3,9,1.3,18.5S9,35.7,18.5,35.7S35.7,28,35.7,18.5S28,1.3,18.5,1.3z"/></svg>
	   		<svg v-else-if="name == 'discussion-thin'" viewBox="0 0 37 34"><path d="M5.4,25.8c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.3-0.3-0.3-0.5v-5.7H0.8c-0.3,0-0.5-0.2-0.5-0.5V0.7c0-0.3,0.2-0.5,0.5-0.5h29.3c0.3,0,0.5,0.2,0.5,0.5v10c0,0.3-0.2,0.5-0.5,0.5s-0.5-0.2-0.5-0.5V1.2H1.3v17.5h4.1c0.3,0,0.5,0.2,0.5,0.5v5l5.3-5.3c0.1-0.1,0.2-0.1,0.4-0.1h1.5c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5h-1.3l-6,6C5.7,25.8,5.5,25.8,5.4,25.8z"/><path d="M33.1,33.6c-0.1,0-0.2,0-0.3-0.1l-6.8-6h-8.3c-0.3,0-0.5-0.2-0.5-0.5V14.6c0-0.3,0.2-0.5,0.5-0.5h18.5c0.3,0,0.5,0.2,0.5,0.5v12.3c0,0.3-0.2,0.5-0.5,0.5h-2.6v5.7c0,0.2-0.1,0.4-0.3,0.5C33.3,33.5,33.2,33.6,33.1,33.6z M18.2,26.4h8c0.1,0,0.2,0,0.3,0.1l6.1,5.4v-5.1c0-0.3,0.2-0.5,0.5-0.5h2.6V15.1H18.2V26.4z"/></svg>
			<svg v-else-if="name == 'project'" viewBox="0 0 24 24"><path d="M16.8,11.5c0-2-1.3-3.7-3.2-4.4v4.7h-3.2V7.1c-1.9,0.6-3.2,2.4-3.2,4.4c0,1.9,1.2,3.6,2.9,4.3v7h3.8v-7 C15.6,15.1,16.8,13.5,16.8,11.5z"/><path d="M12,2.3c5.3,0,9.7,4.4,9.7,9.7s-4.4,9.7-9.7,9.7S2.3,17.3,2.3,12S6.7,2.3,12,2.3 M12,0C5.4,0,0,5.4,0,12 s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0L12,0z"/></svg>
			<svg v-else-if="name == 'interactive'" viewBox="0 0 24 24"><path d="M23.6,9.7h-2.3l0-4.7H2.7V19h9.4v2.3H2.7c-1.3,0-2.3-1-2.3-2.3V5c0-1.3,1-2.3,2.3-2.3h18.6c1.3,0,2.3,1,2.3,2.3 L23.6,9.7z"/><path d="M19.7,15.8l3.7,3.7c0.2,0.2,0.2,0.6,0,0.8l-0.8,0.8c-0.2,0.2-0.6,0.2-0.8,0l-3.7-3.7L17,19.6 c-0.1,0.3-0.5,0.4-0.8,0.3c-0.1-0.1-0.2-0.2-0.3-0.3L12,10.5c-0.1-0.3,0-0.6,0.3-0.8c0.1-0.1,0.3-0.1,0.5,0l9.1,3.9c0.3,0.1,0.4,0.5,0.3,0.8c-0.1,0.1-0.2,0.2-0.3,0.3L19.7,15.8z"/></svg>
	</span>
	`,
	props: {
		color: 	{ default: 'white', type: String },
		name: 	{ default: 'home', type: String },
		size: 	{ default: '', type: String }
	}
}); 

console.log('Icon component loaded.');