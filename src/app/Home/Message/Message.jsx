
// import { TextAnimation } from "@/app/components/TextAnimation/TextAnimation"
import { ScrollAnimation } from "@/app/components/ScrollAnimation/ScrollAnimation"
import Image from "next/image"
import "src/app/Home/Message/Message.scss"

export const Message = () => {
    return (
        <section className="message container">
            <div className="message__top__img">
                <Image src="/images/home/bleu-plate.png" width={250} height={250} alt="message__image"></Image>
            </div>
            <ScrollAnimation>
                <h3 className="section__title">
                    Message
                </h3>
            </ScrollAnimation>
            <ScrollAnimation>
                <div className="message__inner">

                    <h3 className="message__inner__title">
                        MEAL FOR SMILE.
                        <span>
                            わたしたちの食事で笑顔に
                        </span>
                    </h3>
                    <p className="message__inner__content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, minus veniam facilis nulla aspernatur odit dolor quam, libero nam officia doloribus error ex veritatis maiores, magnam voluptate velit tempore corporis.
                    </p>
                </div>
            </ScrollAnimation>

            <div className="textanime__container">
                <div className="textanime__container__inner">
                    <p>Fresco Company.&nbsp;&nbsp;&nbsp;&nbsp;MEAL FOR SMILE.</p>
                    <p>Fresco Company.&nbsp;&nbsp;&nbsp;&nbsp;MEAL FOR SMILE.</p>
                    <p>Fresco Company.&nbsp;&nbsp;&nbsp;&nbsp;MEAL FOR SMILE.</p>
                    <p>Fresco Company.&nbsp;&nbsp;&nbsp;&nbsp;MEAL FOR SMILE.</p>
                </div>
            </div>
        </section>
    )
}