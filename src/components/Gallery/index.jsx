import Image from 'next/image';
import Magnetic from '../../common/Magnetic'

export const projects=[
    {
      name: "background",
      handle: "backgroundIllustration.jpg",
      title: "Background Illustrations",
      description: "Craft vivid backgrounds that bring depth to your scenes, making characters and stories feel fully realized. These immersive settings captivate viewers and elevate your project’s visual impact.",
    },
    {
      name: "logo",
      handle: "highTofu.jpeg",
      title: "Logo Design",
      description: "With a focus on style and precision, I create logos that become an iconic part of your brand, leaving a memorable mark that resonates with your audience.",
    },
    {
      name: "chibi",
      handle: "chibi.jpg",
      title: "Chibi Style",
      description: "Adorable art that captures personality in a playful way, perfect for avatars or social media. My chibi designs add a fun, memorable touch to your brand.",
    },
]


export default function index({handle, title, description}) {

    
    const backgroundColors = {
        "artdesk1.jpg": "#B1ACB3",
        "artdesk2.jpg": "#D4B8B4",
        "artdesk3.jpg": "#B1ACB3",
        "artdesk4.jpg": "#D4B8B4",
    }

    const backgroundColor = backgroundColors[handle] || "white"

  return (
    <div className="gallery">
        {/* <div className="imageContainer">
            <Image 
                src={`/images/${handle}`}
                alt="image"
                fill
            />
        </div> */}
        <div className="vignette">
            <Image 
                src={`/images/${handle}`}
                alt="image"
                fill
            />
        </div>
        <div className='artText'>
            <h1 className='artTitle'>{title}</h1>
            <p className='artDescription'>{description}</p>
            <Magnetic>
                <div className='artButton'>Learn more</div>
            </Magnetic>
        </div>
    </div>
  )
}