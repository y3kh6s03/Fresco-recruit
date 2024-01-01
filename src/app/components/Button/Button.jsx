
import Link from "next/link";
import "src/app/components/Button/Button.scss";

export const Button = ({ href }) => {


    return (
        <Link className="button__container" href={href}>
            <div className="button">
                <div className="button__link" >
                    Read More
                </div>
                <span></span>
            </div>
        </Link>
    )
}