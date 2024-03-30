import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <div className="btn btn-secondary">News</div>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12" to={'/'}>Latest Match Highlights: Germany vs Spain — as it happened!
                    Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12" to={'/'}>Latest Match Highlights: Germany vs Spain — as it happened   !
                    Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12" to={'/'}>Latest Match Highlights: Germany vs Spain — as it happened   !
                    Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;