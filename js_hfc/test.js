           if (d == 1 || d == 6 || d == 11 || d == 12 || d == 13){



                    var date_autorisation = url.searchParams.get("date_autorisation");
                    console.log(" Le date_autorisation  "+date_autorisation);

                     var anne1 = date_autorisation.substring(0, 4);
                     var mois1 = date_autorisation.substring(5, 7);
                     var jour1 = date_autorisation.substring(8, 10);

                    // alert(date_autorisation);

                    // document.getElementById("date_fin").value = date_fin;
                    // alert(date_fin);
                    // alert(anne1ess);
                    // alert(mois1s);
                    // alert(jour1s);



                // Mensuel
                    // var currentDate = new Date()
                    // var jour1 = currentDate.getDate()
                    // var mois1 = currentDate.getMonth() + 1
                    // var anne1 = currentDate.getFullYear()
                    // var nows = day + "/" + month + "/" + year;
                    // var nows = anne1+"-"+mois1+"-"+jour1;

                    // console.log("  DATE "+nows);
                        
                        
                        

                    // var valeur = 1;
                    
                    // var datedebut = document.getElementById("datedebut").value;
                    // var datedebut = "2008-01-12";

                   //  var anne1 = datedebut.substring(0,4);
                    // var mois1 = datedebut.substring(5,7);
                   //  var jour1 = datedebut.substring(8,10);
                     

                    /*
                    *var bissextile = false;
                    if ((anne1%4==0) && ((anne1%100!=0) || (anne1%400==0))){
                        alert(" Bissextile ");
                    }else{
                       alert(" Non Bissextile "); 
                    }
                    */
                    
                    if (mois1 == 1){
                        mois1 = "0"+2;
                        anne1 = anne1;
                        if (jour1== 28 || jour1== 29 || jour1== 30 || jour1== 31){
                            if ((anne1%4==0) && ((anne1%100!=0) || (anne1%400==0))){
                                jour1 = 29;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else{
                                jour1 = 28;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            } 
                        }else{
                        
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            // alert(jour1+"-"+mois1+"-"+anne1)
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }
                    }else if (mois1 == 2){
                        mois1 = "0"+3;
                        anne1 = anne1;
                        if (jour1==28 || jour1==29){
                            jour1 = 31;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            
                        }
                    }else if (mois1 == 3){
                        mois1 = "0"+4;
                        anne1 = anne1;
                         if (jour1==30 || jour1==31){
                            jour1 = 30;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                         }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                         }
                    }else if (mois1 == 4){
                        mois1 = "0"+5;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                            jour1 = 31;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 5){
                        mois1 = "0"+6;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 30;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            //jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 6){
                        mois1 = "0"+7;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 7){
                        mois1 = "0"+8;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                                // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 8){
                        mois1 = "0"+9;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 30;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 9){
                        mois1 = 10;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }
                    }else if (mois1 == 10){
                        mois1 = 11;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 30;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 11){
                        mois1 = 12;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else{
                        mois1 = "0"+1;
                        anne1 = parseInt(anne1)+1;
                        // jour1 = jour1;
                        
                        if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        // console.log(jour1+"-"+mois1+"-"+anne1);
                        // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                    }
            
            
            
            }else if (d == 4 || d == 9){
            //  Annuel


                    var date_autorisation = url.searchParams.get("date_autorisation");
                    console.log(" Le date_fin  "+date_autorisation);

                     var anne1 = date_autorisation.substring(0, 4);
                     var mois1 = date_autorisation.substring(5, 7);
                     var jour1 = date_autorisation.substring(8, 10);
                    // var currentDate = new Date()
                    // var jour1 = currentDate.getDate()
                    // var mois1 = currentDate.getMonth() + 1
                    // var anne1 = currentDate.getFullYear()
                    // var nows = day + "/" + month + "/" + year;
                    // var nows = anne1+"-"+mois1+"-"+jour1;

                    // console.log("  DATE "+nows);
                        
                        
                        

                    // var valeur = 1;
                    
                    // var datedebut = document.getElementById("datedebut").value;
                    // var datedebut = "2008-01-12";

                   //  var anne1 = datedebut.substring(0,4);
                    // var mois1 = datedebut.substring(5,7);
                   //  var jour1 = datedebut.substring(8,10);
                     

                    /*
                    var bissextile = false;
                    if ((anne1%4==0) && ((anne1%100!=0) || (anne1%400==0))){
                        alert(" Bissextile ");
                    }else{
                       alert(" Non Bissextile "); 
                    }
                    */
                    
                    if (mois1 == 1){
                        mois1 = "0"+1;
                        anne1 = parseInt(anne1)+1;
                        // jour1 = jour1;
                        // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                    }else if (mois1 == 2){
                        if (jour1== 28 || jour1== 29 || jour1== 30 || jour1== 31){
                            if ((anne1%4==0) && ((anne1%100!=0) || (anne1%400==0))){
                                jour1 = 29;
                                anne1 = parseInt(anne1)+1;
                                mois1 = "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                            }else{
                                jour1 = 28;
                                anne1 = parseInt(anne1)+1;
                                mois1 = "0"+2;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            } 
                        }else{
                            // alert(jour1+"-"+mois1+"-"+anne1)
                            anne1 = parseInt(anne1)+1;
                            mois1 = "0"+2;
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 3){
                        if (jour1==31){  
                            jour1 = 31;
                            mois1 = "0"+3;               
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            mois1 = "0"+3;               
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }
                    }else if (mois1 == 4){
                         if (jour1==30){
                            jour1 = 30;
                            mois1 = "0"+4;               
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                         }else{
                            // jour1 = jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            mois1 = "0"+4;               
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                         }
                    }else if (mois1 == 5){
                        if (jour1==31){
                            jour1 = 31;
                            anne1 = parseInt(anne1)+1;
                            mois1 = "0"+5;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                        
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            mois1 = "0"+5;
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }
                    }else if (mois1 == 6){
                        if (jour1==30){
                                jour1 = 30;
                                anne1 = parseInt(anne1)+1;
                                mois1 = "0"+6;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            anne1 = parseInt(anne1)+1;
                            mois1 = "0"+6;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }
                    }else if (mois1 == 7){
                        if (jour1==31){
                                jour1 = 31;
                                mois1 = "0"+7;
                                anne1 = parseInt(anne1)+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            mois1 = "0"+7;
                            anne1 = parseInt(anne1)+1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }   
                    }else if (mois1 == 8){
                        if (jour1==31){
                                jour1 = 31;
                                mois1 = "0"+8;
                                anne1 = parseInt(anne1)+1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            mois1 = "0"+8;
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                                // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                
                                if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }   
                    }else if (mois1 == 9){
                        if (jour1==30){
                                jour1 = 30;
                                mois1 = "0"+9;
                                anne1 = parseInt(anne1)+1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            mois1 = "0"+9;
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }   
                    }else if (mois1 == 10){
                        if (jour1==31){
                                jour1 = 31;
                                mois1 = 10;
                                anne1 = parseInt(anne1)+1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            mois1 = 10;
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 11){
                        if (jour1==30){
                                jour1 = 30;
                                mois1 = 11;
                                anne1 = parseInt(anne1)+1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            mois1 = 11;
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else{
                        if (jour1==31){
                                jour1 = 31;
                                mois1 = 12;
                                anne1 = parseInt(anne1)+1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            mois1 = 12;
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }
            
            
            
            }else if (d == 2 || d == 7){
                // Trimestriel
                
                    // var currentDate = new Date()
                    // var jour1 = currentDate.getDate()
                    // var mois1 = currentDate.getMonth() + 1
                    // var anne1 = currentDate.getFullYear()
                    // var nows = day + "/" + month + "/" + year;
                    // var nows = anne1+"-"+mois1+"-"+jour1;

                    var date_autorisation = url.searchParams.get("date_autorisation");
                    console.log(" Le date_fin  "+date_autorisation);

                     var anne1 = date_autorisation.substring(0, 4);
                     var mois1 = date_autorisation.substring(5, 7);
                     var jour1 = date_autorisation.substring(8, 10);

                if (mois1 == 1){
                
                        mois1 = "0"+4;
                        anne1 = anne1;
                         if (jour1==30 || jour1==31){
                            jour1 = 30;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                         }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                         }
                        
                    }else if (mois1 == 2){
                    
                        mois1 = "0"+5;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                            jour1 = 31;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }

                        
                    }else if (mois1 == 3){
                    
                            mois1 = "0"+6;
                            anne1 = anne1;
                            if (jour1==30 || jour1==31){
                                    jour1 = 30;
                                    // alert(jour1+"-"+mois1+"-"+anne1);
                                    document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else{
                                // jour1 = jour1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                
                                if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            }
                    }else if (mois1 == 4){
                        mois1 = "0"+7;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }               
                    }else if (mois1 == 5){
                        mois1 = "0"+8;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                                // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                
                                if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
            
                    }else if (mois1 == 6){
                        mois1 = "0"+9;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 30;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 7){
                        mois1 = 10;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 8){
                        mois1 = 11;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 30;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            //jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 9){
                        mois1 = 12;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 10){
                        mois1 = "0"+1;
                        anne1 = parseInt(anne1)+1;
                        // jour1 = jour1;
                        if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        // console.log(jour1+"-"+mois1+"-"+anne1);
                        // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                    }else if (mois1 == 11){
                        console.log("  COOOLLLLL 0000");

                        mois1 = "0"+2;
                        // anne1 = parseInt(anne1)+1;
                        if (jour1== 28 || jour1== 29 || jour1== 30 || jour1== 31){
                            if ((anne1%4==0) && ((anne1%100!=0) || (anne1%400==0))){
                                jour1 = 29;
                                mois1 = "0"+2;
                                anne1 = parseInt(anne1)+1;
                                console.log(" COOLLLLL 1111");

                                console.log(anne1+"-"+mois1+"-"+jour1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else{
                                jour1 = 28;
                                mois1 = "0"+2;
                                anne1 = parseInt(anne1)+1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                console.log(" COOOLLLL   3333");
                                console.log(anne1+"-"+mois1+"-"+jour1);

                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            } 
                        }else{
                            // jour1=jour1;
                            mois1 = "0"+2;
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1)
                            console.log(" COLLL 4444");
                            // console.log(anne1+"-"+mois1+"-"+jour1);

                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else{
                    
                        mois1 = "0"+3;
                        anne1 =  parseInt(anne1)+1;
                        if (jour1==28 || jour1==29){
                            jour1 = 31;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                        
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            // alert(jour1+"-"+mois1+"-"+anne1);
                        }
                        
                    }
            
            
            }else if (d == 3 || d == 8){
                // Semestriel
                

                    var date_autorisation = url.searchParams.get("date_autorisation");
                    console.log(" Le date_autorisation  "+date_autorisation);

                     var anne1 = date_autorisation.substring(0, 4);
                     var mois1 = date_autorisation.substring(5, 7);
                     var jour1 = date_autorisation.substring(8, 10);
                    // var currentDate = new Date()
                    // var jour1 = currentDate.getDate()
                    // var mois1 = currentDate.getMonth() + 1
                    // var anne1 = currentDate.getFullYear()


                    // var nows = day + "/" + month + "/" + year;
                    // var nows = anne1+"-"+mois1+"-"+jour1;
                if (mois1 == 1){

                        mois1 = "0"+7;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }               
                        
                    }else if (mois1 == 2){
                    
                        mois1 = "0"+8;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                                // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                
                                if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    
                    }else if (mois1 == 3){
                    
                        mois1 = "0"+9;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 30;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 4){
                        mois1 = 10;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }               
                    }else if (mois1 == 5){
                        mois1 = 11;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 30;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            //jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
            
                    }else if (mois1 == 6){
                        mois1 = 12;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 7){
                        mois1 = "0"+1;
                        anne1 = parseInt(anne1)+1;
                        // jour1 = jour1;
                        if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        // console.log(jour1+"-"+mois1+"-"+anne1);
                        // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                    }else if (mois1 == 8){
                    
                        mois1 = "0"+2;
                        // anne1 = parseInt(anne1)+1;
                        if (jour1== 28 || jour1== 29 || jour1== 30 || jour1== 31){
                            if ((anne1%4==0) && ((anne1%100!=0) || (anne1%400==0))){
                                jour1 = 29;
                                mois1 = "0"+2;
                                anne1 = parseInt(anne1)+1;
                                console.log(" COOLLLLL 1111");

                                console.log(anne1+"-"+mois1+"-"+jour1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else{
                                jour1 = 28;
                                mois1 = "0"+2;
                                anne1 = parseInt(anne1)+1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                console.log(" COOOLLLL   3333");
                                console.log(anne1+"-"+mois1+"-"+jour1);

                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            } 
                        }else{
                            // jour1=jour1;
                            mois1 = "0"+2;
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1)
                            console.log(" COLLL 4444");
                            // console.log(anne1+"-"+mois1+"-"+jour1);

                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                        
                    }else if (mois1 == 9){
                    
                    mois1 = "0"+3;
                        anne1 =  parseInt(anne1)+1;
                        if (jour1==28 || jour1==29){
                            jour1 = 31;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                        
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            // alert(jour1+"-"+mois1+"-"+anne1);
                        }
                        
                        
                    }else if (mois1 == 10){
                    
                        mois1 = "0"+4;
                        anne1 = anne1;
                         if (jour1==30 || jour1==31){
                            jour1 = 30;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                         }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                         }
                        
                    }else if (mois1 == 11){
                            mois1 = "0"+5;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                            jour1 = 31;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                        
                    }else{
                    
                    
                        mois1 = "0"+6;
                            anne1 = anne1;
                            if (jour1==30 || jour1==31){
                                    jour1 = 30;
                                    // alert(jour1+"-"+mois1+"-"+anne1);
                                    document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else{
                                // jour1 = jour1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }   
                    }
                }
            
            }else if (d == 14){

                

                //     var currentDate = new Date()
                    // var jour1 = currentDate.getDate()
                    // var mois1 = currentDate.getMonth() + 1
                    // var anne1 = currentDate.getFullYear()
                    // var nows = day + "/" + month + "/" + year;
                    // var nows = anne1+"-"+mois1+"-"+jour1;
                    // console.log("  DATE "+nows);  

                    var date_autorisation = url.searchParams.get("date_autorisation");
                    console.log(" Le date_autorisation  "+date_autorisation);

                    var anne1 = date_autorisation.substring(0, 4);
                    var mois1 = date_autorisation.substring(5, 7);
                    var jour1 = date_autorisation.substring(8, 10);              

                    
                    if (mois1 == 1){

                        // mois1 = "0"+1;
                        // anne1 = parseInt(anne1)+1;

                        if (jour1>=1 && jour1<=16){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        } else if (jour1 == 17){
                            var jour1s = "0"+1;
                            var mois1s = "0"+2;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            
                            var jour1s = "0"+2;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;

                        }else if (jour1 == 19){
                            var jour1s = "0"+3;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+4;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+5;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+6;
                            var mois1s = "0"+2;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+7;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){
                            var jour1s = "0"+8;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){
                            var jour1s = "0"+9;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 10;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 11;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 12;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 13;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 14;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 31){
                            var jour1s = 15;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }

                    }else if (mois1 == 2){

                            if ((anne1%4==0) && ((anne1%100!=0) || (anne1%400==0))){
                                //jour1 = 29;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                                    if (jour1>=1 && jour1<=14){

                                        var jour1s = parseInt(jour1)+15;
                                        var mois1s ="0"+2;
                                        var anne1s =parseInt(anne1);
                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    } else if (jour1 == 16){
                                        var jour1s = "0"+1;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    } else if (jour1 == 17){
                                        var jour1s = "0"+2;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 18){
                                        var jour1s = "0"+3;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 19){
                                        var jour1s = "0"+4;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 20){
                                        var jour1s = "0"+5;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 21){
                                        var jour1s = "0"+6;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 22){
                                        var jour1s = "0"+7;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 23){
                                        var jour1s = "0"+8;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 24){
                                        var jour1s = "0"+9;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 25){
                                        var jour1s = 10;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 26){
                                        var jour1s = 11;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 27){

                                        var jour1s = 12;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    } else if (jour1 == 28){

                                        var jour1s = 13;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 29){

                                        var jour1s = 14;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else {
                                        // jour1 = jour1;
                                        // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                    }


                            }else{
                                // jour1 = 28;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            

                                    if (jour1>=1 && jour1<=13){

                                        var jour1s = parseInt(jour1)+15;
                                        var mois1s ="0"+2;
                                        var anne1s =parseInt(anne1);
                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    } else if (jour1 == 16){
                                        var jour1s = "0"+1;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    } else if (jour1 == 17){
                                        var jour1s = "0"+2;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 18){
                                        var jour1s = "0"+3;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 19){
                                        var jour1s = "0"+4;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 20){
                                        var jour1s = "0"+5;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 21){
                                        var jour1s = "0"+6;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 22){
                                        var jour1s = "0"+7;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 23){
                                        var jour1s = "0"+8;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 24){
                                        var jour1s = "0"+9;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 25){
                                        var jour1s = 10;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 26){
                                        var jour1s = 11;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 27){
                                        
                                        var jour1s = 12;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    } else if (jour1 == 28){

                                        var jour1s = 13;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else {
                                        // jour1 = jour1;
                                        // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                    }

                            } 
                            
                        
                    }else if (mois1 == 3){


                        if (jour1>=1 && jour1<=16){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s ="0"+3;
                            var anne1s =parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        } else if (jour1 == 17){
                            var jour1s = "0"+1;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s = "0"+2;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s = "0"+3;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+4;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+5;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+6;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+7;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){
                            var jour1s = "0"+8;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){
                            var jour1s = "0"+9;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 10;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 11;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 12;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 13;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 14;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 31){
                            var jour1s = 15;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }


                    }else if (mois1 == 4){


                        if (jour1 >=1 && jour1 <= 15){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s = "0"+4;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        } else if (jour1 == 16){

                            var jour1s = "0"+1;
                            var mois1s = "0"+5;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 17){
                            var jour1s = "0"+2;
                            var mois1s = "0"+5;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s = "0"+3;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s = "0"+4;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+5;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+6;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+7;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+8;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){

                            var jour1s = "0"+9;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){

                            var jour1s = 10;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 11;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 12;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 13;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 14;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 15;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }

                        
                    }else if (mois1 == 5){


                        if (jour1>=1 && jour1<=16){

                            var jour1s =  parseInt(jour1)+15;
                            var mois1s = "0"+5;
                            var anne1s = parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        
                        } else if (jour1 == 17){
                            var jour1s =  "0"+1;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s =  "0"+2;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s =  "0"+3;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s =  "0"+4;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s =  "0"+5;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s =  "0"+6;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s =  "0"+7;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){
                            var jour1s =  "0"+8;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){
                            var jour1s =  "0"+9;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s =  10;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s =  11;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s =  12;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s =  13;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s =  14;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 31){
                            var jour1s =  15;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }

                    }else if (mois1 == 6){


                        if (jour1 >=1 && jour1 <= 15){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s ="0"+6;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        } else if (jour1 == 16){

                            var jour1s = "0"+1;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 17){
                            var jour1s = "0"+2;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s = "0"+3;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s = "0"+4;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+5;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+6;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+7;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+8;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){

                            var jour1s = "0"+9;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){

                            var jour1s = 10;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 11;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 12;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 13;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 14;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 15;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }
                        
                    }else if (mois1 == 7){ 


                        if (jour1 >=1 && jour1<=16){

                            var jour1s =  parseInt(jour1)+15;
                            var mois1s = "0"+7;
                            var anne1s = parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;

                        } else if (jour1 == 17){
                            var jour1s =  "0"+1;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s =  "0"+2;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s =  "0"+3;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s =  "0"+4;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s =  "0"+5;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s =  "0"+6;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s =  "0"+7;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){
                            var jour1s =  "0"+8;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){
                            var jour1s =  "0"+9;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s =  10;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s =  11;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s =  12;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s =  13;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s =  14;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 31){
                            var jour1s =  15;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }

                       
                    }else if (mois1 == 8){


                        if (jour1 >=1 && jour1<=16){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;

                        } else if (jour1 == 17){
                            var jour1s = "0"+1;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s = "0"+2;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s = "0"+3;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+4;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+5;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+6;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+7;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){
                            var jour1s = "0"+8;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){
                            var jour1s = "0"+9;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 10;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 11;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 12;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 13;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 14;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 31){
                            var jour1s = 15;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }
                        
                    }else if (mois1 == 9){


                        if (jour1 >=1 && jour1 <= 15){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        } else if (jour1 == 16){

                            var jour1s = "0"+1;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 17){
                            var jour1s = "0"+2;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s = "0"+3;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s = "0"+4;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+5;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+6;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+7;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+8;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){

                            var jour1s = "0"+9;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){

                            var jour1s = 10;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 11;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 12;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 13;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 14;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 15;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }
                        
                    }else if (mois1 == 10){


                        if (jour1 >=1 && jour1<=16){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;

                        } else if (jour1 == 17){
                            var jour1s = "0"+1;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s = "0"+2;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s = "0"+3;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+4;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+5;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+6;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+7;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){
                            var jour1s = "0"+8;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){
                            var jour1s = "0"+9;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 10;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 11;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 12;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 13;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);
          
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 14;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 31){
                            var jour1s = 15;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }

                        
                    }else if (mois1 == 11){



                        if (jour1 >=1 && jour1 <= 15){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        } else if (jour1 == 16){

                            var jour1s = "0"+1;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 17){
                            var jour1s = "0"+2;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s = "0"+3;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s = "0"+4;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+5;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+6;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);

                            console.log(" COOL 111 "+anne1s+"-"+mois1s+"-"+jour1s);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+7;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+8;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);

                            // alert (" cool "+anne1s+"-"+mois1s+"-"+jour1s);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){

                            var jour1s = "0"+9;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){

                            var jour1s = 10;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 11;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 12;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 13;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 14;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 15;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }

                        
                    }else{
                        
                        if (jour1>=1 && jour1<=16){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        
                        } else if (jour1 == 17){
                            var jour1s = "0"+1;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s = "0"+2;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s = "0"+3;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+4;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+5;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+6;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+7;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){
                            var jour1s = "0"+8;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){
                            var jour1s = "0"+9;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 10;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 11;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 12;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 13;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 14;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 31){
                            var jour1s = 15;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }

                    }

            
            
            }else {


            }































        d = document.getElementById("type_abonnement").value;


        var idPaiement = url.searchParams.get("idPaiement");
        console.log(" ID idPaiement   "+idPaiement);
        document.getElementById("idPaiement").value = idPaiement;


        var date_autorisation = url.searchParams.get("date_autorisation");
        console.log(" Le date_autorisation  "+date_autorisation);

           if (d == 1 || d == 6 || d == 11 || d == 12 || d == 13){



                    var date_autorisation = url.searchParams.get("date_autorisation");
                    console.log(" Le date_autorisation  "+date_autorisation);

                     var anne1 = date_autorisation.substring(0, 4);
                     var mois1 = date_autorisation.substring(5, 7);
                     var jour1 = date_autorisation.substring(8, 10);

                    // alert(date_autorisation);

                    // document.getElementById("date_fin").value = date_fin;
                    // alert(date_fin);
                    // alert(anne1ess);
                    // alert(mois1s);
                    // alert(jour1s);



                // Mensuel
                    // var currentDate = new Date()
                    // var jour1 = currentDate.getDate()
                    // var mois1 = currentDate.getMonth() + 1
                    // var anne1 = currentDate.getFullYear()
                    // var nows = day + "/" + month + "/" + year;
                    // var nows = anne1+"-"+mois1+"-"+jour1;

                    // console.log("  DATE "+nows);
                        
                        
                        

                    // var valeur = 1;
                    
                    // var datedebut = document.getElementById("datedebut").value;
                    // var datedebut = "2008-01-12";

                   //  var anne1 = datedebut.substring(0,4);
                    // var mois1 = datedebut.substring(5,7);
                   //  var jour1 = datedebut.substring(8,10);
                     

                    /*
                    *var bissextile = false;
                    if ((anne1%4==0) && ((anne1%100!=0) || (anne1%400==0))){
                        alert(" Bissextile ");
                    }else{
                       alert(" Non Bissextile "); 
                    }
                    */
                    
                    if (mois1 == 1){
                        mois1 = "0"+2;
                        anne1 = anne1;
                        if (jour1== 28 || jour1== 29 || jour1== 30 || jour1== 31){
                            if ((anne1%4==0) && ((anne1%100!=0) || (anne1%400==0))){
                                jour1 = 29;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else{
                                jour1 = 28;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            } 
                        }else{
                        
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            // alert(jour1+"-"+mois1+"-"+anne1)
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }
                    }else if (mois1 == 2){
                        mois1 = "0"+3;
                        anne1 = anne1;
                        if (jour1==28 || jour1==29){
                            jour1 = 31;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            
                        }
                    }else if (mois1 == 3){
                        mois1 = "0"+4;
                        anne1 = anne1;
                         if (jour1==30 || jour1==31){
                            jour1 = 30;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                         }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                         }
                    }else if (mois1 == 4){
                        mois1 = "0"+5;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                            jour1 = 31;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 5){
                        mois1 = "0"+6;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 30;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            //jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 6){
                        mois1 = "0"+7;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 7){
                        mois1 = "0"+8;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                                // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 8){
                        mois1 = "0"+9;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 30;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 9){
                        mois1 = 10;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }
                    }else if (mois1 == 10){
                        mois1 = 11;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 30;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 11){
                        mois1 = 12;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else{
                        mois1 = "0"+1;
                        anne1 = parseInt(anne1)+1;
                        // jour1 = jour1;
                        
                        if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        // console.log(jour1+"-"+mois1+"-"+anne1);
                        // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                    }
            
            
            
            }else if (d == 4 || d == 9){
            //  Annuel


                    var date_autorisation = url.searchParams.get("date_autorisation");
                    console.log(" Le date_fin  "+date_autorisation);

                     var anne1 = date_autorisation.substring(0, 4);
                     var mois1 = date_autorisation.substring(5, 7);
                     var jour1 = date_autorisation.substring(8, 10);
                    // var currentDate = new Date()
                    // var jour1 = currentDate.getDate()
                    // var mois1 = currentDate.getMonth() + 1
                    // var anne1 = currentDate.getFullYear()
                    // var nows = day + "/" + month + "/" + year;
                    // var nows = anne1+"-"+mois1+"-"+jour1;

                    // console.log("  DATE "+nows);
                        
                        
                        

                    // var valeur = 1;
                    
                    // var datedebut = document.getElementById("datedebut").value;
                    // var datedebut = "2008-01-12";

                   //  var anne1 = datedebut.substring(0,4);
                    // var mois1 = datedebut.substring(5,7);
                   //  var jour1 = datedebut.substring(8,10);
                     

                    /*
                    var bissextile = false;
                    if ((anne1%4==0) && ((anne1%100!=0) || (anne1%400==0))){
                        alert(" Bissextile ");
                    }else{
                       alert(" Non Bissextile "); 
                    }
                    */
                    
                    if (mois1 == 1){
                        mois1 = "0"+1;
                        anne1 = parseInt(anne1)+1;
                        // jour1 = jour1;
                        // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                    }else if (mois1 == 2){
                        if (jour1== 28 || jour1== 29 || jour1== 30 || jour1== 31){
                            if ((anne1%4==0) && ((anne1%100!=0) || (anne1%400==0))){
                                jour1 = 29;
                                anne1 = parseInt(anne1)+1;
                                mois1 = "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                            }else{
                                jour1 = 28;
                                anne1 = parseInt(anne1)+1;
                                mois1 = "0"+2;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            } 
                        }else{
                            // alert(jour1+"-"+mois1+"-"+anne1)
                            anne1 = parseInt(anne1)+1;
                            mois1 = "0"+2;
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 3){
                        if (jour1==31){  
                            jour1 = 31;
                            mois1 = "0"+3;               
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            mois1 = "0"+3;               
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }
                    }else if (mois1 == 4){
                         if (jour1==30){
                            jour1 = 30;
                            mois1 = "0"+4;               
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                         }else{
                            // jour1 = jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            mois1 = "0"+4;               
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                         }
                    }else if (mois1 == 5){
                        if (jour1==31){
                            jour1 = 31;
                            anne1 = parseInt(anne1)+1;
                            mois1 = "0"+5;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                        
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            mois1 = "0"+5;
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }
                    }else if (mois1 == 6){
                        if (jour1==30){
                                jour1 = 30;
                                anne1 = parseInt(anne1)+1;
                                mois1 = "0"+6;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            anne1 = parseInt(anne1)+1;
                            mois1 = "0"+6;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }
                    }else if (mois1 == 7){
                        if (jour1==31){
                                jour1 = 31;
                                mois1 = "0"+7;
                                anne1 = parseInt(anne1)+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            mois1 = "0"+7;
                            anne1 = parseInt(anne1)+1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }   
                    }else if (mois1 == 8){
                        if (jour1==31){
                                jour1 = 31;
                                mois1 = "0"+8;
                                anne1 = parseInt(anne1)+1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            mois1 = "0"+8;
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                                // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                
                                if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }   
                    }else if (mois1 == 9){
                        if (jour1==30){
                                jour1 = 30;
                                mois1 = "0"+9;
                                anne1 = parseInt(anne1)+1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            mois1 = "0"+9;
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }   
                    }else if (mois1 == 10){
                        if (jour1==31){
                                jour1 = 31;
                                mois1 = 10;
                                anne1 = parseInt(anne1)+1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            mois1 = 10;
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 11){
                        if (jour1==30){
                                jour1 = 30;
                                mois1 = 11;
                                anne1 = parseInt(anne1)+1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            mois1 = 11;
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else{
                        if (jour1==31){
                                jour1 = 31;
                                mois1 = 12;
                                anne1 = parseInt(anne1)+1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            mois1 = 12;
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }
            
            
            
            }else if (d == 2 || d == 7){
                // Trimestriel
                
                    // var currentDate = new Date()
                    // var jour1 = currentDate.getDate()
                    // var mois1 = currentDate.getMonth() + 1
                    // var anne1 = currentDate.getFullYear()
                    // var nows = day + "/" + month + "/" + year;
                    // var nows = anne1+"-"+mois1+"-"+jour1;

                    var date_autorisation = url.searchParams.get("date_autorisation");
                    console.log(" Le date_fin  "+date_autorisation);

                     var anne1 = date_autorisation.substring(0, 4);
                     var mois1 = date_autorisation.substring(5, 7);
                     var jour1 = date_autorisation.substring(8, 10);

                if (mois1 == 1){
                
                        mois1 = "0"+4;
                        anne1 = anne1;
                         if (jour1==30 || jour1==31){
                            jour1 = 30;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                         }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                         }
                        
                    }else if (mois1 == 2){
                    
                        mois1 = "0"+5;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                            jour1 = 31;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }

                        
                    }else if (mois1 == 3){
                    
                            mois1 = "0"+6;
                            anne1 = anne1;
                            if (jour1==30 || jour1==31){
                                    jour1 = 30;
                                    // alert(jour1+"-"+mois1+"-"+anne1);
                                    document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else{
                                // jour1 = jour1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                
                                if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            }
                    }else if (mois1 == 4){
                        mois1 = "0"+7;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }               
                    }else if (mois1 == 5){
                        mois1 = "0"+8;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                                // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                
                                if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
            
                    }else if (mois1 == 6){
                        mois1 = "0"+9;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 30;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 7){
                        mois1 = 10;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 8){
                        mois1 = 11;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 30;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            //jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 9){
                        mois1 = 12;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 10){
                        mois1 = "0"+1;
                        anne1 = parseInt(anne1)+1;
                        // jour1 = jour1;
                        if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        // console.log(jour1+"-"+mois1+"-"+anne1);
                        // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                    }else if (mois1 == 11){
                        console.log("  COOOLLLLL 0000");

                        mois1 = "0"+2;
                        // anne1 = parseInt(anne1)+1;
                        if (jour1== 28 || jour1== 29 || jour1== 30 || jour1== 31){
                            if ((anne1%4==0) && ((anne1%100!=0) || (anne1%400==0))){
                                jour1 = 29;
                                mois1 = "0"+2;
                                anne1 = parseInt(anne1)+1;
                                console.log(" COOLLLLL 1111");

                                console.log(anne1+"-"+mois1+"-"+jour1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else{
                                jour1 = 28;
                                mois1 = "0"+2;
                                anne1 = parseInt(anne1)+1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                console.log(" COOOLLLL   3333");
                                console.log(anne1+"-"+mois1+"-"+jour1);

                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            } 
                        }else{
                            // jour1=jour1;
                            mois1 = "0"+2;
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1)
                            console.log(" COLLL 4444");
                            // console.log(anne1+"-"+mois1+"-"+jour1);

                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else{
                    
                        mois1 = "0"+3;
                        anne1 =  parseInt(anne1)+1;
                        if (jour1==28 || jour1==29){
                            jour1 = 31;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                        
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            // alert(jour1+"-"+mois1+"-"+anne1);
                        }
                        
                    }
            
            
            }else if (d == 3 || d == 8){
                // Semestriel
                

                    var date_autorisation = url.searchParams.get("date_autorisation");
                    console.log(" Le date_autorisation  "+date_autorisation);

                     var anne1 = date_autorisation.substring(0, 4);
                     var mois1 = date_autorisation.substring(5, 7);
                     var jour1 = date_autorisation.substring(8, 10);
                    // var currentDate = new Date()
                    // var jour1 = currentDate.getDate()
                    // var mois1 = currentDate.getMonth() + 1
                    // var anne1 = currentDate.getFullYear()


                    // var nows = day + "/" + month + "/" + year;
                    // var nows = anne1+"-"+mois1+"-"+jour1;
                if (mois1 == 1){

                        mois1 = "0"+7;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }               
                        
                    }else if (mois1 == 2){
                    
                        mois1 = "0"+8;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                                // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                
                                if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    
                    }else if (mois1 == 3){
                    
                        mois1 = "0"+9;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 30;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 4){
                        mois1 = 10;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }               
                    }else if (mois1 == 5){
                        mois1 = 11;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 30;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            //jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
            
                    }else if (mois1 == 6){
                        mois1 = 12;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                                jour1 = 31;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                    }else if (mois1 == 7){
                        mois1 = "0"+1;
                        anne1 = parseInt(anne1)+1;
                        // jour1 = jour1;
                        if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        // console.log(jour1+"-"+mois1+"-"+anne1);
                        // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                    }else if (mois1 == 8){
                    
                        mois1 = "0"+2;
                        // anne1 = parseInt(anne1)+1;
                        if (jour1== 28 || jour1== 29 || jour1== 30 || jour1== 31){
                            if ((anne1%4==0) && ((anne1%100!=0) || (anne1%400==0))){
                                jour1 = 29;
                                mois1 = "0"+2;
                                anne1 = parseInt(anne1)+1;
                                console.log(" COOLLLLL 1111");

                                console.log(anne1+"-"+mois1+"-"+jour1);
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else{
                                jour1 = 28;
                                mois1 = "0"+2;
                                anne1 = parseInt(anne1)+1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                console.log(" COOOLLLL   3333");
                                console.log(anne1+"-"+mois1+"-"+jour1);

                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            } 
                        }else{
                            // jour1=jour1;
                            mois1 = "0"+2;
                            anne1 = parseInt(anne1)+1;
                            // alert(jour1+"-"+mois1+"-"+anne1)
                            console.log(" COLLL 4444");
                            // console.log(anne1+"-"+mois1+"-"+jour1);

                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                        
                    }else if (mois1 == 9){
                    
                    mois1 = "0"+3;
                        anne1 =  parseInt(anne1)+1;
                        if (jour1==28 || jour1==29){
                            jour1 = 31;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                        
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                            // alert(jour1+"-"+mois1+"-"+anne1);
                        }
                        
                        
                    }else if (mois1 == 10){
                    
                        mois1 = "0"+4;
                        anne1 = anne1;
                         if (jour1==30 || jour1==31){
                            jour1 = 30;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                         }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                         }
                        
                    }else if (mois1 == 11){
                            mois1 = "0"+5;
                        anne1 = anne1;
                        if (jour1==30 || jour1==31){
                            jour1 = 31;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }else{
                            // jour1 = jour1;
                            // alert(jour1+"-"+mois1+"-"+anne1);
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }
                        }
                        
                    }else{
                    
                    
                        mois1 = "0"+6;
                            anne1 = anne1;
                            if (jour1==30 || jour1==31){
                                    jour1 = 30;
                                    // alert(jour1+"-"+mois1+"-"+anne1);
                                    document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else{
                                // jour1 = jour1;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                
                            if (jour1== 1){
                                jour1 == "0"+1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;

                            } else if (jour1 == 2){
                                jour1 == "0"+2;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 3){
                                jour1 == "0"+3;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                            }else if (jour1 == 4){
                                jour1 == "0"+4;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 5){
                                jour1 == "0"+5;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 6){
                                jour1 == "0"+6;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 7){
                                jour1 == "0"+7;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 8){
                                jour1 == "0"+8;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else if (jour1 == 9){
                                jour1 == "0"+9;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }else {
                                jour1 = jour1;
                                document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            }   
                    }
                }
            
            }else if (d == 14){

                

                //     var currentDate = new Date()
                    // var jour1 = currentDate.getDate()
                    // var mois1 = currentDate.getMonth() + 1
                    // var anne1 = currentDate.getFullYear()
                    // var nows = day + "/" + month + "/" + year;
                    // var nows = anne1+"-"+mois1+"-"+jour1;
                    // console.log("  DATE "+nows);  

                    var date_autorisation = url.searchParams.get("date_autorisation");
                    console.log(" Le date_autorisation  "+date_autorisation);

                    var anne1 = date_autorisation.substring(0, 4);
                    var mois1 = date_autorisation.substring(5, 7);
                    var jour1 = date_autorisation.substring(8, 10);              

                    
                    if (mois1 == 1){

                        // mois1 = "0"+1;
                        // anne1 = parseInt(anne1)+1;

                        if (jour1>=1 && jour1<=16){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        } else if (jour1 == 17){
                            var jour1s = "0"+1;
                            var mois1s = "0"+2;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            
                            var jour1s = "0"+2;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;

                        }else if (jour1 == 19){
                            var jour1s = "0"+3;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+4;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+5;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+6;
                            var mois1s = "0"+2;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+7;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){
                            var jour1s = "0"+8;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){
                            var jour1s = "0"+9;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 10;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 11;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 12;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 13;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 14;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 31){
                            var jour1s = 15;
                            var mois1s ="0"+2;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }

                    }else if (mois1 == 2){

                            if ((anne1%4==0) && ((anne1%100!=0) || (anne1%400==0))){
                                //jour1 = 29;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            
                                    if (jour1>=1 && jour1<=14){

                                        var jour1s = parseInt(jour1)+15;
                                        var mois1s ="0"+2;
                                        var anne1s =parseInt(anne1);
                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    } else if (jour1 == 16){
                                        var jour1s = "0"+1;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    } else if (jour1 == 17){
                                        var jour1s = "0"+2;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 18){
                                        var jour1s = "0"+3;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 19){
                                        var jour1s = "0"+4;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 20){
                                        var jour1s = "0"+5;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 21){
                                        var jour1s = "0"+6;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 22){
                                        var jour1s = "0"+7;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 23){
                                        var jour1s = "0"+8;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 24){
                                        var jour1s = "0"+9;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 25){
                                        var jour1s = 10;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 26){
                                        var jour1s = 11;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 27){

                                        var jour1s = 12;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    } else if (jour1 == 28){

                                        var jour1s = 13;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 29){

                                        var jour1s = 14;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else {
                                        // jour1 = jour1;
                                        // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                    }


                            }else{
                                // jour1 = 28;
                                // alert(jour1+"-"+mois1+"-"+anne1);
                                // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                            

                                    if (jour1>=1 && jour1<=13){

                                        var jour1s = parseInt(jour1)+15;
                                        var mois1s ="0"+2;
                                        var anne1s =parseInt(anne1);
                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    } else if (jour1 == 16){
                                        var jour1s = "0"+1;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    } else if (jour1 == 17){
                                        var jour1s = "0"+2;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 18){
                                        var jour1s = "0"+3;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 19){
                                        var jour1s = "0"+4;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 20){
                                        var jour1s = "0"+5;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 21){
                                        var jour1s = "0"+6;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 22){
                                        var jour1s = "0"+7;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 23){
                                        var jour1s = "0"+8;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 24){
                                        var jour1s = "0"+9;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 25){
                                        var jour1s = 10;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 26){
                                        var jour1s = 11;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);


                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else if (jour1 == 27){
                                        
                                        var jour1s = 12;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    } else if (jour1 == 28){

                                        var jour1s = 13;
                                        var mois1s ="0"+3;
                                        var anne1s =parseInt(anne1);

                                        document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                                    }else {
                                        // jour1 = jour1;
                                        // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                                    }

                            } 
                            
                        
                    }else if (mois1 == 3){


                        if (jour1>=1 && jour1<=16){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s ="0"+3;
                            var anne1s =parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        } else if (jour1 == 17){
                            var jour1s = "0"+1;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s = "0"+2;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s = "0"+3;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+4;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+5;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+6;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+7;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){
                            var jour1s = "0"+8;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){
                            var jour1s = "0"+9;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 10;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 11;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 12;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 13;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 14;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 31){
                            var jour1s = 15;
                            var mois1s ="0"+4;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }


                    }else if (mois1 == 4){


                        if (jour1 >=1 && jour1 <= 15){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s = "0"+4;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        } else if (jour1 == 16){

                            var jour1s = "0"+1;
                            var mois1s = "0"+5;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 17){
                            var jour1s = "0"+2;
                            var mois1s = "0"+5;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s = "0"+3;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s = "0"+4;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+5;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+6;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+7;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+8;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){

                            var jour1s = "0"+9;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){

                            var jour1s = 10;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 11;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 12;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 13;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 14;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 15;
                            var mois1s ="0"+5;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }

                        
                    }else if (mois1 == 5){


                        if (jour1>=1 && jour1<=16){

                            var jour1s =  parseInt(jour1)+15;
                            var mois1s = "0"+5;
                            var anne1s = parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        
                        } else if (jour1 == 17){
                            var jour1s =  "0"+1;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s =  "0"+2;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s =  "0"+3;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s =  "0"+4;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s =  "0"+5;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s =  "0"+6;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s =  "0"+7;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){
                            var jour1s =  "0"+8;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){
                            var jour1s =  "0"+9;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s =  10;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s =  11;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s =  12;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s =  13;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s =  14;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 31){
                            var jour1s =  15;
                            var mois1s = "0"+6;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }

                    }else if (mois1 == 6){


                        if (jour1 >=1 && jour1 <= 15){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s ="0"+6;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        } else if (jour1 == 16){

                            var jour1s = "0"+1;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 17){
                            var jour1s = "0"+2;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s = "0"+3;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s = "0"+4;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+5;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+6;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+7;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+8;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){

                            var jour1s = "0"+9;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){

                            var jour1s = 10;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 11;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 12;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 13;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 14;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 15;
                            var mois1s ="0"+7;
                            var anne1s =parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }
                        
                    }else if (mois1 == 7){ 


                        if (jour1 >=1 && jour1<=16){

                            var jour1s =  parseInt(jour1)+15;
                            var mois1s = "0"+7;
                            var anne1s = parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;

                        } else if (jour1 == 17){
                            var jour1s =  "0"+1;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s =  "0"+2;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s =  "0"+3;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s =  "0"+4;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s =  "0"+5;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s =  "0"+6;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s =  "0"+7;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){
                            var jour1s =  "0"+8;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){
                            var jour1s =  "0"+9;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s =  10;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s =  11;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s =  12;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s =  13;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s =  14;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 31){
                            var jour1s =  15;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }

                       
                    }else if (mois1 == 8){


                        if (jour1 >=1 && jour1<=16){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s = "0"+8;
                            var anne1s = parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;

                        } else if (jour1 == 17){
                            var jour1s = "0"+1;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s = "0"+2;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s = "0"+3;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+4;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+5;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+6;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+7;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){
                            var jour1s = "0"+8;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){
                            var jour1s = "0"+9;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 10;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 11;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 12;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 13;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 14;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 31){
                            var jour1s = 15;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }
                        
                    }else if (mois1 == 9){


                        if (jour1 >=1 && jour1 <= 15){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s = "0"+9;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        } else if (jour1 == 16){

                            var jour1s = "0"+1;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 17){
                            var jour1s = "0"+2;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s = "0"+3;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s = "0"+4;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+5;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+6;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+7;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+8;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){

                            var jour1s = "0"+9;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){

                            var jour1s = 10;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 11;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 12;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 13;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 14;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 15;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }
                        
                    }else if (mois1 == 10){


                        if (jour1 >=1 && jour1<=16){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s = 10;
                            var anne1s = parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;

                        } else if (jour1 == 17){
                            var jour1s = "0"+1;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s = "0"+2;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s = "0"+3;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+4;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+5;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+6;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+7;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){
                            var jour1s = "0"+8;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){
                            var jour1s = "0"+9;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 10;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 11;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 12;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 13;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);
          
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 14;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 31){
                            var jour1s = 15;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }

                        
                    }else if (mois1 == 11){



                        if (jour1 >=1 && jour1 <= 15){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s = 11;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        } else if (jour1 == 16){

                            var jour1s = "0"+1;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 17){
                            var jour1s = "0"+2;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s = "0"+3;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s = "0"+4;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+5;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+6;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);

                            console.log(" COOL 111 "+anne1s+"-"+mois1s+"-"+jour1s);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+7;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+8;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);

                            // alert (" cool "+anne1s+"-"+mois1s+"-"+jour1s);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){

                            var jour1s = "0"+9;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){

                            var jour1s = 10;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 11;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 12;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 13;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 14;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 15;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }

                        
                    }else{
                        
                        if (jour1>=1 && jour1<=16){

                            var jour1s = parseInt(jour1)+15;
                            var mois1s = 12;
                            var anne1s = parseInt(anne1);
                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        
                        } else if (jour1 == 17){
                            var jour1s = "0"+1;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 18){
                            var jour1s = "0"+2;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 19){
                            var jour1s = "0"+3;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 20){
                            var jour1s = "0"+4;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 21){
                            var jour1s = "0"+5;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 22){
                            var jour1s = "0"+6;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 23){
                            var jour1s = "0"+7;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 24){
                            var jour1s = "0"+8;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 25){
                            var jour1s = "0"+9;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 26){
                            var jour1s = 10;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 27){
                            var jour1s = 11;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 28){
                            var jour1s = 12;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 29){
                            var jour1s = 13;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);

                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 30){
                            var jour1s = 14;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else if (jour1 == 31){
                            var jour1s = 15;
                            var mois1s = "0"+1;
                            var anne1s = parseInt(anne1);


                            document.getElementById('date_fin').value = anne1s+"-"+mois1s+"-"+jour1s;
                        }else {
                            // jour1 = jour1;
                            // document.getElementById('date_fin').value = anne1+"-"+mois1+"-"+jour1;
                        }

                    }

            
            
            }else {


            }