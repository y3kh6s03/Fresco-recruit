
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
                        Meal for Smile.
                        <span>
                            食で未来を変えていく。
                        </span>
                    </h3>
                    <p className="message__inner__content">
                        生まれてからこの世を去るまで、誰もが行う食事。<br />
                        しかし、食の可能性は私たちの体を生かすことだけにとどまりません。<br />
                        たくさんの人の健康を、環境保全を、生産者のみなさまの課題解決を、
                        あらゆることを食のチカラで実現したい。<br />
                        食のチカラを信じる仲間とともに、新たな未来を一緒に作りませんか?
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