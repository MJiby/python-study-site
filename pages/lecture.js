import {Row, Col} from 'antd'

import AppLayout from "../components/AppLayout"


const Lecture = () => {

    return (
        <AppLayout>
            <Row>
                <Col xs={24}>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
                        {/* 제목 */}
                        변수란
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={24}>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
                        {/* 요약 */}
                        그릇. (그림)
                    </div>
                </Col>

            </Row>
        </AppLayout>
    )
}

export default Lecture