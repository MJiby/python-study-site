import Link from "next/link";
import { Row, Col } from 'antd';


const StudyList = () => {
    const studyList = [
        {id: 0, title: '변수와 문자형'}
    ]

    return (
        <Row>
            <Col xs={24}>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px'}}>
                    {studyList.map(v => <Link href="/lecture"><a>{v.title}</a></Link>)}
                </div>
            </Col>

        </Row>
    )
}


export default StudyList;