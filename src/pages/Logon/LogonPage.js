import React from "react";
import Form from "../../components/Form/Form";
import IconBackground from "../../components/ImagesAndIcons/IconBackground";
import ImageBackground from "../../components/ImagesAndIcons/ImageBackground";
import { Container } from "./styles";

const LogonPage = () => {

    return(
        <Container>
            <Form/>
            <ImageBackground/>
            <IconBackground/>
        </Container>
    );
}

export default LogonPage;