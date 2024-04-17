import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { MdAddCircleOutline, MdEdit, MdClose, MdOutlineCancel } from 'react-icons/md';
import { ImCheckmark, ImCross } from 'react-icons/im'
import { useSelector, useDispatch } from 'react-redux';
import { addSkill, removeSkill } from '../store/slices/SkillSlice';

function Skills() {
    const [input, setInput] = useState("")
    const [show, setShow] = useState(false);
    const [Alert, setAlert] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [validated, setValidated] = useState(false);

    const skills = useSelector(state => state.skills)
    const dispatch = useDispatch();

    const handleClose = () => {
        setShow(false);
        setValidated(false);
    }
    const handleShow = () => setShow(true);

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSkills = (e) => {
        e.preventDefault();
        const valid = e.currentTarget;
        if (!valid.checkValidity()) {
            setValidated(true);
        }
        else {
            setIsEdit(true);
            dispatch(addSkill(input))
            // setSkills([...skills, input]);
            setInput("");
        }
    }

    const handleAlertClose = () => setAlert(false);
    const handleAlert = (id) => {
        setDeleteId(id)
        setAlert(true);
    }
    const handleDelete = (id) => {
        dispatch(removeSkill(id))
        setAlert(false);
    }
    useEffect(() => {
        if (skills.length === 0) {
            setIsEdit(false);
        }
    }, [skills])

    return (
        <Row className="justify-content-center mt-2">
            <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
                <h5 className="m-0">Skills</h5>
                {!isEdit && <MdAddCircleOutline size={30} className="rounded edit cursor-pointer" onClick={handleShow} />}
                {isEdit && <MdEdit size={30} className="rounded edit cursor-pointer" onClick={handleShow} />}
            </Col>
            <Col md={8} sm={12}>
                <Row className="border-bottom pt-3">
                    <Col md={12} className="d-flex flex-wrap">
                        {
                            skills.map((items, id) => {
                                return (
                                    <p className="technology rounded" key={id}>{items}</p>
                                )
                            })
                        }


                    </Col>
                </Row>

            </Col>
            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header>
                    <Modal.Title>Skills</Modal.Title>
                    <MdClose size={30} className="rounded edit cursor-pointer" onClick={handleClose} />
                </Modal.Header>

                <Modal.Body>
                    <Form noValidate validated={validated} className="d-flex align-item-start mb-2" onSubmit={handleSkills}>
                        <Form.Group className="">
                            <Form.Control required type="text" size="sm" placeholder="Enter Skill" value={input} onChange={handleInput} />
                        </Form.Group>
                        <button type="submit" className="rounded edit cursor-pointer m-0 mx-2">
                            Add Skill
                        </button>
                    </Form>
                    <hr></hr>
                    <div className="d-flex flex-wrap">
                        {
                            skills.map((items, id) => {
                                return (
                                    <p key={id} className="technology rounded ">{items} &nbsp; <MdOutlineCancel className="delete rounded" onClick={() => { handleAlert(id) }} /></p>
                                )
                            })
                        }
                    </div>
                </Modal.Body>

            </Modal>
            <Modal show={Alert} onHide={handleAlertClose} className="text-center" size="sm" centered>
                <Modal.Body>
                    <h4>Are you sure ?</h4>
                    <ImCheckmark size={30} className="rounded edit cursor-pointer" onClick={() => { handleDelete(deleteId) }} />
                    <ImCross size={25} className="rounded edit cursor-pointer" onClick={handleAlertClose} />
                </Modal.Body>
            </Modal>
        </Row>
    )
}

export default Skills;