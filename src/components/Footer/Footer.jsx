import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        // Container for the footer, with fluid layout
        <Container fluid className="border-top mt-2 text-center bg-light text-dark py-3">
            <p className="m-0">Resume Builder | copyright &copy;| Rakesh Magar </p>
        </Container>
    )
}

export default Footer