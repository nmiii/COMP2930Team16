firebase.auth().onAuthStateChanged(function(user) {
                if (user) { // if a user is logged in
                    var button = document.getElementById('clearCart');
                    button.addEventListener('click', function(){
                         var cartPath = firebase.database().ref().child("users").child(user.uid).child("cart");
                         cartPath.remove();
                         window.setTimeout(function(){
                             window.open('CheckOutPage.html','_self');
                         }, 500)
                    });
                    var uid = user.uid;
                    var cartPath = firebase.database().ref().child("users").child(uid).child("cart");
                    // DOG FOOD

                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("df4")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("df4").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("df4");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("df5")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("df5").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("df5");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            
                            
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("df6")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("df6").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("df6");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("df7")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("df7").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("df7");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("df8")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("df8").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("df8");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                    // CAT FOOD
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("cf1")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("cf1").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("cf1");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("cf2")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("cf2").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("cf2");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("cf3")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("cf3").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("cf3");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("cf4")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("cf4").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("cf4");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("cf5")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("cf5").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("cf5");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("cf6")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("cf6").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("cf6");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("cf7")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("cf7").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("cf7");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("cf8")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("cf8").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("cf8");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                    // groceries
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("o1")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("o1").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("o1");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("o2")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("o2").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("o2");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("o3")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("o3").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("o3");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("o4")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("o4").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("o4");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("o5")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("o5").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("o5");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("o6")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("o6").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("o6");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("o7")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("o7").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("o7");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("o8")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("o8").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("o8");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                    // seeds
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("s1")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("s1").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("s1");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("s2")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("s2").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("s2");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("s3")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("s3").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("s3");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("s4")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("s4").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("s4");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("s5")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("s5").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("s5");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("s6")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("s6").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("s6");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("s7")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("s7").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("s7");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("s8")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("s8").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("s8");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                    // other
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("og1")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("og1").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("og1");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("og2")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("og2").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("og2");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("og3")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("og3").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("og3");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("og4")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("og4").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("og4");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                     cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            var checkOutDiv = document.getElementById("checkOutDiv");                         checkOutDiv.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("og5")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("div");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("div");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("div");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                             /* add span price class spanPrice =====================================================*/
                            var spanPrice = document.createElement("span");
                            spanPrice.className="spanPrice";
                            divPrice.appendChild(spanPrice);
                            
                            /* add span quantity class spanQuantity=============================================== */
                            var spanQuantity = document.createElement("span");
                            spanQuantity.className="spanQuantity";
                            divQuantity.appendChild(spanQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("og5").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("og5");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                spanPrice.innerHTML = price;
                                divPrice.innerHTML = "Price: " + "<span class='spanPrice'>"+ price + "</span>";
                               
                            });
                            
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                spanQuantity.innerHTML = q;
                                divQuantity.innerHTML = "Quantity: " + "<span class='spanQuantity'>" + q + "</span>";
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            document.body.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("og6")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("span");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("span");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("span");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("og6").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("og6");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                divPrice.innerHTML = "Price: " + price;
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                divQuantity.innerHTML = "Quantity: " + q;
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            document.body.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("og7")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("span");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("span");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("span");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("og7").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("og7");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                divPrice.innerHTML = "Price: " + price;
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                divQuantity.innerHTML = "Quantity: " + q;
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            document.body.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("og8")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("span");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("span");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("span");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("og8").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("og8");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                divPrice.innerHTML = "Price: " + price;
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                divQuantity.innerHTML = "Quantity: " + q;
                            })
                        }
                    });
                    // tools
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            document.body.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("gt1")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("span");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("span");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("span");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("gt1").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("gt1");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                divPrice.innerHTML = "Price: " + price;
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                divQuantity.innerHTML = "Quantity: " + q;
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            document.body.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("gt2")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("span");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("span");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("span");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("gt2").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("gt2");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                divPrice.innerHTML = "Price: " + price;
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                divQuantity.innerHTML = "Quantity: " + q;
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            document.body.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("gt3")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("span");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("span");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("span");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("gt3").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("gt3");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                divPrice.innerHTML = "Price: " + price;
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                divQuantity.innerHTML = "Quantity: " + q;
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            document.body.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("gt4")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("span");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("span");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("span");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("gt4").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("gt4");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                divPrice.innerHTML = "Price: " + price;
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                divQuantity.innerHTML = "Quantity: " + q;
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            document.body.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("gt5")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("span");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("span");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("span");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("gt5").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("gt5");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                divPrice.innerHTML = "Price: " + price;
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                divQuantity.innerHTML = "Quantity: " + q;
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            document.body.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("gt6")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("span");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("span");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("span");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("gt6").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("gt6");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                divPrice.innerHTML = "Price: " + price;
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                divQuantity.innerHTML = "Quantity: " + q;
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            document.body.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("gt7")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("span");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("span");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("span");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("gt7").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("gt7");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                divPrice.innerHTML = "Price: " + price;
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                divQuantity.innerHTML = "Quantity: " + q;
                            })
                        }
                    });
                    cartPath.once('value', function(snapshot){
                        var products = document.getElementById("products");
                            document.body.appendChild(products);
                        // CHANGE DF1
                        if (snapshot.hasChild("gt8")){
                            // GENERAL DOM
                            var theDiv = document.createElement("div");
                            theDiv.className = "theDiv";
                            products.appendChild(theDiv);

                            var imgDiv = document.createElement("div");
                            imgDiv.className = "dImg";
                            theDiv.appendChild(imgDiv);

                            var divName = document.createElement("span");
                            divName.className = "dName";
                            theDiv.appendChild(divName);

                            var divPrice = document.createElement("span");
                            divPrice.className = "dPrice";
                            theDiv.appendChild(divPrice);

                            var divQuantity = document.createElement("span");
                            divQuantity.className = "dQuantity";
                            theDiv.appendChild(divQuantity);
                            
                            // ITEM SPECIFIC DOM
                            // CHANGE DF1
                            var qPath = firebase.database().ref().child("users").child(uid).child("cart").child("gt8").child("quantity");
                            // CHANGE DF1
                            var items = firebase.database().ref().child("items").child("gt8");
                            var imgPath = items.child("img");
                            var namePath = items.child("name");
                            var pricePath = items.child("price");
                            imgPath.on('value', function (snap) {
                                var img = snap.val();
                                imgDiv.style.backgroundImage = "url(" + img + ")";
                            });
                            namePath.on('value', function (snap) {
                                var name = snap.val();
                                divName.innerHTML = name;
                            });
                            pricePath.on('value', function (snap) {
                                var price = snap.val();
                                divPrice.innerHTML = "Price: " + price;
                            });
                            qPath.on('value', function (snap) {
                                var q = snap.val();
                                divQuantity.innerHTML = "Quantity: " + q;
                            })
                        }
                    });
                } else {
                    window.location.href = "123.html";
                }
            });