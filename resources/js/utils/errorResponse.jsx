import Nodata from "../assets/images/nodata.png";

const NoData = () => {
    return (
        <div className="justify-center mt-10 mb-5 w-80 h-80 mx-auto">
            <img src={Nodata} alt="No Data" className="w-full h-full" />
            <p className="text-x text-center font-semibold text-gray-600 m-3">មិនមានទិន្នន័យទេ</p>
        </div>
    );
};

const ErrorResponse = ({ error }) => {
    return (
        <div className="error-response">
            {error}
        </div>
    );
};

const ServerError = ({ error }) => {
    return (
        <div className="server-error">
            {error}
        </div>
    );
};

export { ErrorResponse, ServerError, NoData };