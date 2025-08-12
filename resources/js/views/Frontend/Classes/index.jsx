import Layout from "../layout";
import UnderConstruction from "../../../assets/images/under_construction.png";

function Classes() {
    return (
        <Layout>
            <div className="justify-center mt-10 mb-5 w-80 h-80 mx-auto">
                <img src={UnderConstruction} alt="Under Construction" className="w-full h-full" />
                <p className="text-x text-center font-semibold text-gray-600 m-3">ផ្នែកនេះកំពុងសាងសង់</p>
            </div>
        </Layout>
    );
}

export default Classes;
