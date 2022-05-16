const ContactCard = () => {
	return (
		<div className="contactCard">
			<h2 className="contactCard__title">¿En qué podemos ayudarte?</h2>
			<div className="contactCard__infoContainer">
				<h3 className="contactCard__subtitle">WhatsApp</h3>
				<p className="contactCard__info">+54 9 11 2176 3009</p>
				<h3 className="contactCard__subtitle">E-mail</h3>
				<p className="contactCard__info">experienciaimpro@gmail.com</p>
				<h3 className="contactCard__subtitle">Ubicación</h3>
				<a
					href="https://www.google.com/maps/place/Belgradstra%C3%9Fe+66,+80804+M%C3%BCnchen,+Alemania/data=!4m2!3m1!1s0x479e75d1d5a0011b:0x38c20b604665ccd8?sa=X&ved=2ahUKEwiCwdTR0Jn2AhUlqpUCHerODIIQ8gF6BAgYEAE"
					target="_blank"
					rel="noreferrer"
				>
					<p className="contactCard__info">Belgradstraße 66, 80804 München</p>
				</a>
			</div>
			<div className="contactCard__social">
				<a
					href="https://www.facebook.com/pg/impro.experiencia/posts/"
					target="_blank"
					rel="noreferrer"
					className="contactCard__socialLink"
				>
					<svg
						className="contactCard__socialIcon"
						viewBox="0 0 15 34"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3.57083 33.3387H9.82287V16.5313H14.1785L14.6434 10.9025H9.84734V7.69354C9.84734 6.37841 10.092 5.8392 11.2788 5.8392H14.6679V0H10.3367C5.68747 0 3.57083 2.19628 3.57083 6.45732V10.9419H0.34082V16.6365H3.57083V33.3387Z"
							fill="currentColor"
						/>
					</svg>
				</a>
				<a
					href="https://www.instagram.com/experienciaimpro/?hl=es"
					target="_blank"
					rel="noreferrer"
					className="contactCard__socialLink"
				>
					<svg
						className="contactCard__socialIcon"
						viewBox="0 0 29 31"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14.2938 3.47428C18.0499 3.47428 18.5026 3.47428 19.983 3.56634C20.876 3.58168 21.7606 3.75496 22.6013 4.07925C23.21 4.325 23.7612 4.71105 24.2163 5.21026C24.6824 5.70811 25.0416 6.30962 25.2685 6.97255C25.5779 7.86934 25.7394 8.81731 25.7456 9.77378C25.819 11.3651 25.8313 11.8517 25.8313 15.8892C25.8313 19.9266 25.8313 20.4001 25.7456 21.9914C25.7391 22.9521 25.5777 23.9043 25.2685 24.8058C25.0428 25.4616 24.6832 26.0548 24.2163 26.5418C23.7612 27.041 23.21 27.427 22.6013 27.6728C21.7635 28.0099 20.8775 28.1879 19.983 28.1988C18.5026 28.2646 18.0499 28.2777 14.2938 28.2777C10.5377 28.2777 10.0972 28.2777 8.61677 28.1988C7.72226 28.1879 6.83632 28.0099 5.99851 27.6728C5.39301 27.4203 4.84311 27.035 4.38388 26.5414C3.92465 26.0477 3.56616 25.4566 3.3313 24.8058C3.02735 23.8991 2.87412 22.942 2.87861 21.9782C2.87861 20.3869 2.8052 19.9135 2.8052 15.876C2.8052 11.8385 2.8052 11.3519 2.87861 9.76063C2.87665 8.80996 3.02986 7.8663 3.3313 6.97255C3.55977 6.31432 3.91882 5.71746 4.3835 5.22341C4.83525 4.71674 5.3872 4.32571 5.99851 4.07925C6.83916 3.75496 7.72374 3.58168 8.61677 3.56634C10.0972 3.48744 10.5377 3.47428 14.2938 3.47428ZM14.2938 0.751953C10.4765 0.751953 9.99932 0.751953 8.49443 0.844013C7.32807 0.86693 6.17381 1.10262 5.08089 1.54103C4.15891 1.93064 3.32473 2.52692 2.63391 3.29016C1.92502 4.03113 1.37402 4.9285 1.0189 5.92044C0.589693 7.09572 0.349725 8.34097 0.309277 9.60282C0.309277 11.2073 0.223633 11.7202 0.223633 15.8366C0.223633 19.9529 0.223633 20.4527 0.309277 22.0703C0.333802 23.3249 0.557234 24.5657 0.969962 25.7395C1.32172 26.7536 1.87021 27.6756 2.579 28.4443C3.28779 29.213 4.14064 29.8107 5.08089 30.1978C6.17289 30.6415 7.32729 30.8817 8.49443 30.908C9.99932 30.9738 10.4765 31.0001 14.2938 31.0001C18.1111 31.0001 18.6005 31.0001 20.0931 30.908C21.2642 30.8814 22.4226 30.6412 23.5189 30.1978C24.4528 29.81 25.301 29.2165 26.0089 28.4555C26.7169 27.6945 27.269 26.7829 27.6298 25.779C28.0377 24.6042 28.2569 23.3635 28.2783 22.1098C28.3517 20.4921 28.3639 19.9792 28.3639 15.876C28.3639 11.7728 28.3639 11.2467 28.2783 9.64227C28.2569 8.38428 28.0377 7.13924 27.6298 5.95989C27.2701 4.96733 26.715 4.07009 26.0026 3.32962C25.3103 2.56822 24.4765 1.97222 23.5556 1.58049C22.4584 1.14209 21.3001 0.906422 20.1298 0.883467C18.6372 0.804558 18.16 0.791407 14.3305 0.791407"
							fill="currentColor"
						/>
						<path
							d="M14.2938 8.10352C12.8637 8.10352 11.4657 8.55936 10.2766 9.41341C9.08748 10.2675 8.16069 11.4813 7.61341 12.9016C7.06612 14.3218 6.92293 15.8846 7.20193 17.3923C7.48093 18.9 8.1696 20.2849 9.18085 21.3719C10.1921 22.4589 11.4805 23.1992 12.8832 23.4991C14.2858 23.799 15.7397 23.6451 17.0609 23.0568C18.3822 22.4685 19.5115 21.4723 20.306 20.1941C21.1006 18.9159 21.5246 17.4132 21.5246 15.876C21.5246 13.8146 20.7628 11.8376 19.4068 10.38C18.0507 8.9224 16.2116 8.10352 14.2938 8.10352V8.10352ZM14.2938 20.9129C13.3641 20.9129 12.4552 20.6164 11.6824 20.0609C10.9095 19.5054 10.3073 18.7159 9.95209 17.7924C9.59685 16.8688 9.50453 15.8527 9.68681 14.8727C9.86908 13.8928 10.3178 12.9929 10.976 12.2872C11.6343 11.5814 12.4726 11.1015 13.3848 10.9081C14.2969 10.7148 15.242 10.8166 16.1002 11.2009C16.9585 11.5851 17.6914 12.2345 18.2062 13.0667C18.721 13.8989 18.9944 14.8766 18.992 15.876C18.9888 17.2131 18.4924 18.4942 17.6116 19.4384C16.7309 20.3827 15.5377 20.9129 14.2938 20.9129Z"
							fill="currentColor"
						/>
						<path
							d="M23.4945 7.80122C23.4945 8.16017 23.3955 8.51106 23.21 8.80951C23.0244 9.10797 22.7607 9.34059 22.4522 9.47795C22.1437 9.61532 21.8042 9.65126 21.4767 9.58123C21.1492 9.5112 20.8483 9.33835 20.6122 9.08453C20.3761 8.83072 20.2153 8.50734 20.1501 8.15528C20.085 7.80323 20.1184 7.43832 20.2462 7.10669C20.374 6.77506 20.5904 6.49161 20.8681 6.29219C21.1457 6.09277 21.4722 5.98633 21.8061 5.98633C22.2539 5.98633 22.6833 6.17754 23 6.5179C23.3166 6.85825 23.4945 7.31988 23.4945 7.80122"
							fill="currentColor"
						/>
					</svg>
				</a>
				<a
					href="https://open.spotify.com/show/2qiEe52INU2Pq8mgnIfTcD"
					target="_blank"
					rel="noreferrer"
					className="contactCard__socialLink"
				>
					<svg
						className="contactCard__socialIcon"
						viewBox="0 0 30 34"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14.9878 0.85938C12.0216 0.861981 9.12267 1.80982 6.65755 3.58308C4.19242 5.35634 2.27174 7.87541 1.1383 10.8218C0.00486662 13.7683 -0.290438 17.0098 0.289721 20.1365C0.869879 23.2633 2.29945 26.1351 4.39773 28.3887C6.496 30.6423 9.16876 32.1766 12.0781 32.7977C14.9875 33.4187 18.0029 33.0987 20.7431 31.8779C23.4832 30.6572 25.8252 28.5906 27.4729 25.9393C29.1206 23.2881 30 20.1713 30 16.9829C30 14.8645 29.6116 12.7667 28.857 10.8097C28.1024 8.85263 26.9964 7.07459 25.6023 5.57721C24.2081 4.07983 22.5531 2.89245 20.7318 2.08294C18.9105 1.27343 16.9586 0.857652 14.9878 0.85938V0.85938ZM21.925 24.1504C21.803 24.3681 21.6058 24.525 21.3764 24.5866C21.1471 24.6482 20.9044 24.6096 20.7015 24.4792C17.1778 22.1383 12.7488 21.6517 7.5 22.9405C7.26154 23.0043 7.00928 22.964 6.79837 22.8285C6.58745 22.6929 6.43502 22.4732 6.37439 22.2172C6.32149 21.9613 6.36174 21.6933 6.48688 21.4683C6.61202 21.2433 6.81256 21.0783 7.04731 21.0073C12.7488 19.6921 17.7039 20.205 21.6068 22.7827C21.7149 22.8463 21.8095 22.9333 21.8847 23.0381C21.96 23.1429 22.0143 23.2633 22.0441 23.3918C22.074 23.5202 22.0789 23.654 22.0583 23.7845C22.0378 23.9151 21.9924 24.0396 21.925 24.1504ZM23.7357 19.7184C23.6579 19.8577 23.5551 19.9789 23.4333 20.075C23.3114 20.171 23.173 20.2401 23.0261 20.278C22.8792 20.316 22.7267 20.3221 22.5775 20.296C22.4284 20.2699 22.2856 20.2122 22.1574 20.1261C19.9099 18.7697 17.4339 17.9073 14.8735 17.5889C12.3131 17.2706 9.71928 17.5027 7.24307 18.2718C7.09784 18.3461 6.9396 18.3865 6.77879 18.3903C6.61797 18.3941 6.45824 18.3612 6.31012 18.2938C6.162 18.2264 6.02886 18.126 5.91949 17.9992C5.81011 17.8724 5.72699 17.7221 5.6756 17.5583C5.62421 17.3944 5.60573 17.2207 5.62136 17.0487C5.63699 16.8766 5.68639 16.71 5.7663 16.56C5.84621 16.4099 5.95481 16.2798 6.08493 16.1781C6.21506 16.0765 6.36375 16.0056 6.52121 15.9703C9.32473 15.1031 12.2611 14.846 15.1582 15.2141C18.0553 15.5822 20.855 16.5681 23.3931 18.114C23.5139 18.1952 23.6181 18.3019 23.6994 18.4277C23.7806 18.5535 23.8373 18.6957 23.8659 18.8458C23.8945 18.9958 23.8944 19.1505 23.8657 19.3005C23.8371 19.4505 23.7803 19.5927 23.699 19.7184H23.7357ZM23.8825 15.2075C19.0375 12.1432 11.0114 11.8145 6.43556 13.34C6.09723 13.4205 5.74311 13.3615 5.44333 13.1746C5.14355 12.9878 4.91998 12.6868 4.81688 12.3312C4.71378 11.9756 4.73868 11.5913 4.88665 11.2545C5.03461 10.9177 5.29485 10.6528 5.61583 10.5125C10.938 8.8291 19.7227 9.19734 25.2651 12.6956C25.5891 12.9016 25.8254 13.2355 25.9237 13.6261C26.022 14.0168 25.9744 14.4332 25.7912 14.7867C25.5606 15.0855 25.2418 15.2902 24.8877 15.3668C24.5337 15.4434 24.1659 15.3872 23.8458 15.2075H23.8825Z"
							fill="currentColor"
						/>
					</svg>
				</a>
			</div>
		</div>
	);
};
export default ContactCard;
