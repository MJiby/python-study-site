


const StudyList = () => {
    const studyList = [
        {id: 0, title: '변수와 문자형'}
    ]

    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
            {studyList.map(v => <div>{v.title}</div>)}
        </div>
    )
}


export default StudyList;