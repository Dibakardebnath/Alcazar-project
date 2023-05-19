function nav(){
    return `
    <img src="./alcazar logo png.png" class="logo">
    <ul class="nav-link">
       <li><a href="#">Download App</a></li>
       <li><a href="#">Partner With Us</a></li>
       <li><a href="#">Instagram</a></li>
       <li><a href="#">Saved</a></li>
       <li><a href="#">My Booking</a></li>
    </ul>
    <a id="customerName" href="signin.html" class="Register">Register</a>

    `
}
function footer(){
    return `

    <div id="foo">
    <div id="footer1">
        <img src="./alcazar logo png.png" alt="">
        <p>Convience is our priority to satisfied our customers, and provide all
             the features you can easily and quickly</p>
    </div>
    <div id="footer2">
        <div id="footer21">
            <h1>About</h1>
            <div id="footer4">
                <p>How to book</p>
                <p>Contact Us</p>
                <p>Help center</p>
            </div>
        </div>

        <div>
            <div id="footer21">
                <h1>Products</h1>
                <div id="footer4">
                    <p>destination</p>
                    <p>Flight</p>
                    <p>Instagram</p>
                </div>
            </div>
        </div>

        <div>
            <div id="footer21">
                <h1>Social</h1>
                <div id="footer4">
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    </div>
</div>

<hr class="last-hr">
<div id="foo-last">
<p>Privacy Policy</p>
<p>Coppyright 2022 Alcazar</p>
</div>

    `
}
export {nav,footer};