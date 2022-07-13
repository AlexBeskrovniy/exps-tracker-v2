const ModalFormNewCategory = () => {
    return (
        <div className="modal fade" id="modalFormNewCategory" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-dark mx-auto">
                    <div className="modal-body mx-auto">
                        <div className="form-card card bg-dark mt-3 mx-auto">
                            <h5 className="card-header text-white text-center">Create a new Category</h5>
                            <div className="card-body">
                                <form data-category>
                                    <div className="form-floating mb-3">
                                        <input type="text" name="name" className="form-control" id="floatingInput" placeholder="New Caregory" required/>
                                        <label htmlFor="floatingInput">Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea name="description" className="form-control" id="floatingTextarea" placeholder="Description" required></textarea>
                                        <label htmlFor="floatingTextarea">Description</label> 
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <button type="submit" className="btn btn-outline-warning btn-lg">
                                            Submit
                                        </button>
                                        <button type="reset" className="btn btn-outline-warning btn-lg">
                                            Clear
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-warning" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalFormNewCategory;