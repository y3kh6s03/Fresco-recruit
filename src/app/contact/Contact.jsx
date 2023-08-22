"use client"

import "src/app/contact/Contact.scss"

export const Contact = () => {

    const handleSubmit = async (data) => {
        e.preventDefault();

        const response = await fetch("api/sendMail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        if(response.status === 200){
            router.push("/thanks");
        }else{
            alert("正常に送信できませんでした。")
        };
    }


    return (
        <form className="form container" onSubmit={handleSubmit}>
            <div className="form__inner">
                <label htmlFor="name" className="form__label">
                    お名前<span>　＊</span>
                </label>
                <input className="form__input" type="text" id="name" name="name" required />
            </div>
            <div className="form__inner">
                <label htmlFor="kana" className="form__label">
                    フリガナ<span>　＊</span>
                </label>
                <input className="form__input" type="text" id="kana" name="kana" required />
            </div>
            <div className="form__inner">
                <label htmlFor="tell" className="form__label">
                    電話番号
                </label>
                <input className="form__input" type="tel" id="tell" name="tell" />
            </div>
            <div className="form__inner">
                <label htmlFor="email" className="form__label">
                    E-mail<span>　＊</span>
                </label>
                <input className="form__input" type="email" id="email" name="email" required />
            </div>
            <div className="form__inner">
                <label htmlFor="message" className="form__label">
                    お問い合わせ内容<span>　＊</span>
                </label>
                <textarea className="form__input" type="text" id="message" name="message" required minLength={10} />
            </div>

            <button className="submit__button" type="submit">
                送信する
            </button>
        </form>
    )
}