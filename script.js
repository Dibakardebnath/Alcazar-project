 var arr = [
    {
        "id": 5,
        "Country": "Indonesia",
        "name": "Tampaksiring, Bali, Indonesia",
        "url": "https://a0.muscache.com/im/pictures/4a5c629b-9c92-450e-8d8f-995875798838.jpg?im_w=720",
        "description": "Located just a 20-minute scooter ride from the vibrant centre of Ubud.",
        "cost": "43201",
        "title": "Entire cabin hosted by Eco Six Bali",
        "heading": "Dome - Bamboo Villa in Eco Six Bali",
        "urls": "https://a0.muscache.com/im/pictures/4a5c629b-9c92-450e-8d8f-995875798838.jpg?im_w=960",
        "url1": "https://a0.muscache.com/im/pictures/08a9afde-e2f2-48aa-b8b0-a7e747318943.jpg?im_w=480",
        "url2": "https://a0.muscache.com/im/pictures/b51f509a-9c94-4d1c-a31c-1a465e1670ac.jpg?im_w=480",
        "url3": "https://a0.muscache.com/im/pictures/0295e1cd-09fe-448a-b837-7bf5ade3809c.jpg?im_w=480",
        "url4": "https://a0.muscache.com/im/pictures/6d3f81b5-affa-4c13-8681-4081d2568be6.jpg?im_w=480",
        "guestDetail": "4 guests2-bedrooms2-beds2-bathrooms",
        "description1": "The Dome is a one bedroom bamboo villa built on two floors. Its ground floor houses an open air living room fitted with a dining area, a seating area and balinese style hammock.The living room has direct access to a spacious balinese style garden and the beautiful Santorini style infinity pool.Amenities in the living room include a projector with Netflix, Nespresso coffee machine and refrigerated minibar.The master bedroom on the upper floor is fitted with a king size bed, a walk-in wardrobe, air conditioning, an in-room bathtub from where our guests can enjoy the beautiful rice fields views and a balcony overlooking the famous volcano Mount Agung. The bedroom houses a modernly equipped bathroom."
      },
    ]
    console.log(arr) ;

    // arr = JSON.parse(localStorage.getItem("id")) || [] ;

    Shiva(arr) ;
    function Shiva(arr){
        document.getElementById("title").textContent = "" ;
        document.getElementById("images").textContent = "" ;
        document.getElementById("right_title").textContent = "" ;
        
        arr.map((ele) => {
            var title = document.createElement("div") ;
            title.id = "title" ;

            var p1 = document.createElement("p") ;
            p1.innerText = ele.title ;

            var i1 = document.createElement("i") ;
            i1.className = "fa-solid fa-star" ;
            var span1 = document.createElement("span") ;
            span1.textContent = "4.92 . 597 reviews" ;
            var a1 = document.createElement("a") ;
            a1.textContent = ele.name ;
            a1.href = "#" ;

            i1.appendChild(span1) ;
            span1.appendChild(a1) ;

            var i2 = document.createElement("i") ;
            i2.className = "fa-solid fa-arrow-up-from-bracket share" ;
            var span2 = document.createElement("span") ;
            span2.textContent = "Share" ;

            i2.appendChild(span2) ;

            var i3 = document.createElement("i") ;
            i3.className = "fa-regular fa-heart share" ;
            var span3 = document.createElement("span") ;
            span3.textContent = "Save" ;
            
            i3.appendChild(span3) ;

            title.append(p1,i1,i2,i3) ;
            document.getElementById("title").append(title) ;

            // ==============================title=================================

            var d3 = document.createElement("div") ;
            d3.className = "first" ; 
            var img = document.createElement("img") ;
            img.setAttribute("src",ele.url) ;
            d3.append(img) ;

            var d4 = document.createElement("div") ;
            d4.className = "second" ;
            var img1 = document.createElement("img") ;
            img1.setAttribute("src",ele.url1) ;
            var img2 = document.createElement("img") ;
            img2.setAttribute("src",ele.url2) ;
            var img3 = document.createElement("img") ;
            img3.setAttribute("src",ele.url3) ;
            var img4 = document.createElement("img") ;
            img4.setAttribute("src",ele.url4) ;
            d4.append(img1,img2,img3,img4) ;

            document.getElementById("images").append(d3,d4) ;

            // ========================proceed to payment ===========================

            var p = document.createElement("p") ;
            p.style.fontWeight = "600" ;
            p.textContent = "₹ "+ele.cost ;
            var span4 = document.createElement("span") ;
            span4.style.fontSize = "10px" ;
            span4.textContent = " night" ;
            p.appendChild(span4) ;

            var i4 = document.createElement("i") ;
            i4.className = "fa-solid fa-star" ;
            var span5 = document.createElement("span") ;
            span5.textContent = " 4.92" ;
            var a = document.createElement("a") ;
            a.textContent = " . 597 reviews" ;
            a.href = "#"
            span5.appendChild(a) ;
            i4.appendChild(span5) ;

            document.getElementById("right_title").append(p,i4) ;

            document.getElementById("submit").addEventListener("click",Shiva2) ;
            var count = 0 ;
            var Total = 0 ;
            function Shiva2(){
                
                document.getElementById("total").textContent = "" ;
                var st = document.getElementById("date1").value ;
                var end = document.getElementById("date2").value ;
                console.log(end-st) ;

                var p2 = document.createElement("p") ;
                p2.textContent = "₹ "+ele.cost +" x ";
                var span6 = document.createElement("span") ;
                span6.textContent = end-st +" nights" ;
                p2.appendChild(span6) ;

                var p3 = document.createElement("p") ;
                Total = (end-st)*ele.cost ;
                p3.textContent = "₹ "+ Total;

                document.getElementById("total").append(p2,p3) ;


                document.getElementById("total1").textContent = "" ;

                var p4 = document.createElement("p") ;
                p4.textContent = "Alcazar service fee (10%)";

                var p5 = document.createElement("p") ;
                p5.textContent = Total*10/100 ;

                var but = document.getElementById("submit") ;
                but.textContent = "Proceed to Payment ( "+Total*110/100+" )" ;

                document.getElementById("total1").append(p4,p5) ;
                if ( count > 0 ){
                    window.location.href = "payment.html" ;
                }
                count++ ;
            }
        })
    }
