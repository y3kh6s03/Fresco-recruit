
import Link from "next/link";
import "src/app/components/Button/Button.scss";

export const Button = ({ href }) => {


    return (
        <div className="button__container">
            <div className="button">
                <Link className="button__link" href={href}>
                    Read More
                </Link>
                <span></span>
            </div>
        </div>
    )
}