import Curve from "../../components/Layout/Curve";
import WhiteHeader from "../../components/WhiteHeader";
import Footer from "../../components/Footer";

export default function Delivery(){
    return(
        <Curve>
            <WhiteHeader/>
            <div className="deliveryMain">
                <h1>DELIVERY</h1>
                <p>- Commissions might take 1 week to 3 months depending on commission type, complexity, and workload of commissions</p>


                <h1>REVISIONS</h1>
                <p>- There is no additional fee for the concept sketch.</p>
                <p>- After the cleaned sketch minor changes are acceptable, major alterations will carry an additional charge depending on their impact on the piece.</p>
                <p>- Any changes needed on a final image because of my own error will be made all at once free of charge. Be sure to compile a clear list of changes needed. Any changes requested after will come at additional cost.</p>

                <h1>PAYMENTS</h1>
                <p>- Payment upfront or after sketch is approved.</p>
                <p>- I will not give discounts for multiple orders, pls do not try to haggle with me.</p>

                <h1>GENERAL</h1>
                <div className="deliverySection">
                    <p>- My Art can&apos;t be used for AI training.</p>
                    <p>- Client Ghosting Policy: To prevent client ghosting, Clients that promised me to send a commission form but have not responded in 1 week, or have not paid in 1 week, will not be entertained in the future anymore. (Asking for more info is allowed by the way!) It is not my responsibility to remind you about your commission.</p>
                    <p>- When sending me references/ pictures, do not send me links from unknown sites. Google drive and Pinterest are ok though!</p>
                </div>

                <h1>WILL NOT DRAW</h1>
                <p>- NSFW contents</p>
            </div>
            <Footer/>
        </Curve>
    )
}