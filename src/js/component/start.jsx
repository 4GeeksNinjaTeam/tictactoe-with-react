import React from "react";
import { useState, useEffect } from "react";
//import { Home } from "./component/home";


const Start = () => {
    return (
        <div>
            <div className="container">
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Player1 username" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Player 2 username" />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Button variant="warning" type="button">X</Button>
                        </Col>
                        <Col>
                            <Button variant="info" type="button">
                                O
                            </Button>
                        </Col>
                    </Form.Row>

                </Form>
            </div>
        </div>
    )

};
export default Start;