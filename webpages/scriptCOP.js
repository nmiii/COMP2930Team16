/*change shipping price*/
            $(document).ready(function(){
                
                //when button is clicked
                $(oneDayShipping).click(function(){
                    document.getElementById("shippingPrice").innerHTML=document.getElementById("oneDayShipping").value;
                    
                    
                    document.getElementById("tyshippingPrice").innerHTML=document.getElementById("oneDayShipping").value;
                    
                });
                $(freeTwoDayShipping).click(function(){
                    document.getElementById("shippingPrice").innerHTML=document.getElementById("freeTwoDayShipping").value;
                    document.getElementById("tyshippingPrice").innerHTML=document.getElementById("freeTwoDayShipping").value;
                    
                    
                });
                $(freeStandardShipping).click(function(){
                    document.getElementById("shippingPrice").innerHTML=document.getElementById("freeStandardShipping").value;
                    document.getElementById("tyshippingPrice").innerHTML=document.getElementById("freeStandardShipping").value;
                     
                });
                $(freeGreenShipping).click(function(){
                    document.getElementById("shippingPrice").innerHTML=document.getElementById("freeGreenShipping").value;
                    document.getElementById("tyshippingPrice").innerHTML=document.getElementById("freeGreenShipping").value;
                    
                });
            });
            
            
            
            
            
            /*link to index.html*/
            function redirectHomePage() {
                window.location.href= "../index.html";
            }
            
            
            
            /*add Easter egg*/
            

            


            $('#promoButton').one('click', function(){  
                var easterEgg = document.getElementById("promoCode").value;
                var total  = parseFloat(document.getElementById("total").innerHTML);
                
                if ( easterEgg == "shipGREEN" && $("#freeGreenShipping:checked").attr('id')) {
                    document.body.style.animationDuration = "4s";
                    document.body.style.animationIterationCount = "1";
                    document.body.style.animationName = "roll";
                    console.log("barrelroll success");
                    total -= 5;
                    document.getElementById("total").innerHTML = total;
                    document.getElementById("tyreward").innerHTML = 5.00;
                    document.getElementById("reward").innerHTML = 5.00;
                }
              
            })
            
            
            
            /*hide/show thank you div*/
            function manageOrder() {
                document.getElementById("checkOutDiv").style.visibility="visible";
                document.getElementById("thankYouDiv").style.visibility="hidden";
                document.getElementById("logo").style.visibility="visible";
            }
            
            function placeOrder(){
                var user = firebase.auth().currentUser;
                var uid = user.uid;
                    
                var radioValue = $("input[type='radio']:checked").attr('id');
                
                if (radioValue == undefined) {
                    alert("Please select a shipping method");
                }
                
                var items = [];
                var dName = document.getElementsByClassName("dName");
                var spanPrice = document.getElementsByClassName("spanPrice");
                var spanQuantity = document.getElementsByClassName("spanQuantity");
                
                for (var i=0; i<spanPrice.length; i++)
                {
                    var name = dName.item(i).innerHTML;
                    var quantity = spanQuantity.item(i).innerHTML;
                    var price = spanPrice.item(i).innerHTML;
                    
                    var j = {Name: name, Price:price, Quantity:quantity};
                    
                    items[i] = j;
                    
                    
                }
                
                firebase.database().ref('users/' + uid + '/OrderTotal').set({
                        Items: items,
                        Shipping: radioValue,
                        Total: document.getElementById("total").innerHTML
                });
                
                document.getElementById("checkOutDiv").style.visibility="hidden";
                document.getElementById("thankYouDiv").style.visibility="visible";
                document.getElementById("logo").style.visibility ="hidden";
                
                
            }
            
           
            
            /*hide the green div content*/
            function showNone(){
                document.getElementById("output").style.display = "none"; 
                document.getElementById("greenShippingChosenThankYouDiv").style.display="none";
            }
            
            /*show the green div content*/
            function showGreenSaving(){
                document.getElementById("output").style.display = "block"; 
                document.getElementById("greenShippingChosenThankYouDiv").style.display="block";
                }
            
       
            
            /*databse script============================================================*/
            var user = firebase.auth().currentUser;
            
            var dbRef = firebase.database().ref().child("users");
            
            
            
            /*submit billing address content*/
            function submitBillingAddress(data){
                
                
                /*update billing address on database*/
                var user = firebase.auth().currentUser;
                var uid = user.uid;
                    firebase.database().ref('users/' + uid + '/BillingAddress').set({
                        Bname: document.getElementById("Bname").value,
                        Baddress: document.getElementById("Baddress").value,
                        Bphone: document.getElementById("Bphone").value
                });
                
               
            }
            
            /* for submit button to call both functions*/
            function both(){
                calcRoute();
                submitShippingAddress();
                
            }
                 
            /*submit shipping address content*/
            
            function submitShippingAddress(data){
                
            
                /*update shipping address on database*/
                var user = firebase.auth().currentUser;
                var uid = user.uid;
                
                var name = document.getElementById("Sname").value;
                var address = document.getElementById("to").value;
                var phone = document.getElementById("Sphone").value;
                
                firebase.database().ref('users/' + uid + '/ShippingAddress').set({
                        Sname: name,
                        Saddress: address,
                        Sphone: phone
                });
            }
            
            
            
        
        
        
               
          function getTotal(){  
                
              
                var price ={};
                var quantity={};
                var i;
                var totalItems = 0;
                var spanPrice = document.getElementsByClassName("spanPrice");
                var spanQuantity = document.getElementsByClassName("spanQuantity");
                
                for ( i=0; i < spanPrice.length; i++ ) {
                    totalItems += parseFloat(spanPrice.item(i).innerHTML) + parseFloat(spanQuantity.item(i).innerHTML);
                }
                     
               
                document.getElementById("totalItems").innerHTML = Math.round(totalItems*100)/100;  
                document.getElementById("tytotalItems").innerHTML = Math.round(totalItems*100)/100;  
                
                var totalBeforeTax = Math.round(totalItems*100)/100; 
                var tytotalBeforeTax = Math.round(totalItems*100)/100; 
                document.getElementById("totalBeforeTax").innerHTML = totalBeforeTax;
                
              
                document.getElementById("total").innerHTML = Math.round(totalBeforeTax*100)/100;
                document.getElementById("tytotal").innerHTML = Math.round(totalBeforeTax*100)/100;
              
                $(document).ready(function(){
                    $(document).on("click", "#oneDayShipping", function(){
                        totalBeforeTax = parseFloat(totalItems) + parseFloat(document.getElementById("oneDayShipping").value);
                        tytotalBeforeTax = parseFloat(totalItems) + parseFloat(document.getElementById("oneDayShipping").value);
                        document.getElementById("totalBeforeTax").innerHTML = Math.round(totalBeforeTax*100)/100;
                        document.getElementById("tytotalBeforeTax").innerHTML = Math.round(tytotalBeforeTax*100)/100;
                        document.getElementById("total").innerHTML = Math.round(totalBeforeTax*100)/100;
                        document.getElementById("tytotal").innerHTML = Math.round(totalBeforeTax*100)/100;
                        console.log("onedayshippign");
                    });
                    
                    $(document).on("click", "#freeTwoDayShipping", function(){
                        totalBeforeTax = parseFloat(totalItems) + parseFloat(document.getElementById("freeTwoDayShipping").value);
                        tytotalBeforeTax = parseFloat(totalItems) + parseFloat(document.getElementById("freeTwoDayShipping").value);
                        document.getElementById("totalBeforeTax").innerHTML = Math.round(totalBeforeTax*100)/100;
                        document.getElementById("tytotalBeforeTax").innerHTML = Math.round(tytotalBeforeTax*100)/100;
                        document.getElementById("total").innerHTML = Math.round(totalBeforeTax*100)/100;
                        document.getElementById("tytotal").innerHTML = Math.round(totalBeforeTax*100)/100;
                    });
                    
                    $(document).on("click", "#freeStandardShipping", function(){
                        totalBeforeTax = parseFloat(totalItems) + parseFloat(document.getElementById("freeStandardShipping").value);
                        tytotalBeforeTax = parseFloat(totalItems) + parseFloat(document.getElementById("freeStandardShipping").value);
                        document.getElementById("totalBeforeTax").innerHTML = Math.round(totalBeforeTax*100)/100;
                        document.getElementById("tytotalBeforeTax").innerHTML = Math.round(tytotalBeforeTax*100)/100;
                        document.getElementById("total").innerHTML = Math.round(totalBeforeTax*100)/100;
                        document.getElementById("tytotal").innerHTML = Math.round(totalBeforeTax*100)/100;
                    });
                    
                    $(document).on("click", "#freeGreenShipping", function(){
                        totalBeforeTax = parseFloat(totalItems) + parseFloat(document.getElementById("freeGreenShipping").value);
                        tytotalBeforeTax = parseFloat(totalItems) + parseFloat(document.getElementById("freeGreenShipping").value);
                        document.getElementById("totalBeforeTax").innerHTML = Math.round(totalBeforeTax*100)/100;
                        document.getElementById("tytotalBeforeTax").innerHTML = Math.round(tytotalBeforeTax*100)/100;
                        document.getElementById("total").innerHTML = Math.round(totalBeforeTax*100)/100;
                        document.getElementById("tytotal").innerHTML = Math.round(totalBeforeTax*100)/100;
                    });
                })
                
            
              
                document.getElementById("rightSideContent").style.display = "block";
                document.getElementById("placeYourOrderTop").style.display = "block";
                document.getElementById("bottomButton").style.display = "block";
                   
                
          }
                
                
            