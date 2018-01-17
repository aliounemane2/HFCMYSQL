 // Abonnement mi-mois


 			var currentDate = new Date()
			var jour = currentDate.getDate()
			var mois = currentDate.getMonth() + 1
			var anne = currentDate.getFullYear()
			// var nows = day + "/" + month + "/" + year;
			var nows = anne+"-"+mois+"-"+jour;

			console.log("  DATE "+nows);				

			
			if (mois == 1){

				// mois = "0"+1;
				// anne = parseInt(anne)+1;

				if (jour>=1 && jour<=16){

					jour == parseInt(jour)+15;
					mois = "0"+1;
					anne = parseInt(anne);
					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				} else if (jour == 17){
					jour == "0"+1;
					mois = "0"+2;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 18){
					
					jour == "0"+2;
					mois = "0"+2;
					anne = parseInt(anne);
					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;

				}else if (jour == 19){
					jour == "0"+3;
					mois = "0"+2;
					anne = parseInt(anne);
					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 20){
					jour == "0"+4;
					mois = "0"+2;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 21){
					jour == "0"+5;
					mois = "0"+2;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 22){
					jour == "0"+6;
					mois = "0"+2;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 23){
					jour == "0"+7;
					mois = "0"+2;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 24){
					jour == "0"+8;
					mois = "0"+2;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 25){
					jour == "0"+9;
					mois = "0"+2;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 26){
					jour == 10;
					mois = "0"+2;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 27){
					jour == 11;
					mois = "0"+2;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 28){
					jour == 12;
					mois = "0"+2;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 29){
					jour == 13;
					mois = "0"+2;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 30){
					jour == 14;
					mois = "0"+2;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 31){
					jour == 15;
					mois = "0"+2;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else {
					// jour = jour;
					// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}

			}else if (mois == 2){

					if ((anne%4==0) && ((anne%100!=0) || (anne%400==0))){
						//jour = 29;
						// alert(jour+"-"+mois+"-"+anne);
						// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
					
							if (jour>=1 && jour<=14){

								jour == parseInt(jour)+15;
								mois = "0"+2;
								anne = parseInt(anne);
								document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							} else if (jour == 16){
								jour == "0"+1;
								mois = "0"+3;
								anne = parseInt(anne);

								document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							} else if (jour == 17){
								jour == "0"+2;
								mois = "0"+3;
								anne = parseInt(anne);

								document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 18){
								jour == "0"+3;
								mois = "0"+3;
								anne = parseInt(anne);


								document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 19){
								jour == "0"+4;
								mois = "0"+3;
								anne = parseInt(anne);


								document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 20){
								jour == "0"+5;
								mois = "0"+3;
								anne = parseInt(anne);


								document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 21){
								jour == "0"+6;
								mois = "0"+3;
								anne = parseInt(anne);


								document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 22){
								jour == "0"+7;
								mois = "0"+3;
								anne = parseInt(anne);


								document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 23){
								jour == "0"+8;
								mois = "0"+3;
								anne = parseInt(anne);


								document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 24){
								jour == "0"+9;
								mois = "0"+3;
								anne = parseInt(anne);


								document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 25){
								jour == 10;
								mois = "0"+3;
								anne = parseInt(anne);


								document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 26){
								jour == 11;
								mois = "0"+3;
								anne = parseInt(anne);


								document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 27){

								jour == 12;
								mois = "0"+3;
								anne = parseInt(anne);

								document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							} else if (jour == 28){

								jour == 13;
								mois = "0"+3;
								anne = parseInt(anne);

								document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 29){

								jour == 14;
								mois = "0"+3;
								anne = parseInt(anne);

								document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else {
								// jour = jour;
								// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}


					}else{
						// jour = 28;
						// alert(jour+"-"+mois+"-"+anne);
						// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
					

							if (jour>=1 && jour<=13){

								jour == parseInt(jour)+15;
								mois = "0"+2;
								anne = parseInt(anne);
								// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							} else if (jour == 16){
								jour == "0"+1;
								mois = "0"+3;
								anne = parseInt(anne);

								// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							} else if (jour == 17){
								jour == "0"+2;
								mois = "0"+3;
								anne = parseInt(anne);

								// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 18){
								jour == "0"+3;
								mois = "0"+3;
								anne = parseInt(anne);


								// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 19){
								jour == "0"+4;
								mois = "0"+3;
								anne = parseInt(anne);


								// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 20){
								jour == "0"+5;
								mois = "0"+3;
								anne = parseInt(anne);


								// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 21){
								jour == "0"+6;
								mois = "0"+3;
								anne = parseInt(anne);


								// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 22){
								jour == "0"+7;
								mois = "0"+3;
								anne = parseInt(anne);


								// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 23){
								jour == "0"+8;
								mois = "0"+3;
								anne = parseInt(anne);


								// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 24){
								jour == "0"+9;
								mois = "0"+3;
								anne = parseInt(anne);


								// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 25){
								jour == 10;
								mois = "0"+3;
								anne = parseInt(anne);


								// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 26){
								jour == 11;
								mois = "0"+3;
								anne = parseInt(anne);


								// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else if (jour == 27){
								
								jour == 12;
								mois = "0"+3;
								anne = parseInt(anne);

								// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							} else if (jour == 28){

								jour == 13;
								mois = "0"+3;
								anne = parseInt(anne);

								// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}else {
								// jour = jour;
								// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
							}

					} 
					
				
			}else if (mois == 3){


				if (jour>=1 && jour<=16){

					jour == parseInt(jour)+15;
					mois = "0"+3;
					anne = parseInt(anne);
					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				} else if (jour == 17){
					jour == "0"+1;
					mois = "0"+4;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 18){
					jour == "0"+2;
					mois = "0"+4;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 19){
					jour == "0"+3;
					mois = "0"+4;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 20){
					jour == "0"+4;
					mois = "0"+4;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 21){
					jour == "0"+5;
					mois = "0"+4;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 22){
					jour == "0"+6;
					mois = "0"+4;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 23){
					jour == "0"+7;
					mois = "0"+4;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 24){
					jour == "0"+8;
					mois = "0"+4;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 25){
					jour == "0"+9;
					mois = "0"+4;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 26){
					jour == 10;
					mois = "0"+4;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 27){
					jour == 11;
					mois = "0"+4;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 28){
					jour == 12;
					mois = "0"+4;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 29){
					jour == 13;
					mois = "0"+4;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 30){
					jour == 14;
					mois = "0"+4;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 31){
					jour == 15;
					mois = "0"+4;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else {
					// jour = jour;
					// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}


			}else if (mois == 4){


				if (jour >=1 && jour <= 15){

					jour == parseInt(jour)+15;
					mois = "0"+4;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				} else if (jour == 16){

					jour == "0"+1;
					mois = "0"+5;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 17){
					jour == "0"+2;
					mois = "0"+5;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 18){
					jour == "0"+3;
					mois = "0"+5;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 19){
					jour == "0"+4;
					mois = "0"+5;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 20){
					jour == "0"+5;
					mois = "0"+5;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 21){
					jour == "0"+6;
					mois = "0"+5;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 22){
					jour == "0"+7;
					mois = "0"+5;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 23){
					jour == "0"+8;
					mois = "0"+5;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 24){

					jour == "0"+9;
					mois = "0"+5;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 25){

					jour == 10;
					mois = "0"+5;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 26){
					jour == 11;
					mois = "0"+5;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 27){
					jour == 12;
					mois = "0"+5;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 28){
					jour == 13;
					mois = "0"+5;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 29){
					jour == 14;
					mois = "0"+5;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 30){
					jour == 15;
					mois = "0"+5;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else {
					// jour = jour;
					// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}

				
			}else if (mois == 5){


				if (jour>=1 && jour<=16){

					jour == parseInt(jour)+15;
					mois = "0"+5;
					anne = parseInt(anne);
					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				
				} else if (jour == 17){
					jour == "0"+1;
					mois = "0"+6;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 18){
					jour == "0"+2;
					mois = "0"+6;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 19){
					jour == "0"+3;
					mois = "0"+6;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 20){
					jour == "0"+4;
					mois = "0"+6;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 21){
					jour == "0"+5;
					mois = "0"+6;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 22){
					jour == "0"+6;
					mois = "0"+6;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 23){
					jour == "0"+7;
					mois = "0"+6;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 24){
					jour == "0"+8;
					mois = "0"+6;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 25){
					jour == "0"+9;
					mois = "0"+6;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 26){
					jour == 10;
					mois = "0"+6;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 27){
					jour == 11;
					mois = "0"+6;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 28){
					jour == 12;
					mois = "0"+6;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 29){
					jour == 13;
					mois = "0"+6;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 30){
					jour == 14;
					mois = "0"+6;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 31){
					jour == 15;
					mois = "0"+6;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else {
					// jour = jour;
					// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}

			}else if (mois == 6){


				if (jour >=1 && jour <= 15){

					jour == parseInt(jour)+15;
					mois = "0"+6;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				} else if (jour == 16){

					jour == "0"+1;
					mois = "0"+7;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 17){
					jour == "0"+2;
					mois = "0"+7;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 18){
					jour == "0"+3;
					mois = "0"+7;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 19){
					jour == "0"+4;
					mois = "0"+7;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 20){
					jour == "0"+5;
					mois = "0"+7;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 21){
					jour == "0"+6;
					mois = "0"+7;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 22){
					jour == "0"+7;
					mois = "0"+7;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 23){
					jour == "0"+8;
					mois = "0"+7;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 24){

					jour == "0"+9;
					mois = "0"+7;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 25){

					jour == 10;
					mois = "0"+7;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 26){
					jour == 11;
					mois = "0"+7;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 27){
					jour == 12;
					mois = "0"+7;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 28){
					jour == 13;
					mois = "0"+7;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 29){
					jour == 14;
					mois = "0"+7;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 30){
					jour == 15;
					mois = "0"+7;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else {
					// jour = jour;
					// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}
				
			}else if (mois == 7){


				if (jour >=1 && jour<=16){

					jour == parseInt(jour)+15;
					mois = "0"+7;
					anne = parseInt(anne);
					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;

				} else if (jour == 17){
					jour == "0"+1;
					mois = "0"+8;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 18){
					jour == "0"+2;
					mois = "0"+8;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 19){
					jour == "0"+3;
					mois = "0"+8;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 20){
					jour == "0"+4;
					mois = "0"+8;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 21){
					jour == "0"+5;
					mois = "0"+8;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 22){
					jour == "0"+6;
					mois = "0"+8;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 23){
					jour == "0"+7;
					mois = "0"+8;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 24){
					jour == "0"+8;
					mois = "0"+8;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 25){
					jour == "0"+9;
					mois = "0"+8;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 26){
					jour == 10;
					mois = "0"+8;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 27){
					jour == 11;
					mois = "0"+8;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 28){
					jour == 12;
					mois = "0"+8;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 29){
					jour == 13;
					mois = "0"+8;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 30){
					jour == 14;
					mois = "0"+8;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 31){
					jour == 15;
					mois = "0"+8;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else {
					// jour = jour;
					// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}

				
			}else if (mois == 8){


				if (jour >=1 && jour<=16){

					jour == parseInt(jour)+15;
					mois = "0"+8;
					anne = parseInt(anne);
					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;

				} else if (jour == 17){
					jour == "0"+1;
					mois = "0"+9;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 18){
					jour == "0"+2;
					mois = "0"+9;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 19){
					jour == "0"+3;
					mois = "0"+9;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 20){
					jour == "0"+4;
					mois = "0"+9;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 21){
					jour == "0"+5;
					mois = "0"+9;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 22){
					jour == "0"+6;
					mois = "0"+9;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 23){
					jour == "0"+7;
					mois = "0"+9;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 24){
					jour == "0"+8;
					mois = "0"+9;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 25){
					jour == "0"+9;
					mois = "0"+9;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 26){
					jour == 10;
					mois = "0"+9;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 27){
					jour == 11;
					mois = "0"+9;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 28){
					jour == 12;
					mois = "0"+9;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 29){
					jour == 13;
					mois = "0"+9;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 30){
					jour == 14;
					mois = "0"+9;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 31){
					jour == 15;
					mois = "0"+9;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else {
					// jour = jour;
					// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}
				
			}else if (mois == 9){


				if (jour >=1 && jour <= 15){

					jour == parseInt(jour)+15;
					mois = "0"+9;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				} else if (jour == 16){

					jour == "0"+1;
					mois = 10;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 17){
					jour == "0"+2;
					mois = 10;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 18){
					jour == "0"+3;
					mois = 10;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 19){
					jour == "0"+4;
					mois = 10;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 20){
					jour == "0"+5;
					mois = 10;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 21){
					jour == "0"+6;
					mois = 10;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 22){
					jour == "0"+7;
					mois = 10;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 23){
					jour == "0"+8;
					mois = 10;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 24){

					jour == "0"+9;
					mois = 10;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 25){

					jour == 10;
					mois = 10;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 26){
					jour == 11;
					mois = 10;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 27){
					jour == 12;
					mois = 10;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 28){
					jour == 13;
					mois = 10;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 29){
					jour == 14;
					mois = 10;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 30){
					jour == 15;
					mois = 10;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else {
					// jour = jour;
					// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}
				
			}else if (mois == 10){


				if (jour >=1 && jour<=16){

					jour == parseInt(jour)+15;
					mois = 10;
					anne = parseInt(anne);
					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;

				} else if (jour == 17){
					jour == "0"+1;
					mois = 11;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 18){
					jour == "0"+2;
					mois = 11;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 19){
					jour == "0"+3;
					mois = 11;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 20){
					jour == "0"+4;
					mois = 11;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 21){
					jour == "0"+5;
					mois = 11;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 22){
					jour == "0"+6;
					mois = 11;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 23){
					jour == "0"+7;
					mois = 11;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 24){
					jour == "0"+8;
					mois = 11;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 25){
					jour == "0"+9;
					mois = 11;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 26){
					jour == 10;
					mois = 11;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 27){
					jour == 11;
					mois = 11;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 28){
					jour == 12;
					mois = 11;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 29){
					jour == 13;
					mois = 11;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 30){
					jour == 14;
					mois = 11;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 31){
					jour == 15;
					mois = 11;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else {
					// jour = jour;
					// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}

				
			}else if (mois == 11){



				if (jour >=1 && jour <= 15){

					jour == parseInt(jour)+15;
					mois = 11;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				} else if (jour == 16){

					jour == "0"+1;
					mois = 12;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 17){
					jour == "0"+2;
					mois = 12;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 18){
					jour == "0"+3;
					mois = 12;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 19){
					jour == "0"+4;
					mois = 12;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 20){
					jour == "0"+5;
					mois = 12;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 21){
					jour == "0"+6;
					mois = 12;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 22){
					jour == "0"+7;
					mois = 12;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 23){
					jour == "0"+8;
					mois = 12;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 24){

					jour == "0"+9;
					mois = 12;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 25){

					jour == 10;
					mois = 12;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 26){
					jour == 11;
					mois = 12;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 27){
					jour == 12;
					mois = 12;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 28){
					jour == 13;
					mois = 12;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 29){
					jour == 14;
					mois = 12;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 30){
					jour == 15;
					mois = 12;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else {
					// jour = jour;
					// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}

				
			}else{
				
				if (jour>=1 && jour<=16){

					jour == parseInt(jour)+15;
					mois = 12;
					anne = parseInt(anne);
					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				} else if (jour == 17){
					jour == "0"+1;
					mois = "0"+1;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 18){
					jour == "0"+2;
					mois = "0"+1;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 19){
					jour == "0"+3;
					mois = "0"+1;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 20){
					jour == "0"+4;
					mois = "0"+1;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 21){
					jour == "0"+5;
					mois = "0"+1;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 22){
					jour == "0"+6;
					mois = "0"+1;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 23){
					jour == "0"+7;
					mois = "0"+1;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 24){
					jour == "0"+8;
					mois = "0"+1;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 25){
					jour == "0"+9;
					mois = "0"+1;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 26){
					jour == 10;
					mois = "0"+1;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 27){
					jour == 11;
					mois = "0"+1;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 28){
					jour == 12;
					mois = "0"+1;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 29){
					jour == 13;
					mois = "0"+1;
					anne = parseInt(anne);

					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 30){
					jour == 14;
					mois = "0"+1;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else if (jour == 31){
					jour == 15;
					mois = "0"+1;
					anne = parseInt(anne);


					document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}else {
					// jour = jour;
					// document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
				}

			}
	






































































var currentDate = new Date()
            var jour = currentDate.getDate()
            var mois = currentDate.getMonth() + 1
            var anne = currentDate.getFullYear()
            // var nows = day + "/" + month + "/" + year;
            // var nows = anne+"-"+mois+"-"+jour;
            // console.log("  DATE "+nows);                

            
            if (mois == 1){

                // mois = "0"+1;
                // anne = parseInt(anne)+1;

                if (jour>=1 && jour<=16){

                    var jours = parseInt(jour)+15;
                    var moiss = "0"+1;
                    var annes = parseInt(anne);
                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                } else if (jour == 17){
                    var jours = "0"+1;
                    var moiss = "0"+2;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 18){
                    
                    var jours = "0"+2;
                    var moiss ="0"+2;
                    var annes =parseInt(anne);
                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;

                }else if (jour == 19){
                    var jours = "0"+3;
                    var moiss ="0"+2;
                    var annes =parseInt(anne);
                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 20){
                    var jours = "0"+4;
                    var moiss ="0"+2;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 21){
                    var jours = "0"+5;
                    var moiss ="0"+2;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 22){
                    var jours = "0"+6;
                    var moiss = "0"+2;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 23){
                    var jours = "0"+7;
                    var moiss ="0"+2;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 24){
                    var jours = "0"+8;
                    var moiss ="0"+2;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 25){
                    var jours = "0"+9;
                    var moiss ="0"+2;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 26){
                    var jours = 10;
                    var moiss ="0"+2;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 27){
                    var jours = 11;
                    var moiss ="0"+2;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 28){
                    var jours = 12;
                    var moiss ="0"+2;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 29){
                    var jours = 13;
                    var moiss ="0"+2;
                    var annes =parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 30){
                    var jours = 14;
                    var moiss ="0"+2;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 31){
                    var jours = 15;
                    var moiss ="0"+2;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else {
                    // jour = jour;
                    // document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
                }

            }else if (mois == 2){

                    if ((anne%4==0) && ((anne%100!=0) || (anne%400==0))){
                        //jour = 29;
                        // alert(jour+"-"+mois+"-"+anne);
                        // document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
                    
                            if (jour>=1 && jour<=14){

                                var jours = parseInt(jour)+15;
                                var moiss ="0"+2;
                                var annes =parseInt(anne);
                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            } else if (jour == 16){
                                var jours = "0"+1;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);

                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            } else if (jour == 17){
                                var jours = "0"+2;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);

                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 18){
                                var jours = "0"+3;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 19){
                                var jours = "0"+4;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 20){
                                var jours = "0"+5;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 21){
                                var jours = "0"+6;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 22){
                                var jours = "0"+7;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 23){
                                var jours = "0"+8;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 24){
                                var jours = "0"+9;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 25){
                                var jours = 10;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 26){
                                var jours = 11;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 27){

                                var jours = 12;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);

                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            } else if (jour == 28){

                                var jours = 13;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);

                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 29){

                                var jours = 14;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);

                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else {
                                // jour = jour;
                                // document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
                            }


                    }else{
                        // jour = 28;
                        // alert(jour+"-"+mois+"-"+anne);
                        // document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
                    

                            if (jour>=1 && jour<=13){

                                var jours = parseInt(jour)+15;
                                var moiss ="0"+2;
                                var annes =parseInt(anne);
                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            } else if (jour == 16){
                                var jours = "0"+1;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);

                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            } else if (jour == 17){
                                var jours = "0"+2;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);

                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 18){
                                var jours = "0"+3;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 19){
                                var jours = "0"+4;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 20){
                                var jours = "0"+5;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 21){
                                var jours = "0"+6;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 22){
                                var jours = "0"+7;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 23){
                                var jours = "0"+8;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 24){
                                var jours = "0"+9;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 25){
                                var jours = 10;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 26){
                                var jours = 11;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);


                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else if (jour == 27){
                                
                                var jours = 12;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);

                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            } else if (jour == 28){

                                var jours = 13;
                                var moiss ="0"+3;
                                var annes =parseInt(anne);

                                document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                            }else {
                                // jour = jour;
                                // document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
                            }

                    } 
                    
                
            }else if (mois == 3){


                if (jour>=1 && jour<=16){

                    var jours = parseInt(jour)+15;
                    var moiss ="0"+3;
                    var annes =parseInt(anne);
                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                } else if (jour == 17){
                    var jours = "0"+1;
                    var moiss ="0"+4;
                    var annes =parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 18){
                    var jours = "0"+2;
                    var moiss ="0"+4;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 19){
                    var jours = "0"+3;
                    var moiss ="0"+4;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 20){
                    var jours = "0"+4;
                    var moiss ="0"+4;
                    var annes =parseInt(anne);


                    document.getElementById('date_fin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 21){
                    var jours = "0"+5;
                    var moiss ="0"+4;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 22){
                    var jours = "0"+6;
                    var moiss ="0"+4;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 23){
                    var jours = "0"+7;
                    var moiss ="0"+4;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 24){
                    var jours = "0"+8;
                    var moiss ="0"+4;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 25){
                    var jours = "0"+9;
                    var moiss ="0"+4;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 26){
                    var jours = 10;
                    var moiss ="0"+4;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 27){
                    var jours = 11;
                    var moiss ="0"+4;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 28){
                    var jours = 12;
                    var moiss ="0"+4;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 29){
                    var jours = 13;
                    var moiss ="0"+4;
                    var annes =parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 30){
                    var jours = 14;
                    var moiss ="0"+4;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 31){
                    var jours = 15;
                    var moiss ="0"+4;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else {
                    // jour = jour;
                    // document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
                }


            }else if (mois == 4){


                if (jour >=1 && jour <= 15){

                    var jours = parseInt(jour)+15;
                    var moiss = "0"+4;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                } else if (jour == 16){

                    var jours = "0"+1;
                    var moiss = "0"+5;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 17){
                    var jours = "0"+2;
                    var moiss = "0"+5;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 18){
                    var jours = "0"+3;
                    var moiss ="0"+5;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 19){
                    var jours = "0"+4;
                    var moiss ="0"+5;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 20){
                    var jours = "0"+5;
                    var moiss ="0"+5;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 21){
                    var jours = "0"+6;
                    var moiss ="0"+5;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 22){
                    var jours = "0"+7;
                    var moiss ="0"+5;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 23){
                    var jours = "0"+8;
                    var moiss ="0"+5;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 24){

                    var jours = "0"+9;
                    var moiss ="0"+5;
                    var annes =parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 25){

                    var jours = 10;
                    var moiss ="0"+5;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 26){
                    var jours = 11;
                    var moiss ="0"+5;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 27){
                    var jours = 12;
                    var moiss ="0"+5;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 28){
                    var jours = 13;
                    var moiss ="0"+5;
                    var annes =parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 29){
                    var jours = 14;
                    var moiss ="0"+5;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 30){
                    var jours = 15;
                    var moiss ="0"+5;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else {
                    // jour = jour;
                    // document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
                }

                
            }else if (mois == 5){


                if (jour>=1 && jour<=16){

                    var jours =  parseInt(jour)+15;
                    var moiss = "0"+5;
                    var annes = parseInt(anne);
                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                
                } else if (jour == 17){
                    var jours =  "0"+1;
                    var moiss = "0"+6;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 18){
                    var jours =  "0"+2;
                    var moiss = "0"+6;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 19){
                    var jours =  "0"+3;
                    var moiss = "0"+6;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 20){
                    var jours =  "0"+4;
                    var moiss = "0"+6;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 21){
                    var jours =  "0"+5;
                    var moiss = "0"+6;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 22){
                    var jours =  "0"+6;
                    var moiss = "0"+6;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 23){
                    var jours =  "0"+7;
                    var moiss = "0"+6;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 24){
                    var jours =  "0"+8;
                    var moiss = "0"+6;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 25){
                    var jours =  "0"+9;
                    var moiss = "0"+6;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 26){
                    var jours =  10;
                    var moiss = "0"+6;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 27){
                    var jours =  11;
                    var moiss = "0"+6;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 28){
                    var jours =  12;
                    var moiss = "0"+6;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 29){
                    var jours =  13;
                    var moiss = "0"+6;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 30){
                    var jours =  14;
                    var moiss = "0"+6;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 31){
                    var jours =  15;
                    var moiss = "0"+6;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else {
                    // jour = jour;
                    // document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
                }

            }else if (mois == 6){


                if (jour >=1 && jour <= 15){

                    var jours = parseInt(jour)+15;
                    var moiss ="0"+6;
                    var annes =parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                } else if (jour == 16){

                    var jours = "0"+1;
                    var moiss ="0"+7;
                    var annes =parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 17){
                    var jours = "0"+2;
                    var moiss ="0"+7;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 18){
                    var jours = "0"+3;
                    var moiss ="0"+7;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 19){
                    var jours = "0"+4;
                    var moiss ="0"+7;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 20){
                    var jours = "0"+5;
                    var moiss ="0"+7;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 21){
                    var jours = "0"+6;
                    var moiss ="0"+7;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 22){
                    var jours = "0"+7;
                    var moiss ="0"+7;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 23){
                    var jours = "0"+8;
                    var moiss ="0"+7;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 24){

                    var jours = "0"+9;
                    var moiss ="0"+7;
                    var annes =parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 25){

                    var jours = 10;
                    var moiss ="0"+7;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 26){
                    var jours = 11;
                    var moiss ="0"+7;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 27){
                    var jours = 12;
                    var moiss ="0"+7;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 28){
                    var jours = 13;
                    var moiss ="0"+7;
                    var annes =parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 29){
                    var jours = 14;
                    var moiss ="0"+7;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 30){
                    var jours = 15;
                    var moiss ="0"+7;
                    var annes =parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else {
                    // jour = jour;
                    // document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
                }
                
            }else if (mois == 7){ 


                if (jour >=1 && jour<=16){

                    var jours =  parseInt(jour)+15;
                    var moiss = "0"+7;
                    var annes = parseInt(anne);
                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;

                } else if (jour == 17){
                    var jours =  "0"+1;
                    var moiss = "0"+8;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 18){
                    var jours =  "0"+2;
                    var moiss = "0"+8;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 19){
                    var jours =  "0"+3;
                    var moiss = "0"+8;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 20){
                    var jours =  "0"+4;
                    var moiss = "0"+8;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 21){
                    var jours =  "0"+5;
                    var moiss = "0"+8;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 22){
                    var jours =  "0"+6;
                    var moiss = "0"+8;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 23){
                    var jours =  "0"+7;
                    var moiss = "0"+8;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 24){
                    var jours =  "0"+8;
                    var moiss = "0"+8;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 25){
                    var jours =  "0"+9;
                    var moiss = "0"+8;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 26){
                    var jours =  10;
                    var moiss = "0"+8;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 27){
                    var jours =  11;
                    var moiss = "0"+8;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 28){
                    var jours =  12;
                    var moiss = "0"+8;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 29){
                    var jours =  13;
                    var moiss = "0"+8;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 30){
                    var jours =  14;
                    var moiss = "0"+8;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 31){
                    var jours =  15;
                    var moiss = "0"+8;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else {
                    // jour = jour;
                    // document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
                }

               
            }else if (mois == 8){


                if (jour >=1 && jour<=16){

                    var jours = parseInt(jour)+15;
                    var moiss = "0"+8;
                    var annes = parseInt(anne);
                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;

                } else if (jour == 17){
                    var jours = "0"+1;
                    var moiss = "0"+9;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 18){
                    var jours = "0"+2;
                    var moiss = "0"+9;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 19){
                    var jours = "0"+3;
                    var moiss = "0"+9;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 20){
                    var jours = "0"+4;
                    var moiss = "0"+9;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 21){
                    var jours = "0"+5;
                    var moiss = "0"+9;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 22){
                    var jours = "0"+6;
                    var moiss = "0"+9;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 23){
                    var jours = "0"+7;
                    var moiss = "0"+9;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 24){
                    var jours = "0"+8;
                    var moiss = "0"+9;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 25){
                    var jours = "0"+9;
                    var moiss = "0"+9;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 26){
                    var jours = 10;
                    var moiss = "0"+9;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 27){
                    var jours = 11;
                    var moiss = "0"+9;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 28){
                    var jours = 12;
                    var moiss = "0"+9;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 29){
                    var jours = 13;
                    var moiss = "0"+9;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 30){
                    var jours = 14;
                    var moiss = "0"+9;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 31){
                    var jours = 15;
                    var moiss = "0"+9;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else {
                    // jour = jour;
                    // document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
                }
                
            }else if (mois == 9){


                if (jour >=1 && jour <= 15){

                    var jours = parseInt(jour)+15;
                    var moiss = "0"+9;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                } else if (jour == 16){

                    var jours = "0"+1;
                    var moiss = 10;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 17){
                    var jours = "0"+2;
                    var moiss = 10;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 18){
                    var jours = "0"+3;
                    var moiss = 10;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 19){
                    var jours = "0"+4;
                    var moiss = 10;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 20){
                    var jours = "0"+5;
                    var moiss = 10;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 21){
                    var jours = "0"+6;
                    var moiss = 10;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 22){
                    var jours = "0"+7;
                    var moiss = 10;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 23){
                    var jours = "0"+8;
                    var moiss = 10;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 24){

                    var jours = "0"+9;
                    var moiss = 10;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 25){

                    var jours = 10;
                    var moiss = 10;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 26){
                    var jours = 11;
                    var moiss = 10;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 27){
                    var jours = 12;
                    var moiss = 10;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 28){
                    var jours = 13;
                    var moiss = 10;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 29){
                    var jours = 14;
                    var moiss = 10;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 30){
                    var jours = 15;
                    var moiss = 10;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else {
                    // jour = jour;
                    // document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
                }
                
            }else if (mois == 10){


                if (jour >=1 && jour<=16){

                    var jours = parseInt(jour)+15;
                    var moiss = 10;
                    var annes = parseInt(anne);
                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;

                } else if (jour == 17){
                    var jours = "0"+1;
                    var moiss = 11;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 18){
                    var jours = "0"+2;
                    var moiss = 11;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 19){
                    var jours = "0"+3;
                    var moiss = 11;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 20){
                    var jours = "0"+4;
                    var moiss = 11;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 21){
                    var jours = "0"+5;
                    var moiss = 11;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 22){
                    var jours = "0"+6;
                    var moiss = 11;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 23){
                    var jours = "0"+7;
                    var moiss = 11;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 24){
                    var jours = "0"+8;
                    var moiss = 11;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 25){
                    var jours = "0"+9;
                    var moiss = 11;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 26){
                    var jours = 10;
                    var moiss = 11;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 27){
                    var jours = 11;
                    var moiss = 11;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 28){
                    var jours = 12;
                    var moiss = 11;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 29){
                    var jours = 13;
                    var moiss = 11;
                    var annes = parseInt(anne);
  
                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 30){
                    var jours = 14;
                    var moiss = 11;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 31){
                    var jours = 15;
                    var moiss = 11;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else {
                    // jour = jour;
                    // document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
                }

                
            }else if (mois == 11){



                if (jour >=1 && jour <= 15){

                    var jours = parseInt(jour)+15;
                    var moiss = 11;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                } else if (jour == 16){

                    var jours = "0"+1;
                    var moiss = 12;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 17){
                    var jours = "0"+2;
                    var moiss = 12;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 18){
                    var jours = "0"+3;
                    var moiss = 12;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 19){
                    var jours = "0"+4;
                    var moiss = 12;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 20){
                    var jours = "0"+5;
                    var moiss = 12;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 21){
                    var jours = "0"+6;
                    var moiss = 12;
                    var annes = parseInt(anne);

                    console.log(" COOL 111 "+annes+"-"+moiss+"-"+jours);
                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 22){
                    var jours = "0"+7;
                    var moiss = 12;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 23){
                    var jours = "0"+8;
                    var moiss = 12;
                    var annes = parseInt(anne);

                    // alert (" cool "+annes+"-"+moiss+"-"+jours);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 24){

                    var jours = "0"+9;
                    var moiss = 12;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 25){

                    var jours = 10;
                    var moiss = 12;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 26){
                    var jours = 11;
                    var moiss = 12;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 27){
                    var jours = 12;
                    var moiss = 12;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 28){
                    var jours = 13;
                    var moiss = 12;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 29){
                    var jours = 14;
                    var moiss = 12;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 30){
                    var jours = 15;
                    var moiss = 12;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else {
                    // jour = jour;
                    // document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
                }

                
            }else{
                
                if (jour>=1 && jour<=16){

                    var jours = parseInt(jour)+15;
                    var moiss = 12;
                    var annes = parseInt(anne);
                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                
                } else if (jour == 17){
                    var jours = "0"+1;
                    var moiss = "0"+1;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 18){
                    var jours = "0"+2;
                    var moiss = "0"+1;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 19){
                    var jours = "0"+3;
                    var moiss = "0"+1;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 20){
                    var jours = "0"+4;
                    var moiss = "0"+1;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 21){
                    var jours = "0"+5;
                    var moiss = "0"+1;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 22){
                    var jours = "0"+6;
                    var moiss = "0"+1;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 23){
                    var jours = "0"+7;
                    var moiss = "0"+1;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 24){
                    var jours = "0"+8;
                    var moiss = "0"+1;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 25){
                    var jours = "0"+9;
                    var moiss = "0"+1;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 26){
                    var jours = 10;
                    var moiss = "0"+1;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 27){
                    var jours = 11;
                    var moiss = "0"+1;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 28){
                    var jours = 12;
                    var moiss = "0"+1;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 29){
                    var jours = 13;
                    var moiss = "0"+1;
                    var annes = parseInt(anne);

                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 30){
                    var jours = 14;
                    var moiss = "0"+1;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else if (jour == 31){
                    var jours = 15;
                    var moiss = "0"+1;
                    var annes = parseInt(anne);


                    document.getElementById('datefin').value = annes+"-"+moiss+"-"+jours;
                }else {
                    // jour = jour;
                    // document.getElementById('date_fin').value = anne+"-"+mois+"-"+jour;
                }

            }
	