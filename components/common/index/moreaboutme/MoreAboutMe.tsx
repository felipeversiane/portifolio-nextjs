import SectionsGrid from "./SectionsGrid";

export default function MoreAboutMe(){
    return (
        <div className="flex justify-center items-start flex-col gap-4 mt-20 py-4 px-10">
            <h2 className="text-white text-2xl font-light"> 
                MORE ABOUT ME
            </h2>
            <h1 className="text-white text-5xl font-semibold">
                My life in a few clicks"
            </h1>
            <SectionsGrid/>
        </div>
    );
}