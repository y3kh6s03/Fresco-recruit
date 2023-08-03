import "src/app/components/Message/Message.scss"

export const Message = () => {
    return (
        <section className="message container">
            <h3 className="section__title">
                message
                <span>ともに働く人へ</span>
            </h3>
            <div className="message__inner">
                <h2 className="message__inner__title">
                    MEAL FOR SMILE.
                    <span>人とつながる食事</span>
                </h2>
                <p className="message__inner__content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, minus veniam facilis nulla aspernatur odit dolor quam, libero nam officia doloribus error ex veritatis maiores, magnam voluptate velit tempore corporis.
                </p>
            </div>

        </section>
    )
}