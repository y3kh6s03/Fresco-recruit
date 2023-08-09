import Link from "next/link"
import "src/app/components/Home/Recruit/Recruit.scss"

export const Recruit = () => {
    return (
        <section className="recruit container">
            <div className="section__title">
                <h2>募集要項</h2>
            </div>
            <Link className="recruit__new" href="#">
                <div className="recruit__new__content">
                    <h3>
                        New graduate
                    </h3>
                    <span>新卒採用情報</span>
                    <p>新卒者様向け募集要項をご覧いただけます。</p>
                </div>

                <div className="recruit__new__arrow">
                    <span></span>
                    <span></span>
                </div>
            </Link>
            <Link className="recruit__new" href="#">
                <div className="recruit__new__content">
                    <h3>
                        Mid-career
                    </h3>
                    <span>中途採用情報</span>
                    <p>中途採用の方向け募集要項をご覧いただけます。</p>
                </div>

                <div className="recruit__new__arrow">
                    <span></span>
                    <span></span>
                </div>
            </Link>
        </section>
    )
}