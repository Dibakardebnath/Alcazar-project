 var arr = [
        {
            "id":2,
            "Country":"Indonesia",
            "name":"Balian Beach, Bali, Indonesia",
            "url":"https://a0.muscache.com/im/pictures/0342ef5e-b2ec-4a90-b777-9fb4bfc5b1d4.jpg?im_w=1200",
            "description":"The Balian treehouse is only a 3 minute walk away from the beach.",
            "cost":"403",
            "title":"Hut hosted by Made",
            "heading":"BALIAN TREEHOUSE w beautiful pool",
            "urls":"https://a0.muscache.com/im/pictures/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.jpg?im_w=960",
            "url1":"https://a0.muscache.com/im/pictures/miso/Hosting-1016153/original/5e249106-66d9-4638-99aa-6b8fc38f3203.jpeg?im_w=720",
            "url2":"https://a0.muscache.com/im/pictures/0b25f6b3-f215-4938-ac81-581eb3929047.jpg?im_w=720",
            "url3":"https://a0.muscache.com/im/pictures/9833de62-35b7-41f2-8a24-0d9354150ea7.jpg?im_w=720",
            "url4":"https://a0.muscache.com/im/pictures/de73abc2-5dc9-4962-ba32-5d28211cdde0.jpg?im_w=720",
            "guestDetail":"4 guests2-bedrooms2-beds2-bathrooms",
            "description1":"We have several hangouts in our garden, and our pool is beautiful lit in the evening and turquoise in the daytime just inviting you to jump in. Upstairs is the open living area. The lazy couch on the veranda is overlooking the palm trees (TREEHOUSE) our beautiful garden and pool and has some ocean view aswell. It's the perfect place to wake up and relax drinking your coffee or tea. You can enjoy a nice ocean breeze when you feel its too warm to be outside in the sun or just when you feel the need to be nicely lazy..Inside there is a big (180 x 240) daybed with mosquito net if you need it. Downstairs there is the bedroom, kitchenette, bathroom and a second veranda. We have a rain shower with hot water, there is a standing fan and AC in the bedroom. In the bedroom there is a Flatscreen TV with some channels and movies on demand. The TV has a USB plug so you could take your favo movies or series to watch. We also have a dvd player. We use Indihome fiber for the quickest internet in Bali, so you can stream and download.When arriving at his lovely and special village, you immediately feel all the good Bali has to offer you. Balian is a small surfer/relax village it feels like the older days in Bali.We build the house as green as possible with a lot of decoration found in the nature, like the driftwood from the beach. I put a lot of blood, sweat, fun and tears in building this house. We are always busy expanding and updating the house which has to be done living near the ocean!!Although Made and his wife come to clean everyday it is impossible to get this house sterile, due to the openness and wind and just...nature.So this is not a house for a hosophobic!Everything in the village is in walking distance, but if you would like to go for some sightseeing outside the village, you may want to rent a bike.Please, always wear helmets, not only for your own safety but also the Police will check this regularly.If you would like to go out for dinner:(Luckily) There are no DELI's, STARBUCKS or MACDONALDS in the village but we do have enough nice restaurant to choose from. BALIAN SEGARA, TOM's garden (TOMS SALAD!), Astana had the best burgers (and a lot of sports on TV), Pondok Pitaya, DEKI's, BALIAN beach warung, Gajah Mina, Bintang Balian, the night market and others.The night market is nearby and has plenty of nice local food for great prices.Ofcourse there is also the possibility to cook your a simple meal in the kitchenette.Feel free to pick your own fruit from the garden! (depending of the season we have coconuts, lemons, papayas, lemongrass, jackfruit, passionfruit and more to come)The area is really safe but we still have a big fire proof safe box were you can put your laptop and other belongings."
        },
    ]
    console.log(arr) ;
    // document.getElementById("title").append(title) ;

    Shiva(arr) ;
    function Shiva(arr){
        document.getElementById("title").textContent = "" ;
        document.getElementById("images").textContent = "" ;
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

            // d2.append(d3,d4) ;
            document.getElementById("images").append(d3,d4) ;

            // ========================proceed to payment ===========================

            
        })
    }
