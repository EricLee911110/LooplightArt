'use client'

import Image from 'next/image';
import Magnetic from '../../common/Magnetic'

export const projects=[
    {
      name: "background",
      handle: "Kinect2.png",
      title: "Unity 互動式遊戲開發",
      description: "利用Xbox Kinect內建深度及光學鏡頭，辨識特定人體動作、手勢以及速度變化，將讀取到的訊號傳送到Unity，用來控制橫向捲軸遊戲內的角色。",
      link: "https://www.youtube.com/watch?v=mqDv7qdY3N0",
    },
    {
      name: "logo",
      handle: "BHB.png",
      title: "LLM 提示工程紀錄平台",
      description: "使用到Next.js + Node.js + Firebase + Vercel 部署。在開發客製化聊天機器人，搭配一個版本紀錄的工具，能夠加快你快速調整、測試提示文字，甚至要回復上一個版本也是非常輕鬆，同時也加入RAG的功能，讓AI對專業領域也有所認識。",
      link: "https://www.canva.com/design/DAGaKPkv7Fo/i-pf97nYHURgIn7ep_aTLg/edit?utm_content=DAGaKPkv7Fo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      name: "chibi",
      handle: "AIArt.png",
      title: "Krita AI 生成式繪圖",
      description: "透過深度與結構圖的引導，將樓梯的架構固定下來，之後再用文字搭配圖像來生成不同風格的樓梯。在筆觸的設定上是用了印象派畫風的 LoRA，很適合用來描繪光影的變化。",
      link: "https://www.canva.com/design/DAGZxlIsF_I/1eP4VQxZ7Tu212oCnkgMOQ/edit?utm_content=DAGZxlIsF_I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
]


export default function index({handle, title, description, link}) {

    const backgroundColors = {
        "artdesk1.jpg": "#B1ACB3",
        "artdesk2.jpg": "#D4B8B4",
        "artdesk3.jpg": "#B1ACB3",
        "artdesk4.jpg": "#D4B8B4",
    }

    const backgroundColor = backgroundColors[handle] || "white"

    const onLearnMoreClick = (link) => {
        

        if (typeof window !== 'undefined' && link) {
            window.open(link, "_blank");
        }
    }

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
                <div className='artButton' onClick={() => onLearnMoreClick(link)}>Learn more</div>
            </Magnetic>
        </div>
    </div>
  )
}