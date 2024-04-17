import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { MdAddCircleOutline, MdEdit, MdClose } from 'react-icons/md';
import { setAboutMe } from '../store/slices/AboutMeSlice';

function AboutMe() {

    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [validated, setValidated] = useState(false);
    // Retrieve the 'about' data from the Redux store
    const about = useSelector(state => state.aboutMe)
    const dispatch = useDispatch();

    const handleAbout = (e) => {
        const valid = e.currentTarget;
        if (!valid.checkValidity()) {
            setValidated(true);
            setIsEdit(false)
        }
        else {
            setIsEdit(true)
        }
        dispatch(setAboutMe(e.target.value))
    }

    const handleClose = () => {
        setShow(false);
        setValidated(false);
    }
    const handleShow = () => setShow(true);

    return (
        <Row className="justify-content-center mt-2">
            <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
                <h5 className="m-0">About Me</h5>
                {!isEdit && <MdAddCircleOutline size={30} className="rounded edit cursor-pointer" onClick={handleShow} />}
                {isEdit && <MdEdit size={30} className="rounded edit cursor-pointer" onClick={handleShow} />}
            </Col>
            <Col md={8} sm={12}>
                {
                    about &&
                    <p className="py-2 text-break">
                        {about}
                    </p>
                }
            </Col>
            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header>
                    <Modal.Title>About Me</Modal.Title>
                    <MdClose size={30} className="rounded edit cursor-pointer" onClick={handleClose} />
                </Modal.Header>

                <Modal.Body>
                    <Form noValidate validated={validated}>
                        <Form.Group className="mb-3">
                            <Form.Control required as="textarea" rows={6} placeholder="Write about yourself" value={about} onChange={handleAbout} />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <button type="submit" className="rounded edit px-2 cursor-pointer" onClick={handleClose}>
                        Save Changes
                    </button>
                </Modal.Footer>
            </Modal>
        </Row>
    )
}

export default AboutMe;