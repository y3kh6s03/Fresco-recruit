import Image from "next/image";
import Link from "next/link";
import "src/app/components/Button/Button.scss";

export const Button = () => {
    return (
        <div className="button__container">
            <button className="button">
                <Link className="button__link" href="#">
                    Read More
                </Link>
                <span></span>
            </button>
        </div>
    )
}