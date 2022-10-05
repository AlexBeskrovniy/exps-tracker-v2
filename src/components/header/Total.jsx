import { useDataContext } from '../../providers/DataProvider';

const Total = () => {
    const { total } = useDataContext();

    return (
        <div className="d-flex align-items-center justify-content-center mx-3">
            <h3 className="text-white text-uppercase px-2 py-3 my-0">Total:</h3>
            <span className="spent fs-1 px-2">{total}</span>
        </div>
    );
}

export default Total;