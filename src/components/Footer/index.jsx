import Magnetic from "../../common/Magnetic"

export default function Footer(){
    return(
        <div className="info">
            <div>
                <span>
                    <h3>Version</h3>
                    <p>2024 © Eric Lee</p>
                </span>
            </div>
            <div>
                <span>
                    <h3>socials</h3>
                    <Magnetic>
                        <p></p>
                    </Magnetic>
                </span>
                <Magnetic>
                    <p>Instagram</p>
                </Magnetic>
                <Magnetic>
                    <p>X</p>
                </Magnetic>
                <Magnetic>
                    <p>Linkedin</p>
                </Magnetic>
            </div>
        </div>
    )
}