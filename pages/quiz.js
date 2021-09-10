import React, {useCallback} from 'react'
import AppLayout from '../components/AppLayout'
import { Row, Col, Divider, Button, message } from 'antd';

const Quiz = () => {

    const onSelectionBtnClick = useCallback((e) => {
        console.log(e.target)
        console.log(e.target.value)

        // TODO:  문제의 id를 가지고 답을 가져옴
        // let answer = getAnswer(problemId)

        if(parseInt(e.target.value) === 2) {
            message.success('정답 입니다!')
        } else {
            message.error('오답 입니다 ㅠㅠㅠㅠ')
        }
    })



    return (
        <AppLayout>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {/* 문제 내용 부분 */}
                <Row
                    justify="center"
                    align="center"
                    
                    style={{marginTop: '20px'}}
                >
                    <Col>
                        <span style={{fontSize: 25}}>Q. 다음중 빈 칸에 들어갈 키워드는 ???</span>
                    </Col>
                </Row>
                
                <Divider />
                
                {/* 문제 시각화 부분 */}
                <Row 
                    justify="center" 
                    align="space-around"
                    style={{marginTop: '20px'}}
                    gutter={[10, 25]}
                    >
                    <Col xs={24} lg={11}>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
                            <img 
                                src="http://www.fredosaurus.com/notes-db/example-teams/roster-unnormalized.gif" 
                                style={{maxWidth: '100%'}}
                                // style={{maxHeight: '100%'}}  // 넘침
                                />
                        </div>
                    </Col>
                    <Col xs={24} lg={2} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img 
                                src="https://w7.pngwing.com/pngs/622/191/png-transparent-arrow-computer-icons-arrow-angle-image-file-formats-rectangle-thumbnail.png"
                                style={{width: '30px'}} // 크기 강제 조절
                            />
                        </div>
                    </Col>
                    <Col xs={24} lg={11} >
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img 
                                src="https://file.okky.kr/images/1533220103337.JPG" 
                                style={{maxWidth: '100%'}}
                                // style={{maxHeight: '100%'}} // 넘침
                            />
                        </div>
                    </Col>
                </Row>

                <Divider />
                
                {/* 선지 */}
                <Row
                    justify="center"
                    align="space-around"
                    style={{marginTop: '20px'}}
                    gutter={[10, 25]}
                >
                    {/* FIXME: Button onClick이 span을 누를 때도 정상 작동해야함 */}
                    <Col span={24}
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                        >
                        <Button type="primary" size="large" value={1} onClick={onSelectionBtnClick}>
                            <span value={1}>
                                {/* e.target.value 가 undefined임. */}
                                1. ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
                            </span>
                        </Button>
                    </Col>
                    <Col span={24}
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Button type="primary" size="large" value={2} onClick={onSelectionBtnClick}>2. ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ</Button>
                    </Col>
                    <Col span={24}
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Button type="primary" size="large" value={3} onClick={onSelectionBtnClick}>3. ㅇㅇ</Button>
                    </Col>
                    <Col 
                        span={24}
                        // xs={24} lg={6} 
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Button type="primary" size="large" value={4} onClick={onSelectionBtnClick}>4. ㄹㄹ</Button>
                    </Col>
                </Row>
            </div>
        </AppLayout>
    )
}


export default Quiz