import BreakingNews from "../../components/shared/BreakingNews";
import LeftSideNav from "../../components/shared/LeftSideNav/LeftSideNav";
import Header from "../../components/shared/header/Header";
import Navbar from "../../components/shared/navbar/Navbar";
import RightSideNav from "../../components/shared/rightSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-4xl">
                        News is coming...
                    </h2>
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;