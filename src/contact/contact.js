import './contact.style.css';

const contact = document.createElement('main');
contact.innerHTML = (`
    <div class="contact-container">
    <p><strong>Phone</strong>: 12 3456 7890</p>
    <p><strong>Email</strong>: pizza@pizza.com</p>

    <div class="mapouter">
        <div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas"
                src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
                href="https://putlocker-is.org"></a><br>
            <style>
                .mapouter {
                    position: relative;
                    text-align: right;
                    height: 500px;
                    width: 600px;
                }
            </style><a href="https://www.embedgooglemap.net">copy google map</a>
            <style>
                .gmap_canvas {
                    overflow: hidden;
                    background: none !important;
                    height: 500px;
                    width: 600px;
                }
            </style>
        </div>
    </div>
    </div>
`);

export default contact;