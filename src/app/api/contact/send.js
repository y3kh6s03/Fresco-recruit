

export const handler = (req, res) => {
    if (req.method === "POST") {
        const sgMail = require("@sendgrid/mail");
        sgMail.setApiKey(process.env.SENDGRID_KEY);

        const msgToManager = {
            to: "y3kh6s03@gmail.com",
            from: "y3kh6s03@gmail.com",
            subject: "テストコンタクトフォームからの問い合わせ",
            text: req.body.name + "さまからのお問い合わせがありました。" + "メッセージ" + req.body.message + "アドレス" + req.body.email,
            html: `
            <p>【お名前】</p>
            <p>${req.body.name}</p>
            <p>【メールアドレス】</p>
            <p>${req.body.email}</p>
            <p>【メッセージ内容】</p>
            <p>${req.body.message}</p>
            `
        };
        const msgToUser = {
            to: req.body.email,
            from: "yskh6s03@gmail.com",
            subject: "お問い合わせありがとうございました",
            text: "お問い合わせを受け付けました。回答をお待ちください。" + req.body.message,
            html: `
            <p>${req.body.name}さま</p>
            <p>お問い合わせを受け付けました。回答をお待ちください。</p>

            <p>【お問い合わせ内容】</p>
            <p>${req.body.message}</p>
            `
        }

            (async () => {
                try {
                    await sgMail.send(msgToManager);
                    await sgMail.send(msgToUser);
                    res.status(200).json(msgToUser);
                } catch (e) {
                    console.log(e);
                    res.status(500).json(e);
                }
            })
    }
}