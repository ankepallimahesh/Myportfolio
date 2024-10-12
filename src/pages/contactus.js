import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import send from '../send.svg';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import { yupResolver } from '@hookform/resolvers/yup';

import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";

function Contact() {
    const chartRef = useRef();

    useEffect(() => {
        const loadObservableNotebook = async () => {
            const notebook = await import("https://api.observablehq.com/@d3/disjoint-force-directed-graph.js?v=3");
            const runtime = new Runtime();
            runtime.module(notebook.default, name => {
                if (name === "chart") return new Inspector(chartRef.current);
            });
            return () => runtime.dispose();
        };

        loadObservableNotebook();
    }, []);

    const schema = yup.object({
        name: yup.string().required("Your Name is Required"),
        Email: yup.string().email("Invalid Email").required("Your Email is Required"),
        Phone: yup.string().matches(/^[0-9]+$/, "Phone number must be digits")
                  .max(10, "Phone number must be exactly 10 digits")
                  .min(10, "Phone number must be exactly 10 digits")
                  .required("Provide Your Mobile Number")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [result, setResult] = React.useState("");

    const onSubmit = async (data) => {
        setResult("Sending...");
        
        const formData = new FormData();
        formData.append("access_key", "3d399a56-94c4-42da-9ca8-315c2d2bc5b1");
        formData.append("name", data.name);
        formData.append("email", data.Email);
        formData.append("phone", data.Phone);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const responseData = await response.json();

            if (responseData.success) {
                setResult("Form Submitted Successfully");
            } else {
                setResult(`Error: ${responseData.message}`);
            }
        } catch (error) {
            setResult(`Submission Failed: ${error.message}`);
        }
    };

    return (
       <div>
           <Container>
               <Row className="mt-5 p-3">
                   <Col sm={11} lg={6} >
                       <div className='p-3'>
                           <form onSubmit={handleSubmit(onSubmit)}>
                               <Form.Floating className="mb-3">
                                   <Form.Control
                                       id="floatingInputCustom"
                                       type="text"
                                       placeholder="Your Name"
                                       {...register("name")}
                                   />
                                   <label htmlFor="floatingInputCustom">Your Name</label>
                               </Form.Floating>
                               {errors.name && <p style={{color:'red'}}>{errors.name.message}</p>}

                               <Form.Floating className='mb-3'>
                                   <Form.Control
                                       id="floatingEmailCustom"
                                       type="email"
                                       placeholder="Email"
                                       {...register("Email")}
                                   />
                                   <label htmlFor="floatingEmailCustom">Email</label>
                               </Form.Floating>
                               {errors.Email && <p style={{color:'red'}}>{errors.Email.message}</p>}

                               <Form.Floating className='mb-3'>
                                   <Form.Control
                                       id="floatingPhoneCustom"
                                       type="text"
                                       placeholder="Phone No."
                                       {...register("Phone")}
                                   />
                                   <label htmlFor="floatingPhoneCustom">Phone No.</label>
                               </Form.Floating>
                               {errors.Phone && <p style={{color:'red'}}>{errors.Phone.message}</p>}

                               <Button variant="outline-secondary" type="submit">
                                   Send <img src={send} className='ms-2' alt="send icon" />
                               </Button>
                           </form>
                           
                           {result && <p style={{color: result.includes("Error") ? 'red' : 'green'}}>{result}</p>}
                       </div>
                   </Col>
                   <Col sm={11} lg={6} > 
                       <div ref={chartRef}/>
                   </Col>
               </Row>
           </Container>
       </div>
    );
}

export default Contact;
