import { FaFacebookF, FaGithub, FaGoogle, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 mb-6 space-y-2">
                <h2 className="text-3xl mb-4">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className="p-4">
                <h2 className="text-3xl mb-4">Find us on</h2>
                <a className="flex p-4 block text-lg items-center border rounded-t-lg" href="/">
                    <FaFacebookF className="mr-3"></FaFacebookF>
                    <span>Facebook</span>
                </a>
                <a className="flex p-4 block text-lg items-center border-x" href="/">
                    <FaTwitter className="mr-3"></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className="flex p-4 block text-lg items-center border rounded-b-lg" href="/">
                    <FaInstagramSquare className="mr-3"></FaInstagramSquare>
                    <span>Instagram</span>
                </a>
            </div>
            {/* {Q- Zone} */}

            <div className="p-4 mb-6 space-y-2">
                <h2 className="text-3xl mb-4">Q Zone</h2>
                <img src={qZone1}></img>
                <img src={qZone2}></img>
                <img src={qZone3}></img>
            </div>
        </div>
    );
};

export default RightSideNav;