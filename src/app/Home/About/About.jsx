import "/src/app/Home/About/About.scss"

import { Button } from "@/app/components/Button/Button"
import { ScrollAnimation, ScrollXAnimation } from "@/app/components/ScrollAnimation/ScrollAnimation"
import Image from "next/image"


export const About = () => {
    return (
        <section className="home__about container">
            <ScrollAnimation>
                <h3 className="section__title">
                    企業理念
                </h3>
            </ScrollAnimation>
            <div className="home__about__inner">
                <h4 className="home__about__inner__title">
                    Meal for Smile.
                </h4>
                <div className="home__about__inner__content">
                    おいしいものを食べたとき、<br />
                    私たちは笑顔の花を咲かせます。<br />
                    食は、しあわせをつくる種だと<br />
                    私たちは考えています。<br />
                    新しい何かと繋がったり、<br />
                    知らなかった世界の扉をたたいたり、<br />
                    ワクワクする瞬間をおいしさとともに届けたい。<br />
                    フレスコカンパニーは、食事という体験を通じて、<br />
                    全ての人を笑顔にします。<br />
                </div>
            </div>
            <ScrollAnimation>
                <h3 className="section__title2">
                    ミッション
                </h3>
            </ScrollAnimation>
            <div className="home__about__inner2">
                <h4 className="home__about__inner2__title">
                    人生に最高の食体験を
                </h4>
                <div className="home__about__inner2__content">
                    食べるものが体をつくり、食体験が人生をつくる。<br />
                    <br />
                    人生100年時代、私たちは生まれてから死ぬまでに約10万回の食事をする。<br />
                    その1つひとつがかけがえのない体験になれば、人生はもっと豊かになる。<br />
                    <br />
                    料理のおいしさ、盛り付けの美しさ、食欲をそそる香り、みんなで食卓をかこむ<br />時間。 私という人間を、私という人生を、この1食が作っていく。
                    <br />
                    特別な日だけでなく、日常にも最高の食体験を。<br />
                </div>
            </div>
        </section>
    )
}