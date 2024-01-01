import "src/app/recruit/Recruit.scss";

export const Mid = () => {
    return (
        <section className="recruit"  id="mid">
            <h2 className="recruit__title">
                募集要項
            </h2>

            <table className="recruit__table">
                <tbody>
                    <tr className="recruit__table__tr">
                        <th className="recruit__table__th">
                            雇用形態
                        </th>
                        <td className="recruit__table__td">
                            正社員
                        </td>
                    </tr>

                    <tr className="recruit__table__tr">
                        <th className="recruit__table__th">
                            業務内容
                        </th>
                        <td className="recruit__table__td">
                            ＜調理師＞
                            現場での調理、食材の下処理、盛付け配膳、洗浄・掃除などの業務全般<br />
                            ＜栄養士＞
                            現場での調理業務、発注、献立業務、栄養計算などの業務全般<br />
                            <br />
                            調理・・・
                            栄養士が作成した献立にあわせ調理します。<br />
                            食材の下処理・・・
                            主に野菜の皮むきや基本的な切り方など、ごく一般的なもので、専門的技術は必要としません。<br />

                            盛付け・配膳・・・
                            出来上がった料理を盛り付けし、食堂まで届けます
                            洗浄・・・
                            食器の洗浄です。大型の食器洗浄機で洗浄を行います。
                        </td>
                    </tr>

                    <tr className="recruit__table__tr">
                        <th className="recruit__table__th">
                            応募資格
                        </th>
                        <td className="recruit__table__td">
                            大学、短大、高専、専門学校などを卒業予定の方
                            （学科や専攻は問いません）
                        </td>
                    </tr>

                    <tr className="recruit__table__tr">
                        <th className="recruit__table__th">
                            勤務地
                        </th>
                        <td className="recruit__table__td">
                            長野市　1事業所、千曲市　4事業所、上田市　1事業所　計6事業所
                        </td>
                    </tr>

                    <tr className="recruit__table__tr">
                        <th className="recruit__table__th">
                            給与
                        </th>
                        <td className="recruit__table__td">
                            栄養士・調理師　￥171,000+ 諸手当　（有資格者の方）<br />
                            一般職　　　　　￥171,000+ 諸手当
                        </td>
                    </tr>

                    <tr className="recruit__table__tr">
                        <th className="recruit__table__th">
                            昇給・賞与
                        </th>
                        <td className="recruit__table__td">
                            昇給／年 1回<br />   賞与／年 2回
                        </td>
                    </tr>

                    <tr className="recruit__table__tr">
                        <th className="recruit__table__th">
                            勤務時間
                        </th>
                        <td className="recruit__table__td">
                            1日8ｈ勤務×21日稼働　3シフト制
                        </td>
                    </tr>

                    <tr className="recruit__table__tr">
                        <th className="recruit__table__th">
                            休日・休暇
                        </th>
                        <td className="recruit__table__td">
                            週休2日制（シフト）<br />
                            年次有給休暇<br />
                            慶弔休暇<br />
                            産休・育休制度<br />
                            介護休暇制度<br />
                        </td>
                    </tr>

                    <tr className="recruit__table__tr">
                        <th className="recruit__table__th">
                            福利厚生
                        </th>
                        <td className="recruit__table__td">
                            健康保険<br />
                            厚生年金保険<br />
                            雇用保険<br />
                            労災保険<br />
                            定期健康診断<br />
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}