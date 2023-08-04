import "src/app/components/Home/Message/Message.scss"

export const Message = () => {
    return (
        <section className="message container">
            <h2 className="section__title">
                message
                <span>ともに働く人へ</span>
            </h2>
            <div className="message__inner">
                <h3 className="message__inner__title">
                    MEAL FOR SMILE.
                    <span>人とつながる食事</span>
                </h3>
                <p className="message__inner__content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, minus veniam facilis nulla aspernatur odit dolor quam, libero nam officia doloribus error ex veritatis maiores, magnam voluptate velit tempore corporis.
                </p>
            </div>

        </section>
    )
}