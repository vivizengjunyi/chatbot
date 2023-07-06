import { useState } from 'react';
import React from 'react';
import { useDispatch } from "react-redux";
import { saveOrDeleteAsylumApplicationBundlesAction } from "../../store/actions";
import { useHistory } from 'react-router-dom';

export default function FormSelectModal() {
    const [formList, setFormList] = useState([
        {
            id: 1,
            name: "Application to claim asylum in Canada",
            checked: false
        }, {
            id: 2,
            name: "Change of conditions student",
            checked: false
        }, {
            id: 3,
            name: "Change of conditions worker",
            checked: false
        },
        {
            id: 4,
            name: "Basis of claim",
            checked: false
        }
    ]);
    const history = useHistory();
    const dispatch = useDispatch();
    const sumbitForm = () => {
        dispatch(saveOrDeleteAsylumApplicationBundlesAction(formList));
        history.push('/botpress');
    }
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Which bundles would you like to choose?
                    </div>
                    <div className="card-body">
                        {
                            formList.map(item => (<div className="mb-2 custom-checkbox custom-control" key={item.id}>
                                <input type="checkbox" id={'form' + item.id} className="custom-control-input" checked={item.checked} onChange={e => {
                                    setFormList(formList.map(item => {
                                        if (item.id == e.target.id.split('form')[1]) {
                                            return { ...item, checked: !item.checked }
                                        }
                                        return item;
                                    }))
                                }} />&nbsp;
                                <label className="custom-control-label" htmlFor={'form' + item.id}>{item.name}</label>
                            </div>)
                            )

                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => sumbitForm()}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
