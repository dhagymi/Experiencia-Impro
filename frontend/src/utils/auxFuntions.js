/* Get begining and finishing date of current month */
export const getMonthBeginingAndFinishingDate = (month) => {
	const date = new Date();
	const currentMonth = date.getMonth();

	const year =
		month < currentMonth + 1 ? date.getFullYear() + 1 : date.getFullYear();
	const monthBegining = new Date(year, month - 1, 1, 0, 0);
	const monthFinishing = new Date(
		month === 12 ? year + 1 : year,
		month === 12 ? 0 : month,
		1,
		0,
		0
	);

	return {
		begin: monthBegining,
		finish: monthFinishing,
	};
};

export const getUsefulDate = (date) => {
	const jsDate = new Date(date);

	const day = jsDate.getDate();
	const month = jsDate.getMonth() + 1;
	const year = jsDate.getFullYear();

	const hours =
		jsDate.getHours() < 10 ? `0${jsDate.getHours()}` : jsDate.getHours();
	const minutes =
		jsDate.getMinutes() < 10 ? `0${jsDate.getMinutes()}` : jsDate.getMinutes();
	const seconds =
		jsDate.getSeconds() < 10 ? `0${jsDate.getSeconds()}` : jsDate.getSeconds();

	return { day, month, year, hours, minutes, seconds };
};

export const createOrderEmailTemplate = (
	orderId,
	quantity,
	{ date, place, city }
) => {
	const { day, month, year, hours, minutes } = getUsefulDate(date);

	return `
<!DOCTYPE html>
<html
	lang="en"
	xmlns="http://www.w3.org/1999/xhtml"
	xmlns:o="urn:schemas-microsoft-com:office:office"
>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width,initial-scale=1" />
		<meta name="x-apple-disable-message-reformatting" />
		<title></title>
		<!--[if mso]>
			<noscript>
				<xml>
					<o:OfficeDocumentSettings>
						<o:PixelsPerInch>96</o:PixelsPerInch>
					</o:OfficeDocumentSettings>
				</xml>
			</noscript>
		<![endif]-->
		<style>
			table,
			td,
			div,
			h1,
			p {
				font-family: Arial, sans-serif;
			}
		</style>
	</head>
	<body style="margin: 0; padding: 0">
		<table
			role="presentation"
			style="
				width: 100%;
				border-collapse: collapse;
				border: 0;
				border-spacing: 0;
				background: #ffffff;
			"
		>
			<tr>
				<td align="center" style="padding: 0">
					<table
						role="presentation"
						style="
							width: 602px;
							border-collapse: collapse;
							border: 1px solid #cccccc;
							border-spacing: 0;
							text-align: left;
						"
					>
						<tr>
							<td
								align="left"
								style="padding: 30px 0 30px 30px; background: #000000; width: 100%"
							>
								<img
									src="https://imagizer.imageshack.com/img924/3868/BjziyE.png"
									alt="Experiencia impro"
									width="150"
									style="height: auto; display: block"
								/>
							</td>
						</tr>
						<tr>
							<tr align="left" style="padding: 36px 30px 42px 30px">
								<td style="padding: 36px 30px 42px 30px">
									<h1
										style="
											font-size: 24px;
											margin: 0 0 20px 0;
											font-family: Arial, sans-serif;
										"
									>
										Reserva
									</h1>
								</td>
							</tr>
							<tr style="padding: 36px 30px 42px 30px">
								<td>
									<table 
										align="center"
										role="presentation"
										style="
											width: 100%;
											border-collapse: collapse;
											border: 0;
											border-spacing: 0;
										"
									>
										<tr align="center" style="width: 100%">
											<td align="center" style="width: 100%">
												<img
													src="https://imagizer.imageshack.com/img923/7952/5xsW8p.png"
													alt="Reserva exitosa"
													width="100"
													style="height: auto; text-align: center;"
													align="center"
												/>
											</td>
										</tr>
										<tr align="center" style="padding: 36px 30px 42px 30px; width: 100%;">
											<td style="padding: 0 0 0 0; margin: auto; color: #153643; width: 100%;">
												<b
													style="
														margin: 0 0 12px 0;
														font-size: 16px;
														line-height: 24px;
														font-family: Arial, sans-serif;
														text-align: center;
													"
													>Gracias! Su código de reserva es:
												</b>
											</td>											
										</tr>										
										<tr align="center" style="padding: 36px 30px 42px 30px; width: 100%;">
											<td style="padding: 0 0 0 0; margin: auto; color: #153643; width: 100%;">
												<b
													style="
														margin: 0 0 12px 0;
														font-size: 16px;
														line-height: 24px;
														font-family: Arial, sans-serif;
														text-align: center;
													"
													>${orderId}
												</b>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td style="padding: 36px 30px 42px 30px">
									<p
										style="
											margin: 0 0 12px 0;
											font-size: 16px;
											line-height: 24px;
											font-family: Arial, sans-serif;
										"
									>
										<b>Cantidad:</b> ${quantity}
									</p>
									<p
										style="
											margin: 0 0 12px 0;
											font-size: 16px;
											line-height: 24px;
											font-family: Arial, sans-serif;
										"
									>
										<b>Fecha y hora:</b> ${day}-${month}-${year} ${hours}:${minutes} hs.
									</p>
									<p
										style="
											margin: 0 0 12px 0;
											font-size: 16px;
											line-height: 24px;
											font-family: Arial, sans-serif;
										"
									>
										<b>Lugar</b> ${place} - ${city}
									</p>								
								<td>
							</tr>
						</tr>
						<tr>
							<td style="padding: 20px; background: #000000; width: 100%">
								<table
									role="presentation"
									style="
										width: 100%;
										border-collapse: collapse;
										border: 0;
										border-spacing: 0;
										font-size: 9px;
										font-family: Arial, sans-serif;
									"
								>
									<tr>
										<td style="padding: 0; width: 50%" align="left">
											<p
												style="
													margin: 0;
													font-size: 14px;
													line-height: 16px;
													font-family: Arial, sans-serif;
													color: #ffffff;
												"
											>
												&reg; Experiencia Impro
											</p>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
</html>

`;
};
